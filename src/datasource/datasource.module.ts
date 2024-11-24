import { Module } from '@nestjs/common';
import { ArrayUserDatasourceService } from './user.datasource.service.array';
import {
	ArrayArticleDatasourceService,
	ArrayProductDatasourceService,
} from './content.datasource.service.array';

@Module({
	providers: [
		ArrayUserDatasourceService,
		ArrayArticleDatasourceService,
		ArrayProductDatasourceService,
	],
	exports: [
		ArrayUserDatasourceService,
		ArrayArticleDatasourceService,
		ArrayProductDatasourceService,
	],
})
export class DatasourceModule {}
