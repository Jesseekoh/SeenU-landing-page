import Image from 'next/image';
import Logo from '@/public/logo.svg';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white">
      <div className="container mx-auto p-4 pt-10">
        <div className="flex flex-col lg:flex-row lg:justify-between space-y-4">
          <Link href="/" className="brand-logo inline-block mb-10">
            <Image
              src={Logo}
              alt="logo"
              className="w-full h-auto"
              width={600}
              height={250}
            />
          </Link>
          <div className="flex space-x-20">
            <nav className="space-y-3">
              <span className="inline-block text-sm">Company</span>
              <ul className="flex flex-col gap-3">
                <li>
                  <Link
                    href="https://www.instagram.com/seenu.io/"
                    className="hover:text-pink-300 transition-colors relative w-fit after:bottom-0 after:block after:content-[''] after:absolute after:h-[2px] after:bg-pink-300 after:w-full after:scale-x-0 hover:after:scale-x-100 after:transition after:duration-300 after:origin-left inline-flex justify-between items-center"
                  >
                    Instagram
                    <ArrowUpRight />
                  </Link>
                </li>
                <li>
                  <Link
                    href="mailto:contact@seenu.io"
                    className="hover:text-pink-300 transition-colors relative w-fit after:block after:content-[''] after:absolute after:h-[2px] after:bottom-0 after:bg-pink-300 after:w-full after:scale-x-0 hover:after:scale-x-100 after:transition after:duration-300 after:origin-left inline-flex justify-between items-center"
                  >
                    Contact Us
                    <ArrowUpRight />
                  </Link>
                </li>
              </ul>
            </nav>
            <nav className="space-y-3">
              <span className="inline-block text-sm">Legal</span>
              <ul className="flex flex-col gap-3">
                <li>
                  <Link
                    href={'/privacy'}
                    className="hover:text-pink-300 transition-colors relative w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-pink-300 after:w-full after:scale-x-0 hover:after:scale-x-100 after:transition after:duration-300 after:origin-left"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms"
                    className="hover:text-pink-300 transition-colors relative w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-pink-300 after:w-full after:scale-x-0 hover:after:scale-x-100 after:transition after:duration-300 after:origin-left"
                  >
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link
                    href="/safety"
                    className="hover:text-pink-300 transition-colors relative w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-pink-300 after:w-full after:scale-x-0 hover:after:scale-x-100 after:transition after:duration-300 after:origin-left"
                  >
                    Safety Guidelines
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="space-x-4 mt-12">
          <div className="flex items-center gap-4 mb-10"></div>
          <p className="text-center text-neutral-100">
            © 2025 SeenU Inc. — Atlanta, GA • ify@seenu.io
          </p>
        </div>
      </div>
    </footer>
  );
}
