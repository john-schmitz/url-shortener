import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { ShortenerController } from './shortener/shortener.controller';
import { ShortenerService } from './shortener/shortener.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  controllers: [AppController, ShortenerController],
  providers: [AppService, ShortenerService],
})
export class AppModule {}
