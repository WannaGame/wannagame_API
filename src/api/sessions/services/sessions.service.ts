import { Session } from './../entities/session.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { SessionDetails } from 'src/common/types/global';

@Injectable()
export class SessionsService {
  constructor(
    @InjectRepository(Session)
    private sessionsRepository: Repository<Session>,
  ) {}

  findOneById(id: number): Promise<Session | undefined> {
    return this.sessionsRepository.findOneBy({ id });
  }

  create(details: SessionDetails): Session {
    return this.sessionsRepository.create(details);
  }

  async save(newSession: Session): Promise<Session> {
    return await this.sessionsRepository.save(newSession);
  }

  update(
    criteria: { id: number },
    entityToUpdate: SessionDetails,
  ): Promise<UpdateResult> {
    return this.sessionsRepository.update(criteria, entityToUpdate);
  }
}
