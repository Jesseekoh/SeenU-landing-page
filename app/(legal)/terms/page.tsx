import Link from 'next/link';
import DarkLogo from '@/public/logo-dark.svg';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
export default function TermsPage() {
  return (
    <>
      <div className="container mx-auto max-w-215 py-10 space-y-4">
        <Link href="/" className="inline-block">
          <Image src={DarkLogo} alt="Brand logo" width={100} height={100} />
        </Link>
        <div>
          <h1 className="text-3xl font-bold">Terms &amp; Conditions</h1>
          <p className="text-neutral-500">Effective date: August 23, 2025</p>
        </div>

        <Card>
          <CardContent className="space-y-4">
            <p>
              These Terms &amp; Conditions (“Terms”) govern your access to and
              use of SeenU, including our website, apps, and services
              (collectively, the “Service”). By using the Service, you agree to
              these Terms.
            </p>

            <h2 className="text-xl font-bold">1) Who We Are</h2>
            <p>
              SeenU Inc., based in Georgia, USA. Contact:{' '}
              <a href="mailto:ify@seenu.io">ify@seenu.io</a>.
            </p>

            <h2 className="text-xl font-bold">2) Eligibility</h2>
            <ul className="list-disc list-inside pl-8">
              <li>
                You must be at least <strong>14 years old</strong> to use the
                Service. If you are under 18, you need consent from a parent or
                legal guardian where required by law.
              </li>
              <li>
                You must comply with all applicable laws. You may not use the
                Service if you are prohibited from doing so under applicable
                laws.
              </li>
            </ul>

            <h2 className="text-xl font-bold">3) Your Account</h2>
            <ul className="list-disc list-inside pl-8">
              <li>
                You are responsible for your account and for all activity that
                occurs under it. Keep your credentials secure.
              </li>
              <li>
                You agree to provide accurate information and keep it updated.
              </li>
            </ul>

            <h2 className="text-xl font-bold">4) Proximity &amp; Safety</h2>
            <ul className="list-disc list-inside pl-8">
              <li>
                SeenU helps you discover people nearby using proximity
                technologies (e.g., Bluetooth). Do not use the Service while
                driving or in unsafe situations.
              </li>
              <li>
                Be mindful when meeting others. We do not conduct criminal
                background checks. Use common sense and follow safety best
                practices.
              </li>
            </ul>

            <h2 className="text-xl font-bold">5) Acceptable Use</h2>
            <p>You agree not to engage in the following:</p>
            <ul className="list-disc list-inside pl-8">
              <li>
                Harassment, hate speech, threats, stalking, or any unlawful
                activity.
              </li>
              <li>
                Spamming, scraping, data harvesting, or reverse engineering our
                software.
              </li>
              <li>
                Uploading malware or interfering with the Service’s operation.
              </li>
              <li>
                Impersonating another person or misrepresenting your
                affiliation.
              </li>
            </ul>

            <h2 className="text-xl font-bold">6) Your Content</h2>
            <ul className="list-disc list-inside pl-8">
              <li>
                You own the content you post. You grant SeenU a worldwide,
                non-exclusive, royalty-free license to host, store, display,
                reproduce, modify (e.g., for formatting), and distribute your
                content solely to operate, improve, and promote the Service.
              </li>
              <li>
                You represent you have the rights to the content you post and
                that it does not infringe others’ rights or violate laws.
              </li>
            </ul>

            <h2 className="texth2l font-bold">7) Our Rights</h2>
            <ul className="list-disc list-inside pl-8">
              <li>
                The Service, including software, visual interfaces, graphics,
                trademarks, and logos, is owned by SeenU and our licensors and
                protected by law.
              </li>
              <li>
                We grant you a limited, revocable, non-transferable license to
                use the app and website solely for their intended purposes and
                in accordance with these Terms.
              </li>
            </ul>

            <h2 className="text-xl font-bold">8) Third-Party Services</h2>
            <p>
              We may link to or integrate with third-party services. We are not
              responsible for their content, policies, or practices.
            </p>

            <h2 className="text-xl font-bold">9) Termination</h2>
            <ul className="list-disc list-inside pl-8">
              <li>
                You may stop using the Service at any time. You can also request
                deletion of your account by contacting us at{' '}
                <a href="mailto:ify@seenu.io">ify@seenu.io</a>.
              </li>
              <li>
                We may suspend or terminate your access if you violate these
                Terms, pose a risk, or for other legitimate reasons.
              </li>
            </ul>

            <h2 className="text-xl font-bold">10) Disclaimers</h2>
            <p>
              THE SERVICE IS PROVIDED “AS IS” AND “AS AVAILABLE” WITHOUT
              WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED. WE DISCLAIM ALL
              WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE,
              AND NON-INFRINGEMENT.
            </p>

            <h2 className="text-xl font-bold">11) Limitation of Liability</h2>
            <p>
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, SEENU AND ITS AFFILIATES
              WILL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL,
              CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR
              REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF
              DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM
              (A) YOUR USE OF OR INABILITY TO USE THE SERVICE; (B) ANY CONDUCT
              OR CONTENT OF OTHER USERS; OR (C) UNAUTHORIZED ACCESS, USE, OR
              ALTERATION OF YOUR CONTENT. OUR AGGREGATE LIABILITY FOR ALL CLAIMS
              RELATING TO THE SERVICE WILL NOT EXCEED THE GREATER OF $100 OR THE
              AMOUNT YOU PAID US, IF ANY, IN THE PAST 12 MONTHS.
            </p>

            <h2 className="text-xl font-bold">12) Indemnity</h2>
            <p>
              You agree to defend, indemnify, and hold harmless SeenU and its
              affiliates from any claims, liabilities, damages, losses, and
              expenses arising out of or in any way connected with your use of
              the Service or your violation of these Terms.
            </p>

            <h2 className="text-xl font-bold">
              13) Governing Law &amp; Dispute Resolution
            </h2>
            <p>
              These Terms are governed by the laws of the State of Georgia,
              without regard to conflict of laws principles. Any dispute will be
              resolved in the state or federal courts located in Fulton County,
              Georgia, except that either party may seek injunctive or equitable
              relief in any court of competent jurisdiction.
            </p>

            <h2 className="text-xl font-bold">14) Changes to These Terms</h2>
            <p>
              We may update these Terms from time to time. If changes are
              material, we will notify you in the app or on our website. The
              “Effective date” above reflects the latest version.
            </p>

            <h2 className="text-xl font-bold">15) Contact</h2>
            <p>
              Questions? Contact us at{' '}
              <a href="mailto:ify@seenu.io">ify@seenu.io</a> or mail: SeenU
              Inc., 8735 Dunwoody Place, Ste N, Atlanta, GA 30350, USA.
            </p>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
