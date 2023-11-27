import { Controller,Post, Body, Put,Request, Param, Delete,Res, Get, HttpStatus, UseGuards } from '@nestjs/common';
import { ShowTimeService } from './show-time.service';
import { Showtime } from './schema/show-time.schema';
import { SHOW_TIME_RESPONSE } from './constant/constant';
import {ApiTags,ApiBearerAuth} from '@nestjs/swagger'
import { AuthGuard } from './guard/auth.guard';
import { AuthController } from 'src/auth/auth.controller';


@Controller('show-time')
export class ShowTimeController {
    constructor(private readonly showtimeService: ShowTimeService,
                private readonly authController: AuthController){}
    
    @ApiTags('Add Movie Slots')
    @UseGuards(AuthGuard)
    @Post('addMovieSlot')
    async addShowtime(@Request() req,@Body() showtime: Showtime,@Res() response) {
    try{
      const userEmail = req.user.payload.payloadEmail;

      const Isverify=await this.authController.verifyUser(userEmail);
      console.log(Isverify)
      if(!Isverify){
        return response.status(HttpStatus.OK).json({
          message:SHOW_TIME_RESPONSE.NOT_AUTHORIZED,
        });
      }
        const addSlots= await this.showtimeService.addShowtime(showtime);
        console.log(addSlots)

        return response.status(HttpStatus.OK).json({
          message:SHOW_TIME_RESPONSE.ADD_SHOW_TIME,
          addSlots
        });
      }
      catch (error) {
        return response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
          message: SHOW_TIME_RESPONSE.ERROR_ADD_SHOW_TIME,
          error: error.message,
        });
      }
    }

    @ApiTags('Update Movie Slots')
    @UseGuards(AuthGuard)
    @Put(':id')
    async updateShowtime(@Request() req,@Param('id') id: string, @Res() response,@Body() showtime: Showtime): Promise<Showtime | null> {
      try{
        const userEmail = req.user.payload.payloadEmail;
        const Isverify=await this.authController.verifyUser(userEmail);

        if(!Isverify){
          return response.status(HttpStatus.OK).json({
            message:SHOW_TIME_RESPONSE.NOT_AUTHORIZED,
          });
        }
        
        const updateSlots=await this.showtimeService.updateShowtime(id, showtime);

        return response.status(HttpStatus.OK).json({
          message:SHOW_TIME_RESPONSE.UPDATE_SHOW_TIME,
          updateSlots
        });
      }

      catch (error) {
        return response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
          message: SHOW_TIME_RESPONSE.ERROR_UPDATE_SHOW_TIME,
          error: error.message,
        });
      }
    }
  
  @ApiTags('Delete Movie Slots')
    @Delete(':id')
    async deleteShowtime(@Request() req,@Param('id') id: string,@Res() response): Promise<Showtime | null> {
      try{
        const userEmail = req.user.payload.payloadEmail;
        const Isverify=await this.authController.verifyUser(userEmail);

        if(!Isverify){
          return response.status(HttpStatus.OK).json({
            message:SHOW_TIME_RESPONSE.NOT_AUTHORIZED,
          });
        }
        const deleteSlot=this.showtimeService.deleteShowtime(id);
        return response.status(HttpStatus.OK).json({
          message:SHOW_TIME_RESPONSE.DELETE_SHOW_TIME,
          deleteSlot
        });
      }
      catch(error){
        return response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
          message: SHOW_TIME_RESPONSE.ERROR_DELETE_SHOW_TIME,
          error: error.message,
        });
      }
    }
  
    @ApiTags('Get Movies & Theaters')
    @UseGuards(AuthGuard)
    @Get(':movieId/:theaterId')
    async getShowtimes(@Param('movieId') movieId: string,@Param('theaterId') theaterId: string,@Res() response): Promise<Showtime[] | null> {
      try{
        const getMovie=this.showtimeService.getShowtimes(movieId, theaterId);
        return response.status(HttpStatus.OK).json({
          message:SHOW_TIME_RESPONSE.GET_MOVIE_THEATER,
          getMovie
        });
      }
      catch(error){
        return response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
          message: SHOW_TIME_RESPONSE.ERROR_GET_MOVIE_THEATER,
          error: error.message,
        });
      }
    }}








