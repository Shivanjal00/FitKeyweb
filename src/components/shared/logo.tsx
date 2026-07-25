// src/components/shared/logo.tsx
import Link from "next/link";
import { KeyRound } from "lucide-react";

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2.5">
      <span className="grid h-9 w-9 place-items-center rounded-xl bg-foreground text-primary-foreground">
        <KeyRound className="h-4 w-4" strokeWidth={2.4} />
      </span>
      <span className="text-[15px] font-semibold tracking-tight font-heading">
        FitKey
      </span>
    </Link>
  );
}
