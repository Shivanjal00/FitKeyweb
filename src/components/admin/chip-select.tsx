// src/components/admin/chip-select.tsx
"use client";

export function ChipSelect({
  options,
  selected,
  onToggle,
}: {
  options: string[];
  selected: string[];
  onToggle: (value: string) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((opt) => {
        const active = selected.includes(opt);
        return (
          <button
            key={opt}
            type="button"
            onClick={() => onToggle(opt)}
            className={`rounded-full border px-3.5 py-2 text-[12.5px] font-medium transition-colors ${
              active
                ? "border-foreground bg-foreground text-primary-foreground"
                : "border-border bg-background text-foreground/80 hover:border-foreground/40"
            }`}
          >
            {opt}
          </button>
        );
      })}
    </div>
  );
}
