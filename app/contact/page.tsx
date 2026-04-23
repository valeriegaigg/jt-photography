// app/contact/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: false,
      follow: true,
      noimageindex: true,
    },
  },
};

export default function ContactPage() {
  return (
    <div className="flex justify-center p-5">
      <h1>Content coming soon...</h1>
    </div>
  );
}
