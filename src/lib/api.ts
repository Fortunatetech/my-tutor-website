// src/lib/api.ts
export interface ContactForm {
  name: string;
  email: string;
  message: string;
}

export async function submitContactForm(data: ContactForm): Promise<{ success: boolean }> {
  // Mock implementation for now.
  // Replace with real API call or serverless function when available.
  console.log('[submitContactForm]', data);

  return new Promise((resolve) => {
    setTimeout(() => resolve({ success: true }), 800);
  });
}
