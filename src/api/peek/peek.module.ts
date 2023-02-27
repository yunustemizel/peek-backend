import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PeekService } from './peek.service';
import { PeekController } from './peek.controller';

@Module({
  controllers: [PeekController],
  providers: [PeekService],
  imports: [ConfigModule],
  exports: [PeekService],
})
export class PeekModule {}
