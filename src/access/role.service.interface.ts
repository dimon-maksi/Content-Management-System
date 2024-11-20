import { Role } from './access.model';

export interface IRoleService {
    /**
     * Assign a role to a user.
     * @param userId - The unique identifier of the user.
     * @param role - The role to assign.
     */
    assignRole(userId: string, role: Role): Promise<void>;

    /**
     * Get the role of a specific user.
     * @param userId - The unique identifier of the user.
     * @returns - The role of the user.
     */
    getUserRole(userId: string): Promise<Role | null>;
}
