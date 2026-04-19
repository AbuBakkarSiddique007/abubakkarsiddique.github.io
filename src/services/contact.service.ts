export type ContactFormData = {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
};

export async function sendContactEmail(data: ContactFormData) {
  const response = await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.error || 'Failed to send message');
  }

  return response.json();
}
