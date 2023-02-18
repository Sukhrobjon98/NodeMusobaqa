import { IsString } from "class-validator";
import { IsNotEmpty } from "class-validator/types/decorator/decorators";

export class CreateClientDto{
    @IsString()
    @IsNotEmpty()
    name: string;
    @IsString()
    @IsNotEmpty()
    phone_number: string;
}