'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { getRandomAvatars } from '@/lib/utils';

const OrbitingUserRing = () => {
  // Generate unique avatars: 1 center + 5 inner + 6 outer = 12 total
  const [avatars] = useState(() => getRandomAvatars(12));

  const CENTER_IMAGE = avatars[0];
  const INNER_CIRCLE_USERS = avatars.slice(1, 6);
  const OUTER_CIRCLE_USERS = avatars.slice(6, 12);
  return (
    <div className="h-[429px] md:h-[450px] relative z-20 flex w-full mx-auto flex-col items-center justify-center scale-120 md:scale-100">
      {/* Background Gradient */}
      <div
        className="absolute lg:hidden h-[230px] w-[230px] [--radius:115px]
          md:h-[380px] md:w-[380px] md:[--radius:190px] my-auto mx-auto aspect-square rounded-full animate-pulse-ring inset-0 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] "
      />

      {/* --- Central Image --- */}
      {/* Mobile: h-16 w-16 (64px)
         MD/LG: h-28 w-28 (112px) - Scaled down slightly to fit the tighter 450px constraint
      */}
      <div className="relative z-10 h-17 w-17 rounded-full border-2 border-[rgba(255,209,220,0.85)] shadow-[0_0_30px_rgba(255,209,220,0.85)] md:h-28 md:w-28">
        <Image
          src={CENTER_IMAGE}
          alt="Center User"
          fill
          className="rounded-full object-cover"
        />
      </div>

      {/* --- Inner Orbit Ring --- */}
      {/* Mobile: 130px diameter (Radius 65px)
         MD/LG: 240px diameter (Radius 120px)
      */}
      <div
        className="absolute z-10 flex animate-spin-slow items-center justify-center rounded-full border border-[rgba(255,209,220,0.85)] shadow-[0_0_25px_rgba(255,209,220,0.85)]
        h-[130px] w-[130px] [--radius:65px]
        md:h-[240px] md:w-[240px] md:[--radius:120px]"
      >
        {INNER_CIRCLE_USERS.map((user, index) => {
          const angle = (360 / INNER_CIRCLE_USERS.length) * index;
          return (
            <div
              key={user}
              className="absolute left-1/2 top-1/2 -ml-5 -mt-5 h-10 w-10 rounded-full border-2 border-[rgba(255,209,220,0.85)] shadow-lg md:-ml-6 md:-mt-6 md:h-12 md:w-12"
              style={{
                transform: `rotate(${angle}deg) translate(var(--radius))`,
              }}
            >
              <div className="relative h-full w-full overflow-hidden rounded-full">
                <Image
                  src={user}
                  alt={`Inner User ${index}`}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* --- Outer Orbit Ring --- */}
      {/* Mobile: 230px diameter. With icons, total width ~278px.
         MD/LG: 380px diameter. With icons (64px), total width ~444px (Safely < 450px).
      */}
      <div
        className="absolute z-0 flex animate-orbit items-center justify-center rounded-full border border-[rgba(255,209,220,0.85)] shadow-[0_0_25px_rgba(255,209,220,0.85)]
        h-[230px] w-[230px] [--radius:115px]
        md:h-[380px] md:w-[380px] md:[--radius:190px] md:backdrop-blur-sm"
      >
        {OUTER_CIRCLE_USERS.map((user, index) => {
          const angle = (360 / OUTER_CIRCLE_USERS.length) * index;
          return (
            <div
              key={user}
              className="absolute  left-1/2 top-1/2 -ml-6 -mt-6 h-12 w-12 rounded-full shadow-lg md:-ml-8 md:-mt-8 md:h-16 md:w-16"
              style={{
                transform: `rotate(${angle}deg) translate(var(--radius))`,
              }}
            >
              <div className="relative h-full w-full overflow-hidden rounded-full animate-hover border-2 border-[rgba(255,209,220,0.85)]">
                {/* <div> */}
                <Image
                  src={user}
                  alt={`Outer User ${index}`}
                  fill
                  className="object-cover"
                />
                {/* </div> */}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OrbitingUserRing;
