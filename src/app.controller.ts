import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	Post,
	Put,
	UseGuards,
	UsePipes,
} from '@nestjs/common';
import { RolesGuard } from './access/role.guard';
import { ArticleService, ProductService } from './content/content.service';
import { AccessService } from './access/access.service';
import { PermissionsGuard } from './access/permissions.guard';
import { Article, Product } from './content/content.model';
import { Roles } from './public/models/user.model';
import {
	ArticleValidator,
	BaseContentValidator,
	ProductValidator,
} from './validation/validation.validator';

@Controller('content')
@UseGuards(RolesGuard)
export class AppController {
	constructor(
		private readonly articleService: ArticleService,
		private readonly productService: ProductService,
		private readonly accessService: AccessService,
	) {}

	@Get('articles')
	@Roles('admin', 'editor', 'viewer')
	@UseGuards(PermissionsGuard)
	getArticles() {
		return this.articleService.getAll();
	}

	@Post('articles')
	@Roles('admin', 'editor')
	@UseGuards(PermissionsGuard)
	@UsePipes(BaseContentValidator, ArticleValidator)
	createArticle(
		@Body() articleData: Omit<Article, 'id' | 'createdAt' | 'updatedAt'>,
	) {
		return this.articleService.create(articleData);
	}

	@Put('articles/:id')
	@Roles('admin', 'editor')
	@UseGuards(PermissionsGuard)
	@UsePipes(BaseContentValidator, ArticleValidator)
	updateArticle(@Param('id') id: string, @Body() updates: Partial<Article>) {
		return this.articleService.update(id, updates);
	}

	@Delete('articles/:id')
	@Roles('admin')
	@UseGuards(PermissionsGuard)
	deleteArticle(@Param('id') id: string) {
		return this.articleService.delete(id);
	}

	@Get('products')
	@Roles('admin', 'editor', 'viewer')
	@UseGuards(PermissionsGuard)
	getProducts() {
		return this.productService.getAll();
	}

	@Post('products')
	@Roles('admin', 'editor')
	@UseGuards(PermissionsGuard)
	@UsePipes(BaseContentValidator, ProductValidator)
	createProduct(
		@Body() productData: Omit<Product, 'id' | 'createdAt' | 'updatedAt'>,
	) {
		return this.productService.create(productData);
	}

	@Put('products/:id')
	@Roles('admin', 'editor')
	@UseGuards(PermissionsGuard)
	@UsePipes(BaseContentValidator, ProductValidator)
	updateProduct(@Param('id') id: string, @Body() updates: Partial<Product>) {
		return this.productService.update(id, updates);
	}

	@Delete('products/:id')
	@Roles('admin')
	@UseGuards(PermissionsGuard)
	deleteProduct(@Param('id') id: string) {
		return this.productService.delete(id);
	}

	@Post('permissions/:userId')
	@Roles('admin')
	@UseGuards(PermissionsGuard)
	setUserPermissions(
		@Param('userId') userId: string,
		@Body()
		permissions: {
			create: boolean;
			read: boolean;
			update: boolean;
			delete: boolean;
		},
	) {
		this.accessService.setPermissions(userId, permissions);
		return { message: 'Permissions updated successfully' };
	}
}
