import {LoggerService} from '@nestjs/common';
import { info } from 'console';
import {createLogger, format, Logger, transports} from 'winston';
import * as DailyRotateFile from "winston-daily-rotate-file"

export class MyLoggerService implements LoggerService {
    logger: Logger;

    constructor() {
        const infoLogTransport = new DailyRotateFile({level:"error",filename:"error-%DATE%.log",dirname:"logs/info",datePattern:"YYYYMMDD",maxFiles:"7d"})

        this.logger = createLogger({
            format: format.combine(format.timestamp(), format.json()),
            transports: [infoLogTransport],
        });
    }

    log(message: string) {
        this.logger.info(message);
    }

    error(message: string, trace: string) {
        this.logger.error(message, trace)
    }

    warn(message: string) {
        this.logger.warn(message);
    }

    debug(message: string) {
        this.logger.debug(message);
    }

    verbose(message: string) {
        this.logger.verbose(message)
    }
}