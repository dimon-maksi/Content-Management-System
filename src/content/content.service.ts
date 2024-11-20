import { Injectable } from '@nestjs/common';
import { IContentService } from './content.service.interface';

@Injectable()
export class ArticleService implements IContentService {}

@Injectable()
export class ProductService implements IContentService {}
