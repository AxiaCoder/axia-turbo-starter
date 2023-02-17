import { CorePersistanceInterface } from '../../../../shared/infrastructures/interfaces/core.persistance.interface';
import PageDto from '../../../libs/dtos/prisma/page.dto';
import InputBodyPageDto from '../../../libs/dtos/page/input.body.page.dto';
import PrismaService from '../../../../prisma.service';
export default class PagesPrismaRepository implements CorePersistanceInterface<PageDto, InputBodyPageDto> {
    protected prisma: PrismaService;
    constructor(prisma: PrismaService);
    create(item: InputBodyPageDto): Promise<PageDto>;
    delete(id: number): Promise<PageDto>;
    get(id: number): Promise<PageDto>;
    list(): Promise<PageDto[]>;
    update(item: InputBodyPageDto, id: number): Promise<PageDto>;
}
//# sourceMappingURL=pages.prisma.repository.d.ts.map