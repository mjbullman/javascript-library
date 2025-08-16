import { describe, expect, test, beforeAll, afterAll } from 'vitest'
import { RedisClient } from '../../src/datastores/redis'

describe('Redis Tests', () => {
    const redis = RedisClient.getInstance();

    beforeAll(async () => {
        await redis.connect();
    });

    afterAll(async () => {
        await redis.del('test:key');
        await redis.disconnect();
    });

    test('should connect and respond to PING', async () => {
        const pong = await redis.raw().ping();
        expect(pong).toBe('PONG');
    });

    test('should set and get a value', async () => {
        await redis.set('test:key', 'hello', 5); // expires in 5s
        const value = await redis.get('test:key');
        expect(value).toBe('hello');
    });

    test('should delete a key', async () => {
        await redis.set('test:key', 'bye');
        const deleted = await redis.del('test:key');
        expect(deleted).toBe(1);

        const value = await redis.get('test:key');
        expect(value).toBeNull();
    });

    test('should push, set and pop list items', async () => {
        const list = 'myList'
        await redis.del(list)
        await redis.lpush(list, 'List Item')

        const len = await redis.llen(list)
        expect(len).to.equal(1)

        await redis.lset(list, 0, 'New List Item')
        const item = await redis.lpop(list)
        expect(item).to.equal('New List Item')
    })
})
