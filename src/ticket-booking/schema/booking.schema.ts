import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document,Schema as MongooseSchema,Types } from 'mongoose';

@Schema()
export class ticketBooking {
  @Prop({ type:MongooseSchema.Types.ObjectId, ref: 'User' })
  userId:Types.ObjectId 
  
  @Prop({ type:MongooseSchema.Types.ObjectId, ref: 'showTime' })
  showtimeId:Types.ObjectId

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Movie' })
  movieId:  Types.ObjectId

  @Prop({ type:MongooseSchema.Types.ObjectId, ref: 'Theater' })
  theaterId: Types.ObjectId

  @Prop({ required: true })
  movieSlot: string;
  
  @Prop({ required: true })
  date: string;

  @Prop({ required: true })
  totalSeatBooked: number;

  @Prop()
  totalAmount: number;

  @Prop()
  status: string;
  static totalSeatBooked: any;
}

export const ticketBookingSchema = SchemaFactory.createForClass(ticketBooking);
