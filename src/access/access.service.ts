import { Injectable } from '@nestjs/common';
import { IAccessService } from './access.service.interface';
import { BaseContent } from 'src/public/models/basecontent.model';
import { Permission, Role } from './access.model';

@Injectable()
export class AccessService implements IAccessService<BaseContent> {
    private rolePermissions: Record<Role, Permission> = {
        admin: { create: true, read: true, update: true, delete: true },
        editor: { create: true, read: true, update: true, delete: false },
        viewer: { create: false, read: true, update: false, delete: false },
    };

    hasPermission(
        role: string,
        action: 'create' | 'read' | 'update' | 'delete'
    ): boolean {
        if (role in this.rolePermissions) {
            const permissions = this.rolePermissions[role as Role];
            return permissions[action];
        }
        return false;
    }
    setPermissions(role: string, permissions: Permission): void {
        if (role in this.rolePermissions) {
            this.rolePermissions[role as Role] = permissions;
        } else {
            throw new Error('Invalid role');
        }
    }
    getPermissions(role: string): Permission {
        if (role in this.rolePermissions) {
            return this.rolePermissions[role as Role];
        }
        throw new Error('Invalid role');
    }
}
