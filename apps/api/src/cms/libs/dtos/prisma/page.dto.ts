import { pages } from '@axia/db';

export default class PageDto implements pages {
  id: number;
  created_at: Date;
  title: string;
  content: string;
  slug: string;
}
