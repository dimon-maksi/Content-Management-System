import { SetMetadata } from "@nestjs/common";

export type User = {
    id: string;
    role: string;
    name: string;
};

export const ROLES_KEY = 'roles';
export const Roles = (...roles: string[]) => SetMetadata(ROLES_KEY, roles);