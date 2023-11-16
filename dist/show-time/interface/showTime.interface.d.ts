export interface IShowTime extends Document {
    readonly movieId: string;
    readonly theaterId: string;
    readonly availableSeats: number;
    readonly dateTimes: Date;
}
