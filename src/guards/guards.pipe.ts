import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from "@nestjs/common";
import { plainToInstance } from "class-transformer";
import { validate } from "class-validator";
import { DetailsDto } from "./detailsDTO";

@Injectable()

export class GuardsPipe implements PipeTransform{
    async transform(value: any, metadata: ArgumentMetadata) {
        const obj = plainToInstance(DetailsDto, value);
        const errors = await validate(obj);

        if(errors.length > 0) {
            throw new BadRequestException(`validation failed : ${errors}`);
        }
        return value;
    }
}

