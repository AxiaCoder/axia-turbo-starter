import { HttpStatus } from '@nestjs/common';
import { BaseException } from './base.exception';

export class NotFoundException extends BaseException {
  constructor() {
    super('errors.http.404.description', HttpStatus.NOT_FOUND);
  }
}
