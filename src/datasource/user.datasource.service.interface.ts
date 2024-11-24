import { User } from 'src/public/models/user.model';

export interface IUserDatasourceService {
	getUser(userId: string): Promise<User | null>;
	getUsers(): Promise<User[]>;
	addUser(userName: string, userRole: string): Promise<User>;
	updateUser(userId: string, user: Partial<User>): Promise<User>;
	deleteUser(topicName: string): Promise<void>;
}
