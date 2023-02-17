import { pages } from '@prisma/client';
export default class PageDto implements pages {
    id: number;
    title: string;
    content: string;
    created_at: Date;
    updated_at: Date;
}
//# sourceMappingURL=page.dto.d.ts.map