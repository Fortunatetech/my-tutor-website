// src/lib/clientApi.ts
export type ApiResponse<T = any> = { success: boolean } & T;

async function request<T = any>(url: string, options: RequestInit = {}): Promise<ApiResponse<T>> {
  const res = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      ...(options.headers || {}),
    },
    ...options,
  });

  const text = await res.text();
  // try parse JSON but be resilient
  let data: any = null;
  try {
    data = text ? JSON.parse(text) : {};
  } catch {
    data = { raw: text };
  }

  if (!res.ok) {
    return Promise.reject({
      success: false,
      status: res.status,
      body: data,
    });
  }

  return { success: true, ...(data || {}) } as ApiResponse<T>;
}

export const clientApi = {
  get: async <T = any>(url: string) => request<T>(url, { method: 'GET' }),
  post: async <T = any>(url: string, body?: unknown) =>
    request<T>(url, { method: 'POST', body: body ? JSON.stringify(body) : undefined }),
  put: async <T = any>(url: string, body?: unknown) =>
    request<T>(url, { method: 'PUT', body: body ? JSON.stringify(body) : undefined }),
  del: async <T = any>(url: string) => request<T>(url, { method: 'DELETE' }),
};
