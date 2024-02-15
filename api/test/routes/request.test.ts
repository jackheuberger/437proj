import { describe, expect, it, test } from 'bun:test'

import { Elysia } from 'elysia'
import { request } from '../../src/routes/request'

const createRequest = (body: any) => new Request('http://localhost/request', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
})

const app = new Elysia().use(request)

describe('RequestRoute', () => {
    test('should fail with no departure airport', async () => {
        const response = await app.handle(createRequest({ to: 'LAX', date: '2022-01-01' }))
        expect(response.ok).toBe(false)
        expect(response.status).toBe(400)
    })
    test('should fail with no arrival, airport', async () => {
        const response = await app.handle(createRequest({ to: 'LAX', date: '2022-01-01' }))
        expect(response.ok).toBe(false)
        expect(response.status).toBe(400)
    })
    test('should fail with no date', async () => {
        const response = await app.handle(createRequest({ from: 'LAX', to: 'LAX' }))
        expect(response.ok).toBe(false)
        expect(response.status).toBe(400)
    })
})