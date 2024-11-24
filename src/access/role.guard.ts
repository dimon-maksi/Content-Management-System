import {
	CanActivate,
	ExecutionContext,
	ForbiddenException,
	Injectable,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ROLES_KEY } from 'src/public/models/user.model';
import { AccessService } from './access.service';

@Injectable()
export class RolesGuard implements CanActivate {
	constructor(
		private reflector: Reflector,
		private accessService: AccessService,
	) { }

	async canActivate(context: ExecutionContext): Promise<boolean> {
		const requiredRoles = this.reflector.get<string[]>(
			ROLES_KEY,
			context.getHandler(),
		);

		if (!requiredRoles) {
			return true;
		}

		const request = context.switchToHttp().getRequest();
		const role = request.headers['role'];

		if (!role) {
			throw new ForbiddenException('Role header is missing');
		}

		const hasPermission = requiredRoles.findIndex((n) => n === role);

		if (hasPermission === -1) {
			throw new ForbiddenException(
				'You do not have permission to perform this action',
			);
		}

		return true;
	}
}
