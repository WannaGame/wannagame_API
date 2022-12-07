import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'session_members', schema: 'public' })
export class SessionMember {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  sessionId: number;

  @Column()
  gamerId: number;
}
