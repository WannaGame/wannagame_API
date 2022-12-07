import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'status', schema: 'public' })
export class Status {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  dailyStatus: number;

  @Column()
  timeStatus: Date;

  @Column()
  gamerId: number;
}
