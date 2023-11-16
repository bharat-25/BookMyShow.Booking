import { Controller,Post, Body, Put, Param, Delete, Get } from '@nestjs/common';
import { ShowTimeService } from './show-time.service';
import { Showtime } from './schema/show-time.schema';

@Controller('show-time')
export class ShowTimeController {
    constructor(private readonly showtimeService: ShowTimeService){}
    @Post('addMovieSlot')
    async addShowtime(@Body() showtime: Showtime): Promise<Showtime> {
      return this.showtimeService.addShowtime(showtime);
    }
  
    @Put(':id')
    async updateShowtime(@Param('id') id: string, @Body() showtime: Showtime): Promise<Showtime | null> {
      return this.showtimeService.updateShowtime(id, showtime);
    }
  
    @Delete(':id')
    async deleteShowtime(@Param('id') id: string): Promise<Showtime | null> {
      return this.showtimeService.deleteShowtime(id);
    }
  
    @Get(':movieId/:theaterId')
    async getShowtimes(
      @Param('movieId') movieId: string,
      @Param('theaterId') theaterId: string,
    ): Promise<Showtime[] | null> {
      return this.showtimeService.getShowtimes(movieId, theaterId);
    }}








