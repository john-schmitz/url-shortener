import { Module } from '@nestjs/common';
import { ShortenerService } from './shortener.service';
import { ShortenerController } from './shortener.controller';
import { Slug } from './slug.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Slug])],
  providers: [ShortenerService],
  controllers: [ShortenerController],
  exports: [ShortenerService],
})
export class ShortenerModule {}
