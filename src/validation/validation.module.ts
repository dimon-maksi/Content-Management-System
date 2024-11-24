import { Module } from '@nestjs/common';
import { ArticleValidator, BaseContentValidator, ProductValidator } from './validation.validator';

@Module({
    providers: [BaseContentValidator, ArticleValidator, ProductValidator],
    exports: [BaseContentValidator, ArticleValidator, ProductValidator]
})
export class ValidationModule {}
