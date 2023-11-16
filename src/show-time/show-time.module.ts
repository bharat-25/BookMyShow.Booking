import { Module } from '@nestjs/common';
import { ShowTimeService } from './show-time.service';
import { ShowTimeController } from './show-time.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Showtime, ShowtimeSchema } from './schema/show-time.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Showtime.name, schema: ShowtimeSchema }]),
    
  ],
    controllers: [ShowTimeController],
  providers: [ShowTimeService]
})
export class ShowTimeModule {}
