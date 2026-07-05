import { client, serverClient } from './client';

export async function sanityFetch<T>(query: string, params?: Record<string, unknown>): Promise<T> {
  const data = await client.fetch<T>(query, params);
  return data;
}

export async function sanityFetchServer<T>(query: string): Promise<T> {
  const data = await serverClient.fetch<T>(query);
  return data;
}
