'use client';
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

import { useRouter } from 'next/navigation';

export default function WaitlistPage() {
  const router = useRouter();
  const [status, setStatus] = useState<'idle' | 'loading'>('idle');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    const botField = form['bot-field'] as HTMLInputElement;

    // If honeypot is filled, likely a bot. Pretend success but do nothing.
    if (botField && botField.value) {
      e.preventDefault();
      router.push('/thank-you');
      return;
    }

    setStatus('loading');
    // Let the form submit naturally to Netlify
    const formData = new FormData(form);

    const formEntries = Object.fromEntries(
      Array.from(formData.entries()).map(([key, value]) => [
        key,
        typeof value === 'string' ? value : value.name,
      ])
    );

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formEntries).toString(),
    })
      .then(() => router.push('/thank-you'))
      .catch((error) => alert(error));
  };

  return (
    <>
      <main className="flex w-full flex-col">
        <section className="container mx-auto pt-28 pb-16">
          <div className="max-w-xl mx-auto">
            <div className="space-y-3 text-center">
              <h1 className="text-3xl md:text-4xl font-bold">
                Join the Waitlist
              </h1>
              <p className="text-muted-foreground">
                Be the first to know when SeenU launches on Android. Enter your
                details below.
              </p>
            </div>

            <form
              name="android-waitlist"
              method="POST"
              // action="/thank-you"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="mt-8 space-y-4 rounded-2xl border p-6 bg-card"
            >
              {/* Hidden input for Netlify Forms */}
              <input type="hidden" name="form-name" value="android-waitlist" />
              {/* HONEYPOT FIELD - bot should keep this empty */}
              <div className="hidden">
                <label htmlFor="bot-field">
                  Don&apos;t fill this out if you&apos;re human:
                </label>
                <input
                  id="bot-field"
                  name="bot-field"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  required
                  className="w-full rounded-md border-input bg-background px-3 py-2 outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  required
                  className="w-full rounded-md border-input bg-background px-3 py-2 outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
              <Button
                type="submit"
                className="w-full py-6"
                disabled={status === 'loading'}
              >
                {status === 'loading' ? 'Joining...' : 'Join Waitlist'}
              </Button>
            </form>
          </div>
        </section>
      </main>
    </>
  );
}
