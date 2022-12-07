import { StatusDetails } from './../../../common/types/global.d';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { Status } from '../entities/status.entity';

@Injectable()
export class StatusService {
  constructor(
    @InjectRepository(Status)
    private statusRepository: Repository<Status>,
  ) {}

  findOneById(id: number): Promise<Status | undefined> {
    return this.statusRepository.findOneBy({ id });
  }

  create(details: StatusDetails): Status {
    return this.statusRepository.create(details);
  }

  async save(newStatus: Status): Promise<Status> {
    return await this.statusRepository.save(newStatus);
  }

  update(
    criteria: { id: number },
    entityToUpdate: StatusDetails,
  ): Promise<UpdateResult> {
    return this.statusRepository.update(criteria, entityToUpdate);
  }
}
