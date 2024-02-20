import { Elysia, t } from "elysia";
import { handleRequest } from "../processors/requestProcessor";

const request = new Elysia({ prefix: '/request' })
    .post('', () => handleRequest(), {
        body: t.Object({
            from: t.String({
                minLength: 3,
                maxLength: 3,
                description: 'The departure airport code',
                error: 'Invalid departure airport code'
            }),
            to: t.String({
                minLength: 3,
                maxLength: 3,
                description: 'The arrival airport code',
                error: 'Invalid arrival airport code'
            }),
            date: t.String({
                format: 'date',
                default: '2022-01-01',
                description: 'The departure date',
                error: 'Invalid departure date'
            })
        })
    })


export { request };