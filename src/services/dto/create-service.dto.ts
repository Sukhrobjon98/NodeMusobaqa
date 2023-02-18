import { IsNotEmpty, IsString } from "class-validator";

export class CreateServiceDto {
    @IsNotEmpty()
    date: Date;

    @IsNotEmpty()
    @IsString()
    title: string;  

    @IsNotEmpty()
    time: string;

    


}