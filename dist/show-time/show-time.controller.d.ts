import { ShowTimeService } from './show-time.service';
import { Showtime } from './schema/showtime.schema';
export declare class ShowTimeController {
    private readonly showtimeService;
    constructor(showtimeService: ShowTimeService);
    addShowtime(showtime: Showtime): Promise<Showtime>;
    updateShowtime(id: string, showtime: Showtime): Promise<Showtime | null>;
    deleteShowtime(id: string): Promise<Showtime | null>;
    getShowtimes(movieId: string, theaterId: string): Promise<Showtime[] | null>;
}
