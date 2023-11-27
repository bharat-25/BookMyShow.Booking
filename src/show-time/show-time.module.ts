import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Showtime, ShowtimeSchema } from './schema/show-time.schema';
import { ShowTimeService } from './show-time.service';
import { ShowTimeController } from './show-time.controller';
import { RedisModule } from '../auth/redis/redis.module';
import { jwtConstants } from './constant/constant';
import { JwtModule } from '@nestjs/jwt';
import { AuthModule } from 'src/auth/auth.module';
import { AuthController } from 'src/auth/auth.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Showtime.name, schema: ShowtimeSchema }]),
    JwtModule.register({
      global: true,
      secret: jwtConstants.SECRET,
      signOptions: { expiresIn: '2hr'  },
    }),
    RedisModule,
    AuthModule

  ],

    controllers: [ShowTimeController],
  providers: [ShowTimeService,AuthController],
  
})
export class ShowTimeModule {}
