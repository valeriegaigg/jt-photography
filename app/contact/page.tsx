// app/contact/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import ContactForm from "../components/ContactForm";

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
    <div className="w-full flex flex-col">
      <Image
        className="w-full md:hidden"
        src="/contact/bannera.jpg"
        alt=""
        width={500}
        height={20}
      />
      <Image
        className="hidden md:block -translate-y-25 w-full"
        src="/contact/bannera.jpg"
        alt=""
        width={4000}
        height={20}
      />
      <div className="text-left leading-8 md:mt-40 md:m-8 xl:ml-15">
        <h2 className="text-3xl text-center md:text-left m-6 md:-mt-55">
          Contact
        </h2>
        <p className="m-6 md:w-1/4">
          To schedule a session or request into, please fill out the form below.
          If you don't hear from me within 3 business days after submitting your
          inquiry, feel free to contact me directly at: <br />
          jentabbert@gmail.com
          <br />
          <a className="underline" href="tel:(920) 858-1412" target="_blank">
            (920) 858-1412
          </a>
        </p>
      </div>
      <div
        id="contact"
        className="flex flex-col items-center z-4 pb-8 w-full mb-8 md:w-3/5 xl:w-1/2 self-center md:self-end md:mr-15 xl:mr-25 md:-mt-120"
      >
        <h2 className="text-2xl text-center mt-8 md:mt-6 mb-4">
          Send a Message
        </h2>
        <ContactForm />
      </div>
    </div>
  );
}
