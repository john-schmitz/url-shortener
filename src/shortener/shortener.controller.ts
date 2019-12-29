import { Controller, Post, Body } from '@nestjs/common';
import { ShortenerService } from './shortener.service';
import { ShortnerUrlDTO } from './dto/shortnerUrl.dto';

@Controller('shortener')
export class ShortenerController {
  constructor(private readonly shortenerService: ShortenerService) {}
  @Post()
  async shortner(@Body() shortnerUrlDTO: ShortnerUrlDTO) {
    return {
      new_url: await this.shortenerService.shortUrl(shortnerUrlDTO.url),
    };
  }
}
