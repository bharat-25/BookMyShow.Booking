import { IsNotEmpty, IsNumber, IsString } from "class-validator";
import { Types } from "mongoose";


export class ticketBookingDto {
    @IsString()
    userId: Types.ObjectId;
    
    @IsString()
    movieId: string;

    @IsString()
    theaterId:string;

    @IsString()
    movieSlot: string;

    @IsString()
    date:string

    @IsNumber()
    @IsNotEmpty()
    totalSeatBooked: number;

    totalAmount: number;

    @IsString()
    status: string;

    slots: any;
  }
  