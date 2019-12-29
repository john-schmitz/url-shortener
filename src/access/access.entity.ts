import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  ManyToOne,
} from 'typeorm';
import { Slug } from '../shortener/slug.entity';

@Entity()
export class Access {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  accessedAt: Date;

  @ManyToOne(
    type => Slug,
    slug => slug.accesses,
  )
  slug: Slug;
}
