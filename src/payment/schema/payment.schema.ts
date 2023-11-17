// payment.entity.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Payment extends Document {
  @Prop()
  userId: string;

  @Prop()
  bookingId: string;

  @Prop()
  toalAmount: number;

  @Prop()
  status: string;

  @Prop()
  totalTicket: string;

  @Prop()
  transactionType: string;
}

export const PaymentSchema = SchemaFactory.createForClass(Payment);
