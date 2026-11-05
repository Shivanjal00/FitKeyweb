// src/app/fk-vault-72q/layout.tsx
// The page itself is a client component, so metadata lives here.
export const metadata = {
  title: "Restricted",
  robots: { index: false, follow: false, nocache: true },
};

export default function VaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
