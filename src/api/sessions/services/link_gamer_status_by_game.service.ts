import { LinkGamerStatusByGameDetails } from './../../../common/types/global.d';
import { LinkGamerStatusByGame } from './../entities/link_gamer_status_by_game.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';

@Injectable()
export class LinkGamerStatusByGameService {
  constructor(
    @InjectRepository(LinkGamerStatusByGame)
    private linkGamerStatusByGameRepository: Repository<LinkGamerStatusByGame>,
  ) {}

  findOneById(id: number): Promise<LinkGamerStatusByGame | undefined> {
    return this.linkGamerStatusByGameRepository.findOneBy({ id });
  }

  create(details: LinkGamerStatusByGameDetails): LinkGamerStatusByGame {
    return this.linkGamerStatusByGameRepository.create(details);
  }

  async save(
    newLinkGamerStatusByGame: LinkGamerStatusByGame,
  ): Promise<LinkGamerStatusByGame> {
    return await this.linkGamerStatusByGameRepository.save(
      newLinkGamerStatusByGame,
    );
  }

  update(
    criteria: { id: number },
    entityToUpdate: LinkGamerStatusByGameDetails,
  ): Promise<UpdateResult> {
    return this.linkGamerStatusByGameRepository.update(
      criteria,
      entityToUpdate,
    );
  }
}
