import Footer from '@/components/Footer';
import Link from 'next/link';
import DarkLogo from '@/public/logo-dark.svg';
import Image from 'next/image';
export default function LegalLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <header className="sticky top-0 z-50">
          <div className="container mx-auto py-4 px-2">
            <Link href={'/'} className="inline-block">
              <Image src={DarkLogo} alt="SeenU Logo" width={100} height={80} />
            </Link>
          </div>
        </header>
        <div className="px-4 flex-1">{children}</div>
        <Footer />
      </div>
    </>
  );
}
