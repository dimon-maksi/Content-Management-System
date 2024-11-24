import { Role } from './access.model';

export interface IRoleService {
	/**
	 * Get the role of a specific user.
	 * @param userId - The unique identifier of the user.
	 * @returns - The role of the user.
	 */
	getUserRole(userId: string): Promise<Role | null>;
}
