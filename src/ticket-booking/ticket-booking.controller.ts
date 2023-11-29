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
import { AuthGuard } from "./guard/auth.guard";
import { BOOKING_RESPONSE } from "./constants/constant";
import {ApiTags,ApiBearerAuth} from '@nestjs/swagger'
import { AuthController } from "src/auth/auth.controller";

@Controller("ticket-booking")
export class TicketBookingController {
  constructor(private readonly bookingService: TicketBookingService,
              private readonly authController: AuthController) {}


  /**
 * Book a movie ticket for a user.
 * @param {Request} req - The Express request object.
 * @param {ticketBookingDto} bookingDto - The data for booking the ticket.
 * @param {Response} response - The Express response object.
 * @returns {Promise<void>} - A promise that resolves after the ticket is booked.
 */
  @ApiTags('Book Movie Ticket')
  @ApiBearerAuth()
  @Post("bookTicket")
  @UseGuards(AuthGuard)
  async bookMovieTicket(@Request() req,@Body() bookingDto: ticketBookingDto,@Res() response) {

    try {
      const { movieId, theaterId, movieSlot, date, totalSeatBooked } = bookingDto;
      console.log(bookingDto)

      const userId = req.user.payload.payloadId;
      console.log(userId)

      const userEmail = req.user.payload.payloadEmail;
        const Isverify=await this.authController.verifyUser(userEmail);

        if(!Isverify){
          return response.status(HttpStatus.OK).json({
            message:BOOKING_RESPONSE.NOT_AUTHORIZED,
          });
        }
      
      const movieData = await this.bookingService.bookMovieTicket(
        userId,
        movieId,
        theaterId,
        movieSlot,
        date,
        totalSeatBooked
      );
      console.log("=====>",movieData)
      return response.status(HttpStatus.OK).json({
        message: BOOKING_RESPONSE.BOOKING,
        movieData,
      });
    } 
    catch (error) {
      return response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        message:BOOKING_RESPONSE.ERROR_BOOKING,
        error: error.message,
      });
    }
  }


  /**
 * Get all bookings.
 * @param {Response} response - The Express response object.
 * @returns {Promise<void>} - A promise that resolves with all booking data.
 */
  @ApiTags('Get all Booking')
  @Get()
  async getAllBookings(@Res() response){
    try{

      const allBooking=await this.bookingService.getAllBookings();
      return response.status(HttpStatus.OK).json({
        message: BOOKING_RESPONSE.GET_ALL_BOOKING,
        allBooking,
      });
    }
    catch(error){
      return response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        message:BOOKING_RESPONSE.ERROR_GET_ALL_BOOKING,
        error: error.message,
      });
    }
  }



/**
 * Get booking details by ID.
 * @param {Request} req - The Express request object.
 * @param {string} bookingId - The ID of the booking to retrieve.
 * @param {Response} response - The Express response object.
 * @returns {Promise<void>} - A promise that resolves with the booking details.
 */
  @ApiTags('Get Booking by ID')
  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  @Get(":id")
  async getBookingById(@Request() req,@Param("id") bookingId: string,@Res() response){
    try{

      const userEmail = req.user.payload.payloadEmail;
        const Isverify=await this.authController.verifyUser(userEmail);

        if(!Isverify){
          return response.status(HttpStatus.OK).json({
            message:BOOKING_RESPONSE.NOT_AUTHORIZED,
          });
        }

      const getBooking=await this.bookingService.getBookingById(bookingId);
      console.log(getBooking)
      return response.status(HttpStatus.OK).json({
        message: BOOKING_RESPONSE.GET_BOOKING_BY_ID,
        getBooking,
      });
    }
    catch(error){
      return response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        message:BOOKING_RESPONSE.ERROR_BOOKING_BY_ID,
        error: error.message,
      });
    }
  }

  /**
 * Update booking status by ID.
 * @param {Request} req - The Express request object.
 * @param {string} bookingId - The ID of the booking to update.
 * @param {string} status - The new status for the booking.
 * @param {Response} response - The Express response object.
 * @returns {Promise<ticketBooking>} - A promise that resolves with the updated booking data.
 */
  @ApiTags('Update Booking')
  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  @Patch(":id/status/:status")
  async updateBookingStatus(@Request() req,@Param("id") bookingId: string,@Param("status") status: string,@Res() response
  ): Promise<ticketBooking> {
    try{
      const userEmail = req.user.payload.payloadEmail;
        const Isverify=await this.authController.verifyUser(userEmail);

        if(!Isverify){
          return response.status(HttpStatus.OK).json({
            message:BOOKING_RESPONSE.NOT_AUTHORIZED,
          });
        }

      const updateBooking= this.bookingService.updateBookingStatus(bookingId, status);
      return response.status(HttpStatus.OK).json({
        message: BOOKING_RESPONSE.UPDATE_BOOKING,
        updateBooking,
      });
    }
  catch(error)
  {
    return response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
      message:BOOKING_RESPONSE.ERROR_UPDATE_BOOKING,
      error: error.message,
    });
  }
}


/**
 * Delete a booking by ID.
 * @param {Request} req - The Express request object.
 * @param {string} bookingId - The ID of the booking to delete.
 * @param {Response} response - The Express response object.
 * @returns {Promise<void>} - A promise that resolves after the booking is deleted.
 */
  @ApiTags('Delete Booking')
  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  @Delete(":id")
  async deleteBooking(@Request() req,@Param("id") bookingId: string,@Res() response) {
    try{
      const userEmail = req.user.payload.payloadEmail;
        const Isverify=await this.authController.verifyUser(userEmail);

        if(!Isverify){
          return response.status(HttpStatus.OK).json({
            message:BOOKING_RESPONSE.NOT_AUTHORIZED,
          });
        }


      const deleteBooking= this.bookingService.deleteBooking(bookingId);
      return response.status(HttpStatus.OK).json({
        message: BOOKING_RESPONSE.DELETE_BOOKING,
        deleteBooking,
      });
    }
  catch(error){
    return response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
      message:BOOKING_RESPONSE.ERROR_DELETE_BOOKING,
      error: error.message,
    });
  }
  }
}
