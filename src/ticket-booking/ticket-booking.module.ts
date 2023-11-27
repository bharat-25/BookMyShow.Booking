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
import { Showtime, ShowtimeSchema } from 'src/show-time/schema/show-time.schema';
import { AuthModule } from 'src/auth/auth.module';
import { AuthController } from 'src/auth/auth.controller';
import { RedisModule } from 'src/auth/redis/redis.module';

@Module({
  imports: [  
            ConfigModule.forRoot(),
            MongooseModule.forFeature([{ name: Showtime.name, schema: ShowtimeSchema }]),
            MongooseModule.forFeature([{ name: ticketBooking.name, schema: ticketBookingSchema }]),
            JwtModule.register({
              global: true,
              secret: jwtConstants.SECRET,
              signOptions: { expiresIn: '60s' },
            }),
            RedisModule,
            AuthModule,
          ],
  controllers: [TicketBookingController],
  providers: [TicketBookingService,AuthController], 
  exports:[TicketBookingService]
})
export class TicketBookingModule {}
