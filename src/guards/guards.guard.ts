import { Injectable, CanActivate, ExecutionContext, BadRequestException, ParseIntPipe } from "@nestjs/common";
import {Request} from "express";


@Injectable()

export class GuardsGuard implements CanActivate{
    username : string = "gaurav";
    pass : string = "1234";
    canActivate(context: ExecutionContext) : boolean {
        const ctx = context.switchToHttp();
        const reqs = ctx.getRequest<Request>();

        if((reqs.header("username") == this.username) && (reqs.header("pass") == this.pass)){
            return true;
        } else {
            throw new BadRequestException("user not authorized");
        }

    }
}

