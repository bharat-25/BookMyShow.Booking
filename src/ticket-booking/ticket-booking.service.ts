import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { ticketBooking } from './schema/booking.schema';
import { ticketBookingDto } from './dto/ticketBooking.dto';

@Injectable()
export class TicketBookingService {
    constructor(@InjectModel(ticketBooking.name) private readonly ticketbookingModel: Model<ticketBooking>) {}

  async bookMovieTicket(userId: string,movieId: string,theaterId: string,movieSlot: string,date: string,totalSeatBooked: number): Promise<ticketBooking> {
    const totalAmount=totalSeatBooked*100;
    const status='Booked'
    const createdBooking = new this.ticketbookingModel({userId,movieId,theaterId,movieSlot,date,totalSeatBooked,totalAmount,status});
    return createdBooking.save();
  }

  async getAllBookings(): Promise<ticketBooking[]> {
    return this.ticketbookingModel.find().exec();
  }

  async getBookingById(bookingId: string): Promise<ticketBooking> {
    return this.ticketbookingModel.findById(bookingId).exec();
  }

  async updateBookingStatus(bookingId: string, status: string): Promise<ticketBooking> {
    return this.ticketbookingModel.findByIdAndUpdate(
      bookingId,
      { $set: { status } },
      { new: true },
    ).exec();
  }

  async deleteBooking(bookingId: string): Promise<ticketBooking> {
    return this.ticketbookingModel.findByIdAndDelete(bookingId).exec();
  }
}
