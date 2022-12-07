import { Status } from './entities/status.entity';
import { MyFriend } from './entities/my_friend.entity';
import { MyGame } from './entities/my_game.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Gamer } from './entities/gamer.entity';
import { GamerzController } from './controllers/gamerz.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Gamer, MyGame, MyFriend, Status])],
  exports: [TypeOrmModule],
  providers: [],
  controllers: [GamerzController],
})
export class GamerzModule {}
