import { TicketBookingService } from "./ticket-booking.service";
import { ticketBookingDto } from "./dto/ticketBooking.dto";
import { ticketBooking } from "./schema/booking.schema";
export declare class TicketBookingController {
    private readonly bookingService;
    constructor(bookingService: TicketBookingService);
    bookMovieTicket(bookingDto: ticketBookingDto): Promise<ticketBooking>;
    getAllBookings(): Promise<ticketBooking[]>;
    getBookingById(bookingId: string): Promise<ticketBooking>;
    updateBookingStatus(bookingId: string, status: string): Promise<ticketBooking>;
    deleteBooking(bookingId: string): Promise<ticketBooking>;
}
