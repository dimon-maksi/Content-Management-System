# Role-Based Access Management API
This project is a NestJS-based API for managing role-based access control (RBAC). It includes features for managing content (articles and products) with fine-grained permissions and role-specific actions.

## Features
### Role-Based Access Control:
Predefined roles: admin, editor, viewer
Role permissions for create, read, update, delete actions
### Content Management:
CRUD operations for articles and products
### Custom Guards:
RolesGuard to enforce role-based access
PermissionsGuard for action-specific permission checks
