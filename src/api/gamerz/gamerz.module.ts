import { Module } from '@nestjs/common';
import { GamerzService } from './gamerz.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Gamer } from './gamer.entity';
import { GamerzController } from './gamerz.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Gamer])],
  exports: [TypeOrmModule],
  providers: [GamerzService],
  controllers: [GamerzController],
})
export class GamerzModule {}
