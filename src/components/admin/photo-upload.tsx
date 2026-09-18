// src/components/admin/photo-upload.tsx
"use client";

import { useRef, useState } from "react";
import { Camera, X, Loader2 } from "lucide-react";

export function PhotoUpload({
  images,
  setImages,
}: {
  images: string[];
  setImages: (urls: string[]) => void;
}) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");

  async function handleFiles(fileList: FileList | null) {
    if (!fileList || fileList.length === 0) return;
    setError("");
    setUploading(true);

    try {
      const files = Array.from(fileList);
      const base64Files = await Promise.all(
        files.map(
          (file) =>
            new Promise<{ name: string; data: string }>((resolve, reject) => {
              const reader = new FileReader();
              reader.onload = () =>
                resolve({ name: file.name, data: reader.result as string });
              reader.onerror = reject;
              reader.readAsDataURL(file);
            }),
        ),
      );

      const res = await fetch("/api/admin/upload", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ files: base64Files }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setError(data.error || "Upload failed");
        return;
      }

      const { urls } = await res.json();
      setImages([...images, ...urls]);
    } catch {
      setError("Upload failed. Try again.");
    } finally {
      setUploading(false);
      if (inputRef.current) inputRef.current.value = "";
    }
  }

  return (
    <div>
      <label className="text-[12px] font-semibold uppercase tracking-wide text-muted-foreground">
        Photos
      </label>

      <div className="mt-2 grid grid-cols-3 gap-2">
        {images.map((url) => (
          <div
            key={url}
            className="group relative aspect-square overflow-hidden rounded-xl border border-border"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={url} alt="" className="h-full w-full object-cover" />
            <button
              type="button"
              onClick={() => setImages(images.filter((u) => u !== url))}
              className="absolute right-1 top-1 grid h-6 w-6 place-items-center rounded-full bg-black/60 text-white"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          </div>
        ))}

        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          disabled={uploading}
          className="flex aspect-square flex-col items-center justify-center gap-1 rounded-xl border border-dashed border-border bg-background text-muted-foreground hover:border-foreground/40 disabled:opacity-70"
        >
          {uploading ? (
            <Loader2 className="h-5 w-5 animate-spin" />
          ) : (
            <Camera className="h-5 w-5" />
          )}
          <span className="text-[10.5px] font-medium">
            {uploading ? "Uploading" : "Add photo"}
          </span>
        </button>
      </div>

      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        multiple
        onChange={(e) => handleFiles(e.target.files)}
        className="hidden"
      />

      {error && <p className="mt-1.5 text-[12.5px] text-red-500">{error}</p>}
      <p className="mt-1.5 text-[11.5px] text-muted-foreground">
        Tap to choose from camera or gallery.
      </p>
    </div>
  );
}
