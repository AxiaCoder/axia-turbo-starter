"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const cqrs_1 = require("@nestjs/cqrs");
const jwt_auth_guard_1 = __importDefault(require("../../../../shared/libs/guards/jwt-auth.guard"));
const input_body_page_dto_1 = __importDefault(require("../../../libs/dtos/page/input.body.page.dto"));
const update_command_1 = __importDefault(require("../../../libs/commands/pages/update.command"));
let UpdatePageController = class UpdatePageController {
    constructor(commandBus) {
        this.commandBus = commandBus;
    }
    async execute(id, body) {
        return this.commandBus.execute(new update_command_1.default({
            id,
            item: body,
        }));
    }
};
__decorate([
    (0, common_1.Put)(':id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.UseGuards)(jwt_auth_guard_1.default),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, input_body_page_dto_1.default]),
    __metadata("design:returntype", Promise)
], UpdatePageController.prototype, "execute", null);
UpdatePageController = __decorate([
    (0, common_1.Controller)('pages'),
    __metadata("design:paramtypes", [cqrs_1.CommandBus])
], UpdatePageController);
exports.default = UpdatePageController;
//# sourceMappingURL=update.page.controller.js.map