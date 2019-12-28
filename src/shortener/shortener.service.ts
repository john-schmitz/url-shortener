import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { randomBytes } from 'crypto';
import { InjectRepository } from '@nestjs/typeorm';
import { Slug } from './slug.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ShortenerService {
  constructor(
    private readonly configService: ConfigService,
    @InjectRepository(Slug)
    private readonly slugRepository: Repository<Slug>) {
  }

  private async generateHash() {
    const hashUrl = randomBytes(10).toString('hex');
    const slug = await this.slugRepository.findOne({ slug: hashUrl});
    if (slug) {
      return this.generateHash();
    }
    return hashUrl;
  }

  async shortUrl(url: string) {
    const hashUrl = await this.generateHash();
    const slug = new Slug();
    slug.slug = hashUrl;
    slug.url = url;

    await this.slugRepository.save(slug);
    return `${this.configService.get<string>('APP_URL')}/${hashUrl}`;
  }

  async getUrl(hashUrl: string): Promise<string | void> {
    const slug = await this.slugRepository.findOne({slug: hashUrl});
    if (slug) {
      return slug.url;
    }
  }
}
