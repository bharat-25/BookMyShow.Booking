import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Showtime } from './schema/show-time.schema';
import { InjectModel } from '@nestjs/mongoose';
import axios from 'axios';
import { RedisService } from '../auth/redis/redis.service';

@Injectable()
export class ShowTimeService {
    constructor(@InjectModel(Showtime.name) private showtimeModel: Model<Showtime>,
                                            private readonly redisService: RedisService
                                            ) {}
                                            

  // private readonly baseUrl = 'http://localhost:3008';

    async addShowtime(showtime: Showtime) {
     
        const newShowtime = new this.showtimeModel(showtime);
        return newShowtime.save();
      }

      async updateShowtime(id: string, showtime: Showtime) {
        console.log(showtime.date)
        const updatedShowtime = await this.showtimeModel.findByIdAndUpdate(id, {date:showtime.date});
        console.log(updatedShowtime)
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

//       async verifyUser(userEmail){
//       try {
//         const GetUser=await this.redisService.redisGet(userEmail); 
//         if(GetUser){
//           return true
//         }
//       const Axiosresponse = await axios.post(`${this.baseUrl}/users/User-Verify`,{userEmail});
//       console.log('------->', Axiosresponse.data);
//       const Isverify=Axiosresponse.data
//       await this.redisService.redisSet(userEmail, Isverify, 900); 
//       return Isverify
//       } catch (error) {
//         console.error('Error in verifyUser:', error.message);
//         throw error;
//   }
// }
}
