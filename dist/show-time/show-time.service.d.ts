import { Model } from 'mongoose';
import { Showtime } from './schema/show-time.schema';
export declare class ShowTimeService {
    private showtimeModel;
    constructor(showtimeModel: Model<Showtime>);
    addShowtime(showtime: Showtime): Promise<Showtime>;
    updateShowtime(id: string, showtime: Showtime): Promise<Showtime | null>;
    deleteShowtime(id: string): Promise<Showtime | null>;
    getShowtimes(movieId: string, theaterId: string): Promise<Showtime[] | null>;
}
