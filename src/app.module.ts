import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TicketBookingModule } from './ticket-booking/ticket-booking.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ShowTimeModule } from './show-time/show-time.module';
import { ConfigModule } from '@nestjs/config';
// import { RedisModule } from './show-time/redis/redis.module';
import { AuthModule } from './auth/auth.module';
import { RedisModule } from './auth/redis/redis.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRootAsync({
      useFactory:()=>({
        uri:process.env.DB_CONNECTION_URL
      })
     }),
     TicketBookingModule,
     // MongooseModule.forRoot('mongodb+srv://bharatanand:XLfrrdbmZRqs25hC@cluster0.a5sfuz8.mongodb.net/BookMyShow_ticketBooking'),
     ShowTimeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
