import { Injectable } from '@nestjs/common';
import { Slug } from '../shortener/slug.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Access } from './access.entity';

@Injectable()
export class AccessService {
  constructor(
    @InjectRepository(Access)
    private readonly accessRepository: Repository<Access>,
  ) {}

  async incrementAccess(slug: Slug) {
    const access = new Access();
    access.slug = slug;
    await this.accessRepository.save(access);
  }
}
