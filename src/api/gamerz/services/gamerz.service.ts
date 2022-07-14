import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Gamer } from '../entities/gamer.entity';
import { Repository, UpdateResult } from 'typeorm';
import { GamerDetails } from '../../../common/types/global';

@Injectable()
export class GamerzService {
  constructor(
    @InjectRepository(Gamer)
    private gamerzRepository: Repository<Gamer>,
  ) {}

  findOneByDiscordId(discordId: string): Promise<Gamer | undefined> {
    return this.gamerzRepository.findOneBy({ discordId });
  }

  create(details: GamerDetails): Gamer {
    return this.gamerzRepository.create(details);
  }

  async save(newGamer: Gamer): Promise<Gamer> {
    return await this.gamerzRepository.save(newGamer);
  }

  update(
    crieteria: { discordId: string },
    entityToUpdate: GamerDetails,
  ): Promise<UpdateResult> {
    return this.gamerzRepository.update(crieteria, entityToUpdate);
  }
}
