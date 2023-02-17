import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import GetMeQuery from '../../libs/queries/get-me.query';
import 'dotenv/config';
import clerk from '@clerk/clerk-sdk-node';

@QueryHandler(GetMeQuery)
export default class GetMeHandler implements IQueryHandler<GetMeQuery> {
  async execute({ dto }: GetMeQuery): Promise<any> {
    return clerk.users.getUser(dto.user);
  }
}
