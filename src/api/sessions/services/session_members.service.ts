import { SessionMember } from './../entities/session_member.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { SessionMemberDetails } from 'src/common/types/global';

@Injectable()
export class SessionMembersService {
  constructor(
    @InjectRepository(SessionMember)
    private sessionsMembersRepository: Repository<SessionMember>,
  ) {}

  findOneById(id: number): Promise<SessionMember | undefined> {
    return this.sessionsMembersRepository.findOneBy({ id });
  }

  create(details: SessionMemberDetails): SessionMember {
    return this.sessionsMembersRepository.create(details);
  }

  async save(newSessionMember: SessionMember): Promise<SessionMember> {
    return await this.sessionsMembersRepository.save(newSessionMember);
  }

  update(
    criteria: { id: number },
    entityToUpdate: SessionMemberDetails,
  ): Promise<UpdateResult> {
    return this.sessionsMembersRepository.update(criteria, entityToUpdate);
  }
}
