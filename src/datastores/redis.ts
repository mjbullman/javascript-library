import 'dotenv/config';
import { createClient, RedisArgument, RedisClientType } from 'redis';


export class RedisClient {
    private client: RedisClientType;
    private static instance: RedisClient;

    private constructor() {
        this.client = createClient({
            username: process.env.REDIS_USERNAME,
            password: process.env.REDIS_PASSWORD,
            socket: {
                host: process.env.REDIS_HOST,
                port: Number(process.env.REDIS_PORT),
            }
        })

        this.client.on('error', (err) => {
            console.error('Redis Client Error:', err)
        })

        this.client.on('ready', () => {
            console.log('Redis Server Ready!')
        })
    }

    /**
     * Client methods.
     */
    public static getInstance(): RedisClient {
        if (!RedisClient.instance) {
            RedisClient.instance = new RedisClient();
        }
        return RedisClient.instance;
    }

    public raw(): RedisClientType {
        return this.client;
    }

    public async connect(): Promise<void> {
        if (!this.client.isOpen) {
            await this.client.connect();
        }
    }

    public async disconnect(): Promise<void> {
        if (this.client.isOpen) {
            await this.client.quit();
        }
    }

    /**
     * General Methods.
     */
    public async set(key: string, value: any, ttl?: number, nx?: boolean) {
        const options: any = {}

        if (ttl !== undefined) {
            options.EX = ttl
        }

        if (nx !== undefined) {
            options.NX = nx
        }

        return this.client.set(key, value, options)
    }

    public async get(key: string): Promise<string | null> {
        return this.client.get(key)
    }

    public async del(key: string): Promise<number> {
        return this.client.del(key)
    }

    public async keys(pattern: RedisArgument) {
        return this.client.keys(pattern)
    }

    /**
     * List Methods
     */
    public async lset(key: string, index: number, value: any): Promise<string | null> {
        return this.client.lSet(key, index, value)
    }

    public async lpush(key: string, value: any): Promise<number> {
        return this.client.lPush(key, value)
    }

    public async lpop(key: string): Promise<string | null> {
        return this.client.lPop(key)
    }

    public async lpos(key: RedisArgument, value: RedisArgument): Promise<number | null> {
        return this.client.lPos(key, value)
    }

    public async llen(key: string): Promise<number> {
        return this.client.lLen(key)
    }
}
