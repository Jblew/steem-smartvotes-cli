import * as os from "os";

import { Config } from "./Config";

export class StaticConfig {
    public static INTRODUCTION_OF_WISE_BLOCK_NUM: number = 21622860;

    public static DEFAULT_GLOBAL_PATH = os.homedir() + "/.wise";

    public static DEFAULT_CONFIG_FILE_PATHS: string [] = [
        "./config.json", "./config.yml",
        StaticConfig.DEFAULT_GLOBAL_PATH + "/config.json", StaticConfig.DEFAULT_GLOBAL_PATH + "/config.yml"
    ];

    public static DEFAULT_RULES_FILE_PATHS: string [] = [
        "./rules.json", "./rules.yml",
        StaticConfig.DEFAULT_GLOBAL_PATH + "/rules.json", StaticConfig.DEFAULT_GLOBAL_PATH + "/rules.yml"
    ];

    public static DEFAULT_DOWNLOAD_RULES_PATH_YML = "rules.yml";
    public static DEFAULT_DOWNLOAD_RULES_PATH_JSON = "rules.json";

    public static DEFAULT_CONFIG: Config = {
        username: "",
        postingWif: "",
        steemApi: /*§ §*/ "https://anyx.io" /*§ ' "' + data.config.steem.defaultApiUrl + '" ' §.*/,
        defaultSyncStartBlockNum: 0, // introduction of smartvotes
        defaultRulesPath: "",
        syncedBlockNumFile: "./wise-synced-block-num.txt",
        disableSend: false
    };
}