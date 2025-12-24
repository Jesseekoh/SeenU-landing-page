"use client";
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";

export default function WaitlistPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      // TODO: wire up with your backend endpoint
      // Example:
      // const res = await fetch("/api/waitlist", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify({ name, email }),
      // });
      // if (!res.ok) throw new Error("Failed to join waitlist");

      // Simulate success for now
      await new Promise((resolve) => setTimeout(resolve, 800));
      setStatus("success");
      setName("");
      setEmail("");
    } catch (err) {
      setStatus("error");
    } finally {
      setTimeout(() => setStatus("idle"), 2500);
    }
  };

  return (
    <>
      {/*<Navbar withDark={true} />*/}
      
      <main className="flex w-full flex-col">
        <section className="container mx-auto px-6 pt-28 pb-16">
          <div className="max-w-xl mx-auto">
            <div className="space-y-3 text-center">
              <h1 className="text-3xl md:text-4xl font-bold">
                Join the Waitlist
              </h1>
              <p className="text-muted-foreground">
                Be the first to know when SeenU launches. Enter your details
                below.
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="mt-8 space-y-4 rounded-2xl border p-6 bg-card"
            >
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
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
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full rounded-md border-input bg-background px-3 py-2 outline-none focus:ring-2 focus:ring-ring"
                />
              </div>

              <Button
                type="submit"
                className="w-full py-4"
                disabled={status === "loading"}
              >
                {status === "loading" ? "Joining..." : "Join Waitlist"}
              </Button>

              {status === "success" && (
                <p className="text-green-600 text-sm text-center">
                  You’re on the list! We’ll be in touch soon.
                </p>
              )}
              {status === "error" && (
                <p className="text-destructive text-sm text-center">
                  Something went wrong. Please try again.
                </p>
              )}
            </form>
          </div>
        </section>
      </main>
    </>
  );
}
