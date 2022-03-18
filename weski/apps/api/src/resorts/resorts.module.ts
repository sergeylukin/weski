import { Module } from '@nestjs/common';
import { ResortsService } from './resorts.service';
import { ResortsController } from './resorts.controller';

@Module({
  controllers: [ResortsController],
  providers: [ResortsService]
})
export class ResortsModule {}
