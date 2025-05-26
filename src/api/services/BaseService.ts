import ApiError from '../responses/ApiError';
import type { HTTPValidationError } from '../models';

const handleError = async (response: Response) => {
  if (response.status === 404) {
    throw new ApiError(response.status, `Not found`);
  } else {
    const error: HTTPValidationError = await response.json();
    throw new ApiError(
      response.status,
      `${error?.detail?.[0]?.msg ?? response.statusText}`
    );
  }
};

const http = async (path: string, config: RequestInit): Promise<Response> => {
  const request = new Request(path, config);
  const response = await fetch(request);
  if (!response.ok) {
    await handleError(response);
  }
  return response;
};

const httpGet = async (
  path: string,
  config: RequestInit
): Promise<Response> => {
  return http(path, { method: 'GET', ...config });
};

const httpPost = async (
  path: string,
  config: RequestInit
): Promise<Response> => {
  return http(path, { method: 'POST', ...config });
};

const httpPut = async (
  path: string,
  config: RequestInit
): Promise<Response> => {
  return http(path, { method: 'PUT', ...config });
};

const httpDelete = async (
  path: string,
  config: RequestInit
): Promise<Response> => {
  return http(path, { method: 'DELETE', ...config });
};

export { httpGet, httpPost, httpPut, httpDelete };
