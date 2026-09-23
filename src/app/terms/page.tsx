// src/app/terms/page.tsx
export const metadata = { title: "Terms of Use" };

export default function TermsPage() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-3xl px-5 py-24 md:px-8">
        <h1 className="text-[32px] font-semibold tracking-tight text-foreground">
          Terms of Use
        </h1>
        <p className="mt-2 text-[13.5px] text-muted-foreground">
          Last updated: September 2026
        </p>

        <div className="mt-8 space-y-6 text-[14.5px] leading-relaxed text-foreground/85">
          <div>
            <h2 className="text-[17px] font-semibold text-foreground">
              Using Gymbym
            </h2>
            <p className="mt-2">
              By creating an account or using Gymbym, you agree to these terms.
              Gymbym connects members with independent gyms and libraries; we
              are not the operator of these venues.
            </p>
          </div>

          <div>
            <h2 className="text-[17px] font-semibold text-foreground">
              Passes and payments
            </h2>
            <p className="mt-2">
              Pricing shown for each listing is set by the venue and may change.
              Passes purchased are subject to the venue&apos;s own house rules
              and cancellation policy where noted.
            </p>
          </div>

          <div>
            <h2 className="text-[17px] font-semibold text-foreground">
              Accounts
            </h2>
            <p className="mt-2">
              You are responsible for keeping your account credentials secure.
              Owner accounts are responsible for the accuracy of the listing
              information they submit.
            </p>
          </div>

          <div>
            <h2 className="text-[17px] font-semibold text-foreground">
              Changes
            </h2>
            <p className="mt-2">
              We may update these terms from time to time. Continued use of
              Gymbym after changes means you accept the updated terms.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
