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

  async getAllBookings(){
    const allbookingData=await this.ticketbookingModel.find().exec();
    console.log("------------->",allbookingData)
    return allbookingData
  }

  async getBookingById(bookingId: string) {
    return this.ticketbookingModel.findById(bookingId).exec();
  }

  async updateBookingStatus(bookingId: string, status: string): Promise<ticketBooking> {
    return this.ticketbookingModel.findByIdAndUpdate(
      bookingId,
      { $set: { status } },
      { new: true },
    ).exec();
  }

  async deleteBooking(bookingId: string){
    return this.ticketbookingModel.findByIdAndDelete(bookingId).exec();
  }
}
