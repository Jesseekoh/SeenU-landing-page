import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import DarkLogo from "@/public/logo-dark.svg";
import Image from "next/image";
export default function LegalLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <div className="px-4 flex-1">{children}</div>
        <Footer />
      </div>
    </>
  );
}
