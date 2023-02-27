/* eslint-disable class-methods-use-this */
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { ApiModule } from './api/api.module';
import { AuthModule } from './api/auth/auth.module';
import { ResponseLoggerInterceptor } from './common/interceptors';
import { AuthMiddleware, RequestLoggerMiddleware } from './common/middlewares';
import { configuration } from './config';
import { ENVIRONMENTS } from './constants';

@Module({
  imports: [
    AuthModule,
    ApiModule,
    ConfigModule.forRoot({
      load: [configuration],
      envFilePath: ENVIRONMENTS[process.env.NODE_ENV] || ENVIRONMENTS.development,
    }),
  ],
  controllers: [],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: ResponseLoggerInterceptor,
    },
  ],
})

export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes('');
    consumer.apply(RequestLoggerMiddleware).forRoutes('*');
  }
}
