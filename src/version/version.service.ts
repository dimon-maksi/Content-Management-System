import { Injectable } from '@nestjs/common';
import { IVersionService } from './version.service.interface';

@Injectable()
export class VersionService implements IVersionService {}
