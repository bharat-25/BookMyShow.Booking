// showtime.model.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document ,Schema as MongooseSchema, Types } from 'mongoose';

enum TimeSlot {
  '09:00 AM' = '09:00',
  '12:00 PM' = '12:00',
  '03:00 PM' = '15:00',
  '06:00 PM' = '18:00',
  '09:00 PM' = '21:00',
}
@Schema()
export class Showtime extends Document {
  @Prop([
    {
      slot: { type: String, enum: Object.values(TimeSlot) },
      availableSeats: { type: Number, default: 0 },
    },
  ])
  slots: { slot: string; availableSeats: number }[];

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Movie' })
  movieId: Types.ObjectId

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Theater' })     
  theaterId:Types.ObjectId;

  @Prop({ required: true })
  date: string;
}

export const ShowtimeSchema = SchemaFactory.createForClass(Showtime);
