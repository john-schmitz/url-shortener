import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { randomBytes } from 'crypto';

@Injectable()
export class ShortenerService {
  constructor(private readonly configService: ConfigService) {
    this.urls = new Map();
  }
  private urls: Map<string, string>;

  private generateHash() {
    const hashUrl = randomBytes(2).toString('hex');
    if (this.urls.get(hashUrl)) {
      return this.generateHash();
    }
    return hashUrl;
  }

  shortUrl(url: string) {
    const hashUrl = this.generateHash();
    this.urls.set(hashUrl, url);
    return `${this.configService.get<string>('APP_URL')}/${hashUrl}`;
  }

  getUrl(hashUrl: string): string | void {
    return this.urls.get(hashUrl);
  }
}
