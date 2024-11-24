import { BaseContent } from 'src/public/models/basecontent.model';

export type Versioned<T extends BaseContent> = T & {
	version: number;
};
