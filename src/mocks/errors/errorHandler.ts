import { http, HttpResponse } from 'msw';
import { server } from '../server';

const errorHandlerGetCall = (path: string): void => {
  const errorMsg = { status: 500, path: path, message: 'PvZ-Api is down' };

  server.use(
    http.get(`*${path}`, () => 
      HttpResponse.json(errorMsg, { status: 500 })
    )
  );
};

export { errorHandlerGetCall };