import Image from 'next/image';
import Logo from '@/public/logo.svg';
import { Button } from './ui/button';
import { ArrowDownToLine } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white">
      <div className="container mx-auto p-4 mt-12 pt-16">
        <div className="flex flex-col lg:flex-row lg:justify-between space-y-4">
          <Link href="/" className="brand-logo inline-block">
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
                  <Link href="/">About Us</Link>
                </li>
                <li>
                  <Link href="mailto:contact@seenu.io">Contact Us</Link>
                </li>
              </ul>
            </nav>
            <nav>
              <span className="inline-block text-sm">legal</span>
              <ul className="flex flex-col gap-3">
                <li>
                  <Link href={'/privacy'}>Privacy Policy</Link>
                </li>
                <li>
                  <Link href="/terms">Terms & Conditions</Link>
                </li>
                <li>
                  <Link href="/safety">Safety Guidelines</Link>
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
