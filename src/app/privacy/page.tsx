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

        <div className="mt-8 space-y-6 text-[14.5px] leading-relaxed text-foreground/85">
          <p>
            Gymbym (&quot;we&quot;, &quot;us&quot;) respects your privacy. This
            policy explains what information we collect, how we use it, and the
            choices you have.
          </p>

          <div>
            <h2 className="text-[17px] font-semibold text-foreground">
              Information we collect
            </h2>
            <p className="mt-2">
              When you sign in, we collect your name, email address and phone
              number (as provided by your chosen sign-in method). We also store
              your selected role (customer or gym/library owner).
            </p>
          </div>

          <div>
            <h2 className="text-[17px] font-semibold text-foreground">
              How we use it
            </h2>
            <p className="mt-2">
              We use your information to operate your account, show you relevant
              gyms and libraries, and communicate with you about your passes and
              bookings.
            </p>
          </div>

          <div>
            <h2 className="text-[17px] font-semibold text-foreground">
              Data storage
            </h2>
            <p className="mt-2">
              Your data is stored securely using Google Firebase. We do not sell
              your personal information to third parties.
            </p>
          </div>

          <div>
            <h2 className="text-[17px] font-semibold text-foreground">
              Contact
            </h2>
            <p className="mt-2">
              Questions about this policy? Reach us at{" "}
              <a href="mailto:support@gymbym.com" className="underline">
                support@gymbym.com
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
