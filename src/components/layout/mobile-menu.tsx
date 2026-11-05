// src/components/layout/mobile-menu.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  links: { href: string; label: string }[];
  signedIn?: boolean;
  onSignOut?: () => void;
}

export function MobileMenu({
  open,
  onClose,
  links,
  signedIn = false,
  onSignOut,
}: MobileMenuProps) {
  const pathname = usePathname();

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="max-h-[calc(100dvh-4rem)] overflow-y-auto border-b border-border bg-background/95 backdrop-blur-xl lg:hidden"
        >
          <nav aria-label="Mobile" className="space-y-1 px-5 pb-6 pt-2">
            {links.map((link) => {
              const active =
                pathname === link.href || pathname.startsWith(`${link.href}/`);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={onClose}
                  aria-current={active ? "page" : undefined}
                  className={`flex items-center justify-between rounded-xl px-3 py-3 text-[16px] font-medium transition-colors hover:bg-surface ${
                    active ? "bg-surface text-foreground" : "text-foreground/80"
                  }`}
                >
                  {link.label}
                  {active && (
                    <span className="h-2 w-2 rounded-full bg-accent ring-4 ring-accent/25" />
                  )}
                </Link>
              );
            })}
            <div className="mt-4 flex gap-2 border-t border-border pt-4">
              {signedIn ? (
                <button
                  type="button"
                  onClick={() => {
                    onSignOut?.();
                    onClose();
                  }}
                  className="flex-1 rounded-full border border-border px-4 py-3 text-center text-[14px] font-medium"
                >
                  Sign out
                </button>
              ) : (
                <>
                  <Link
                    href="/login"
                    onClick={onClose}
                    className="flex-1 rounded-full border border-border px-4 py-3 text-center text-[14px] font-medium"
                  >
                    Sign in
                  </Link>
                  <Link
                    href="/login"
                    onClick={onClose}
                    className="flex-1 rounded-full bg-accent px-4 py-3 text-center text-[14px] font-semibold text-foreground"
                  >
                    Get the app
                  </Link>
                </>
              )}
            </div>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
