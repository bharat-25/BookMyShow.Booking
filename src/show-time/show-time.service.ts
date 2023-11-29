import { Injectable } from "@nestjs/common";
import { Model } from "mongoose";
import { Showtime } from "./schema/show-time.schema";
import { InjectModel } from "@nestjs/mongoose";
import axios from "axios";
import { RedisService } from "../auth/redis/redis.service";

@Injectable()
export class ShowTimeService {
  constructor(
    @InjectModel(Showtime.name) private showtimeModel: Model<Showtime>,
    private readonly redisService: RedisService
  ) {}

  // private readonly baseUrl = 'http://localhost:3008';

  /**
   * Add a new showtime to the database.
   * @param {Showtime} showtime - The showtime data to be added.
   * @returns {Promise<Showtime>} - A promise that resolves to the newly created showtime object.
   */
  async addShowtime(showtime: Showtime): Promise<Showtime> {
    const newShowtime = new this.showtimeModel(showtime);
    return newShowtime.save();
  }

  /**
   * Update a showtime by its ID in the database.
   * @param {string} id - The ID of the showtime to update.
   * @param {Showtime} showtime - The updated showtime data.
   * @returns {Promise<Showtime>} - A promise that resolves to the updated showtime object.
   */
  async updateShowtime(id: string, showtime: Showtime) {
    console.log(showtime.date);
    const updatedShowtime = await this.showtimeModel.findByIdAndUpdate(id, {
      date: showtime.date,
    });
    console.log(updatedShowtime);
    return updatedShowtime;
  }

  
  /**
   * Delete a showtime by its ID from the database.
   * @param {string} id - The ID of the showtime to delete.
   * @returns {Promise<Showtime | null>} - A promise that resolves to the deleted showtime object, or null if not found.
   */
  async deleteShowtime(id: string): Promise<Showtime | null> {
    const deletedShowtime = await this.showtimeModel.findByIdAndRemove(id);
    return deletedShowtime;
  }


  /**
   * Get all showtimes for a specific movie and theater from the database.
   * @param {string} movieId - The ID of the movie.
   * @param {string} theaterId - The ID of the theater.
   * @returns {Promise<Showtime[] | null>} - A promise that resolves to an array of showtime objects or null if not found.
   */
  async getShowtimes(movieId: string,theaterId: string): Promise<Showtime[] | null> {
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
