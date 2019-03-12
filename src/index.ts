#!/usr/bin/env node

import { Command } from "commander";

import { App } from "./app";
import { Context } from "./Context";
import * as eastereggs from "./eastereggs";
import { Log } from "./log";

Log.log().initialize(false, false);

const context = new Context();
const commander: Command = new Command();
const app: App = new App(context, commander, process.argv);

(async () => {
    try {
        const result = await app.run();
        context.log(result);
        context.log("");
    } catch (error) {
        if (error.incorrect_command) {
            context.log("Incorrect command.");
            app.outputHelp();
            process.exit(1);
        } else {
            Log.log().exception(Log.level.error, error);
            context.log("");
            context.log(
                `>  We apologize for this error. ` +
                `Maybe this wise sentence will improve your mood: ${eastereggs.wisdomQuote()}`,
            );
            process.exit(1);
        }
    }
})();

/**
 * Prayer:
 *  Gloria Patri, et Filio, et Spiritui Sancto, sicut erat in principio et nunc et semper et in saecula
 *  saeculorum. Amen. In te, Domine, speravi: non confundar in aeternum.
 */
