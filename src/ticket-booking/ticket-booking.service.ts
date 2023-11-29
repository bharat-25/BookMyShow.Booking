import { Showtime, ShowtimeSchema } from './../show-time/schema/show-time.schema';
import { Injectable } from '@nestjs/common';
import { Model ,ObjectId, Types} from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { ticketBooking } from './schema/booking.schema';

@Injectable()
export class TicketBookingService {
    constructor(@InjectModel(ticketBooking.name) private readonly ticketbookingModel: Model<ticketBooking>,
                @InjectModel(Showtime.name) private showtimeModel: Model<Showtime>
                ) {}

  /**
 * Book a movie ticket for a user.
 * @param {string} userId - The ID of the user making the booking.
 * @param {string} movieId - The ID of the movie being booked.
 * @param {string} theaterId - The ID of the theater where the movie is being booked.
 * @param {string} movieSlot - The time slot for the movie.
 * @param {string} date - The date of the movie show.
 * @param {number} totalSeatBooked - The total number of seats being booked.
 * @returns {Promise<ticketBooking>} - A promise that resolves with the booking details.
 */
  async bookMovieTicket(userId: string,movieId,theaterId,movieSlot: string,date: string,totalSeatBooked: number): Promise<ticketBooking> {
    const totalAmount=totalSeatBooked*100;
    console.log(userId)
    console.log(totalAmount)
    const status='Booked'
    const createdBooking = new this.ticketbookingModel({userId,movieId,theaterId,movieSlot,date,totalSeatBooked,totalAmount,status});
    
    const updatedShowtime = await this.showtimeModel.findOneAndUpdate(
      {
        theaterId: theaterId,
        'slots.slot': movieSlot, 
      },
      {
        $inc: {
          'slots.$.availableSeats': -totalSeatBooked,
        },
      },
      { new: true }, 
      );
  
      console.log(updatedShowtime)
      return createdBooking.save();
  }


  /**
 * Get all bookings.
 * @returns {Promise<void>} - A promise that resolves with all booking data.
 */
  async getAllBookings(){
    const allbookingData=await this.ticketbookingModel.find().exec();
    console.log("------------->",allbookingData)
    return allbookingData
  }


  /**
 * Get booking details by ID.
 * @param {string} bookingId - The ID of the booking to retrieve.
 * @returns {Promise<ticketBooking>} - A promise that resolves with the booking details.
 */
  async getBookingById(bookingId: string) {
    return this.ticketbookingModel.findById(bookingId).exec();
  }

/**
 * Update booking status by ID.
 * @param {string} bookingId - The ID of the booking to update.
 * @param {string} status - The new status for the booking.
 * @returns {Promise<ticketBooking>} - A promise that resolves with the updated booking data.
 */
  async updateBookingStatus(bookingId: string, status: string): Promise<ticketBooking> {
    return this.ticketbookingModel.findByIdAndUpdate(
      bookingId,
      { $set: { status } },
      { new: true },
    ).exec();
  }
/**
 * Delete a booking by ID.
 * @param {string} bookingId - The ID of the booking to delete.
 * @returns {Promise<void>} - A promise that resolves after the booking is deleted.
 */
  async deleteBooking(bookingId: string){
    return this.ticketbookingModel.findByIdAndDelete(bookingId).exec();
  }
}
