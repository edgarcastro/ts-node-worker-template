import winston from 'winston';

const logger = winston.createLogger({
  transports: [
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.simple(),
      ),
    }),
    new winston.transports.File({filename: '.logs/debug.log'}),
  ],
});

(async function () {
  logger.info('Add your code here');
})();
