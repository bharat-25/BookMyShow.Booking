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
let TicketBookingController = class TicketBookingController {
    constructor(bookingService) {
        this.bookingService = bookingService;
    }
    async bookMovieTicket(bookingDto) {
        return this.bookingService.bookMovieTicket(bookingDto);
    }
    async getAllBookings() {
        return this.bookingService.getAllBookings();
    }
    async getBookingById(bookingId) {
        return this.bookingService.getBookingById(bookingId);
    }
    async updateBookingStatus(bookingId, status) {
        return this.bookingService.updateBookingStatus(bookingId, status);
    }
    async deleteBooking(bookingId) {
        return this.bookingService.deleteBooking(bookingId);
    }
};
exports.TicketBookingController = TicketBookingController;
__decorate([
    (0, common_1.Post)('bookTicket'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ticketBooking_dto_1.ticketBookingDto]),
    __metadata("design:returntype", Promise)
], TicketBookingController.prototype, "bookMovieTicket", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TicketBookingController.prototype, "getAllBookings", null);
__decorate([
    (0, common_1.Get)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TicketBookingController.prototype, "getBookingById", null);
__decorate([
    (0, common_1.Patch)(":id/status/:status"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Param)("status")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], TicketBookingController.prototype, "updateBookingStatus", null);
__decorate([
    (0, common_1.Delete)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TicketBookingController.prototype, "deleteBooking", null);
exports.TicketBookingController = TicketBookingController = __decorate([
    (0, common_1.Controller)("ticket-booking"),
    __metadata("design:paramtypes", [ticket_booking_service_1.TicketBookingService])
], TicketBookingController);
//# sourceMappingURL=ticket-booking.controller.js.map