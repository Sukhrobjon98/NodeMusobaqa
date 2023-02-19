import { IsNotEmpty, IsString } from "class-validator";

export class CreateServiceDto {
    service_id: number;
    title: string;
}