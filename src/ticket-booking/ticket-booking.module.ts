import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ticketBooking, ticketBookingSchema } from './schema/booking.schema';
import { TicketBookingController } from './ticket-booking.controller';
import { TicketBookingService } from './ticket-booking.service';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
// import { JwtStrategy } from './jwt/jwt.strategy';
import { ConfigModule } from '@nestjs/config';
import { jwtConstants } from './constants/constant';

@Module({
  imports: [  
            // ConfigModule.forRoot(),
            MongooseModule.forFeature([{ name: ticketBooking.name, schema: ticketBookingSchema }]),
            JwtModule.register({
              global: true,
              secret: jwtConstants.SECRET,
              signOptions: { expiresIn: '60s' },
            }),
          ],
  controllers: [TicketBookingController],
  providers: [TicketBookingService], 
  exports:[TicketBookingService]
})
export class TicketBookingModule {}
