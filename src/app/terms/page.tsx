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

        <div className="mt-8 space-y-7 text-[14.5px] leading-relaxed text-foreground/85">
          <div>
            <h2 className="text-[17px] font-semibold text-foreground">
              1. Using Gymbym
            </h2>
            <p className="mt-2">
              By creating an account or using Gymbym, you agree to these terms.
              Gymbym connects members with independent, participating gyms
              across Delhi; we are a platform and are not the operator of these
              venues. Each gym remains independently owned and run.
            </p>
          </div>

          <div>
            <h2 className="text-[17px] font-semibold text-foreground">
              2. Subscriptions and membership validity
            </h2>
            <p className="mt-2">
              A Gymbym subscription grants access to participating gyms for the
              duration of your chosen plan (e.g. monthly, 3-month, 6-month,
              12-month). Validity begins on the date of successful payment and
              ends at the close of the final day of the subscription period,
              unless suspended or terminated earlier under these terms.
            </p>
          </div>

          <div>
            <h2 className="text-[17px] font-semibold text-foreground">
              3. Cancellation policy
            </h2>
            <p className="mt-2">
              You may cancel your subscription at any time from your account.
              Cancellation stops future renewal but does not automatically
              entitle you to a refund for the current, already-paid period
              unless stated otherwise in the specific plan you purchased.
            </p>
          </div>

          <div>
            <h2 className="text-[17px] font-semibold text-foreground">
              4. Refund policy
            </h2>
            <p className="mt-2">
              Refunds, where applicable, are processed back to the original
              payment method within a reasonable timeframe. Refunds are not
              guaranteed for partial use of a subscription period, change of
              mind, or inability to visit a gym for personal reasons. Specific
              refund eligibility, if any, will be clearly stated at the time of
              purchase for each plan.
            </p>
          </div>

          <div>
            <h2 className="text-[17px] font-semibold text-foreground">
              5. Payments, failed payments and chargebacks
            </h2>
            <p className="mt-2">
              Payments are processed through third-party payment providers. If a
              renewal payment fails, your access may be paused until payment is
              successfully completed. Initiating a chargeback or payment dispute
              without first contacting Gymbym support may result in immediate
              suspension of your account while the matter is investigated.
            </p>
          </div>

          <div>
            <h2 className="text-[17px] font-semibold text-foreground">
              6. Gym-specific restrictions
            </h2>
            <p className="mt-2">
              Individual gyms may apply their own house rules, peak-hour access
              limits, age restrictions, or dress codes. These are set by the
              gym, not Gymbym, and will be noted on the gym&apos;s listing where
              applicable. Your Gymbym subscription does not override a
              gym&apos;s own operating policies.
            </p>
          </div>

          <div>
            <h2 className="text-[17px] font-semibold text-foreground">
              7. Check-in rules
            </h2>
            <p className="mt-2">
              Access to a participating gym requires a valid digital check-in
              through the Gymbym app at the time of your visit. Sharing your
              account or check-in credentials with another person is not
              permitted and may result in suspension.
            </p>
          </div>

          <div>
            <h2 className="text-[17px] font-semibold text-foreground">
              8. Member conduct
            </h2>
            <p className="mt-2">
              Members are expected to treat gym staff, equipment and other
              members with respect, and to follow the safety and hygiene
              guidelines of each venue. Gymbym reserves the right to suspend any
              account found to be in serious or repeated violation of a partner
              gym&apos;s conduct policies.
            </p>
          </div>

          <div>
            <h2 className="text-[17px] font-semibold text-foreground">
              9. Partner (gym owner) obligations
            </h2>
            <p className="mt-2">
              Gyms listed on Gymbym are responsible for the accuracy of their
              listing information, maintaining safe and functioning equipment,
              honouring valid Gymbym check-ins during their stated operating
              hours, and promptly notifying Gymbym of any closures, capacity
              changes or safety issues.
            </p>
          </div>

          <div>
            <h2 className="text-[17px] font-semibold text-foreground">
              10. Suspension and termination
            </h2>
            <p className="mt-2">
              Gymbym may suspend or terminate an account for violation of these
              terms, fraudulent payment activity, or misuse of the check-in
              system. You may also close your account at any time by contacting
              support.
            </p>
          </div>

          <div>
            <h2 className="text-[17px] font-semibold text-foreground">
              11. Gym closure or unavailability
            </h2>
            <p className="mt-2">
              If a partner gym permanently closes or becomes unavailable during
              your subscription period, Gymbym will make reasonable efforts to
              offer access to an alternative participating gym nearby. Gymbym is
              not liable for a gym&apos;s own operational decisions, including
              temporary closures for maintenance or holidays.
            </p>
          </div>

          <div>
            <h2 className="text-[17px] font-semibold text-foreground">
              12. Changes to these terms
            </h2>
            <p className="mt-2">
              We may update these terms from time to time as Gymbym grows.
              Continued use of Gymbym after changes take effect means you accept
              the updated terms. Material changes will be communicated where
              reasonably possible.
            </p>
          </div>

          <div>
            <h2 className="text-[17px] font-semibold text-foreground">
              13. Governing law
            </h2>
            <p className="mt-2">
              These terms are governed by the laws of India, and any disputes
              will be subject to the jurisdiction of the courts in Delhi.
            </p>
          </div>

          <div>
            <h2 className="text-[17px] font-semibold text-foreground">
              14. Grievance redressal
            </h2>
            <p className="mt-2">
              If you have a complaint or dispute, please write to us first at{" "}
              <a href="mailto:support@gymbym.com" className="underline">
                support@gymbym.com
              </a>
              . We aim to acknowledge grievances within 48 hours and resolve
              them within a reasonable timeframe in accordance with applicable
              Indian consumer protection law.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
