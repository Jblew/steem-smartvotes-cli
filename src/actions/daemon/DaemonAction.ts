import * as fs from "fs";
import * as path from "path";
import { DirectBlockchainApi, SingleDaemon, SteemOperationNumber, Wise } from "steem-wise-core";

import { ConfigLoadedFromFile, ConfigLoader } from "../../config/Config";
import { StaticConfig } from "../../config/StaticConfig";
import { Context } from "../../Context";

import { Watchdog } from "./Watchdog";

export class DaemonAction {
    private context: Context;
    private watchdog: Watchdog;
    public constructor(context: Context) {
        this.context = context;
        this.watchdog = new Watchdog();
    }

    public doAction(config: ConfigLoadedFromFile, sinceBlockNum: undefined | number): Promise<string> {
        const lastBlockFile = config.syncedBlockNumFile
            ? path.dirname(config.configFilePath) + "/" + config.syncedBlockNumFile
            : "";

        let api: DirectBlockchainApi;
        let delegatorWise: Wise;

        return Promise.resolve()
            .then(() => this.watchdog.start())
            .then(() => ConfigLoader.askForCredentialsIfEmpty(config))
            .then(() => {
                api = new DirectBlockchainApi(Wise.constructDefaultProtocol(), config.postingWif, {
                    apiUrl: config.steemApi,
                });
                if (config.disableSend) api.setSendEnabled(false);
                delegatorWise = new Wise(config.username, api);
            })
            .then(() => {
                if (sinceBlockNum) {
                    return new SteemOperationNumber(sinceBlockNum, 0, 0);
                } else if (lastBlockFile && fs.existsSync(lastBlockFile)) {
                    return new SteemOperationNumber(parseInt(fs.readFileSync(lastBlockFile, "UTF-8"), 10) + 1, 0, 0);
                } else if (config.defaultSyncStartBlockNum > 0) {
                    return new SteemOperationNumber(parseInt(config.defaultSyncStartBlockNum + "", 10), 0, 0);
                } else {
                    return delegatorWise
                        .getLastConfirmationMoment(config.username)
                        .then((moment: SteemOperationNumber | undefined) =>
                            moment
                                ? moment
                                : new SteemOperationNumber(StaticConfig.INTRODUCTION_OF_WISE_BLOCK_NUM, 0, 0),
                        );
                }
            })
            .then((since: SteemOperationNumber) => {
                this.context.log("Synchronization starting at: " + since);

                delegatorWise.startDaemon(since, (error: Error | undefined, event: SingleDaemon.Event) => {
                    if (error) {
                        this.context.exception(error);
                    }

                    if (event.type === SingleDaemon.EventType.EndBlockProcessing) {
                        this.watchdog.heartbeatBeat();
                        try {
                            fs.writeFileSync(lastBlockFile, "" + event.blockNum, { flag: "w+" });
                            this.context.log("Processed block " + event.blockNum);
                        } catch (error) {
                            this.context.error(error);
                        }
                    } else if (event.type === SingleDaemon.EventType.StartBlockProcessing) {
                        //
                    } else if (event.type === SingleDaemon.EventType.SynchronizationStop) {
                        //
                    } else if (event.type === SingleDaemon.EventType.VoteorderPassed) {
                        this.context.log("[Synchronization] (voter=" + event.voter + ") " + event.message);
                        this.context.log(JSON.stringify(event.voteorder, undefined, 2));
                    } else if (event.type === SingleDaemon.EventType.VoteorderRejected) {
                        this.context.log("[Synchronization] (voter=" + event.voter + ") " + event.message);
                        this.context.log(JSON.stringify(event.voteorder, undefined, 2));
                    } else if (event) {
                        this.context.log("[Synchronization] " + event.message);
                    }
                });

                return new Promise((resolve, reject) => {
                    /* newer resolve */
                });
            })
            .then(() => {
                return "Synchronization started...";
            });
    }
}
