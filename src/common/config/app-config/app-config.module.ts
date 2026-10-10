import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { validationSchema } from './env.validation';
import { appConfig } from './app.config';

const environment = process.env.NODE_ENV ?? 'dev';
const isProduction = environment === 'prod';

@Module({
    imports: [
        ConfigModule.forRoot({
            ignoreEnvFile: isProduction,
            envFilePath: `.env.${environment}`,
            validationSchema,
            load: [appConfig],
            isGlobal: true,
        }),
    ],
})
export class AppConfigModule {}
