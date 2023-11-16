import { Model } from 'mongoose';
import { ticketBooking } from './schema/booking.schema';
import { ticketBookingDto } from './dto/ticketBooking.dto';
import { Showtime } from "../../../BookMyShow.Movie/src/show-time/schema/showtime.schema";
export declare class TicketBookingService {
    private readonly ticketbookingModel;
    private showtimeModel;
    constructor(ticketbookingModel: Model<ticketBooking>, showtimeModel: Model<Showtime>);
    bookMovieTicket(bookingDto: ticketBookingDto): Promise<ticketBooking>;
    getAllBookings(): Promise<ticketBooking[]>;
    getBookingById(bookingId: string): Promise<ticketBooking>;
    updateBookingStatus(bookingId: string, status: string): Promise<ticketBooking>;
    deleteBooking(bookingId: string): Promise<ticketBooking>;
}
