import Navbar from "@/components/Navbar";
import { Card, CardContent } from "@/components/ui/card";
import DarkLogo from "@/public/logo-dark.svg";
import Image from "next/image";
import Link from "next/link";

export default function PrivacyPolicyPage() {
  return (
    <>
      <div className="container mx-auto max-w-215 py-10 space-y-4">
        <Navbar />
        <div>
          <h1 className="text-3xl font-bold">Privacy Policy</h1>
          <p className="text-neutral-500">Effective date: August 23, 2025</p>
        </div>

        <Card>
          <CardContent className="space-y-4">
            <p>
              Welcome to SeenU (“SeenU,” “we,” “us,” or “our”). We built SeenU
              to help people discover and connect with others nearby in real
              life. This Privacy Policy explains what information we collect,
              how we use it, and the choices you have.
            </p>
            <p className="notice p-4 bg-red-100 border-l-4 border-red-300 rounded-lg my-4">
              <strong>Summary:</strong> We collect account details you provide
              (like email and phone number), device and usage information, and{" "}
              <em>approximate</em> proximity signals (e.g., Bluetooth) to enable
              nearby discovery features. We do not sell your personal
              information.
            </p>

            <h2 className="text-xl font-bold">1) Information We Collect</h2>
            <h3 className="font-bold">a) Information you provide</h3>
            <ul className="list-disc list-inside pl-8">
              <li>
                <strong>Account info:</strong> email address and phone number
                (both required at sign up), password or auth tokens.
              </li>
              <li>
                <strong>Profile &amp; content:</strong> name, photo(s),
                status/mood, school or job, age (shown for privacy and clarity),
                comments you post.
              </li>
              <li>
                <strong>Support:</strong> messages you send us.
              </li>
            </ul>

            <h3 className="font-bold">b) Information we get automatically</h3>
            <ul className="list-disc list-inside pl-8">
              <li>
                <strong>Device &amp; usage data:</strong> app version, device
                type, OS, language, time zone, crash logs, and interactions with
                features.
              </li>
              <li>
                <strong>Approximate location &amp; proximity:</strong>{" "}
                Bluetooth/nearby signals and similar technologies that enable
                you to discover people close to you. We do <em>not</em>{" "}
                continuously track precise GPS location for this feature.
              </li>
              <li>
                <strong>Cookies &amp; similar tech:</strong> on our website to
                keep you signed in, remember settings, and measure traffic.
              </li>
            </ul>

            <h3 className="font-bold">c) Information from others</h3>
            <ul>
              <li>
                <strong>Contacts and other users:</strong> if a user interacts
                with you or mentions you in a comment.
              </li>
              <li>
                <strong>Service providers:</strong> analytics, crash reporting,
                and authentication partners may provide aggregated insights.
              </li>
            </ul>

            <h2 className="text-xl font-bold">2) How We Use Information</h2>
            <ul className="list-disc list-inside pl-8">
              <li>
                Provide, maintain, and improve SeenU and core features like
                nearby discovery.
              </li>
              <li>
                Verify accounts, protect safety and integrity, and prevent fraud
                or abuse.
              </li>
              <li>
                Communicate with you about updates, security alerts, and
                support.
              </li>
              <li>
                Personalize your experience (e.g., show relevant nearby
                profiles).
              </li>
              <li>
                Analyze usage to improve performance and plan new features.
              </li>
              <li>Comply with legal obligations.</li>
            </ul>

            <h2 className="text-xl font-bold">3) Sharing of Information</h2>
            <ul className="list-disc list-inside pl-8">
              <li>
                <strong>With other users:</strong> your profile elements you
                choose to make public (e.g., name, photos, mood/status,
                school/job, age, online indicator) may be visible to users
                nearby.
              </li>
              <li>
                <strong>Service providers:</strong> we share information with
                vendors who help us run the app (hosting, analytics, messaging,
                authentication) under contracts that require them to protect it.
              </li>
              <li>
                <strong>Safety, legal, and rights:</strong> we may share
                information if required by law, to enforce our terms, or to
                protect anyone’s safety.
              </li>
              <li>
                <strong>Business transfers:</strong> as part of a merger,
                acquisition, or asset sale, subject to this Policy.
              </li>
            </ul>

            <h2 className="text-xl font-bold">4) Your Choices &amp; Rights</h2>
            <ul className="list-disc list-inside pl-8">
              <li>
                <strong>Access, update, delete:</strong> you can update profile
                info in the app. To request a copy or deletion of your data,
                email <a href="mailto:ify@seenu.io">ify@seenu.io</a>.
              </li>
              <li>
                <strong>Permissions:</strong> you can disable Bluetooth/nearby
                permissions; core nearby features may not work without them.
              </li>
              <li>
                <strong>Marketing:</strong> you can unsubscribe from marketing
                emails via the link in those messages.
              </li>
            </ul>

            <h2 className="text-xl font-bold">5) Data Retention</h2>
            <p>
              We keep your information for as long as your account is active or
              as needed to provide SeenU and comply with legal obligations. You
              may request deletion at any time; we may keep limited records as
              required by law or for legitimate business purposes (e.g.,
              security logs).
            </p>

            <h2 className="text-xl font-bold">6) Children’s Privacy</h2>
            <p>
              SeenU is not intended for children under <strong>14</strong>, and
              we do not knowingly collect personal information from them. Users
              under 18 need a parent or legal guardian’s consent to use the
              service where required by law.
            </p>

            <h2 className="text-xl font-bold">7) Data Security</h2>
            <p>
              We use reasonable technical and organizational measures to protect
              your information. No method of transmission or storage is 100%
              secure; risks remain.
            </p>

            <h2 className="text-xl font-bold">8) International Users</h2>
            <p>
              We are based in the United States. By using SeenU, you understand
              your information will be processed in the U.S. and may be
              transferred to other countries with different data protection
              laws.
            </p>

            <h2 className="text-xl font-bold">9) Do Not Track</h2>
            <p>
              Your browser may send “Do Not Track” signals. We currently do not
              respond to these signals.
            </p>

            <h2 className="text-xl font-bold">10) Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. If we make
              material changes, we’ll notify you in the app or on our website.
              The “Effective date” above reflects the latest version.
            </p>

            <h2 className="text-xl font-bold">11) Contact Us</h2>
            <p>
              If you have questions or requests, contact us at{" "}
              <a href="mailto:ify@seenu.io">ify@seenu.io</a> or by mail at:
              SeenU Inc., 8735 Dunwoody Place, Ste N, Atlanta, GA 30350, USA.
            </p>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
