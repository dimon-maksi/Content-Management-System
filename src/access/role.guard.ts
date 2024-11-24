import { CanActivate, ExecutionContext, ForbiddenException, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import { RoleService } from './role.service';
import { ROLES_KEY } from 'src/public/models/user.model';
import { AccessService } from './access.service';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector, private accessService: AccessService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const requiredRoles = this.reflector.get<string[]>(ROLES_KEY, context.getHandler());
    console.log('Required Roles:', requiredRoles);
    
    if (!requiredRoles) {
      return true;
    }

    const request = context.switchToHttp().getRequest();
    let role = request.headers['role'];
    console.log('All Headers:', request.headers);

    console.log('Role Header:', role);

    // if (typeof user === 'string') {
    //   try {
    //     user = JSON.parse(user);  // Parse the string into an object
    //   } catch (error) {
    //     throw new ForbiddenException('Invalid user role format');
    //   }
    // }

    // console.log('Parsed User:', user);

    // Ensure user is properly structured
    if (!role) {
      throw new ForbiddenException('Role header is missing');
    }

    // Check if the user has a valid role and get their permissions
    const rolePermissions = this.accessService.getPermissions(role);

    console.log('User Permissions:', rolePermissions);

    // Check if any of the required roles match the user's permissions
    const hasPermission = requiredRoles.findIndex(n => n === role);
     
    if (hasPermission === -1) {
      throw new ForbiddenException('You do not have permission to perform this action');
    }

    return true;
  }
}

