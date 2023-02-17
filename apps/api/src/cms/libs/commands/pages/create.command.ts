import CreatePageInputDto from '../../dtos/page/create/input.dto';

export default class CreatePageCommand {
  constructor(public readonly dto: CreatePageInputDto) {}
}
