import {
    Body,
    Controller,
    Get,
    Param,
    Patch,
    Post,
    Query,
    Req,
    UseGuards,
} from '@nestjs/common';
import { User } from 'src/models/user.entity';
import { UserService } from 'src/services/user.service';
import AppResponse from 'src/utils/app.response';

@Controller('user')
export class UserController {
    constructor(private readonly userGroupService: UserService) { }

    @Get('Users')
    async getAllUsers(): Promise<User[]> {
        return this.userGroupService.getAll();
    }

    @Post('create-user')
    async createUser(@Body() user: User): Promise<AppResponse<User>> {
        const response = new AppResponse<User>();
        response.data = await this.userGroupService.createUser(user);
        response.success = true;
        response.message = 'Successfully';
        response.status = 200;
        return response;
    }

}

