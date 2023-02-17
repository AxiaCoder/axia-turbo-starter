import { CommandBus } from '@nestjs/cqrs';
import InputBodyPageDto from '../../../libs/dtos/page/input.body.page.dto';
import PageDto from '../../../libs/dtos/prisma/page.dto';
export default class UpdatePageController {
    private readonly commandBus;
    constructor(commandBus: CommandBus);
    execute(id: any, body: InputBodyPageDto): Promise<PageDto>;
}
//# sourceMappingURL=update.page.controller.d.ts.map