import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function ThankYouPage() {
  return (
    <div className="flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full text-center p-6">
        <h1 className="text-3xl font-bold text-green-600">
          You&apos;re on the list!
        </h1>
        <p className="text-muted-foreground">
          Thanks for joining the waitlist. We&apos;ll verify your details and
          let you know when SeenU launches on Android!
        </p>
        <Button asChild className="w-full">
          <Link href="/">Back to Home</Link>
        </Button>
      </div>
    </div>
  );
}
