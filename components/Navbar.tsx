'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Logo from '@/public/logo.svg';
import { ArrowDownToLine } from 'lucide-react';
import DarkLogo from '@/public/logo-dark.svg';
import Image from 'next/image';
import { Button } from './ui/button';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Hide when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 10) {
        setIsHidden(true);
        setIsMenuOpen(false); // close mobile menu if user starts scrolling down
      } else {
        setIsHidden(false);
      }

      setScrolled(currentScrollY > 300);
      setLastScrollY(currentScrollY);
    };

    const handleResize = () => {
      // Close menu if switching to desktop
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [lastScrollY]);

  return (
    <>
      <header
        className={`fixed mx-auto w-full top-0 left-0 right-0 z-50 transition-colors duration-300 ease-out ${isHidden ? '-translate-y-full' : 'translate-y-0'
          } `}
      >
        <nav className="">
          <div className="container mx-auto py-4 px-4 lg:px-0 flex h-16 items-center justify-between">
            {/* Brand */}
            <div className="flex items-center gap-3 pl-3.5">
              <Link href="/" className="flex items-center gap-3">
                <Image
                  src={scrolled ? DarkLogo : Logo}
                  alt="SeenU Logo"
                  width={100}
                  height={80}
                />
              </Link>
            </div>

            {/* Desktop links */}
            <div className="hidden lg:flex items-center gap-4 pr-4">
              <Link
                href="/waitlist"
                className="text-sm font-medium text-gray-700 hover:text-pink-500 dark:text-gray-300 dark:hover:text-pink-400 transition-colors"
              >
                Join Android Waitlist
              </Link>
              <Link
                href="https://apps.apple.com/us/app/seenu/id6749520048"
                target="_blank"
              >
                <Button className="rounded-full px-6 bg-black text-white hover:bg-black/80 dark:bg-white dark:text-black dark:hover:bg-white/90">
                  Download App
                </Button>
              </Link>
              <Link href="/app/page.tsx">
                <Button className="rounded-full px-6 bg-black text-white hover:bg-black/80 dark:bg-white dark:text-black dark:hover:bg-white/90">
                  Home
                </Button>
              </Link>
            </div>

            {/* Mobile hamburger */}
            <div className="flex gap-4 lg:hidden pr-2">
              <button
                aria-label="Toggle navigation"
                aria-expanded={isMenuOpen}
                onClick={() => setIsMenuOpen((v) => !v)}
                className="inline-flex items-center justify-center  bg-white/80 rounded-md p-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-200 dark:hover:bg-neutral-800 transition-colors"
              >
                <ArrowDownToLine />
              </button>
              <button
                aria-label="Toggle navigation"
                aria-expanded={isMenuOpen}
                onClick={() => setIsMenuOpen((v) => !v)}
                className="inline-flex items-center justify-center  bg-white/80 rounded-md p-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-200 dark:hover:bg-neutral-800 transition-colors"
              >
                <svg
                  className={`h-6 w-6 ${isMenuOpen ? 'hidden' : 'block'}`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5"
                  />
                </svg>
                <svg
                  className={`h-6 w-6 ${isMenuOpen ? 'block' : 'hidden'}`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile menu overlay */}
      {isMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 z-40 bg-pink-200/40 backdrop-blur-sm transition-opacity duration-200"
          onClick={() => setIsMenuOpen(false)}
          aria-hidden="true"
        />
      )}
      <div
        className={`lg:hidden fixed top-24 inset-x-0 z-50 origin-top transition-transform duration-300 ease-out ${isMenuOpen ? 'translate-y-0' : '-translate-y-4 pointer-events-none'
          }`}
      >
        <div
          className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ${isMenuOpen ? 'opacity-100' : 'opacity-0'
            } transition-opacity duration-200`}
        >
          <div className="rounded-xl bg-white/90 backdrop-blur-md shadow-md ring-1 ring-black/5 dark:bg-neutral-900/80">
            <div className="space-y-1 p-3">
              <Link
                href="/waitlist"
                className="block rounded-lg px-3 py-2 text-sm font-medium text-gray-800 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-neutral-800 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Join Android Waitlist
              </Link>
              <Link
                href="https://apps.apple.com/us/app/seenu/id6749520048"
                target="_blank"
                className="mt-2 block rounded-lg bg-gray-900 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-black/80 dark:bg-white dark:text-black dark:hover:bg-white/90 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Download App
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Spacer to prevent content jump (same height as navbar) */}
      {/*<div className="h-16" />*/}
    </>
  );
};

export default Navbar;
