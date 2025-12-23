import Image from 'next/image';
import OrbitingUserRing from './OrbitingUserRing';
import FadeIn from './FadeIn';
import Logo from '@/public/logo.svg';
import TopFive from './TopFive';
export default function Hero() {
  return (
    <section id="hero" className="bg-black/90 pb-16" aria-label="Hero">
      <h1 className="sr-only">SeenU - Connect with people nearby</h1>
      <div className="max-w-7xl overflow-hidden mx-auto relative pt-18 pb-8 px-6">
        {/* Mobile and tablet: stacked layout */}
        <div className="lg:hidden grid place-items-center">
          <OrbitingUserRing />
          <FadeIn delay={0.1} className="mb-6 w-full">
            <Image
              src={Logo}
              alt="SeenU Logo"
              className="w-full h-auto"
              width={1280}
              height={250}
              priority
            />
          </FadeIn>
          <TopFive />
        </div>

        {/* Large screens: logo behind ring, same line */}
        <div className="hidden lg:grid place-items-center">
          <div className="relative w-full flex items-center justify-center">
            {/* Logo - positioned absolutely to span across, behind the ring */}
            <FadeIn
              delay={0.1}
              className="absolute inset-0 flex items-center justify-center z-0"
            >
              <Image
                src={Logo}
                alt="SeenU Logo"
                className="w-full h-auto max-w-7xl"
                width={1280}
                height={250}
                priority
              />
            </FadeIn>

            {/* Orbiting Ring - centered, in front of logo */}
            <div className="relative z-10">
              <OrbitingUserRing />
            </div>
          </div>

          <TopFive />
        </div>
      </div>
    </section>
  );
}
