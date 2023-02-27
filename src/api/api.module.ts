import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { PeekModule } from './peek/peek.module';

@Module({
  imports: [AuthModule, PeekModule],
  controllers: [],
  providers: [],
})
export class ApiModule {}
