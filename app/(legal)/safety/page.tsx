import { Card, CardContent } from "@/components/ui/card";
import DarkLogo from "@/public/logo-dark.svg";
import Image from "next/image";
import Link from "next/link";

export default function SafetyPage() {
  return (
    <>
      <div className="container mx-auto max-w-215 py-10 space-y-4">
        <Link href="/" className="inline-block">
          <Image src={DarkLogo} alt="Brand logo" width={100} height={100} />
        </Link>
        <div>
          <h1 className="text-3xl font-bold">
            Child Safety Standards for SeenU
          </h1>
          <p className="text-neutral-500">Last Updated: October 2, 2025</p>
        </div>

        <Card>
          <CardContent className="space-y-4">
            <p>
              Seenu is committed to protecting children and strictly prohibits
              any form of child sexual abuse material (CSAM), exploitation, or
              endangerment of minors on our platform.
            </p>

            <h2 className="text-xl font-bold">Our standards include:</h2>

            <ul className="list-disc list-inside pl-8">
              <li>
                We do not allow the creation, sharing, or promotion of CSAM or
                any content that exploits or endangers children.
              </li>
              <li>
                We promptly report any detected CSAM to the National Center for
                Missing &amp; Exploited Children (NCMEC) and relevant law
                enforcement agencies.
              </li>
              <li>
                We remove accounts and content that violate these standards.
              </li>
              <li>
                We encourage our users to report any suspicious activity or
                harmful content through in-app reporting tools or by contacting
                us directly.
              </li>
            </ul>
            <h3 className="text-xl font-bold">Contact</h3>
            <p>
              If you have concerns about child safety on Seenu, please contact
              us:
            </p>
            <p>
              Email:{" "}
              <Link className="text-pink-400" href={"contact@seenu.io"}>
                contact@seenu.io
              </Link>
            </p>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
