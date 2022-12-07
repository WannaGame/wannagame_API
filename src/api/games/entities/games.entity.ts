import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'game', schema: 'public' })
export class Game {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  nbPlayers: number;

  @Column()
  gameType: string;
}
