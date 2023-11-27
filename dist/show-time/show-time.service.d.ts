/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { Model } from 'mongoose';
import { Showtime } from './schema/show-time.schema';
import { RedisService } from '../auth/redis/redis.service';
export declare class ShowTimeService {
    private showtimeModel;
    private readonly redisService;
    constructor(showtimeModel: Model<Showtime>, redisService: RedisService);
    addShowtime(showtime: Showtime): Promise<import("mongoose").Document<unknown, {}, Showtime> & Showtime & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    updateShowtime(id: string, showtime: Showtime): Promise<import("mongoose").Document<unknown, {}, Showtime> & Showtime & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    deleteShowtime(id: string): Promise<Showtime | null>;
    getShowtimes(movieId: string, theaterId: string): Promise<Showtime[] | null>;
}
