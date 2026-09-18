// src/components/admin/listing-form.tsx
"use client";

import { useState } from "react";
import { Plus, Trash2, Loader2, CheckCircle2 } from "lucide-react";
import { ChipSelect } from "@/components/admin/chip-select";
import {
  TimeRangeField,
  formatTime12h,
} from "@/components/admin/time-range-field";
import { LocationField } from "@/components/admin/location-field";
import { PhotoUpload } from "@/components/admin/photo-upload";

const GYM_CATEGORIES = [
  "Strength",
  "Yoga",
  "CrossFit",
  "Cardio",
  "Boxing",
  "Pilates",
  "Swimming",
];
const GYM_TAGS = ["AC", "Locker", "Parking", "Trainer", "Showers"];
const LIBRARY_TAGS = [
  "Silent Study",
  "24x7",
  "Coworking",
  "Exam Prep",
  "Wi-Fi",
  "AC",
];
const PLAN_PRESETS = [
  "Hourly Pass",
  "Daily Pass",
  "Weekly Pass",
  "Monthly Pass",
];

interface Plan {
  name: string;
  price: string;
}

export function ListingForm() {
  const [type, setType] = useState<"gym" | "library">("gym");
  const [name, setName] = useState("");
  const [about, setAbout] = useState("");
  const [area, setArea] = useState("");
  const [address, setAddress] = useState("");
  const [category, setCategory] = useState<string[]>([]);
  const [tags, setTags] = useState<string[]>([]);
  const [phone, setPhone] = useState("");
  const [trainer, setTrainer] = useState("");
  const [seats, setSeats] = useState("");
  const [rating, setRating] = useState("4.5");
  const [open, setOpen] = useState(true);
  const [images, setImages] = useState<string[]>([]);
  const [plans, setPlans] = useState<Plan[]>([
    { name: "Daily Pass", price: "" },
  ]);

  const [is24h, setIs24h] = useState(false);
  const [openTime, setOpenTime] = useState("");
  const [closeTime, setCloseTime] = useState("");

  const [location, setLocation] = useState<{
    lat: number;
    lng: number;
    capturedAt: string;
  } | null>(null);

  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const tagOptions = type === "gym" ? GYM_TAGS : LIBRARY_TAGS;

  function toggleCategory(value: string) {
    setCategory([value]); // single-select for gym category
  }

  function toggleTag(value: string) {
    setTags((prev) =>
      prev.includes(value) ? prev.filter((t) => t !== value) : [...prev, value],
    );
  }

  function updatePlan(index: number, field: keyof Plan, value: string) {
    setPlans((prev) =>
      prev.map((p, i) => (i === index ? { ...p, [field]: value } : p)),
    );
  }

  function addPlan() {
    setPlans((prev) => [...prev, { name: PLAN_PRESETS[0], price: "" }]);
  }

  function removePlan(index: number) {
    setPlans((prev) => prev.filter((_, i) => i !== index));
  }

  function resetForm() {
    setName("");
    setAbout("");
    setArea("");
    setAddress("");
    setCategory([]);
    setTags([]);
    setPhone("");
    setTrainer("");
    setSeats("");
    setRating("4.5");
    setOpen(true);
    setImages([]);
    setPlans([{ name: "Daily Pass", price: "" }]);
    setIs24h(false);
    setOpenTime("");
    setCloseTime("");
    setLocation(null);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErrorMsg("");

    if (!name.trim() || !area.trim()) {
      setErrorMsg("Name and area are required.");
      return;
    }

    const cleanPlans = plans
      .filter((p) => p.name.trim() && p.price.trim())
      .map((p) => ({ name: p.name.trim(), price: Number(p.price) }));

    if (cleanPlans.length === 0) {
      setErrorMsg("Add at least one plan with a price.");
      return;
    }

    const hoursText = is24h
      ? "24 hours"
      : `${formatTime12h(openTime)} – ${formatTime12h(closeTime)}`;

    const baseData = {
      name: name.trim(),
      about: about.trim(),
      area: area.trim(),
      hours: hoursText,
      image: images[0] || "",
      open,
      plans: cleanPlans,
      price: cleanPlans[0].price,
      rating: Number(rating) || 0,
      tags,
      ...(location
        ? {
            location: { lat: location.lat, lng: location.lng },
            locationCapturedAt: location.capturedAt,
          }
        : {}),
    };

    const data =
      type === "gym"
        ? {
            ...baseData,
            address: address.trim(),
            category: category[0] || "General",
            distance: "",
            gallery: images,
            phone: phone.trim(),
            reviews: 0,
            trainer: trainer.trim(),
            source: "admin-form",
          }
        : {
            ...baseData,
            distance: "",
            seats: Number(seats) || 0,
          };

    setStatus("submitting");
    try {
      const res = await fetch("/api/admin/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type, data }),
      });

      if (!res.ok) {
        const resData = await res.json().catch(() => ({}));
        setErrorMsg(resData.error || "Failed to save.");
        setStatus("error");
        return;
      }

      setStatus("success");
      resetForm();
    } catch {
      setErrorMsg("Something went wrong. Try again.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="mt-24 flex flex-col items-center rounded-3xl border border-border bg-surface p-10 text-center">
        <CheckCircle2 className="h-10 w-10 text-accent" />
        <h2 className="mt-4 text-[19px] font-semibold text-foreground">
          Listing added
        </h2>
        <p className="mt-1 text-[13.5px] text-muted-foreground">
          It&apos;s now live in production.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 rounded-full border border-border px-5 py-2.5 text-[13px] font-medium text-foreground hover:border-foreground"
        >
          Add another
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-10 space-y-6 rounded-3xl border border-border bg-surface p-8"
    >
      <div className="flex gap-2">
        {(["gym", "library"] as const).map((t) => (
          <button
            type="button"
            key={t}
            onClick={() => {
              setType(t);
              setCategory([]);
              setTags([]);
            }}
            className={`flex-1 rounded-full border px-4 py-2.5 text-[13px] font-semibold capitalize transition-colors ${
              type === t
                ? "border-foreground bg-foreground text-primary-foreground"
                : "border-border bg-background text-foreground/80"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      <Field
        label="Name"
        value={name}
        onChange={setName}
        placeholder="Anchor Strength Lab"
      />
      <Field
        label="Area"
        value={area}
        onChange={setArea}
        placeholder="Nizamuddin East"
      />

      {type === "gym" && (
        <>
          <Field
            label="Address"
            value={address}
            onChange={setAddress}
            placeholder="Nizamuddin East Market, New Delhi"
          />
          <div>
            <label className="text-[12px] font-semibold uppercase tracking-wide text-muted-foreground">
              Category
            </label>
            <div className="mt-2">
              <ChipSelect
                options={GYM_CATEGORIES}
                selected={category}
                onToggle={toggleCategory}
              />
            </div>
          </div>
          <Field
            label="Phone"
            value={phone}
            onChange={setPhone}
            placeholder="011 4589 1306"
          />
        </>
      )}

      <TimeRangeField
        openTime={openTime}
        setOpenTime={setOpenTime}
        closeTime={closeTime}
        setCloseTime={setCloseTime}
        is24h={is24h}
        setIs24h={setIs24h}
      />

      <LocationField
        onCapture={(lat, lng) =>
          setLocation({ lat, lng, capturedAt: new Date().toISOString() })
        }
      />

      <PhotoUpload images={images} setImages={setImages} />

      <div>
        <label className="text-[12px] font-semibold uppercase tracking-wide text-muted-foreground">
          About
        </label>
        <textarea
          value={about}
          onChange={(e) => setAbout(e.target.value)}
          rows={3}
          className="mt-1.5 w-full rounded-2xl border border-border bg-background px-4 py-3 text-[14px] text-foreground focus:border-foreground focus:outline-none"
        />
      </div>

      {type === "gym" && (
        <div>
          <label className="text-[12px] font-semibold uppercase tracking-wide text-muted-foreground">
            Trainer note
          </label>
          <textarea
            value={trainer}
            onChange={(e) => setTrainer(e.target.value)}
            rows={2}
            className="mt-1.5 w-full rounded-2xl border border-border bg-background px-4 py-3 text-[14px] text-foreground focus:border-foreground focus:outline-none"
          />
        </div>
      )}

      <div>
        <label className="text-[12px] font-semibold uppercase tracking-wide text-muted-foreground">
          Amenities
        </label>
        <div className="mt-2">
          <ChipSelect
            options={tagOptions}
            selected={tags}
            onToggle={toggleTag}
          />
        </div>
      </div>

      {type === "library" && (
        <Field
          label="Seats"
          value={seats}
          onChange={setSeats}
          placeholder="84"
          type="number"
        />
      )}

      <Field
        label="Rating"
        value={rating}
        onChange={setRating}
        placeholder="4.5"
        type="number"
      />

      <label className="flex items-center gap-2 text-[13.5px] text-foreground">
        <input
          type="checkbox"
          checked={open}
          onChange={(e) => setOpen(e.target.checked)}
        />
        Currently open
      </label>

      <div>
        <label className="text-[12px] font-semibold uppercase tracking-wide text-muted-foreground">
          Plans
        </label>
        <div className="mt-2 space-y-2">
          {plans.map((plan, i) => (
            <div key={i} className="flex gap-2">
              <select
                value={plan.name}
                onChange={(e) => updatePlan(i, "name", e.target.value)}
                className="flex-1 rounded-xl border border-border bg-background px-3 py-2.5 text-[13.5px] text-foreground focus:border-foreground focus:outline-none"
              >
                {PLAN_PRESETS.map((p) => (
                  <option key={p} value={p}>
                    {p}
                  </option>
                ))}
              </select>
              <input
                value={plan.price}
                onChange={(e) => updatePlan(i, "price", e.target.value)}
                placeholder="Price"
                type="number"
                className="w-28 rounded-xl border border-border bg-background px-3 py-2.5 text-[13.5px] text-foreground focus:border-foreground focus:outline-none"
              />
              {plans.length > 1 && (
                <button
                  type="button"
                  onClick={() => removePlan(i)}
                  className="grid w-10 shrink-0 place-items-center rounded-xl border border-border text-muted-foreground hover:border-red-400 hover:text-red-500"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              )}
            </div>
          ))}
        </div>
        <button
          type="button"
          onClick={addPlan}
          className="mt-2 inline-flex items-center gap-1.5 text-[13px] font-medium text-foreground"
        >
          <Plus className="h-3.5 w-3.5" /> Add plan
        </button>
      </div>

      {errorMsg && <p className="text-[13px] text-red-500">{errorMsg}</p>}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-[14px] font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 disabled:opacity-70"
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" /> Saving...
          </>
        ) : (
          "Save listing"
        )}
      </button>
    </form>
  );
}

function Field({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
}) {
  return (
    <div>
      <label className="text-[12px] font-semibold uppercase tracking-wide text-muted-foreground">
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="mt-1.5 w-full rounded-2xl border border-border bg-background px-4 py-3 text-[14px] text-foreground focus:border-foreground focus:outline-none"
      />
    </div>
  );
}
