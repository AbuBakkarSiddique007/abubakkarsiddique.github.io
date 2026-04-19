"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { sendContactEmail, type ContactFormData } from "@/services/contact.service";

export function ContactUsForm() {
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <>
      <form
        className="space-y-5"
        onSubmit={async (e) => {
          e.preventDefault();
          setIsSubmitting(true);
          
          try {
            const form = e.currentTarget as HTMLFormElement;
            const formData = new FormData(form);
            const data = Object.fromEntries(formData.entries()) as unknown as ContactFormData;

            await sendContactEmail(data);

            form.reset();
            setIsSuccessOpen(true);
          } catch (error) {
            console.error('Form submission error:', error);
          } finally {
            setIsSubmitting(false);
          }
        }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="space-y-1.5">
            <label
              htmlFor="name"
              className="text-xs font-medium text-muted-foreground ml-1"
            >
              First Name
            </label>
            <input
              id="name"
              name="firstName"
              type="text"
              required
              className="w-full h-12 px-4 rounded-xl bg-[#1a1a1a] border border-border/40 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 outline-none transition-all text-sm"
              placeholder="Enter your first name"
            />
          </div>
          <div className="space-y-1.5">
            <label
              htmlFor="lastname"
              className="text-xs font-medium text-muted-foreground ml-1"
            >
              Last Name
            </label>
            <input
              id="lastname"
              name="lastName"
              type="text"
              required
              className="w-full h-12 px-4 rounded-xl bg-[#1a1a1a] border border-border/40 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 outline-none transition-all text-sm"
              placeholder="Enter your last name"
            />
          </div>
        </div>

        <div className="space-y-1.5">
          <label
            htmlFor="email"
            className="text-xs font-medium text-muted-foreground ml-1"
          >
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full h-12 px-4 rounded-xl bg-[#1a1a1a] border border-border/40 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 outline-none transition-all text-sm"
            placeholder="Enter your email address"
            suppressHydrationWarning
          />
        </div>

        <div className="space-y-1.5">
          <label
            htmlFor="message"
            className="text-xs font-medium text-muted-foreground ml-1"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            className="w-full p-4 rounded-xl bg-[#1a1a1a] border border-border/40 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 outline-none transition-all resize-none text-sm"
            placeholder="Enter a brief message describing your project or question"
          />
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full h-12 bg-sky-500 text-black hover:bg-sky-600 rounded-xl font-semibold mt-2 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 transition-all"
        >
          {isSubmitting ? (
            <>
              <svg className="animate-spin h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Sending...
            </>
          ) : (
            "Send Message"
          )}
        </Button>
      </form>

      {isSuccessOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-200">
          <div className="bg-[#121212] border border-border/50 p-8 rounded-[24px] max-w-sm w-full text-center shadow-xl animate-in zoom-in-95 duration-200">
            <div className="w-16 h-16 bg-sky-500/10 text-sky-500 rounded-full flex items-center justify-center mx-auto mb-5">
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold tracking-tight mb-2 text-foreground">Message Sent!</h3>
            <p className="text-muted-foreground text-sm mb-8 leading-relaxed">
              Thank you for reaching out. I&apos;ll get back to you as soon as possible.
            </p>
            <Button
              onClick={() => setIsSuccessOpen(false)}
              className="w-full h-12 bg-sky-500 text-black hover:bg-sky-600 rounded-xl font-semibold"
            >
              Done
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
