import { Star } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { cn } from '@/lib/utils';

interface ReviewCardProps {
  review: string;
  authorName: string;
  rating?: number;
  avatarSrc?: string;
  className?: string;
}

export default function ReviewCard({
  review,
  authorName,
  rating = 5,
  avatarSrc,
  className,
}: ReviewCardProps) {
  return (
    <Card
      className={cn(
        'h-full border-none bg-neutral-100/50 shadow-sm',
        className
      )}
    >
      <CardContent className="p-6 flex flex-col justify-between h-full gap-4">
        <div className="space-y-4">
          <div className="flex gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={cn(
                  'w-4 h-4',
                  i < rating
                    ? 'fill-yellow-400 text-yellow-400'
                    : 'fill-gray-200 text-gray-200'
                )}
              />
            ))}
          </div>
          <p className="text-neutral-700 leading-relaxed">
            &ldquo;{review}&rdquo;
          </p>
        </div>

        <div className="flex items-center gap-3 pt-4 border-t border-neutral-200/50">
          <span className="font-medium text-sm text-neutral-900">
            {authorName}
          </span>
        </div>
      </CardContent>
    </Card>
  );
}
