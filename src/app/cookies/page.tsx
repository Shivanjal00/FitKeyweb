// src/app/cookies/page.tsx
export const metadata = { title: "Cookie Policy" };

export default function CookiesPage() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-3xl px-5 py-24 md:px-8">
        <h1 className="text-[32px] font-semibold tracking-tight text-foreground">
          Cookie Policy
        </h1>
        <p className="mt-2 text-[13.5px] text-muted-foreground">
          Last updated: September 2026
        </p>

        <div className="mt-8 space-y-7 text-[14.5px] leading-relaxed text-foreground/85">
          <div>
            <h2 className="text-[17px] font-semibold text-foreground">
              What we use
            </h2>
            <p className="mt-2">
              Gymbym uses essential cookies to keep you signed in and remember
              your session. We do not currently use third-party advertising or
              tracking cookies.
            </p>
          </div>

          <div>
            <h2 className="text-[17px] font-semibold text-foreground">
              Firebase and Google services
            </h2>
            <p className="mt-2">
              Our authentication, hosting and location-search providers (Google
              Firebase and Google Maps) may set cookies necessary for account
              security, session management and location features you actively
              use.
            </p>
          </div>

          <div>
            <h2 className="text-[17px] font-semibold text-foreground">
              Managing cookies
            </h2>
            <p className="mt-2">
              You can control or delete cookies through your browser settings.
              Disabling essential cookies may prevent you from staying signed in
              or using location-based search.
            </p>
          </div>

          <div>
            <h2 className="text-[17px] font-semibold text-foreground">
              Questions
            </h2>
            <p className="mt-2">
              Reach us at{" "}
              <a href="mailto:support@gymbym.com" className="underline">
                support@gymbym.com
              </a>{" "}
              for anything related to cookies or tracking on Gymbym.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
