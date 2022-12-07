import { MyFriendDetails } from './../../../common/types/global.d';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { MyFriend } from '../entities/my_friend.entity';

@Injectable()
export class MyFriendsService {
  constructor(
    @InjectRepository(MyFriend)
    private myFriendsRepository: Repository<MyFriend>,
  ) {}

  findOneById(id: number): Promise<MyFriend | undefined> {
    return this.myFriendsRepository.findOneBy({ id });
  }

  create(details: MyFriendDetails): MyFriend {
    return this.myFriendsRepository.create(details);
  }

  async save(newMyFriend: MyFriend): Promise<MyFriend> {
    return await this.myFriendsRepository.save(newMyFriend);
  }

  update(
    criteria: { id: number },
    entityToUpdate: MyFriendDetails,
  ): Promise<UpdateResult> {
    return this.myFriendsRepository.update(criteria, entityToUpdate);
  }
}
