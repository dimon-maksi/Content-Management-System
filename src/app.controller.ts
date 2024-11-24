import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { RolesGuard } from './access/role.guard';
import { ArticleService, ProductService } from './content/content.service';
import { AccessService } from './access/access.service';
import { PermissionsGuard } from './access/permissions.guard';
import { Article, Product } from './content/content.model';
import { Roles } from './public/models/user.model';

@Controller('content')
@UseGuards(RolesGuard) // Use RolesGuard for all content-related actions
export class AppController {
  constructor(
    private readonly articleService: ArticleService,
    private readonly productService: ProductService,
    private readonly accessService: AccessService,
  ) {}

  // Article Endpoints
  @Get('articles')
  @Roles('admin', 'editor', 'viewer') // Allow admins, editors, and viewers
  @UseGuards(PermissionsGuard) // Ensure permission for "read"
  getArticles() {
    return this.articleService.getAll();
  }

  @Post('articles')
  @Roles('admin', 'editor') // Only admins and editors can create
  @UseGuards(PermissionsGuard) // Ensure permission for "create"
  createArticle(@Body() articleData: Omit<Article, 'id' | 'createdAt' | 'updatedAt'>) {
    return this.articleService.create(articleData);
  }

  @Put('articles/:id')
  @Roles('admin', 'editor') // Only admins and editors can update
  @UseGuards(PermissionsGuard) // Ensure permission for "update"
  updateArticle(@Param('id') id: string, @Body() updates: Partial<Article>) {
    return this.articleService.update(id, updates);
  }

  @Delete('articles/:id')
  @Roles('admin') // Only admins can delete
  @UseGuards(PermissionsGuard) // Ensure permission for "delete"
  deleteArticle(@Param('id') id: string) {
    return this.articleService.delete(id);
  }

  // Product Endpoints
  @Get('products')
  @Roles('admin', 'editor', 'viewer') // Allow admins, editors, and viewers
  @UseGuards(PermissionsGuard) // Ensure permission for "read"
  getProducts() {
    return this.productService.getAll();
  }

  @Post('products')
  @Roles('admin', 'editor') // Only admins and editors can create
  @UseGuards(PermissionsGuard) // Ensure permission for "create"
  createProduct(@Body() productData: Omit<Product, 'id' | 'createdAt' | 'updatedAt'>) {
    return this.productService.create(productData);
  }

  @Put('products/:id')
  @Roles('admin', 'editor') // Only admins and editors can update
  @UseGuards(PermissionsGuard) // Ensure permission for "update"
  updateProduct(@Param('id') id: string, @Body() updates: Partial<Product>) {
    return this.productService.update(id, updates);
  }

  @Delete('products/:id')
  @Roles('admin') // Only admins can delete
  @UseGuards(PermissionsGuard) // Ensure permission for "delete"
  deleteProduct(@Param('id') id: string) {
    return this.productService.delete(id);
  }

  // Admin endpoint to change user permissions
  @Post('permissions/:userId')
  @Roles('admin') // Only admins can update permissions
  @UseGuards(PermissionsGuard) // Ensure permission for "update"
  setUserPermissions(
    @Param('userId') userId: string,
    @Body() permissions: { create: boolean; read: boolean; update: boolean; delete: boolean },
  ) {
    this.accessService.setPermissions(userId, permissions);
    return { message: 'Permissions updated successfully' };
  }
}