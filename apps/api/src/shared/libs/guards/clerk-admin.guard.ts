import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';
import UsersRepository from '../../../users/infrastructure/repositories/users.repository';

@Injectable()
export class ClerkAdminGuard implements CanActivate {
  constructor(protected usersRepository: UsersRepository) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    const user = request.headers.clerk_user;

    return this.usersRepository
      .hasRole(user, 'admin')
      .then((hasRole) => hasRole);
  }
}
