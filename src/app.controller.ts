import { Controller, Get, Redirect, Req, Param, NotFoundException, Res } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Response } from 'express';
import { ShortenerService } from './shortener/shortener.service';

@Controller()
export class AppController {
  constructor(private readonly configService: ConfigService, private readonly shortenerService: ShortenerService) {}

  @Get('info')
  getInfo() {
    return { app_url: this.configService.get<string>('APP_URL') };
  }

  @Get(':hash')
  async getDocs(@Res() response: Response, @Param() params) {
    const hash = params.hash;
    let url = await this.shortenerService.getUrl(hash);

    if (!url) {
      throw new NotFoundException('url nao nao encontrada');
    }
    url = (url.indexOf('://') === -1) ? 'http://' + url : url;

    return response.redirect(301, url);
  }
}
