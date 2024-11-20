import { Injectable } from '@nestjs/common';
import { IValidationService } from './validation.service.interface';

@Injectable()
export class ValidationService implements IValidationService {}
