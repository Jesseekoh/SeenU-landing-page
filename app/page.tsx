// import Image from "next/image";
import { ArrowDownToLine } from 'lucide-react';
import DarkLogo from '@/public/logo-dark.svg';
import Logo from '@/public/logo.svg';
import Mockup from '@/public/iMockup - iPhone 15 Pro Max(2) Image.webp';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import OrbitingUserRing from '@/components/OrbitingUserRing';
import Footer from '@/components/Footer';
import ReviewCard from '@/components/ReviewCard';
import ReviewsCarousel from '@/components/ReviewsCarousel';
import FadeIn from '@/components/FadeIn';
import Radar from '@/components/Radar';
import StackedCards from '@/components/StackedCards';

const REVIEWS = [
  {
    review:
      'love it that the app allows me to connect with people in my area and around the world.',
    authorName: 'Paige M.',
    rating: 5,
    avatarSrc: '/avatars/sarah.jpg',
  },
  {
    review:
      'Great to have all my friends and colleagues in one place very futuristic application!',
    authorName: 'Sean B.',
    rating: 5,
    avatarSrc: '/avatars/mike.jpg',
  },
  {
    review:
      'This app is interesting creative and | love the first version looking to see more updates.',
    authorName: 'Brook W.',
    rating: 5,
    avatarSrc: '/avatars/emily.jpg',
  },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="flex min-h-screen font-sans">
        <main className="flex w-full flex-col">
          <section id="hero" className="bg-pink-400/70" aria-label="Hero">
            <h1 className="sr-only">SeenU - Connect with people nearby</h1>
            <div className="container overflow-hidden mx-auto grid place-items-center relative pt-18 lg:pt-24 pb-8 px-6">
              <OrbitingUserRing />

              <div className="w-full mx-auto text-center relative mt-4 z-10">
                <FadeIn delay={0.2}>
                  <Image
                    src={Logo}
                    // src={DarkLogo}
                    alt="SeenU Logo"
                    className="w-full h-auto"
                    width={1280}
                    height={250}
                  />
                </FadeIn>
              </div>
              {/* <Radar /> */}
            </div>
          </section>

          <section id="misc" aria-label="Features">
            <div className="container mx-auto px-4 pt-24 space-y-12 lg:space-y-24 mb-12 lg:mb-16">
              <div className="grid grid-cols-1 gap-8 md:gap-12 lg:gap-20 md:grid-cols-2">
                <FadeIn
                  className="space-y-6 self-center order-last md:order-first"
                  direction="right"
                >
                  <h2 className="text-3xl lg:text-5xl font-semibold">
                    Connect with people nearby in real life.
                  </h2>
                  <p className="text-lg lg:text-xl">
                    SeenU is designed to help you connect and meet people at
                    live events and real-world spaces. With friend-adding
                    features, you can stay connected with people you meet,
                    discover and connect with others nearby in real time, see
                    who’s around, share updates, and build your local community
                    with classmates, neighbors, and friends.
                  </p>
                  <Button
                    asChild
                    className="rounded-2xl bg-black text-white px-12! py-6 text-lg font-medium transition-transform duration-200 ease-in-out hover:scale-105 hover:bg-neutral-800 active:scale-95"
                  >
                    <Link
                      href={'https://apps.apple.com/us/app/seenu/id6749520048'}
                    >
                      Download on iOS
                      <ArrowDownToLine className="h-4 w-4" />
                    </Link>
                  </Button>
                </FadeIn>
                <FadeIn
                  className="place-self-center"
                  delay={0.2}
                  direction="left"
                >
                  <div className="w-full overflow-hidden">
                    {/* <StackedCards /> */}
                  </div>
                  <Image
                    className="rounded-2xl w-full block"
                    alt="Group of friends meeting in person"
                    src={
                      'https://scontent.cdninstagram.com/v/t51.82787-15/539394714_17892766812303075_126716939138869554_n.jpg?stp=dst-jpg_e35_s640x640_sh0.08_tt6&_nc_cat=111&ig_cache_key=MzcwNzYzNjU3Mzc4NzU3MDkyOA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4OTYwLnNkci5DMyJ9&_nc_ohc=IV940pJimjEQ7kNvwGSIppo&_nc_oc=AdmlYKk0iUYUyQiHt-WG1xGoSOhMVLazbqrcTFepjDL6vfQf0Ls7bqzhyQ-eBHhqkmk&_nc_ad=z-m&_nc_cid=1080&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=SmULT62WXHW35loz1VkPCA&oh=00_AfkSPjNaiPB4G4hAM7n9HiuGbpr7OExsz_W--16BgcR8Hg&oe=6948AE49'
                    }
                    width={1280}
                    height={720}
                  />
                </FadeIn>
              </div>
              <section
                id="reviews"
                className="py-20 bg-neutral-200 rounded-2xl shadow-md"
              >
                <div className="container mx-auto px-6">
                  <FadeIn>
                    <div className="text-center mb-16 space-y-4">
                      <h2 className="text-3xl lg:text-5xl font-semibold">
                        Loved by users everywhere.
                      </h2>
                      <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                        See what our community has to say about making real
                        connections.
                      </p>
                    </div>
                  </FadeIn>

                  {/* Desktop Grid Layout */}
                  <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {REVIEWS.map((review, i) => (
                      <ReviewCard key={i} {...review} />
                    ))}
                  </div>

                  {/* Mobile Carousel Layout */}
                  <div className="md:hidden">
                    <ReviewsCarousel reviews={REVIEWS} />
                  </div>
                </div>
              </section>
              {/* Waitlist CTA Section */}
              <FadeIn delay={0.2}>
                <div className="rounded-3xl bg-neutral-900 text-white p-10 md:p-16 text-center space-y-6">
                  <h2 className="text-3xl lg:text-5xl font-semibold">
                    Android user? We haven&apos;t forgotten you.
                  </h2>
                  <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
                    Sign up for our waitlist to be the first to know when SeenU
                    keeps it real on Android.
                  </p>
                  <Button
                    asChild
                    className="rounded-2xl bg-white text-black hover:bg-neutral-200 px-8 py-6 text-lg font-medium"
                  >
                    <Link href="/waitlist">Join the Waitlist</Link>
                  </Button>
                </div>
              </FadeIn>
              <FadeIn delay={0.4}>
                <div className="rounded-3xl bg-pink-200 overflow-hidden">
                  <div className="relative flex p-10 flex-col lg:flex-row gap-6">
                    {/* Left content */}
                    <div className="z-10 max-w-md text-black space-y-4">
                      <h2 className="text-3xl lg:text-5xl font-semibold leading-tight">
                        Ready to join thousands already chatting on SeeU?
                      </h2>

                      <Button
                        asChild
                        className="rounded-2xl bg-black text-white px-12! py-6 text-lg font-medium transition-transform duration-200 ease-in-out hover:scale-105 hover:bg-neutral-800 active:scale-95"
                      >
                        <Link
                          href={
                            'https://apps.apple.com/us/app/seenu/id6749520048'
                          }
                        >
                          Download on iOS
                          <ArrowDownToLine className="h-4 w-4" />
                        </Link>
                      </Button>
                    </div>

                    {/* Right mockup */}
                    <div className="pointer-events-none -mb-10 lg:object-cover  lg:origin-top">
                      <Image
                        src={Mockup}
                        alt="SeeU app mockup"
                        className="object-contain"
                        priority
                      />
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </section>
        </main>
      </div>

      <Footer />
    </>
  );
}
