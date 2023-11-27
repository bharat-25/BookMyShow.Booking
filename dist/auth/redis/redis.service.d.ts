import { Redis } from "ioredis";
export declare class RedisService {
    private readonly redisSession;
    constructor(redisSession: Redis);
    redisSet(key: any, value: any, expTime: any): Promise<"OK">;
    redisGet(key: string): Promise<string>;
}
