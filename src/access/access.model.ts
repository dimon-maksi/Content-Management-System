export type Permission = {
    create: boolean;
    read: boolean;
    update: boolean;
    delete: boolean;
};

export type Role = 'admin' | 'editor' | 'viewer';
