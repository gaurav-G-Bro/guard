import { Controller, Get, Post, Body, Param, UseGuards } from "@nestjs/common";
import { DetailsDto } from "./detailsDTO";
import { GuardsPipe } from "./guards.pipe";
import { GuardsGuard } from "./guards.guard";


const users = [];

@Controller("/guard")

export class GuardController {
    @Post("/postguard")
    @UseGuards(GuardsGuard)
    getDetails(@Body(new GuardsPipe()) body : DetailsDto){
        users.push(body);
        console.log(body);
        return "user added";
    }

    @UseGuards(GuardsGuard)
    @Get("/getguard")
    getGuard(){
        return users;
    }

    @Get("/singleuser/:id")
    getSingleUser(@Param("id") id : DetailsDto) {
        return users.find((user) => +user.id == +id);
    }
}

