import { Document } from 'mongoose';
export interface IMovie extends Document {
    plot: string;
    genres: string[];
    runtime: number;
    cast: string[];
    title: string;
    fullplot: string;
    languages: string[];
    released: Date;
    rated: string;
    year: number;
    imdb: {
        rating: number;
        votes: number;
        id: number;
    };
    countries: string[];
}
