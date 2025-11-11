import { httpGet, httpPost, httpPut, httpDelete } from './BaseService';

const defaultHeaders = (): Record<string, string> => ({});

const get = async (baseUri: string, expanded?: boolean): Promise<Array<unknown>> => {
  const response = await httpGet(`${baseUri}?expanded=${expanded ?? false}`, {
    headers: defaultHeaders(),
  });
  return response.json();
};

const save = async (baseUri: string, data: unknown): Promise<void> => {
  await httpPost(baseUri, {
    headers: defaultHeaders(),
    body: data as BodyInit,
  });
};

const update = async (
  baseUri: string,
  id: string,
  data: unknown
): Promise<unknown> => {
  const response = await httpPut(`${baseUri}/${id}`, {
    headers: defaultHeaders(),
    body: data as BodyInit,
  });
  return response.json();
};

const remove = async (baseUri: string, id: string): Promise<void> => {
  await httpDelete(`${baseUri}/${id}`, { headers: defaultHeaders() });
};

export { get, save, update, remove };
