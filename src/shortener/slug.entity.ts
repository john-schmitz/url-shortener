import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  OneToMany,
} from 'typeorm';
import { Access } from '../access/access.entity';

@Entity()
export class Slug {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  url: string;

  @Column({ length: 500 })
  slug: string;

  @OneToMany(
    type => Access,
    access => access.slug,
  )
  accesses?: Access[];

  @CreateDateColumn()
  createdAt: Date;
}
