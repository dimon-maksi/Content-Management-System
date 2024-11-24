import {
	CanActivate,
	ExecutionContext,
	ForbiddenException,
	Injectable,
} from '@nestjs/common';
import { AccessService } from './access.service';

@Injectable()
export class PermissionsGuard implements CanActivate {
	constructor(private accessService: AccessService) {}

	async canActivate(context: ExecutionContext): Promise<boolean> {
		const request = context.switchToHttp().getRequest();
		const role = request.headers['role'];

		// Determine the action based on the HTTP method
		const method = request.method;
		let action: 'create' | 'read' | 'update' | 'delete';

		switch (method) {
			case 'POST':
				action = 'create';
				break;
			case 'GET':
				action = 'read';
				break;
			case 'PUT':
				action = 'update';
				break;
			case 'DELETE':
				action = 'delete';
				break;
			default:
				throw new ForbiddenException('Unsupported HTTP method');
		}

		// Check if the user has the required permission for the action
		if (!this.accessService.hasPermission(role, action)) {
			throw new ForbiddenException(
				'You do not have permission to perform this action',
			);
		}

		return true;
	}
}
