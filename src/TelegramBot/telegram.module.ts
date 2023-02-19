import { RolesModule } from './../roles/roles.module';
import { TelegramUpdate } from './telegram.update';
import { Module } from "@nestjs/common";

@Module({
    imports: [RolesModule],
    controllers: [],
    providers: [TelegramUpdate],
})
export class TelegramModule {}