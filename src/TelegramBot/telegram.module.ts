import { TelegramUpdate } from './telegram.update';
import { Module } from "@nestjs/common";

@Module({
    imports: [TelegramUpdate],
    controllers: [],
    providers: [],
})
export class TelegramModule {}