import { Injectable, PipeTransform, BadRequestException } from '@nestjs/common';
import { Article, Product } from 'src/content/content.model';
import { BaseContent } from 'src/public/models/basecontent.model';

@Injectable()
export class BaseContentValidator implements PipeTransform<BaseContent, BaseContent> {
  transform(value: BaseContent): BaseContent {
    if (!value.id || typeof value.id !== 'string') {
      throw new BadRequestException('Invalid or missing id.');
    }
    if (!value.createdAt || !(value.createdAt instanceof Date)) {
      throw new BadRequestException('Invalid or missing createdAt date.');
    }
    if (!value.updatedAt || !(value.updatedAt instanceof Date)) {
      throw new BadRequestException('Invalid or missing updatedAt date.');
    }
    if (!['draft', 'published', 'archived'].includes(value.status)) {
      throw new BadRequestException('Invalid status.');
    }
    return value;
  }
}

@Injectable()
export class ArticleValidator implements PipeTransform<Article, Article> {
  transform(value: Article): Article {
    if (!value.title || typeof value.title !== 'string') {
      throw new BadRequestException('Invalid or missing title.');
    }
    if (!value.body || typeof value.body !== 'string') {
      throw new BadRequestException('Invalid or missing body.');
    }
    if (!value.author || typeof value.author !== 'string') {
      throw new BadRequestException('Invalid or missing authorId.');
    }
    return value;
  }
}

@Injectable()
export class ProductValidator implements PipeTransform<Product, Product> {
  transform(value: Product): Product {
    if (!value.name || typeof value.name !== 'string') {
      throw new BadRequestException('Invalid or missing name.');
    }
    if (!value.description || typeof value.description !== 'string') {
      throw new BadRequestException('Invalid or missing description.');
    }
    if (!value.price || typeof value.price !== 'number' || value.price <= 0) {
      throw new BadRequestException('Invalid or missing price.');
    }
    if (!value.stock || typeof value.stock !== 'number' || value.stock < 0) {
      throw new BadRequestException('Invalid or missing stock.');
    }
    return value;
  }
}