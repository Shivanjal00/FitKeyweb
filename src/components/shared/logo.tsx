// src/components/shared/logo.tsx
"use client";

import { useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const SECRET_PATH = "/fk-vault-72q";
const CLICK_WINDOW_MS = 500;
const SECRET_CLICKS = 5;

export function Logo() {
  const router = useRouter();
  const clickCount = useRef(0);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  function handleClick(e: React.MouseEvent) {
    e.preventDefault();
    clickCount.current += 1;

    if (timer.current) clearTimeout(timer.current);

    if (clickCount.current >= SECRET_CLICKS) {
      clickCount.current = 0;
      router.push(SECRET_PATH);
      return;
    }

    timer.current = setTimeout(() => {
      router.push("/");
      clickCount.current = 0;
    }, CLICK_WINDOW_MS);
  }

  return (
    <a
      href="/"
      onClick={handleClick}
      className="flex cursor-pointer items-center gap-2.5"
    >
      <Image
        src="/logo.png"
        alt="Gymbym"
        width={36}
        height={36}
        className="h-9 w-9 object-contain"
        priority
      />
      <span className="text-[15px] font-semibold tracking-tight font-heading">
        Gymbym
      </span>
    </a>
  );
}
