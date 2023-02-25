import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import 'dotenv/config';
import clerk from '@clerk/clerk-sdk-node';
import { User } from '@axia/data';
import UsersRepository from '../../infrastructure/repositories/users.repository';
import GetMeQuery from '../../libs/queries/get-me.query';

@QueryHandler(GetMeQuery)
export default class GetMeHandler implements IQueryHandler<GetMeQuery> {
  constructor(private usersRepository: UsersRepository) {}

  async execute({ dto }: GetMeQuery): Promise<User> {
    const clerkUser = await clerk.users.getUser(dto.user);
    const apiUser = await this.usersRepository.get(clerkUser.id);

    return {
      clerkUser,
      apiUser,
    };
  }
}
