import { BaseContent } from 'src/public/models/basecontent.model';

export interface IBaseContentDatasourceService<T extends BaseContent> {
	getById(id: string): T | null;
	getAll(): T[];
	create(item: Omit<T, 'id' | 'createdAt' | 'updatedAt'>): T;
	update(id: string, updates: Partial<T>): T | null;
	delete(id: string): boolean;
}
