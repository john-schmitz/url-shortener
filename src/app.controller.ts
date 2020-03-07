import {
  Controller,
  Get,
  Param,
  NotFoundException,
  Res,
  Render,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Response } from 'express';
import { ShortenerService } from './shortener/shortener.service';
import { AccessService } from './access/access.service';

@Controller()
export class AppController {
  constructor(
    private readonly configService: ConfigService,
    private readonly shortenerService: ShortenerService,
    private readonly accessSerice: AccessService,
  ) {}

  @Get()
  @Render('index')
  root() {
    return { app_url: this.configService.get<string>('APP_URL') };
  }

  @Get('info')
  getInfo() {
    return { app_url: this.configService.get<string>('APP_URL') };
  }

  @Get(':hash')
  async getDocs(@Res() response: Response, @Param() params) {
    const hash = params.hash;
    const slug = await this.shortenerService.getSlugByHash(hash);

    if (!slug) {
      throw new NotFoundException('url nao nao encontrada');
    }

    this.accessSerice.incrementAccess(slug);

    const url =
      slug.url.indexOf('://') === -1 ? 'http://' + slug.url : slug.url;

    return response.redirect(301, url);
  }
}
