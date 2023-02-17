import { QueryBus } from '@nestjs/cqrs';
import PageDto from '../../../libs/dtos/prisma/page.dto';
export default class GetListPageController {
    private readonly queryBus;
    constructor(queryBus: QueryBus);
    execute(): Promise<PageDto[]>;
}
//# sourceMappingURL=get-list.page.controller.d.ts.map