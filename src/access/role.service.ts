import { Injectable } from '@nestjs/common';
import { IRoleService } from './role.service.interface';
import { Role } from './access.model';
import { ArrayUserDatasourceService } from 'src/datasource/user.datasource.service.array';

@Injectable()
export class RoleService implements IRoleService {
	private datasource = new ArrayUserDatasourceService();

	async getUserRole(userId: string): Promise<Role | null> {
		const user = await this.datasource.getUser(userId);
		if (user && this.isValidRole(user.role)) {
			return user.role;
		} else {
			throw new Error('Invalid user');
		}
	}

	isValidRole(role: string): role is Role {
		return role === 'admin' || role === 'editor' || role === 'viewer';
	}
}
