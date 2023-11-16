import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document,Schema as MongooseSchema } from 'mongoose';

@Schema()
export class ticketBooking extends Document {
  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'User' })
  userId: string;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Movie' })
  movieId: string;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Theater' })
  theaterId: string;

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
