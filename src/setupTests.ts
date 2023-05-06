import fetch, { Headers, Request, Response } from 'node-fetch';
import { server } from './mocks/server';

// @ts-ignore
globalThis.fetch = fetch;
// @ts-ignore
globalThis.Headers = Headers;
// @ts-ignore
globalThis.Request = Request;
// @ts-ignore
globalThis.Response = Response;

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
