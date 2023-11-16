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
import { Document, Schema as MongooseSchema } from 'mongoose';
import { IMovie } from '../../movie/schema/movie.schema';
import { ITheater } from 'src/theater/interface/theater.interface';
export declare class Showtime extends Document {
    static save(): void;
    slots: {
        slot: string;
        availableSeats: number;
    }[];
    movieId: IMovie['_id'];
    theaterId: ITheater['_id'];
    static availableSeats: any;
    static movieId: any | string;
    static slots: any;
}
export declare const ShowtimeSchema: MongooseSchema<Showtime, import("mongoose").Model<Showtime, any, any, any, Document<unknown, any, Showtime> & Showtime & {
    _id: import("mongoose").Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Showtime, Document<unknown, {}, import("mongoose").FlatRecord<Showtime>> & import("mongoose").FlatRecord<Showtime> & {
    _id: import("mongoose").Types.ObjectId;
}>;
