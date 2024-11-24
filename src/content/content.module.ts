import { Module } from '@nestjs/common';
import { ArticleService, ProductService } from './content.service';

@Module({
	providers: [ArticleService, ProductService],
	exports: [ArticleService, ProductService],
})
export class ContentModule {}
