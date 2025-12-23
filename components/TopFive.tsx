'use client';

import { useState } from 'react';
import Image from 'next/image';
import { getRandomAvatars } from '@/lib/utils';

export default function TopFive() {
  const [images, setImages] = useState<string[]>(getRandomAvatars(5));

  return (
    <div className="mt-10">
      <h1 className="text-white font-semibold text-center mb-3 text-lg">
        Top Five
      </h1>
      <div className="flex gap-2 flex-wrap justify-center">
        {images.map((image) => (
          <div
            key={image}
            className="relative w-15 h-15 lg:w-20 lg:h-20 border-2 border-white rounded-full dark:border-gray-800 overflow-hidden"
          >
            <Image
              src={image}
              alt="User avatar"
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
