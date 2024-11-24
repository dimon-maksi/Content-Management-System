import { Injectable } from '@nestjs/common';
import { IUserDatasourceService } from './user.datasource.service.interface';
import { User } from 'src/public/models/user.model';

@Injectable()
export class ArrayUserDatasourceService implements IUserDatasourceService {
    private users: User[] = [
        { id: '1', name: 'adminUser', role: 'admin' },
        { id: '2', name: 'editorUser', role: 'editor' },
        { id: '3', name: 'viewerUser', role: 'viewer' },
    ];

    async getUser(userId: string): Promise<User | null> {
        const user = this.users.find(user => user.id === userId);
        return Promise.resolve(user || null);
    }
    async getUsers(): Promise<User[]> {
        return Promise.resolve(this.users);
    }
    async addUser(userName: string, userRole: string): Promise<User> {
        const newUser: User = {
            id: Date.now().toString(),
            name: userName,
            role: userRole,
        };
        this.users.push(newUser);
        return Promise.resolve(newUser);
    }
    async updateUser(userId: string, user: Partial<User>): Promise<User> {
        const index = this.users.findIndex(user => user.id === userId);
        if (index === -1) {
            throw new Error('User not found');
        }
        this.users[index] = { ...this.users[index], ...user };
        return Promise.resolve(this.users[index]);
    }
    async deleteUser(userId: string): Promise<void> {
        const index = this.users.findIndex(user => user.id === userId);
        if (index === -1) {
            throw new Error('User not found');
        }
        this.users.splice(index, 1);
        return Promise.resolve();
    }
}
