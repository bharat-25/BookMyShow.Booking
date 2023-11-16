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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShowTimeController = void 0;
const common_1 = require("@nestjs/common");
const show_time_service_1 = require("./show-time.service");
const show_time_schema_1 = require("./schema/show-time.schema");
let ShowTimeController = class ShowTimeController {
    constructor(showtimeService) {
        this.showtimeService = showtimeService;
    }
    async addShowtime(showtime) {
        return this.showtimeService.addShowtime(showtime);
    }
    async updateShowtime(id, showtime) {
        return this.showtimeService.updateShowtime(id, showtime);
    }
    async deleteShowtime(id) {
        return this.showtimeService.deleteShowtime(id);
    }
    async getShowtimes(movieId, theaterId) {
        return this.showtimeService.getShowtimes(movieId, theaterId);
    }
};
exports.ShowTimeController = ShowTimeController;
__decorate([
    (0, common_1.Post)('addMovieSlot'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [show_time_schema_1.Showtime]),
    __metadata("design:returntype", Promise)
], ShowTimeController.prototype, "addShowtime", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, show_time_schema_1.Showtime]),
    __metadata("design:returntype", Promise)
], ShowTimeController.prototype, "updateShowtime", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ShowTimeController.prototype, "deleteShowtime", null);
__decorate([
    (0, common_1.Get)(':movieId/:theaterId'),
    __param(0, (0, common_1.Param)('movieId')),
    __param(1, (0, common_1.Param)('theaterId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], ShowTimeController.prototype, "getShowtimes", null);
exports.ShowTimeController = ShowTimeController = __decorate([
    (0, common_1.Controller)('show-time'),
    __metadata("design:paramtypes", [show_time_service_1.ShowTimeService])
], ShowTimeController);
//# sourceMappingURL=show-time.controller.js.map