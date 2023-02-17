import { HttpException, HttpStatus } from '@nestjs/common';
import { I18nContext } from 'nestjs-i18n';

export class BaseException extends HttpException {
  constructor(translationKey: string, status: HttpStatus) {
    const message = I18nContext.current().translate(translationKey);
    super(message, status);
  }
}
