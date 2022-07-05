import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/user.entity';
import { DataSource } from 'typeorm';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

/*
J'aime pas avoir la config de l'ORM direct dans le module principal, à voir si y'a pas moyen de faire soit un
fichier orm.confid, soit carrément un module (config async Hashicorp Vault ?)
 */

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'vault.brunomarty.dev',
      port: 5432,
      username: 'v-token-wannapla-aWtEvtefBeKFCtevOok9-1657057648',
      password: '9JSPJHiSIhHHO6h-3eKN',
      database: 'wannaplay',
      entities: [User],
      synchronize: true,
    }),
    AuthModule,
    UsersModule,
  ],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
