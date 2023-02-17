import UpdatePageInputDto from '../../dtos/page/update/input.dto';

export default class UpdatePageCommand {
  constructor(public readonly dto: UpdatePageInputDto) {}
}
