import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';
import 'dotenv/config';
import clerk from '@clerk/clerk-sdk-node';

@Injectable()
export class ClerkAuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();

    const clerkToken = request.headers.clerk_key;
    const user = request.headers.clerk_user;

    return clerk.clients
      .verifyClient(clerkToken)
      .then((client) => {
        const currentUserSession = client.sessions.find(
          (session) => session.id === client.lastActiveSessionId,
        );

        if (currentUserSession.userId === user) {
          return true;
        }

        return false;
      })
      .catch((error) => {
        console.log('error sur le middleware');
        return false;
      });
  }
}
