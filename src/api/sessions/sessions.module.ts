import { SessionMember } from './entities/session_member.entity';
import { LinkGamerStatusByGame } from './entities/link_gamer_status_by_game.entity';
import { Session } from './entities/session.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([Session, LinkGamerStatusByGame, SessionMember]),
  ],
  exports: [TypeOrmModule],
  providers: [],
  controllers: [],
})
export class SessionsModule {}
