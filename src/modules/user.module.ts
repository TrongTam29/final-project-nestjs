import { Module } from '@nestjs/common';
import { UserController } from 'src/controllers/user.controller';
import { userProviders } from 'src/providers/user.provider';
import { UserService } from 'src/services/user.service';
import { DatabaseModule } from './database.module';

@Module({
    imports: [DatabaseModule],
    controllers: [UserController],
    providers: [
        UserService,
        ...userProviders
    ],
})
export class UserModule { }
