import { Injectable, NestMiddleware } from "@nestjs/common";
import {Request, Response, NextFunction} from "express";

@Injectable()
export class GuardsMiddleware implements NestMiddleware {
    use(res:Response, req:Request, next:NextFunction) {
        console.log("Guards middleware called");
        next();
    }
}
