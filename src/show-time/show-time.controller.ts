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
    

    /**
 * Add movie slots API endpoint.
 * @param {Object} req - The request object.
 * @param {Showtime} showtime - The data to add movie slots.
 * @param {Object} response - The response object.
 * @returns {Promise<Object>} - A promise that resolves to a JSON response with the added movie slots.
 * @throws {Object} - Returns an error response if there's an issue with the request.
 */
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
/**
 * Update movie slots API endpoint.
 * @param {Object} req - The request object.
 * @param {string} id - The ID of the movie slots to update.
 * @param {Object} response - The response object.
 * @param {Showtime} showtime - The data to update movie slots.
 * @returns {Promise<Object>} - A promise that resolves to a JSON response with the updated movie slots.
 * @throws {Object} - Returns an error response if there's an issue with the request.
 */
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


/**
 * Delete movie slots API endpoint.
 * @param {Object} req - The request object.
 * @param {string} id - The ID of the movie slots to delete.
 * @param {Object} response - The response object.
 * @returns {Promise<Object>} - A promise that resolves to a JSON response indicating the success of the deletion.
 * @throws {Object} - Returns an error response if there's an issue with the request.
 */
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
  

  /**
 * Get movies and theaters API endpoint.
 * @param {string} movieId - The ID of the movie.
 * @param {string} theaterId - The ID of the theater.
 * @param {Object} response - The response object.
 * @returns {Promise<Object>} - A promise that resolves to a JSON response with the showtimes for the specified movie and theater.
 * @throws {Object} - Returns an error response if there's an issue with the request.
 */
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








