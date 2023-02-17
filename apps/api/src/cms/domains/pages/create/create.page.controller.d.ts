import { CommandBus } from '@nestjs/cqrs';
import CreatePageInputDto from '../../../libs/dtos/page/create/input.dto';
import PageDto from '../../../libs/dtos/prisma/page.dto';
export default class CreatePageController {
    private readonly commandBus;
    constructor(commandBus: CommandBus);
    execute(body: CreatePageInputDto): Promise<PageDto>;
}
//# sourceMappingURL=create.page.controller.d.ts.map