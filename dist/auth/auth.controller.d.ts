import { RedisService } from './redis/redis.service';
export declare class AuthController {
    private readonly redisService;
    constructor(redisService: RedisService);
    private readonly baseUrl;
    verifyUser(userEmail: any): Promise<any>;
}
