import { Snowflake } from "discord.js";

declare global {
    namespace NodeJS {
        interface ProcessEnv {
            sentry_dsn: string;
        }
    }
}

export {};
