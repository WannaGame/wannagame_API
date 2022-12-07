import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'sessions', schema: 'public' })
export class Session {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  linkGamerStatusByGameId: number;

  @Column()
  sessionName: string;
}
