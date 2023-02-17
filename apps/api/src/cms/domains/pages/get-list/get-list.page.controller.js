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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const cqrs_1 = require("@nestjs/cqrs");
const jwt_auth_guard_1 = __importDefault(require("../../../../shared/libs/guards/jwt-auth.guard"));
const get_list_query_1 = __importDefault(require("../../../libs/queries/pages/get-list.query"));
let GetListPageController = class GetListPageController {
    constructor(queryBus) {
        this.queryBus = queryBus;
    }
    async execute() {
        return this.queryBus.execute(new get_list_query_1.default());
    }
};
__decorate([
    (0, common_1.Get)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.UseGuards)(jwt_auth_guard_1.default),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], GetListPageController.prototype, "execute", null);
GetListPageController = __decorate([
    (0, common_1.Controller)('pages'),
    __metadata("design:paramtypes", [cqrs_1.QueryBus])
], GetListPageController);
exports.default = GetListPageController;
//# sourceMappingURL=get-list.page.controller.js.map