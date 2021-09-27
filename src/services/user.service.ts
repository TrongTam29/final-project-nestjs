import { Inject, Injectable } from '@nestjs/common';
import { User } from 'src/models/user.entity';

@Injectable()
export class UserService {
    constructor(
        @Inject('USER_REPOSITORY')
        private userRepository: typeof User,
    ) { }

    async getAll(): Promise<User[]> {
        return await this.userRepository.findAll();
    }

    async delete(id: number): Promise<any> {
        return this.userRepository.destroy({ where: { id: id } });
    }

    async createUser(user: User): Promise<User> {
        return await this.userRepository.create(user);
    }

    async findUserByEmail(account: string): Promise<User> {
        return await this.userRepository.findOne({ where: { email: account } })
    }

    async findUserById(id: number): Promise<User> {
        return await this.userRepository.findOne({ where: { id: id } })
    }
}
