import { Module } from '@nestjs/common';
import { OffersModule } from '../offers/offers.module';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [OffersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
