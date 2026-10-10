import { registerAs } from "@nestjs/config";

export enum AppConfigVars {
    NODE_ENV = 'app.nodeEnv',
    PORT = 'app.port',
}

export const appConfig = registerAs('app', () => ({
    nodeEnv: process.env.NODE_ENV,
    port: process.env.PORT,
}));