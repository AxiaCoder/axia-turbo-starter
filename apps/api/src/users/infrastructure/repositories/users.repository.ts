import { Injectable } from '@nestjs/common';
import { ApiUser } from '@axia/data';
import UsersPrismaRepository from '../persistance/prisma/users.prisma.repository';

@Injectable()
export default class UsersRepository {
  constructor(protected usersPrismaRepository: UsersPrismaRepository) {}

  public get(clerkId: string): Promise<ApiUser> {
    return this.usersPrismaRepository.get(clerkId).then((user) => {
      if (!user) {
        return this.usersPrismaRepository.create(clerkId);
      }

      return user;
    });
  }

  public async hasRole(userId: string, role: string): Promise<boolean> {
    const user = await this.get(userId);

    return user.role === role;
  }
}
