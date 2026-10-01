// src/app/privacy/page.tsx
export const metadata = { title: "Privacy Policy" };

export default function PrivacyPage() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-3xl px-5 py-24 md:px-8">
        <h1 className="text-[32px] font-semibold tracking-tight text-foreground">
          Privacy Policy
        </h1>
        <p className="mt-2 text-[13.5px] text-muted-foreground">
          Last updated: September 2026
        </p>

        <div className="mt-8 space-y-7 text-[14.5px] leading-relaxed text-foreground/85">
          <p>
            Gymbym (&quot;we&quot;, &quot;us&quot;) respects your privacy. This
            policy explains what information we collect, how we use it, who we
            share it with, and the choices you have.
          </p>

          <div>
            <h2 className="text-[17px] font-semibold text-foreground">
              1. Information we collect
            </h2>
            <p className="mt-2">
              When you sign in, we collect your name, email address and phone
              number (as provided by your chosen sign-in method). We also store
              your selected role (member or gym owner), your location when you
              use the near-me search feature (only with your permission), and
              records of your gym check-ins.
            </p>
          </div>

          <div>
            <h2 className="text-[17px] font-semibold text-foreground">
              2. How we use it
            </h2>
            <p className="mt-2">
              We use your information to operate your account, show you relevant
              nearby gyms, process your subscription and payments, and
              communicate with you about your membership. Location data is used
              only to calculate distance to gyms and is not stored beyond what
              is needed for that search.
            </p>
          </div>

          <div>
            <h2 className="text-[17px] font-semibold text-foreground">
              3. Sharing with partner gyms
            </h2>
            <p className="mt-2">
              When you check in at a participating gym, that gym receives
              confirmation of your valid membership and check-in time so they
              can grant you access. Gyms do not receive your full account
              details, payment information, or contact details beyond what is
              necessary to verify your visit.
            </p>
          </div>

          <div>
            <h2 className="text-[17px] font-semibold text-foreground">
              4. Data storage and security
            </h2>
            <p className="mt-2">
              Your data is stored securely using Google Firebase. We apply
              reasonable technical and organisational measures to protect it,
              though no system can be guaranteed 100% secure. We do not sell
              your personal information to third parties.
            </p>
          </div>

          <div>
            <h2 className="text-[17px] font-semibold text-foreground">
              5. Your rights
            </h2>
            <p className="mt-2">
              You may request access to, correction of, or deletion of your
              personal data at any time by contacting us. We will respond to
              verified requests within a reasonable timeframe in accordance with
              applicable Indian data protection law.
            </p>
          </div>

          <div>
            <h2 className="text-[17px] font-semibold text-foreground">
              6. Children&apos;s privacy
            </h2>
            <p className="mt-2">
              Gymbym is intended for users who meet the minimum age requirements
              of our partner gyms. We do not knowingly collect data from
              children without appropriate consent.
            </p>
          </div>

          <div>
            <h2 className="text-[17px] font-semibold text-foreground">
              7. Changes to this policy
            </h2>
            <p className="mt-2">
              We may update this policy as Gymbym grows. Material changes will
              be reflected here with an updated date.
            </p>
          </div>

          <div>
            <h2 className="text-[17px] font-semibold text-foreground">
              8. Grievance Officer
            </h2>
            <p className="mt-2">
              For any privacy-related concerns or grievances, contact our
              Grievance Officer at{" "}
              <a href="mailto:support@gymbym.com" className="underline">
                support@gymbym.com
              </a>
              . We aim to acknowledge all requests within 48 hours.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
