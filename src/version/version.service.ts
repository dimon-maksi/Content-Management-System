import { Injectable } from '@nestjs/common';
import { BaseContent } from 'src/public/models/basecontent.model';
import { Versioned } from './version.model';

@Injectable()
export class VersionService {
    private versions: Versioned<BaseContent>[] = [];

    createVersionedContent<T extends BaseContent>(content: T): Versioned<T> {
        return { ...content, version: 1 };
    }
}
