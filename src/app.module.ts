import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TicketBookingModule } from './ticket-booking/ticket-booking.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ShowTimeModule } from './show-time/show-time.module';
import { PaymentController } from './payment/payment.controller';
import { PaymentModule } from './payment/payment.module';
// import { StripeConfigModule } from './payment/stripe.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TicketBookingModule,
    MongooseModule.forRoot('mongodb+srv://bharatanand:XLfrrdbmZRqs25hC@cluster0.a5sfuz8.mongodb.net/BookMyShow_ticketBooking'),
    ShowTimeModule,
    // StripeConfigModule,
    PaymentModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
