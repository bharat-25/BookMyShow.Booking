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
exports.TicketBookingController = void 0;
const common_1 = require("@nestjs/common");
const ticket_booking_service_1 = require("./ticket-booking.service");
const ticketBooking_dto_1 = require("./dto/ticketBooking.dto");
const auth_guard_1 = require("./guard/auth.guard");
const constant_1 = require("./constants/constant");
const swagger_1 = require("@nestjs/swagger");
const auth_controller_1 = require("../auth/auth.controller");
let TicketBookingController = class TicketBookingController {
    constructor(bookingService, authController) {
        this.bookingService = bookingService;
        this.authController = authController;
    }
    async bookMovieTicket(req, bookingDto, response) {
        try {
            const { movieId, theaterId, movieSlot, date, totalSeatBooked } = bookingDto;
            console.log(bookingDto);
            const userId = req.user.payload.payloadId;
            console.log(userId);
            const userEmail = req.user.payload.payloadEmail;
            const Isverify = await this.authController.verifyUser(userEmail);
            if (!Isverify) {
                return response.status(common_1.HttpStatus.OK).json({
                    message: constant_1.BOOKING_RESPONSE.NOT_AUTHORIZED,
                });
            }
            const movieData = await this.bookingService.bookMovieTicket(userId, movieId, theaterId, movieSlot, date, totalSeatBooked);
            console.log("=====>", movieData);
            return response.status(common_1.HttpStatus.OK).json({
                message: constant_1.BOOKING_RESPONSE.BOOKING,
                movieData,
            });
        }
        catch (error) {
            return response.status(common_1.HttpStatus.INTERNAL_SERVER_ERROR).json({
                message: constant_1.BOOKING_RESPONSE.ERROR_BOOKING,
                error: error.message,
            });
        }
    }
    async getAllBookings(response) {
        try {
            const allBooking = await this.bookingService.getAllBookings();
            return response.status(common_1.HttpStatus.OK).json({
                message: constant_1.BOOKING_RESPONSE.GET_ALL_BOOKING,
                allBooking,
            });
        }
        catch (error) {
            return response.status(common_1.HttpStatus.INTERNAL_SERVER_ERROR).json({
                message: constant_1.BOOKING_RESPONSE.ERROR_GET_ALL_BOOKING,
                error: error.message,
            });
        }
    }
    async getBookingById(req, bookingId, response) {
        try {
            const userEmail = req.user.payload.payloadEmail;
            const Isverify = await this.authController.verifyUser(userEmail);
            if (!Isverify) {
                return response.status(common_1.HttpStatus.OK).json({
                    message: constant_1.BOOKING_RESPONSE.NOT_AUTHORIZED,
                });
            }
            const getBooking = await this.bookingService.getBookingById(bookingId);
            console.log(getBooking);
            return response.status(common_1.HttpStatus.OK).json({
                message: constant_1.BOOKING_RESPONSE.GET_BOOKING_BY_ID,
                getBooking,
            });
        }
        catch (error) {
            return response.status(common_1.HttpStatus.INTERNAL_SERVER_ERROR).json({
                message: constant_1.BOOKING_RESPONSE.ERROR_BOOKING_BY_ID,
                error: error.message,
            });
        }
    }
    async updateBookingStatus(req, bookingId, status, response) {
        try {
            const userEmail = req.user.payload.payloadEmail;
            const Isverify = await this.authController.verifyUser(userEmail);
            if (!Isverify) {
                return response.status(common_1.HttpStatus.OK).json({
                    message: constant_1.BOOKING_RESPONSE.NOT_AUTHORIZED,
                });
            }
            const updateBooking = this.bookingService.updateBookingStatus(bookingId, status);
            return response.status(common_1.HttpStatus.OK).json({
                message: constant_1.BOOKING_RESPONSE.UPDATE_BOOKING,
                updateBooking,
            });
        }
        catch (error) {
            return response.status(common_1.HttpStatus.INTERNAL_SERVER_ERROR).json({
                message: constant_1.BOOKING_RESPONSE.ERROR_UPDATE_BOOKING,
                error: error.message,
            });
        }
    }
    async deleteBooking(req, bookingId, response) {
        try {
            const userEmail = req.user.payload.payloadEmail;
            const Isverify = await this.authController.verifyUser(userEmail);
            if (!Isverify) {
                return response.status(common_1.HttpStatus.OK).json({
                    message: constant_1.BOOKING_RESPONSE.NOT_AUTHORIZED,
                });
            }
            const deleteBooking = this.bookingService.deleteBooking(bookingId);
            return response.status(common_1.HttpStatus.OK).json({
                message: constant_1.BOOKING_RESPONSE.DELETE_BOOKING,
                deleteBooking,
            });
        }
        catch (error) {
            return response.status(common_1.HttpStatus.INTERNAL_SERVER_ERROR).json({
                message: constant_1.BOOKING_RESPONSE.ERROR_DELETE_BOOKING,
                error: error.message,
            });
        }
    }
};
exports.TicketBookingController = TicketBookingController;
__decorate([
    (0, swagger_1.ApiTags)('Book Movie Ticket'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Post)("bookTicket"),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, ticketBooking_dto_1.ticketBookingDto, Object]),
    __metadata("design:returntype", Promise)
], TicketBookingController.prototype, "bookMovieTicket", null);
__decorate([
    (0, swagger_1.ApiTags)('Get all Booking'),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TicketBookingController.prototype, "getAllBookings", null);
__decorate([
    (0, swagger_1.ApiTags)('Get Booking by ID'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Get)(":id"),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Param)("id")),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, Object]),
    __metadata("design:returntype", Promise)
], TicketBookingController.prototype, "getBookingById", null);
__decorate([
    (0, swagger_1.ApiTags)('Update Booking'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Patch)(":id/status/:status"),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Param)("id")),
    __param(2, (0, common_1.Param)("status")),
    __param(3, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String, Object]),
    __metadata("design:returntype", Promise)
], TicketBookingController.prototype, "updateBookingStatus", null);
__decorate([
    (0, swagger_1.ApiTags)('Delete Booking'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Delete)(":id"),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Param)("id")),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, Object]),
    __metadata("design:returntype", Promise)
], TicketBookingController.prototype, "deleteBooking", null);
exports.TicketBookingController = TicketBookingController = __decorate([
    (0, common_1.Controller)("ticket-booking"),
    __metadata("design:paramtypes", [ticket_booking_service_1.TicketBookingService,
        auth_controller_1.AuthController])
], TicketBookingController);
//# sourceMappingURL=ticket-booking.controller.js.map