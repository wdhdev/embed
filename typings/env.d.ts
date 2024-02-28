import { Snowflake } from "discord.js";

declare global {
    namespace NodeJS {
        interface ProcessEnv {
            port: number;
            sentry_dsn: string;
        }
    }
}

export {};
