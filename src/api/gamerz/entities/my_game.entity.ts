import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'my_game', schema: 'public' })
export class MyGame {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  gameId: number;

  @Column()
  gamerId: number;
}
