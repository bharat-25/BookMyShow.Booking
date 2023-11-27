"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.REDIS_SESSION = void 0;
const ioredis_1 = require("ioredis");
exports.REDIS_SESSION = {
    provide: 'REDIS_SESSION',
    useFactory: async () => {
        const client = new ioredis_1.Redis({
            host: '127.0.0.1',
            port: 6379,
            db: 0,
        });
        client.on('connect', (err) => {
            console.log('Redis connected');
        });
        client.on('error', (err) => {
            console.log('Error in Redis ', err);
        });
        return client;
    },
};
//# sourceMappingURL=redis.provider.js.map