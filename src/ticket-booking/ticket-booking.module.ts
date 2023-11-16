import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ticketBooking, ticketBookingSchema } from './schema/booking.schema';
import { TicketBookingController } from './ticket-booking.controller';
import { TicketBookingService } from './ticket-booking.service';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './jwt/jwt.strategy';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [  
            ConfigModule.forRoot(),
            MongooseModule.forFeature([{ name: ticketBooking.name, schema: ticketBookingSchema }]),
            JwtModule.register({
              secret: 'thesecretkey',
              signOptions: {
                expiresIn: '1h',
              },
            }),
            PassportModule.register({
              defaultStrategy: 'jwt',
            }),
          ],
  controllers: [TicketBookingController],
  providers: [TicketBookingService,JwtStrategy], 
  exports:[TicketBookingService]
})
export class TicketBookingModule {}
