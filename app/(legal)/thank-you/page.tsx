import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CheckCircle2 } from 'lucide-react';
import FadeIn from '@/components/FadeIn';

export default function ThankYouPage() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center p-4">
      <FadeIn>
        <div className="max-w-md w-full text-center p-8 space-y-6">
          <div className="flex justify-center">
            <div className="rounded-full bg-green-100 p-3 dark:bg-green-900/30">
              <CheckCircle2 className="h-12 w-12 text-green-600 dark:text-green-400" />
            </div>
          </div>
          <div className="space-y-2">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
              You&apos;re on the list!
            </h1>
            <p className="text-muted-foreground text-lg">
              We&apos;ve verified your details. Watch your inbox—we&apos;ll be
              in touch soon.
            </p>
          </div>
          <div className="pt-4">
            <Button
              asChild
              className="w-full py-6 text-lg rounded-2xl bg-black text-white hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200 transition-all hover:scale-[1.02]"
            >
              <Link href="/">Back to Home</Link>
            </Button>
          </div>
        </div>
      </FadeIn>
    </div>
  );
}
