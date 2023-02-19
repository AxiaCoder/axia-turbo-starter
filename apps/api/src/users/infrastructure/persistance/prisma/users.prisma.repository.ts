import { Injectable } from '@nestjs/common';
import PrismaService from '../../../../prisma.service';
import { ApiUser } from '@axia/data';

@Injectable()
export default class UsersPrismaRepository {
  constructor(protected prisma: PrismaService) {}

  get(clerkId: string): Promise<ApiUser> {
    return this.prisma.users.findFirst({
      where: {
        clerk_id: clerkId,
      },
    });
  }

  async create(clerkId: string): Promise<ApiUser> {
    return this.prisma.users.create({
      data: {
        clerk_id: clerkId,
      },
    });
  }
}
