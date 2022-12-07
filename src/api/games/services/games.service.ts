import { GameDetails } from './../../../common/types/global.d';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Game } from '../entities/games.entity';
import { Repository, UpdateResult } from 'typeorm';

@Injectable()
export class GamesService {
  constructor(
    @InjectRepository(Game)
    private gamesRepository: Repository<Game>,
  ) {}

  findOneById(id: number): Promise<Game | undefined> {
    return this.gamesRepository.findOneBy({ id });
  }

  create(details: GameDetails): Game {
    return this.gamesRepository.create(details);
  }

  async save(newGame: Game): Promise<Game> {
    return await this.gamesRepository.save(newGame);
  }

  update(
    criteria: { id: number },
    entityToUpdate: GameDetails,
  ): Promise<UpdateResult> {
    return this.gamesRepository.update(criteria, entityToUpdate);
  }
}
