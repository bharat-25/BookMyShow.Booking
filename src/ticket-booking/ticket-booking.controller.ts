import {
  Controller,
  Post,
  Get,
  Param,
  Patch,
  Delete,
  Request,
  Res,
  Body,
  UseGuards,
  HttpStatus,
} from "@nestjs/common";
import { TicketBookingService } from "./ticket-booking.service";
import { ticketBookingDto } from "./dto/ticketBooking.dto";
import { ticketBooking } from "./schema/booking.schema";
import { AuthGuard } from '@nestjs/passport';
import { JwtService } from '@nestjs/jwt';


@Controller("ticket-booking")
export class TicketBookingController {
  constructor(private readonly bookingService: TicketBookingService,
              private readonly jwtService: JwtService) {}

  @Post('bookTicket')
  @UseGuards(AuthGuard('jwt'))
  async bookMovieTicket(@Request() req,@Body() bookingDto: ticketBookingDto,@Res() response) {
    try{
        const jwt = req.headers.authorization.replace('Bearer ', '');
        const { movieId,theaterId,movieSlot,date,totalSeatBooked} = bookingDto;
        // console.log(bookingDto,jwt)
        const json = this.jwtService.decode(jwt);
        const userId = json.payload.payloadId
        const ratingData =await this.bookingService.bookMovieTicket(userId,movieId,theaterId,movieSlot,date,totalSeatBooked);
        return response.status(HttpStatus.OK).json({
            message:'Movies Ticket book Successfully.',
            ratingData
        });
    }
       catch(error){
        return response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
            message: 'Error to Movies Ticket book',
            error: error.message,
          });
       }
  }

  @Get()
  async getAllBookings(): Promise<ticketBooking[]> {
    return this.bookingService.getAllBookings();
  }

  @Get(":id")
  async getBookingById(@Param("id") bookingId: string): Promise<ticketBooking> {
    return this.bookingService.getBookingById(bookingId);
  }

  @Patch(":id/status/:status")
  async updateBookingStatus(
    @Param("id") bookingId: string,
    @Param("status") status: string
  ): Promise<ticketBooking> {
    return this.bookingService.updateBookingStatus(bookingId, status);
  }

  @Delete(":id")
  async deleteBooking(@Param("id") bookingId: string): Promise<ticketBooking> {
    return this.bookingService.deleteBooking(bookingId);
  }
}
