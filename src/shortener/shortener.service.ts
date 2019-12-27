import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { randomBytes } from "crypto";
@Injectable()
export class ShortenerService {
  constructor(private readonly configService: ConfigService) {
    this.urls = new Map();
  }
  private urls: Map<string, string>;

  private generateHash() {
    let hash_url = randomBytes(10).toString('hex');    
    if (this.urls.get(hash_url)) {
      return this.generateHash();
    }
    return hash_url;
  }

  shortUrl(url: string) {
    let hash_url = this.generateHash();
    this.urls.set(hash_url, url);
    return `${this.configService.get<string>('APP_URL')}/${hash_url}`;
  }

  getUrl(hash_url: string): string | void {
    return this.urls.get(hash_url);
  }
}
