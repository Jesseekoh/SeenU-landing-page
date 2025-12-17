// import Image from "next/image";
import { ArrowDownToLine } from 'lucide-react';
import Logo from '@/public/logo.svg';
import Mockup from '@/public/iMockup - iPhone 15 Pro Max(2) Image.webp';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import OrbitingUserRing from '@/components/OrbitingUserRing';
import Footer from '@/components/Footer';
import ReviewCard from '@/components/ReviewCard';

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
          <section id="hero" className="bg-black" aria-label="Hero">
            <h1 className="sr-only">SeenU - Connect with people nearby</h1>
            <div className="container mx-auto relative pt-10 lg:pt-24 pb-20 px-6">
              <OrbitingUserRing />

              <div className="max-w-[800px] mx-auto text-center relative z-10">
                <Image
                  src={Logo}
                  alt="SeenU Logo"
                  className="w-full h-auto"
                  width={600}
                  height={250}
                />
              </div>
            </div>
          </section>

          <section id="misc" aria-label="Features">
            <div className="container mx-auto px-4 pt-24 space-y-12 lg:space-y-24 mb-12 lg:mb-16">
              {/*<div className="flex flex-col-reverse lg:flex-row-reverse lg:gap-10">*/}
              <div className="grid grid-cols-1 gap-8 md:gap-12 lg:gap-20 md:grid-cols-2">
                <div className="space-y-6 self-center order-last md:order-first">
                  <h2 className="text-3xl lg:text-5xl font-semibold">
                    Connect with people nearby in real life.
                  </h2>
                  <p className="text-lg lg:text-xl">
                    Instead of likes, followers, and endless scrolling, SeenU
                    shows you classmates, coworkers, and neighbors all around
                    you — so real moments can actually begin.
                  </p>
                  <Button asChild className="px-8! rounded-2xl py-6">
                    <Link
                      href={'https://apps.apple.com/us/app/seenu/id6749520048'}
                    >
                      <ArrowDownToLine />
                      Download SeenU on IOS
                    </Link>
                  </Button>
                </div>
                <Image
                  className="rounded-2xl w-full  block place-self-center"
                  alt="Group of friends meeting in person"
                  src={
                    'https://bumble.com/_next/image/?url=%2Fbumble-brand-assets%2Fproject-love%2Fassets%2Fmeet-in-person.jpg&w=640&q=75'
                  }
                  width={1280}
                  height={720}
                />
              </div>

              <div className="mt-10 space-y-12">
                <Card className="rounded-3xl bg-neutral-200">
                  <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-20">
                    <Image
                      className="rounded-2xl w-full block"
                      alt="People chatting outdoors"
                      src={
                        'https://bumble.com/_next/image/?url=%2Fbumble-brand-assets%2Fproject-love%2Fassets%2Fmeet-in-person.jpg&w=640&q=75'
                      }
                      width={1280}
                      height={720}
                    />
                    <div className="self-center space-y-4">
                      <h2 className="text-2xl lg:text-5xl md:text-3xl font-semibold">
                        Start the chat in person.
                      </h2>
                      <p className="text-lg lg:text-xl">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Consequatur tempora rerum eos!
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <section id="reviews" className="py-20 bg-neutral-100">
                <div className="container mx-auto px-6">
                  <div className="text-center mb-16 space-y-4">
                    <h2 className="text-3xl lg:text-5xl font-semibold">
                      Loved by students everywhere.
                    </h2>
                    <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                      See what our community has to say about making real
                      connections.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {REVIEWS.map((review, i) => (
                      <ReviewCard key={i} {...review} />
                    ))}
                  </div>
                </div>
              </section>
              <div className="rounded-3xl bg-pink-200 overflow-hidden">
                <div className="relative flex p-10 flex-col lg:flex-row gap-6">
                  {/* Left content */}
                  <div className="z-10 max-w-md">
                    <h2 className="text-3xl lg:text-5xl font-semibold leading-tight text-black">
                      Ready to join thousands already chatting on SeeU?
                    </h2>

                    <Button
                      asChild
                      className="mt-6 flex items-center gap-2 rounded-2xl bg-black px-6 py-5 text-white hover:bg-black/90"
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
            </div>
          </section>
        </main>
      </div>

      <Footer />
    </>
  );
}
