import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post,
    Query,
    Req,
    UseGuards,
} from '@nestjs/common';
import { retry } from 'rxjs/operators';
import { User } from 'src/models/user.entity';
import { UserService } from 'src/services/user.service';
import AppResponse from 'src/utils/app.response';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Get('users')
    async getAllUsers(): Promise<User[]> {
        return this.userService.getAll();
    }

    @Delete('delete')
    async deleteUser(@Query('id') id: number): Promise<any> {
        return this.userService.delete(id);
    }

    @Post('create-user')
    async createUser(@Body() user: User): Promise<User> {
        return await this.userService.createUser(user);
    }

    @Get('get-user-by-account')
    async findUser(@Query('account') account: string): Promise<User> {
        return await this.userService.findUserByEmail(account);
    }

    @Get('get-user-by-id')
    async findUserById(@Query('id') id: number): Promise<User> {
        return await this.userService.findUserById(id);
    }
}

