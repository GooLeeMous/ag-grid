/* eslint-disable no-console */
import { doOnce } from './function';

export const Logger = {
    debug(...logContent: any[]) {
        console.log(...logContent);
    },

    warn(message: string, ...logContent: any[]) {
        console.warn(`AG Charts - ${message}`, ...logContent);
    },

    error(message: any, ...logContent: any[]) {
        if (typeof message === 'object') {
            console.error(`AG Charts error`, message, ...logContent);
        } else {
            console.error(`AG Charts - ${message}`, ...logContent);
        }
    },

    warnOnce(message: any, ...logContent: any[]) {
        doOnce(() => Logger.warn(message, ...logContent), `Logger.warn: ${message}`);
    },

    errorOnce(message: any, ...logContent: any[]) {
        doOnce(() => Logger.error(message, ...logContent), `Logger.warn: ${message}`);
    },
};
