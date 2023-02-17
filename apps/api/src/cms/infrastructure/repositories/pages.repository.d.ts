import { CorePersistanceInterface } from '../../../shared/infrastructures/interfaces/core.persistance.interface';
import PageDto from '../../libs/dtos/prisma/page.dto';
import InputBodyPageDto from '../../libs/dtos/page/input.body.page.dto';
import PagesPrismaRepository from '../persistance/prisma/pages.prisma.repository';
export default class PagesRepository implements CorePersistanceInterface<PageDto, InputBodyPageDto> {
    protected pagesPrismaRepository: PagesPrismaRepository;
    constructor(pagesPrismaRepository: PagesPrismaRepository);
    create(item: InputBodyPageDto): Promise<PageDto>;
    delete(id: number): Promise<PageDto>;
    get(id: number): Promise<PageDto>;
    list(): Promise<PageDto[]>;
    update(item: InputBodyPageDto, id: number): Promise<PageDto>;
}
//# sourceMappingURL=pages.repository.d.ts.map