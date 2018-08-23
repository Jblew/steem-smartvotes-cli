import * as winston from "winston";
import * as program from "commander";

import { Log as SteemWiseCoreLog } from "steem-wise-core";

export class Log {
    public static configureLoggers(program: program.Command) {
        const verboseOrDebug = !!program.debug || !!program.verbose;
        // cli logger
        Log.getLogger().add(
            new winston.transports.Console({
                format: winston.format.combine(
                    winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
                    winston.format.printf(info => {
                        if (verboseOrDebug) {
                            return `${info.timestamp} [${info.level}]: ${info.message} ${info.stack} ERR`;
                        }
                        else {
                            return `${info.message}`;
                        }
                    })
                ),
                handleExceptions: true,
                timestamp: true,
            } as object)
        );
        Log.getLogger().level = "warn";

        if (program.debug) {
            console.log("Setting steem-wise-core log level to \"debug\"");
            SteemWiseCoreLog.setLevel("debug");

            console.log("Setting steem-wise-cli log level to \"debug\"");
            Log.getLogger().level = "debug";
        }
        else if (program.verbose) {
            console.log("Setting steem-wise-core log level to \"info\"");
            SteemWiseCoreLog.setLevel("info");

            console.log("Setting steem-wise-cli log level to \"info\"");
            Log.getLogger().level = "info";
        }
    }

    public static setLevel(level: string) {
        Log.getLogger().level = level;
    }

    public static getLogger(): winston.Logger {
        return (winston.loggers as any).get("steem-wise-cli");
    }

    public static cheapDebug(debugStringReturnerFn: () => string): void {
        const logger = Log.getLogger();
        if (logger.levels[logger.level] >= logger.levels["debug"]) logger.debug(debugStringReturnerFn());
    }

    public static cheapInfo(infoStringReturnerFn: () => string): void {
        const logger = Log.getLogger();
        if (logger.levels[logger.level] >= logger.levels["info"]) logger.debug(infoStringReturnerFn());
    }

    public static exception(error: Error, level: string = "error"): void {
        const logger = Log.getLogger();
        logger.log(level, error.name + ": " + error.message
            + (logger.levels[logger.level] >= logger.levels["info"] && error.stack ? "\n" + error.stack : ""));
    }

    public static promiseResolveDebug<T>(msgBeginning: string, result: T): T {
        Log.cheapDebug(() => msgBeginning + JSON.stringify(result));
        return result;
    }

    public static promiseRejectionDebug<T>(msgBeginning: string, error: T): T {
        Log.cheapDebug(() => msgBeginning + JSON.stringify(error));
        throw error;
    }
}