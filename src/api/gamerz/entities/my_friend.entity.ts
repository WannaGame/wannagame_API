import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'my_friend', schema: 'public' })
export class MyFriend {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  idGamerAsHost: number;

  @Column()
  idGamerAsFriend: number;
}
