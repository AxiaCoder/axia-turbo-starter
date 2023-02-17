import { CommandBus } from '@nestjs/cqrs';
export default class DeletePageController {
    private readonly commandBus;
    constructor(commandBus: CommandBus);
    execute(id: any): Promise<void>;
}
//# sourceMappingURL=delete.page.controller.d.ts.map