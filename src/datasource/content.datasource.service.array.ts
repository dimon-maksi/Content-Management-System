import { Injectable } from '@nestjs/common';
import { IBaseContentDatasourceService } from './content.datasource.service.interface';
import { Article, Product } from 'src/content/content.model';

@Injectable()
export class ArrayArticleDatasourceService implements IBaseContentDatasourceService<Article> {
  private articles: Article[] = [
    {
        id: '1',
        title: 'NestJS for Beginners',
        body: 'This article introduces NestJS and its concepts.',
        author: 'John Doe',
        createdAt: new Date('2024-01-01'),
        updatedAt: new Date('2024-01-01'),
        status: 'published',
    },
    {
        id: '2',
        title: 'Understanding TypeScript',
        body: 'A deep dive into TypeScript for modern JavaScript development.',
        author: 'Jane Doe',
        createdAt: new Date('2024-02-15'),
        updatedAt: new Date('2024-02-15'),
        status: 'draft',
    },
];

  getById(id: string): Article | null {
    return this.articles.find(article => article.id === id) || null;
  }

  getAll(): Article[] {
    return this.articles;
  }

  create(item: Omit<Article, 'id' | 'createdAt' | 'updatedAt'>): Article {
    const now = Date.now();
    const newArticle: Article = {
      ...item,
      id: now.toString(),
      createdAt: new Date(now),
      updatedAt: new Date(now),
    };
    this.articles.push(newArticle);
    return newArticle;
  }

  update(id: string, updates: Partial<Article>): Article | null {
    const articleIndex = this.articles.findIndex(article => article.id === id);
    if (articleIndex === -1) return null;

    const updatedArticle = {
      ...this.articles[articleIndex],
      ...updates,
      updatedAt: new Date(),
    };
    this.articles[articleIndex] = updatedArticle;
    return updatedArticle;
  }

  delete(id: string): boolean {
    const initialLength = this.articles.length;
    this.articles = this.articles.filter(article => article.id !== id);
    return this.articles.length < initialLength;
  }
}


@Injectable()
export class ArrayProductDatasourceService implements IBaseContentDatasourceService<Product> {
  private products: Product[] = [
    {
        id: '1',
        name: 'Laptop',
        description: 'A high-performance laptop for work and play.',
        price: 999.99,
        stock: 50,
        createdAt: new Date('2024-03-01'),
        updatedAt: new Date('2024-03-01'),
        status: 'published',
    },
    {
        id: '2',
        name: 'Smartphone',
        description: 'A sleek smartphone with the latest features.',
        price: 599.99,
        stock: 100,
        createdAt: new Date('2024-04-10'),
        updatedAt: new Date('2024-04-10'),
        status: 'archived',
    },
];

  getById(id: string): Product | null {
    return this.products.find(product => product.id === id) || null;
  }

  getAll(): Product[] {
    return this.products;
  }

  create(item: Omit<Product, 'id' | 'createdAt' | 'updatedAt'>): Product {
    const now = Date.now();
    const newProduct: Product = {
      ...item,
      id: now.toString(),
      createdAt: new Date(now),
      updatedAt: new Date(now),
    };
    this.products.push(newProduct);
    return newProduct;
  }

  update(id: string, updates: Partial<Product>): Product | null {
    const productIndex = this.products.findIndex(product => product.id === id);
    if (productIndex === -1) return null;

    const updatedProduct = {
      ...this.products[productIndex],
      ...updates,
      updatedAt: new Date(),
    };
    this.products[productIndex] = updatedProduct;
    return updatedProduct;
  }

  delete(id: string): boolean {
    const initialLength = this.products.length;
    this.products = this.products.filter(product => product.id !== id);
    return this.products.length < initialLength;
  }
}