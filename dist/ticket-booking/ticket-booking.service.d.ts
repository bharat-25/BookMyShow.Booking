/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { Showtime } from './../show-time/schema/show-time.schema';
import { Model, Types } from 'mongoose';
import { ticketBooking } from './schema/booking.schema';
export declare class TicketBookingService {
    private readonly ticketbookingModel;
    private showtimeModel;
    constructor(ticketbookingModel: Model<ticketBooking>, showtimeModel: Model<Showtime>);
    bookMovieTicket(userId: string, movieId: any, theaterId: any, movieSlot: string, date: string, totalSeatBooked: number): Promise<ticketBooking>;
    getAllBookings(): Promise<(import("mongoose").Document<unknown, {}, ticketBooking> & ticketBooking & {
        _id: Types.ObjectId;
    })[]>;
    getBookingById(bookingId: string): Promise<import("mongoose").Document<unknown, {}, ticketBooking> & ticketBooking & {
        _id: Types.ObjectId;
    }>;
    updateBookingStatus(bookingId: string, status: string): Promise<ticketBooking>;
    deleteBooking(bookingId: string): Promise<import("mongoose").Document<unknown, {}, ticketBooking> & ticketBooking & {
        _id: Types.ObjectId;
    }>;
}
