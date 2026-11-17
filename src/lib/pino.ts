import "server-only";

import pino, { type Logger } from "pino";

const globalForLogger = globalThis as typeof globalThis & {
  appLogger?: Logger;
};

function createLogger(): Logger {
  const destination = pino.destination();

  return pino(
    {
      level: process.env.LOG_LEVEL ?? "info",
      timestamp: pino.stdTimeFunctions.isoTime,
      redact: ["password", "token", "authorization"],
    },
    destination,
  );
}

export const logger =
  globalForLogger.appLogger ?? (globalForLogger.appLogger = createLogger());
