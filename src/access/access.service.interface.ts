import { BaseContent } from 'src/public/models/basecontent.model';
import { Permission } from './access.model';

export interface IAccessService<T extends BaseContent> {
    /**
     * Check if a role has a specific permission for a given content type.
     * @param role - The role of the user (e.g., 'admin', 'editor', 'viewer').
     * @param action - The action being performed (e.g., 'create', 'read', 'update', 'delete').\
     * @returns - A boolean indicating whether access is granted.
     */
    hasPermission(
        role: string,
        action: 'create' | 'read' | 'update' | 'delete'
    ): boolean;

    /**
     * Set permissions for a specific role.
     * @param role - The role to set permissions for.
     * @param permissions - Permissions object defining access rules.
     */
    setPermissions(role: string, permissions: Permission): void;

    /**
     * Get permissions for a specific role.
     * @param role - The role for which to retrieve permissions.
     * @returns - The permissions object for the given role.
     */
    getPermissions(role: string): Permission;
}
