const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL;

export function getStrapiUrl() {
  if (!STRAPI_URL) {
    throw new Error("NEXT_PUBLIC_STRAPI_URL is not set");
  }
  return STRAPI_URL;
}

export function getMediaUrl(url?: string | null) {
  if (!url) return "";
  if (url.startsWith("http")) return url;
  return `${getStrapiUrl()}${url}`;
}

/** Supports Strapi v4 (`attributes`) and v5 (flattened) single-type responses. */
export function normalizeSingleEntry<T extends Record<string, unknown>>(
  data: { id: number; attributes?: T } & Partial<T> | null | undefined
): (T & { id: number }) | null {
  if (!data) return null;
  if (data.attributes) return { id: data.id, ...data.attributes };
  const { id, documentId, createdAt, updatedAt, publishedAt, locale, ...fields } = data;
  return { id, ...(fields as unknown as T) };
}

/** Supports Strapi v4 (`attributes`) and v5 (flattened) collection responses. */
export function normalizeCollectionEntries<T extends Record<string, unknown>>(
  data: Array<{ id: number; attributes?: T } & Partial<T>> | undefined
): Array<T & { id: number }> {
  if (!data?.length) return [];
  return data.map((entry) => normalizeSingleEntry<T>(entry)!).filter(Boolean);
}

export async function fetchStrapiCollectionSafe<T extends Record<string, unknown>>(
  path: string
): Promise<Array<T & { id: number }>> {
  try {
    const json = await fetchStrapi<{ data: Array<{ id: number; attributes?: T } & Partial<T>> }>(path);
    return normalizeCollectionEntries<T>(json.data);
  } catch (error) {
    console.error(`Strapi fetch failed for ${path}`, error);
    return [];
  }
}

export async function fetchStrapi<T>(path: string, init?: RequestInit): Promise<T> {
  const res = await fetch(`${getStrapiUrl()}${path}`, {
    ...init,
    headers: {
      "Content-Type": "application/json",
      ...(init?.headers || {}),
    },
    next: { revalidate: 300 },
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Strapi request failed (${res.status}): ${text}`);
  }

  return res.json() as Promise<T>;
}
