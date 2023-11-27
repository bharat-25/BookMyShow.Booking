import { Types } from "mongoose";
export declare class ticketBookingDto {
    userId: Types.ObjectId;
    movieId: string;
    theaterId: string;
    movieSlot: string;
    date: string;
    totalSeatBooked: number;
    totalAmount: number;
    status: string;
    slots: any;
}
