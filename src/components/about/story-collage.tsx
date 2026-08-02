// src/components/about/story-collage.tsx
"use client";

export function StoryCollage({ images }: { images: string[] }) {
  return (
    <div className="grid grid-cols-[1.3fr_1fr] gap-4">
      <div className="group overflow-hidden rounded-[28px] border border-border">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={images[0]}
          alt=""
          className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
        />
      </div>
      <div className="flex flex-col gap-4">
        {images.slice(1).map((src) => (
          <div
            key={src}
            className="group flex-1 overflow-hidden rounded-[28px] border border-border"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt=""
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
