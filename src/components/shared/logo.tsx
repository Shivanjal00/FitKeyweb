// src/components/shared/logo.tsx
import Link from "next/link";
import Image from "next/image";

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2.5">
      <Image
        src="/logo.png"
        alt="FitKey"
        width={36}
        height={36}
        className="h-9 w-9 object-contain"
        priority
      />
      <span className="text-[15px] font-semibold tracking-tight font-heading">
        FitKey
      </span>
    </Link>
  );
}
