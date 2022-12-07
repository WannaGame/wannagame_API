import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MyGameDetails } from 'src/common/types/global';
import { Repository, UpdateResult } from 'typeorm';
import { MyGame } from '../entities/my_game.entity';

@Injectable()
export class MyGamesService {
  constructor(
    @InjectRepository(MyGame)
    private myGamesRepository: Repository<MyGame>,
  ) {}

  findOneById(id: number): Promise<MyGame | undefined> {
    return this.myGamesRepository.findOneBy({ id });
  }

  create(details: MyGameDetails): MyGame {
    return this.myGamesRepository.create(details);
  }

  async save(newMyGame: MyGame): Promise<MyGame> {
    return await this.myGamesRepository.save(newMyGame);
  }

  update(
    criteria: { id: number },
    entityToUpdate: MyGameDetails,
  ): Promise<UpdateResult> {
    return this.myGamesRepository.update(criteria, entityToUpdate);
  }
}
