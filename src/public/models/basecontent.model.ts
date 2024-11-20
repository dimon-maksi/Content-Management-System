export interface BaseContent {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    publichedAt?: Date;
    status: 'draft' | 'published' | 'archived';
}
