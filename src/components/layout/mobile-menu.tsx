// src/components/layout/mobile-menu.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  links: { href: string; label: string }[];
}

export function MobileMenu({ open, onClose, links }: MobileMenuProps) {
  const pathname = usePathname();

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="overflow-hidden border-b border-border bg-background/95 backdrop-blur-xl lg:hidden"
        >
          <div className="space-y-1 px-5 pb-5 pt-2">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={onClose}
                className={`block rounded-xl px-3 py-2.5 text-[15px] font-medium hover:bg-muted ${
                  pathname === link.href
                    ? "text-foreground bg-muted"
                    : "text-foreground/80"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-3 flex gap-2 pt-2">
              <Link
                href="/login"
                onClick={onClose}
                className="flex-1 rounded-full border border-border px-4 py-2.5 text-center text-[13px] font-medium"
              >
                Sign in
              </Link>
              <Link
                href="/onboarding"
                onClick={onClose}
                className="flex-1 rounded-full bg-foreground px-4 py-2.5 text-center text-[13px] font-semibold text-primary-foreground"
              >
                Get the app
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
