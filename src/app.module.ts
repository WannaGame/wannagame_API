import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { AuthModule } from './api/auth/auth.module';
import { GamerzModule } from './api/gamerz/gamerz.module';
import { ConfigModule } from '@nestjs/config';
import { getEnvPath } from './common/helpers/env.helper';
import { TypeOrmConfigService } from './database/database.service';
import { PassportModule } from '@nestjs/passport';

const envFilePath: string = getEnvPath(`${__dirname}/common/envs`);

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath, isGlobal: true }),
    TypeOrmModule.forRootAsync({ useClass: TypeOrmConfigService }),
    AuthModule,
    GamerzModule,
    PassportModule.register({ session: true }),
  ],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
