"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TicketBookingModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const booking_schema_1 = require("./schema/booking.schema");
const ticket_booking_controller_1 = require("./ticket-booking.controller");
const ticket_booking_service_1 = require("./ticket-booking.service");
const jwt_1 = require("@nestjs/jwt");
const constant_1 = require("./constants/constant");
let TicketBookingModule = class TicketBookingModule {
};
exports.TicketBookingModule = TicketBookingModule;
exports.TicketBookingModule = TicketBookingModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: booking_schema_1.ticketBooking.name, schema: booking_schema_1.ticketBookingSchema }]),
            jwt_1.JwtModule.register({
                global: true,
                secret: constant_1.jwtConstants.SECRET,
                signOptions: { expiresIn: '60s' },
            }),
        ],
        controllers: [ticket_booking_controller_1.TicketBookingController],
        providers: [ticket_booking_service_1.TicketBookingService],
        exports: [ticket_booking_service_1.TicketBookingService]
    })
], TicketBookingModule);
//# sourceMappingURL=ticket-booking.module.js.map