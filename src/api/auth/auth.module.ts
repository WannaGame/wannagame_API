import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { DiscordStrategy } from './strategies/discord.strategy';
import { AuthService } from './auth.service';
import { HttpModule } from '@nestjs/axios';
import { GamerzModule } from '../gamerz/gamerz.module';
import { GamerzService } from '../gamerz/gamerz.service';

@Module({
  imports: [HttpModule, GamerzModule],
  providers: [DiscordStrategy, AuthService, GamerzService],
  controllers: [AuthController],
})
export class AuthModule {}
