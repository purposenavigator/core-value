const API_URL =
  typeof window !== 'undefined'
    ? ((window as { __ENV__?: { NEXT_PUBLIC_API_URL?: string } }).__ENV__
        ?.NEXT_PUBLIC_API_URL ?? '')
    : (process.env.NEXT_PUBLIC_API_URL ?? '');

// const API_URL = 'http://backend:8000';
console.log('API_URL is:', API_URL);

export const getApiBaseUrl = () => {
  return process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';
};

interface RequestOptions extends RequestInit {
  headers?: Record<string, string>;
}

interface APIError extends Error {
  info?: string;
  status?: number;
}

function getRequestOptions(options: RequestOptions): RequestOptions {
  return {
    ...options,
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      ...(options.headers || {}),
    },
  };
}

async function apiRequest<T>(
  path: string,
  options: RequestOptions = {},
): Promise<T> {
  console.log('API_URL is:', getApiBaseUrl());
  const res = await fetch(
    `${getApiBaseUrl()}${path}`,
    getRequestOptions(options),
  );

  if (!res.ok) {
    const error: APIError = new Error('An error occurred while fetching data.');
    error.info = await res.json();
    error.status = res.status;
    throw error;
  }

  return res.json();
}

export const getData = <T>(
  path: string,
  options: RequestOptions = {},
): Promise<T> => {
  return apiRequest<T>(path, { method: 'GET', ...options });
};

export const postData = <T>(
  path: string,
  data: Record<string, unknown>,
  options: RequestOptions = {},
): Promise<T> => {
  return apiRequest<T>(path, {
    method: 'POST',
    body: JSON.stringify(data),
    ...options,
  });
};
