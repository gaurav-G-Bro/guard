import { Module, NestModule, MiddlewareConsumer } from "@nestjs/common";
import { GuardController } from "./guards.controller";
import {GuardsGuard} from "./guards.guard";
import { GuardsMiddleware } from "./guards.middleware";
import { DetailsDto } from "./detailsDTO";

@Module({
    imports : [],
    controllers : [GuardController],
    providers : [GuardsGuard, GuardsMiddleware, DetailsDto],
    exports : []
})

export class GuardModule implements NestModule{ 
    configure(consumer : MiddlewareConsumer) {
        consumer.apply(GuardsMiddleware).forRoutes("guard");
    }
}

