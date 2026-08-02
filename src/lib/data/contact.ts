// src/lib/data/contact.ts
export const contactMethods = [
  {
    icon: "mail" as const,
    label: "Email",
    value: "hello@fitkey.app",
    note: "Replies within a few hours",
    href: "mailto:hello@fitkey.app",
  },
  {
    icon: "phone" as const,
    label: "Phone",
    value: "+91 80 4718 2200",
    note: "Mon–Sat, 9am–8pm IST",
    href: "tel:+918047182200",
  },
  {
    icon: "chat" as const,
    label: "Live chat",
    value: "Chat inside the app",
    note: "Fastest for booking issues",
    href: "/onboarding",
  },
];

export const subjectOptions = [
  "General question",
  "Booking support",
  "Partner a studio",
  "Press & media",
  "Careers",
];

export const offices = [
  {
    city: "Bengaluru",
    tag: "Headquarters",
    address: "4th Floor, Prestige Atrium, Church Street, Bengaluru 560001",
    hours: "Mon–Fri · 10:00 – 19:00",
  },
  {
    city: "Mumbai",
    tag: "West India",
    address: "WeWork Enam Sambhav, BKC, Bandra East, Mumbai 400051",
    hours: "Mon–Fri · 10:00 – 19:00",
  },
  {
    city: "Delhi NCR",
    tag: "North India",
    address: "Cyber Hub, Tower D, DLF Cyber City, Gurugram 122002",
    hours: "Mon–Fri · 10:00 – 19:00",
  },
];
