import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MyLoggerService } from './logger/logger.service';
import { LoggerModule } from './logger/logger.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [LoggerModule, AuthModule],
  controllers: [AppController],
  providers: [AppService, MyLoggerService],
})
export class AppModule {}
