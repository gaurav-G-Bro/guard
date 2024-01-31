import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {Request, Response, NextFunction} from "express";

function GlobalMiddleware(res:Response, req:Request, next:NextFunction){
  console.log("Global middleware called");
  next();
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(GlobalMiddleware);
  await app.listen(3000);
}
bootstrap();
