import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Gamer } from './entities/gamer.entity';
import { GamerzController } from './controllers/gamerz.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Gamer])],
  exports: [TypeOrmModule],
  providers: [],
  controllers: [GamerzController],
})
export class GamerzModule {}
