import { Injectable } from '@nestjs/common';
import { IValidationService } from 'src/validation/validation.service.interface';

@Injectable()
export class VersionService implements IValidationService {}
