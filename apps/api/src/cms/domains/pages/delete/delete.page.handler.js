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
const delete_command_1 = __importDefault(require("../../../libs/commands/pages/delete.command"));
const pages_repository_1 = __importDefault(require("../../../infrastructure/repositories/pages.repository"));
let DeletePageHandler = class DeletePageHandler {
    constructor(pagesRepository) {
        this.pagesRepository = pagesRepository;
    }
    async execute({ dto }) {
        await this.pagesRepository.delete(dto.id);
    }
};
DeletePageHandler = __decorate([
    (0, cqrs_1.CommandHandler)(delete_command_1.default),
    __metadata("design:paramtypes", [pages_repository_1.default])
], DeletePageHandler);
exports.default = DeletePageHandler;
//# sourceMappingURL=delete.page.handler.js.map