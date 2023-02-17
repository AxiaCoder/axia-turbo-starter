import { QueryBus } from '@nestjs/cqrs';
import PageDto from '../../../libs/dtos/prisma/page.dto';
export default class GetSinglePageController {
    private readonly queryBus;
    constructor(queryBus: QueryBus);
    execute(id: any): Promise<PageDto>;
}
//# sourceMappingURL=get-single.page.controller.d.ts.map