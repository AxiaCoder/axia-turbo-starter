import DeleteInputDto from '../../../../shared/libs/dtos/generics/delete.input.dto';

export default class DeletePageCommand {
  constructor(public readonly dto: DeleteInputDto) {}
}
