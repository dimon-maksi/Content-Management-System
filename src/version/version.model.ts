import { BaseContent } from 'src/public/models/basecontent.model';

type Versioned<T extends BaseContent> = T & {
	version: number;
};
