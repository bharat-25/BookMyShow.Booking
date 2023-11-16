import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Showtime } from './schema/show-time.schema';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ShowTimeService {
    constructor(@InjectModel(Showtime.name) private showtimeModel: Model<Showtime>) {}

    async addShowtime(showtime: Showtime): Promise<Showtime> {
        const newShowtime = new this.showtimeModel(showtime);
        return newShowtime.save();
      }

      async updateShowtime(id: string, showtime: Showtime): Promise<Showtime | null> {
        const updatedShowtime = await this.showtimeModel.findByIdAndUpdate(id, showtime, { new: true });
        return updatedShowtime;
      }
    
      async deleteShowtime(id: string): Promise<Showtime | null> {
        const deletedShowtime = await this.showtimeModel.findByIdAndRemove(id);
        return deletedShowtime;
      }

      async getShowtimes(movieId: string, theaterId: string): Promise<Showtime[] | null> {
        const showtimes = await this.showtimeModel.find({ movieId, theaterId }).exec();
        return showtimes;
      }

}
