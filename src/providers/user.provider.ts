import { User } from 'src/models/user.entity';

export const userProviders = [
    {
        provide: 'USER_REPOSITORY',
        useValue: User,
    },
];