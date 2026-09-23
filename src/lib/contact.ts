import type { ContactFormData } from '../types';

export interface SubmitResponse {
  success: boolean;
  message: string;
}

/**
 * Isolated contact form submission handler.
 * Plug in your preferred backend API or email service (Resend, SendGrid, EmailJS, Formspree, etc.)
 */
export async function submitContactInquiry(data: ContactFormData): Promise<SubmitResponse> {
  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(data.email)) {
    throw new Error('Please enter a valid email address.');
  }

  // Validate required fields
  if (!data.name.trim()) {
    throw new Error('Please enter your name.');
  }
  if (!data.message.trim()) {
    throw new Error('Please describe what you want to build.');
  }

  // Simulate network request delay for realistic UI loading state
  await new Promise((resolve) => setTimeout(resolve, 1200));

  // Log payload for developer visibility
  console.log('[MasalaDose Contact Submission]', data);

  return {
    success: true,
    message: "Thank you for reaching out! We've received your project details and will reply within 24 hours."
  };
}
