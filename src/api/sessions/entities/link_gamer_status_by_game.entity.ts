import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'link_gamer_status_by_game', schema: 'public' })
export class LinkGamerStatusByGame {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  myGameId: number;

  @Column()
  statusId: number;
}
