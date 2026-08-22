// app/wedding/page.tsx
import type { Metadata } from "next";
import Image from "next/image";

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

export default function Wedding() {
  return (
    <div className="w-full max-w-[2000px] mx-auto flex flex-col justify-center p-5">
      <h2 className="text-3xl text-center md:mt-55 md:ml-16 md:text-left md:pl-8">
        Wedding
      </h2>
      <div className="md:w-9/10 ml-auto mr-auto gap-2 grid grid-cols-2 md:grid-cols-3 mt-8 mb-2">
        <Image
          className="w-full"
          src="/galleries/wedding/7.jpg"
          alt=""
          width={700}
          height={20}
        />
        <Image
          className="w-full"
          src="/galleries/wedding/1.jpg"
          alt=""
          width={700}
          height={20}
        />
        <Image
          className="w-full"
          src="/galleries/wedding/4.jpg"
          alt=""
          width={700}
          height={20}
        />
        <Image
          className="w-full"
          src="/galleries/wedding/3.jpg"
          alt=""
          width={700}
          height={20}
        />
        <Image
          className="w-full"
          src="/galleries/wedding/2.jpg"
          alt=""
          width={700}
          height={20}
        />
        <Image
          className="w-full"
          src="/galleries/wedding/8.jpg"
          alt=""
          width={700}
          height={20}
        />
      </div>
      <div className="md:w-9/10 ml-auto mr-auto gap-2 grid grid-cols-1 md:grid-cols-2 mt-2 mb-2">
        <Image
          className="w-full"
          src="/galleries/wedding/11w.jpg"
          alt=""
          width={1000}
          height={20}
        />
        <Image
          className="w-full"
          src="/galleries/wedding/5w.jpg"
          alt=""
          width={1000}
          height={20}
        />
      </div>
      <div className="md:w-9/10 ml-auto mr-auto gap-2 grid grid-cols-2 md:grid-cols-3 mt-2 mb-2">
        <Image
          className="w-full"
          src="/galleries/wedding/yang3.jpg"
          alt=""
          width={700}
          height={20}
        />
        <Image
          className="w-full"
          src="/galleries/wedding/yang4.jpg"
          alt=""
          width={700}
          height={20}
        />
        <Image
          className="w-full"
          src="/galleries/wedding/yang2.jpg"
          alt=""
          width={700}
          height={20}
        />
        <Image
          className="w-full"
          src="/galleries/wedding/9.jpg"
          alt=""
          width={700}
          height={20}
        />
        <Image
          className="w-full"
          src="/galleries/wedding/10.jpg"
          alt=""
          width={700}
          height={20}
        />
        <Image
          className="w-full"
          src="/galleries/wedding/12.jpg"
          alt=""
          width={700}
          height={20}
        />
        <Image
          className="w-full"
          src="/galleries/wedding/13.jpg"
          alt=""
          width={700}
          height={20}
        />
        <Image
          className="w-full"
          src="/galleries/wedding/14.jpg"
          alt=""
          width={700}
          height={20}
        />
        <Image
          className="w-full"
          src="/galleries/wedding/15.jpg"
          alt=""
          width={700}
          height={20}
        />
        <Image
          className="w-full"
          src="/galleries/wedding/16.jpg"
          alt=""
          width={700}
          height={20}
        />
        <Image
          className="w-full"
          src="/galleries/wedding/17.jpg"
          alt=""
          width={700}
          height={20}
        />
        <Image
          className="w-full"
          src="/galleries/wedding/18.jpg"
          alt=""
          width={700}
          height={20}
        />
        <Image
          className="w-full"
          src="/galleries/wedding/19.jpg"
          alt=""
          width={700}
          height={20}
        />
        <Image
          className="w-full"
          src="/galleries/wedding/22.jpg"
          alt=""
          width={700}
          height={20}
        />
        <Image
          className="w-full"
          src="/galleries/wedding/21.jpg"
          alt=""
          width={700}
          height={20}
        />
      </div>
    </div>
  );
}
