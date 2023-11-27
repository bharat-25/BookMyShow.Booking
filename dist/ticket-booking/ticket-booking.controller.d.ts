import { TicketBookingService } from "./ticket-booking.service";
import { ticketBookingDto } from "./dto/ticketBooking.dto";
import { ticketBooking } from "./schema/booking.schema";
import { AuthController } from "src/auth/auth.controller";
export declare class TicketBookingController {
    private readonly bookingService;
    private readonly authController;
    constructor(bookingService: TicketBookingService, authController: AuthController);
    bookMovieTicket(req: any, bookingDto: ticketBookingDto, response: any): Promise<any>;
    getAllBookings(response: any): Promise<any>;
    getBookingById(req: any, bookingId: string, response: any): Promise<any>;
    updateBookingStatus(req: any, bookingId: string, status: string, response: any): Promise<ticketBooking>;
    deleteBooking(req: any, bookingId: string, response: any): Promise<any>;
}
