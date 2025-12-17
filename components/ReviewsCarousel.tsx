'use client';
import React, { useCallback, useEffect, useState } from 'react';
import { EmblaCarouselType } from 'embla-carousel';
import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import { cn } from '@/lib/utils';
import ReviewCard from './ReviewCard';

interface Review {
  review: string;
  authorName: string;
  rating: number;
  avatarSrc: string;
}

interface ReviewsCarouselProps {
  reviews: Review[];
}

export default function ReviewsCarousel({ reviews }: ReviewsCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: 'start',
      slidesToScroll: 1,
    },
    [Autoplay({ delay: 4000, stopOnInteraction: true })]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onInit = useCallback((emblaApi: EmblaCarouselType) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on('reInit', onInit);
    emblaApi.on('reInit', onSelect);
    emblaApi.on('select', onSelect);
  }, [emblaApi, onInit, onSelect]);

  return (
    <div className="flex flex-col gap-6">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex -ml-4">
          {reviews.map((review, index) => (
            <div className="flex-[0_0_100%] min-w-0 pl-4" key={index}>
              <ReviewCard {...review} />
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center gap-2">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            className={cn(
              'h-2.5 w-2.5 rounded-full transition-all',
              index === selectedIndex ? 'bg-black w-6' : 'bg-neutral-100'
            )}
            onClick={() => emblaApi?.scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
