import { describe, expect, test, beforeAll, afterAll } from 'vitest'
import { DynamoDB } from '../../src/datastores/dynamoDB'

describe('DynamoDB Tests', () => {
    let dynamoDb: DynamoDB

    beforeAll(async () => {
        dynamoDb = new DynamoDB('MBA-table')
    });

    afterAll(async () => {
        dynamoDb.close()
    });

    describe('Constructor', () => {
        test('should create instance with table name', () => {
            const db = new DynamoDB('test-table')
            expect(db).toBeInstanceOf(DynamoDB)
        });
    });

    describe('listTables', () => {
        test('should list tables successfully', async () => {
            const result = await dynamoDb.listTables()
            expect(result).toBeDefined()
            expect(result.TableNames).toBeDefined()
            expect(Array.isArray(result.TableNames)).toBe(true)
        });

        test('should include MBA-table in results', async () => {
            const result = await dynamoDb.listTables()
            expect(result.TableNames).toContain('MBA-table')
        });
    });

    describe('put', () => {
        test('should put item with data successfully', async () => {
            const testData = {
                id: 'test-id-1',
                username: 'testuser',
                email: 'test@example.com'
            }
            await expect(dynamoDb.put(testData)).resolves.not.toThrow()
        });

        test('should put item with different data', async () => {
            const testData = {
                id: 'test-id-2',
                name: 'Test Name',
                value: 123
            }
            await expect(dynamoDb.put(testData)).resolves.not.toThrow()
        });
    });

    describe('get', () => {
        test('should get item by id', async () => {
            // First put an item
            const testData = {
                id: 'test-get-1',
                name: 'Test Item'
            }
            await dynamoDb.put(testData)

            // Then get it
            const result = await dynamoDb.get('test-get-1')
            expect(result).toBeDefined()
        });

        test('should return undefined for non-existent id', async () => {
            const result = await dynamoDb.get('non-existent-id')
            expect(result.Item).toBeUndefined()
        });
    });

    describe('close', () => {
        test('should close connection without errors', () => {
            const db = new DynamoDB('test-table')
            expect(() => db.close()).not.toThrow()
        });
    });
})

