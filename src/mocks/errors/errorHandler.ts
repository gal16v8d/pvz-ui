import { rest } from 'msw';
import { server } from '../server';

const errorHandlerGetCall = (path: string): void => {
  const errorMsg = { status: 500, path: path, message: 'PvZ-Api is down' };
  server.use(
    rest.get(`*${path}`, (_req, res, ctx) =>
      res(ctx.status(500), ctx.json(errorMsg))
    )
  );
};

export { errorHandlerGetCall };
