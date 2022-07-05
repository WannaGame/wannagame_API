import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { DiscordStrategy } from './discord.strategy';
import { AuthService } from './auth.service';
import { HttpModule } from '@nestjs/axios';
import { UsersModule } from '../users/users.module';
import { UsersService } from '../users/users.service';

@Module({
  imports: [HttpModule, UsersModule],
  providers: [DiscordStrategy, AuthService, UsersService],
  controllers: [AuthController],
})
export class AuthModule {}
