import { Module } from '@nestjs/common';
import { AccessService } from './access.service';
import { RoleService } from './role.service';

@Module({
    providers: [AccessService, RoleService],
    exports: [AccessService],
})
export class AccessModule {}
