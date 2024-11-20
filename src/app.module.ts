import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContentModule } from './content/content.module';
import { AccessModule } from './access/access.module';
import { ValidationModule } from './validation/validation.module';
import { VersionModule } from './version/version.module';
import { DatasourceModule } from './datasource/datasource.module';

@Module({
    imports: [
        ContentModule,
        AccessModule,
        ValidationModule,
        VersionModule,
        DatasourceModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
