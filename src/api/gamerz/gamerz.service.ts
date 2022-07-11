import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Gamer } from './gamer.entity';
import { Repository } from 'typeorm';

@Injectable()
export class GamerzService {
  constructor(
    @InjectRepository(Gamer)
    private usersRepository: Repository<Gamer>,
  ) {}

  findAll(): Promise<Gamer[]> {
    return this.usersRepository.find();
  }

  findOne(id: number): Promise<Gamer> {
    return this.usersRepository.findOneBy({ id });
  }

  findOneByDiscordId(discordId: string): Promise<Gamer> {
    return this.usersRepository.findOneBy({ discordId });
  }

  async remove(id: number): Promise<void> {
    await this.usersRepository.delete(id);
  }

  async save(newUser: UserDTO): Promise<Gamer> {
    return await this.usersRepository.save(newUser);
  }
}
