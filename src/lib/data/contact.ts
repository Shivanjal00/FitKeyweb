// src/lib/data/contact.ts
export const contactMethods = [
  {
    icon: "mail" as const,
    label: "Email",
    value: "support@gymbym.com",
    note: "Replies within a few hours",
    href: "mailto:support@gymbym.com",
  },
  {
    icon: "phone" as const,
    label: "Phone",
    value: "+91 8273045785",
    note: "Mon–Sat, 9am–8pm IST",
    href: "tel:+918273045785",
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
  "Membership support",
  "Partner a gym",
  "Press & media",
  "Careers",
];

export const offices = [
  {
    city: "Delhi",
    tag: "Headquarters",
    address: "Delhi, India",
    hours: "Mon–Fri · 10:00 – 6:00",
  },
];
