import { Module } from '@nestjs/common';
import { AuthController } from './controllers/auth.controller';
import { DiscordStrategy } from './strategies/discord.strategy';
import { AuthService } from './services/auth.service';
import { HttpModule } from '@nestjs/axios';
import { GamerzModule } from '../gamerz/gamerz.module';
import { GamerzService } from '../gamerz/services/gamerz.service';
import { SessionSerializer } from './utils/Serializer';

@Module({
  imports: [HttpModule, GamerzModule],
  providers: [
    DiscordStrategy,
    GamerzService,
    SessionSerializer,
    {
      provide: 'AUTH_SERVICE',
      useClass: AuthService,
    },
  ],
  controllers: [AuthController],
})
export class AuthModule {}
