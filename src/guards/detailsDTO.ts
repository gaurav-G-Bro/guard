import { Injectable } from "@nestjs/common";
import {IsString, IsInt} from "class-validator";

@Injectable()
export class DetailsDto {
    @IsInt()
    id : number;

    @IsString()
    name : string;

    @IsInt()
    age : number;
}

