import { PageForm } from '@axia/data';

export default class CreatePageCommand {
  constructor(public readonly dto: PageForm) {}
}
