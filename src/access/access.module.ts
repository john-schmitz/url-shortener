import { Module } from '@nestjs/common';
import { AccessService } from './access.service';
import { Slug } from '../shortener/slug.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Access } from './access.entity';

@Module({
  providers: [AccessService],
  imports: [TypeOrmModule.forFeature([Slug, Access])],
  exports: [AccessService],
})
export class AccessModule {}
