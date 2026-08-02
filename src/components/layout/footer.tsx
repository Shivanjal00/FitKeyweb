// src/components/layout/footer.tsx
import Link from "next/link";
import { Logo } from "@/components/shared/logo";

const productLinks = [
  { href: "/features", label: "Features" },
  { href: "/gyms", label: "Gyms" },
  { href: "/libraries", label: "Libraries" },
  { href: "/pricing", label: "Pricing" },
];
const companyLinks = [
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];
const accountLinks = [
  { href: "/login", label: "Sign in" },
  { href: "/onboarding", label: "Get started" },
  { href: "/home", label: "Open app" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-sm text-[14px] leading-relaxed text-muted-foreground">
              One key. Hundreds of premium studios. Train wherever you are — no
              memberships, no lock-ins.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <a
                href="#"
                className="rounded-full border border-border bg-background px-4 py-2 text-[12px] font-medium hover:border-foreground"
              >
                iOS App
              </a>
              <a
                href="#"
                className="rounded-full border border-border bg-background px-4 py-2 text-[12px] font-medium hover:border-foreground"
              >
                Android App
              </a>
            </div>
          </div>

          <FooterColumn title="Product" links={productLinks} />
          <FooterColumn title="Company" links={companyLinks} />
          <FooterColumn title="Account" links={accountLinks} />
        </div>

        <div className="mt-14 flex flex-col-reverse items-start justify-between gap-4 border-t border-border pt-6 text-[12px] text-muted-foreground md:flex-row md:items-center">
          <p>© 2026 FitKey. Crafted in Bengaluru.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-foreground">
              Privacy
            </a>
            <a href="#" className="hover:text-foreground">
              Terms
            </a>
            <a href="#" className="hover:text-foreground">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { href: string; label: string }[];
}) {
  return (
    <div>
      <h4 className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
        {title}
      </h4>
      <ul className="mt-4 space-y-2.5">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-[14px] text-foreground/80 transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
