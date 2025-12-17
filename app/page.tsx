// import Image from "next/image";
import { ArrowDownToLine } from "lucide-react";
import DarkLogo from "@/public/logo-dark.svg";
import Logo from "@/public/logo.svg";
import Mockup from "@/public/iMockup - iPhone 15 Pro Max(2) Image.webp";
import { SiInstagram, SiAppstore } from "@icons-pack/react-simple-icons";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import Image from "next/image";
import Link from "next/link";
import OrbitingUserRing from "@/components/OrbitingUserRing";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <>
      <Navbar />
      <div className="flex min-h-screen font-sans">
        <main className="flex w-full flex-col">
          <section id="hero" className="bg-black">
            <div className="container mx-auto relative pt-10 lg:pt-24 pb-20 px-6">
              <OrbitingUserRing />

              <div className="max-w-[800px] mx-auto text-center relative z-10">
                <Image
                  src={Logo}
                  alt="logo"
                  className="w-full h-auto"
                  width={600}
                  height={250}
                />
              </div>
            </div>
          </section>

          <section id="misc">
            <div className="container mx-auto px-4 pt-24">
              {/*<div className="flex flex-col-reverse lg:flex-row-reverse lg:gap-10">*/}
              <div className="grid grid-cols-1 gap-8 md:gap-12 lg:gap-20 md:grid-cols-2">
                <div className="space-y-6 self-center">
                  <h3 className="text-3xl lg:text-5xl font-semibold">
                    Connect with people nearby in real life.
                  </h3>
                  <p className="text-lg lg:text-xl">
                    Instead of likes, followers, and endless scrolling, SeenU
                    shows you classmates, coworkers, and neighbors all around
                    you — so real moments can actually begin.
                  </p>
                  <Button className="py-4">
                    <ArrowDownToLine />
                    Download SeenU
                  </Button>
                </div>
                <Image
                  className="rounded-2xl w-full  block place-self-center"
                  alt="people"
                  src={
                    "https://bumble.com/_next/image/?url=%2Fbumble-brand-assets%2Fproject-love%2Fassets%2Fmeet-in-person.jpg&w=640&q=75"
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
                      alt="people"
                      src={
                        "https://bumble.com/_next/image/?url=%2Fbumble-brand-assets%2Fproject-love%2Fassets%2Fmeet-in-person.jpg&w=640&q=75"
                      }
                      width={1280}
                      height={720}
                    />
                    <div className="self-center space-y-4">
                      <h3 className="text-2xl lg:text-5xl md:text-3xl font-semibold">
                        Start the chat in person.
                      </h3>
                      <p className="text-lg lg:text-xl">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Consequatur tempora rerum eos!
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <div className="rounded-3xl bg-pink-200 overflow-hidden">
                  <div className="relative flex p-10 flex-col lg:flex-row gap-6">
                    {/* Left content */}
                    <div className="z-10 max-w-md">
                      <h3 className="text-3xl lg:text-5xl font-semibold leading-tight text-black">
                        Ready to join thousands already chatting on SeeU?
                      </h3>

                      <Button className="mt-6 flex items-center gap-2 rounded-2xl bg-black px-6 py-5 text-white hover:bg-black/90">
                        Download on iOS
                        <ArrowDownToLine className="h-4 w-4" />
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
            </div>
          </section>
        </main>
      </div>

      <Footer />
    </>
  );
}
