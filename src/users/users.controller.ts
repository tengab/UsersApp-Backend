import {Controller, Body, Param, Get, Post, Delete, Put} from '@nestjs/common';
import {UsersService} from './users.service';
import {User} from './user';

@Controller('users')
export class UsersController {

    constructor(private readonly usersService: UsersService) {
    }

    public users: any;

    @Get()
    async findAll() {
        return this.usersService.findAll();
    }

    @Post()
    async create(@Body() user) {
        return this.usersService.create(user);
    }

    @Delete(':id')
    async findOne(@Param('id') id) {
        return this.usersService.remove(id);
    }

    @Put()
    async changeOne(@Body() user) {
        return this.usersService.edit(user);
    }

}