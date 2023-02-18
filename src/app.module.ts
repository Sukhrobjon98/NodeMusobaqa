import { TelegramModule } from './TelegramBot/telegram.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [TelegramModule],
})
export class AppModule {}
