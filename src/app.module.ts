import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContentModule } from './content/content.module';
import { AccessModule } from './access/access.module';
import { ValidationModule } from './validation/validation.module';
import { VersionModule } from './version/version.module';
import { DatasourceModule } from './datasource/datasource.module';
import { AccessService } from './access/access.service';
import { ArticleService, ProductService } from './content/content.service';
import { RoleService } from './access/role.service';
import { RolesGuard } from './access/role.guard';
import { PermissionsGuard } from './access/permissions.guard';

@Module({
    imports: [
        ContentModule,
        AccessModule,
        ValidationModule,
        VersionModule,
        DatasourceModule,
    ],
    controllers: [AppController],
    providers: [AppService, AccessService, ArticleService, ProductService, RoleService, RolesGuard, PermissionsGuard],
})
export class AppModule {}
