import ApiError from '@/api/responses/ApiError';
import type { UseMutationResult, UseQueryResult } from '@tanstack/react-query';
import { useMutation, useQuery } from '@tanstack/react-query';

const useGet = (
  queryKey: string,
  getCall: (uri: string, expanded?: boolean) => Promise<unknown[]>,
  uri: string,
  expanded?: boolean,
  payload?: {
    onSuccess?: (response: unknown[]) => void;
    onError?: (error: ApiError) => void;
    enabled?: boolean;
    cacheTime?: number;
    staleTime?: number;
    refetchOnMount?: boolean;
  }
): UseQueryResult<unknown[], ApiError> =>
  useQuery({
    queryKey: [queryKey],
    queryFn: async () => getCall(uri, expanded),
    cacheTime: payload?.cacheTime ?? undefined,
    staleTime: payload?.cacheTime ?? undefined,
    enabled: payload?.enabled === undefined || payload?.enabled,
    onSuccess: (response: unknown[]) => {
      payload?.onSuccess && payload.onSuccess(response);
    },
    onError: (error: ApiError) => {
      console.warn('error -> ', error?.message);
      payload?.onError && payload.onError(error);
    },
    refetchOnMount:
      payload?.refetchOnMount === undefined || payload.refetchOnMount,
  });

const useSave = (
  apiObject: string,
  postCall: (uri: string, data: unknown) => Promise<void>,
  uri: string,
  payload?: {
    onSuccess?: () => void;
    onError?: (error: ApiError) => void;
  }
): UseMutationResult<
  void,
  ApiError,
  {
    data: unknown;
  },
  unknown
> =>
  useMutation({
    mutationFn: ({ data }: { data: unknown }) => postCall(uri, data),
    onSuccess: () => payload?.onSuccess && payload?.onSuccess(),
    onError: (err: ApiError) => {
      console.warn(`Could not create the ${apiObject}`, err?.message);
      return payload?.onError && payload?.onError(err);
    },
  });

const useUpdate = (
  apiObject: string,
  putCall: (uri: string, id: string, data: unknown) => Promise<unknown>,
  uri: string,
  payload?: {
    onSuccess?: () => void;
    onError?: (error: ApiError) => void;
  }
): UseMutationResult<
  unknown,
  ApiError,
  {
    id: string;
    data: unknown;
  },
  unknown
> =>
  useMutation({
    mutationFn: ({ id, data }: { id: string; data: unknown }) =>
      putCall(uri, id, data),
    onSuccess: () => payload?.onSuccess && payload?.onSuccess(),
    onError: (err: ApiError) => {
      console.warn(`Could not update the ${apiObject}`, err?.message);
      return payload?.onError && payload?.onError(err);
    },
  });

const useDelete = (
  apiObject: string,
  deleteCall: (uri: string, id: string) => Promise<void>,
  uri: string,
  payload?: {
    onSuccess?: () => void;
    onError?: (error: ApiError) => void;
  }
): UseMutationResult<
  void,
  ApiError,
  {
    id: string;
  },
  unknown
> =>
  useMutation({
    mutationFn: ({ id }: { id: string }) => deleteCall(uri, id),
    onSuccess: () => payload?.onSuccess && payload?.onSuccess(),
    onError: (err: ApiError) => {
      console.warn(`Could not delete the ${apiObject}`, err?.message);
      return payload?.onError && payload?.onError(err);
    },
  });

export { useGet, useSave, useUpdate, useDelete };
