import { Injectable } from '@nestjs/common';
import { IContentService } from './content.service.interface';
import { Article, Product } from './content.model';
import {
	ArrayArticleDatasourceService,
	ArrayProductDatasourceService,
} from 'src/datasource/content.datasource.service.array';

@Injectable()
export class ArticleService implements IContentService<Article> {
	private dataSource = new ArrayArticleDatasourceService();

	getById(id: string): Article {
		return this.dataSource.getById(id);
	}
	getAll(): Article[] {
		return this.dataSource.getAll();
	}
	create(item: Omit<Article, 'id' | 'createdAt' | 'updatedAt'>): Article {
		return this.dataSource.create(item);
	}
	update(id: string, updates: Partial<Article>): Article {
		return this.dataSource.update(id, updates);
	}
	delete(id: string): boolean {
		return this.dataSource.delete(id);
	}
}

@Injectable()
export class ProductService implements IContentService<Product> {
	private dataSource = new ArrayProductDatasourceService();

	getById(id: string): Product {
		return this.dataSource.getById(id);
	}
	getAll(): Product[] {
		return this.dataSource.getAll();
	}
	create(item: Omit<Product, 'id' | 'createdAt' | 'updatedAt'>): Product {
		return this.dataSource.create(item);
	}
	update(id: string, updates: Partial<Product>): Product {
		return this.dataSource.update(id, updates);
	}
	delete(id: string): boolean {
		return this.dataSource.delete(id);
	}
}
