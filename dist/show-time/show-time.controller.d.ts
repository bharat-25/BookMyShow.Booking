import { ShowTimeService } from './show-time.service';
import { Showtime } from './schema/show-time.schema';
import { AuthController } from 'src/auth/auth.controller';
export declare class ShowTimeController {
    private readonly showtimeService;
    private readonly authController;
    constructor(showtimeService: ShowTimeService, authController: AuthController);
    addShowtime(req: any, showtime: Showtime, response: any): Promise<any>;
    updateShowtime(req: any, id: string, response: any, showtime: Showtime): Promise<Showtime | null>;
    deleteShowtime(req: any, id: string, response: any): Promise<Showtime | null>;
    getShowtimes(movieId: string, theaterId: string, response: any): Promise<Showtime[] | null>;
}
