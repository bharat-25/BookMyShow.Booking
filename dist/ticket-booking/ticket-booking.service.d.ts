import { Model } from 'mongoose';
import { ticketBooking } from './schema/booking.schema';
export declare class TicketBookingService {
    private readonly ticketbookingModel;
    constructor(ticketbookingModel: Model<ticketBooking>);
    bookMovieTicket(userId: string, movieId: string, theaterId: string, movieSlot: string, date: string, totalSeatBooked: number): Promise<ticketBooking>;
    getAllBookings(): Promise<ticketBooking[]>;
    getBookingById(bookingId: string): Promise<ticketBooking>;
    updateBookingStatus(bookingId: string, status: string): Promise<ticketBooking>;
    deleteBooking(bookingId: string): Promise<ticketBooking>;
}
