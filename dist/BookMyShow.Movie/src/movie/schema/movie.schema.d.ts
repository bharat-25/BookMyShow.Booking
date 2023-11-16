import * as mongoose from 'mongoose';
import { IMovie } from '../interface/movie.interface';
export declare const MovieSchema: mongoose.Schema<IMovie, mongoose.Model<IMovie, any, any, any, mongoose.Document<unknown, any, IMovie> & IMovie & {
    _id: mongoose.Types.ObjectId;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, IMovie, mongoose.Document<unknown, {}, mongoose.FlatRecord<IMovie>> & mongoose.FlatRecord<IMovie> & {
    _id: mongoose.Types.ObjectId;
}>;
export { IMovie };
