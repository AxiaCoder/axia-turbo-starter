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
const cqrs_1 = require("@nestjs/cqrs");
const pages_repository_1 = __importDefault(require("../../../infrastructure/repositories/pages.repository"));
const get_list_query_1 = __importDefault(require("../../../libs/queries/pages/get-list.query"));
let GetListPageHandler = class GetListPageHandler {
    constructor(pagesRepository) {
        this.pagesRepository = pagesRepository;
    }
    async execute() {
        return this.pagesRepository.list();
    }
};
GetListPageHandler = __decorate([
    (0, cqrs_1.QueryHandler)(get_list_query_1.default),
    __metadata("design:paramtypes", [pages_repository_1.default])
], GetListPageHandler);
exports.default = GetListPageHandler;
//# sourceMappingURL=get-list.page.handler.js.map