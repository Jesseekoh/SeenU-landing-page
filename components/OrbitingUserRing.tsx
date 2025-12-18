import React from 'react';
import Image from 'next/image';

// Placeholder data
const CENTER_IMAGE = 'https://randomuser.me/api/portraits/men/2.jpg';

const INNER_CIRCLE_USERS = [
  'https://randomuser.me/api/portraits/men/13.jpg',
  'https://randomuser.me/api/portraits/women/14.jpg',
  'https://randomuser.me/api/portraits/men/15.jpg',
  'https://randomuser.me/api/portraits/men/16.jpg',
  'https://randomuser.me/api/portraits/women/17.jpg',
];

const OUTER_CIRCLE_USERS = [
  'https://randomuser.me/api/portraits/women/18.jpg',
  'https://randomuser.me/api/portraits/men/19.jpg',
  'https://randomuser.me/api/portraits/women/20.jpg',
  'https://randomuser.me/api/portraits/men/21.jpg',
  'https://randomuser.me/api/portraits/women/22.jpg',
  'https://randomuser.me/api/portraits/men/23.jpg',
];

const OrbitingUserRing = () => {
  return (
    <div className="relative flex h-[450px] w-[450px] w-full flex-col items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] " />

      {/* --- Central Image --- */}
      {/* Mobile: h-16 w-16 (64px)
         MD/LG: h-28 w-28 (112px) - Scaled down slightly to fit the tighter 450px constraint
      */}
      <div className="relative z-20 h-16 w-16 rounded-full border-2 shadow-[0_0_30px_rgba(236,72,153,0.6)] md:h-28 md:w-28">
        <Image
          src={CENTER_IMAGE}
          unoptimized
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
        className="absolute z-10 flex animate-spin-slow items-center justify-center rounded-full border border-white/20 shadow-[0_0_25px_rgba(255,255,255,0.4)]
        h-[130px] w-[130px] [--radius:65px]
        md:h-[240px] md:w-[240px] md:[--radius:120px]"
      >
        {INNER_CIRCLE_USERS.map((user, index) => {
          const angle = (360 / INNER_CIRCLE_USERS.length) * index;
          return (
            <div
              key={index}
              className="absolute left-1/2 top-1/2 -ml-5 -mt-5 h-10 w-10 rounded-full border-2 border-white/80 shadow-lg md:-ml-6 md:-mt-6 md:h-12 md:w-12"
              style={{
                transform: `rotate(${angle}deg) translate(var(--radius))`,
              }}
            >
              <div className="relative h-full w-full overflow-hidden rounded-full">
                <Image
                  src={user}
                  alt={`Inner User ${index}`}
                  unoptimized
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
        className="absolute z-0 flex animate-spin-reverse-slow items-center justify-center rounded-full border border-white/20 shadow-[0_0_25px_rgba(255,255,255,0.4)]
        h-[230px] w-[230px] [--radius:115px]
        md:h-[380px] md:w-[380px] md:[--radius:190px]"
      >
        {OUTER_CIRCLE_USERS.map((user, index) => {
          const angle = (360 / OUTER_CIRCLE_USERS.length) * index;
          return (
            <div
              key={index}
              className="absolute left-1/2 top-1/2 -ml-6 -mt-6 h-12 w-12 rounded-full border-2 border-white/60 shadow-lg md:-ml-8 md:-mt-8 md:h-16 md:w-16"
              style={{
                transform: `rotate(${angle}deg) translate(var(--radius))`,
              }}
            >
              <div className="relative h-full w-full overflow-hidden rounded-full">
                <Image
                  src={user}
                  alt={`Outer User ${index}`}
                  fill
                  unoptimized
                  className="object-cover"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OrbitingUserRing;
