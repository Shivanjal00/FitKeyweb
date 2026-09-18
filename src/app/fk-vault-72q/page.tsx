// src/app/fk-vault-72q/page.tsx
"use client";

import { useState } from "react";
import { AdminGate } from "@/components/admin/admin-gate";
import { ListingForm } from "@/components/admin/listing-form";

export default function SecretAdminPage() {
  const [authed, setAuthed] = useState(false);

  return (
    <div className="min-h-screen bg-background px-5 py-16">
      <div className="mx-auto max-w-2xl">
        {authed ? (
          <ListingForm />
        ) : (
          <AdminGate onSuccess={() => setAuthed(true)} />
        )}
      </div>
    </div>
  );
}
