import { Module } from '@nestjs/common';
import { ArrayDatasourceService } from './datasource.service.array';

@Module({
    providers: [ArrayDatasourceService],
    exports: [ArrayDatasourceService],
})
export class DatasourceModule {}
