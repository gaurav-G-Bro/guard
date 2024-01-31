import { Module } from '@nestjs/common';
import {GuardModule} from "./guards/guards.module";

@Module({
  imports: [GuardModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
