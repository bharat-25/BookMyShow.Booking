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
const constant_1 = require("./constant/constant");
const swagger_1 = require("@nestjs/swagger");
const auth_guard_1 = require("./guard/auth.guard");
const auth_controller_1 = require("../auth/auth.controller");
let ShowTimeController = class ShowTimeController {
    constructor(showtimeService, authController) {
        this.showtimeService = showtimeService;
        this.authController = authController;
    }
    async addShowtime(req, showtime, response) {
        try {
            const userEmail = req.user.payload.payloadEmail;
            const Isverify = await this.authController.verifyUser(userEmail);
            console.log(Isverify);
            if (!Isverify) {
                return response.status(common_1.HttpStatus.OK).json({
                    message: constant_1.SHOW_TIME_RESPONSE.NOT_AUTHORIZED,
                });
            }
            const addSlots = await this.showtimeService.addShowtime(showtime);
            console.log(addSlots);
            return response.status(common_1.HttpStatus.OK).json({
                message: constant_1.SHOW_TIME_RESPONSE.ADD_SHOW_TIME,
                addSlots
            });
        }
        catch (error) {
            return response.status(common_1.HttpStatus.INTERNAL_SERVER_ERROR).json({
                message: constant_1.SHOW_TIME_RESPONSE.ERROR_ADD_SHOW_TIME,
                error: error.message,
            });
        }
    }
    async updateShowtime(req, id, response, showtime) {
        try {
            const userEmail = req.user.payload.payloadEmail;
            const Isverify = await this.authController.verifyUser(userEmail);
            if (!Isverify) {
                return response.status(common_1.HttpStatus.OK).json({
                    message: constant_1.SHOW_TIME_RESPONSE.NOT_AUTHORIZED,
                });
            }
            const updateSlots = await this.showtimeService.updateShowtime(id, showtime);
            return response.status(common_1.HttpStatus.OK).json({
                message: constant_1.SHOW_TIME_RESPONSE.UPDATE_SHOW_TIME,
                updateSlots
            });
        }
        catch (error) {
            return response.status(common_1.HttpStatus.INTERNAL_SERVER_ERROR).json({
                message: constant_1.SHOW_TIME_RESPONSE.ERROR_UPDATE_SHOW_TIME,
                error: error.message,
            });
        }
    }
    async deleteShowtime(req, id, response) {
        try {
            const userEmail = req.user.payload.payloadEmail;
            const Isverify = await this.authController.verifyUser(userEmail);
            if (!Isverify) {
                return response.status(common_1.HttpStatus.OK).json({
                    message: constant_1.SHOW_TIME_RESPONSE.NOT_AUTHORIZED,
                });
            }
            const deleteSlot = this.showtimeService.deleteShowtime(id);
            return response.status(common_1.HttpStatus.OK).json({
                message: constant_1.SHOW_TIME_RESPONSE.DELETE_SHOW_TIME,
                deleteSlot
            });
        }
        catch (error) {
            return response.status(common_1.HttpStatus.INTERNAL_SERVER_ERROR).json({
                message: constant_1.SHOW_TIME_RESPONSE.ERROR_DELETE_SHOW_TIME,
                error: error.message,
            });
        }
    }
    async getShowtimes(movieId, theaterId, response) {
        try {
            const getMovie = this.showtimeService.getShowtimes(movieId, theaterId);
            return response.status(common_1.HttpStatus.OK).json({
                message: constant_1.SHOW_TIME_RESPONSE.GET_MOVIE_THEATER,
                getMovie
            });
        }
        catch (error) {
            return response.status(common_1.HttpStatus.INTERNAL_SERVER_ERROR).json({
                message: constant_1.SHOW_TIME_RESPONSE.ERROR_GET_MOVIE_THEATER,
                error: error.message,
            });
        }
    }
};
exports.ShowTimeController = ShowTimeController;
__decorate([
    (0, swagger_1.ApiTags)('Add Movie Slots'),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Post)('addMovieSlot'),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, show_time_schema_1.Showtime, Object]),
    __metadata("design:returntype", Promise)
], ShowTimeController.prototype, "addShowtime", null);
__decorate([
    (0, swagger_1.ApiTags)('Update Movie Slots'),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Res)()),
    __param(3, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, Object, show_time_schema_1.Showtime]),
    __metadata("design:returntype", Promise)
], ShowTimeController.prototype, "updateShowtime", null);
__decorate([
    (0, swagger_1.ApiTags)('Delete Movie Slots'),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, Object]),
    __metadata("design:returntype", Promise)
], ShowTimeController.prototype, "deleteShowtime", null);
__decorate([
    (0, swagger_1.ApiTags)('Get Movies & Theaters'),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Get)(':movieId/:theaterId'),
    __param(0, (0, common_1.Param)('movieId')),
    __param(1, (0, common_1.Param)('theaterId')),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", Promise)
], ShowTimeController.prototype, "getShowtimes", null);
exports.ShowTimeController = ShowTimeController = __decorate([
    (0, common_1.Controller)('show-time'),
    __metadata("design:paramtypes", [show_time_service_1.ShowTimeService,
        auth_controller_1.AuthController])
], ShowTimeController);
//# sourceMappingURL=show-time.controller.js.map