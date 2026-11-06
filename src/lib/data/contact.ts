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
    label: "WhatsApp",
    value: "Chat on WhatsApp",
    note: "Fastest for booking issues",
    href: "https://wa.me/918273045785?text=Hi%20Gymbym%2C%20I%20need%20help%20with%20",
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
    address: "5/2, Dhaka Main Road, Near Kingsway Camp, Delhi – 110009",
    hours: "Mon–Fri · 10:00 – 6:00",
    mapHref:
      "https://www.google.com/maps/search/?api=1&query=5%2F2%20Dhaka%20Main%20Road%2C%20Near%20Kingsway%20Camp%2C%20Delhi%20110009",
  },
];
