import { server } from './mocks/server';

beforeAll(() => server.listen(
    {
    onUnhandledRequest: (req) => 
        console.error(`Found an unhandled ${req.method} request to ${req.url}`)
    }));
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
