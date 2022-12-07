import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GamesController } from './controllers/games.controller';
import { Game } from './entities/games.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Game])],
  exports: [TypeOrmModule],
  providers: [],
  controllers: [GamesController],
})
export class GamesModule {}
