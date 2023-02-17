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
const prisma_service_1 = __importDefault(require("../../../../prisma.service"));
let PagesPrismaRepository = class PagesPrismaRepository {
    constructor(prisma) {
        this.prisma = prisma;
    }
    create(item) {
        const obDate = {
            created_at: new Date(),
            updated_at: new Date(),
        };
        return this.prisma.pages.create({
            data: Object.assign(Object.assign({}, item), obDate),
        });
    }
    delete(id) {
        return this.prisma.pages.delete({
            where: {
                id,
            },
        });
    }
    get(id) {
        return this.prisma.pages.findUnique({
            where: {
                id,
            },
        });
    }
    list() {
        return this.prisma.pages.findMany();
    }
    update(item, id) {
        const obDate = {
            updated_at: new Date(),
        };
        return this.prisma.pages.update({
            where: {
                id,
            },
            data: Object.assign(Object.assign({}, item), obDate),
        });
    }
};
PagesPrismaRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.default])
], PagesPrismaRepository);
exports.default = PagesPrismaRepository;
//# sourceMappingURL=pages.prisma.repository.js.map