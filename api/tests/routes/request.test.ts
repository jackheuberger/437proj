import { describe, expect, test } from '@jest/globals'

import { Elysia } from 'elysia'
import { request } from '../../src/routes/request'

const app = new Elysia().use(request)
const createRequest = async (body: any, endpoint: string) => await app.handle(new Request(`http://localhost${endpoint}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
}))

describe('/request', () => {
    // Shadow definition of createRequest passing in the /request endpoint
    const requestTest = async (body: any) => await createRequest(body, '/request')

    test('should fail with no departure airport', async () => {
        const response = await requestTest({ to: 'LAX', date: '2022-01-01' })
        expect(response.ok).toBe(false)
        expect(response.status).toBe(400)
    })
    test('should fail with no arrival, airport', async () => {
        const response = await requestTest({ to: 'LAX', date: '2022-01-01' })
        expect(response.ok).toBe(false)
        expect(response.status).toBe(400)
    })
    test('should fail with no date', async () => {
        const response = await requestTest({ from: 'LAX', to: 'LAX' })
        expect(response.ok).toBe(false)
        expect(response.status).toBe(400)
    })
})

