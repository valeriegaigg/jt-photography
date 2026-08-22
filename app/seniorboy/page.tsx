// app/seniorboy/page.tsx
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

export default function SeniorBoy() {
  return (
    <div className="w-full max-w-[2000px] mx-auto flex flex-col justify-center p-5">
      <h2 className="text-3xl text-center md:mt-50 md:ml-16 md:text-left md:pl-8">
        Senior Boy
      </h2>
      <div className="md:w-9/10 ml-auto mr-auto gap-2 grid grid-cols-1 md:grid-cols-2 mt-8 mb-2">
        <Image
          className="w-full"
          src="/galleries/seniorboy/1w.jpg"
          alt=""
          width={1000}
          height={20}
        />
        <Image
          className="w-full"
          src="/galleries/seniorboy/8w.jpg"
          alt=""
          width={1000}
          height={20}
        />
      </div>
      <div className="md:w-9/10 ml-auto mr-auto gap-2 grid grid-cols-2 md:grid-cols-4">
        <Image
          className="w-full"
          src="/galleries/seniorboy/2.jpg"
          alt=""
          width={500}
          height={20}
        />
        <Image
          className="w-full"
          src="/galleries/seniorboy/18.jpg"
          alt=""
          width={500}
          height={20}
        />
        <Image
          className="w-full"
          src="/galleries/seniorboy/20.jpg"
          alt=""
          width={500}
          height={20}
        />
        <Image
          className="w-full"
          src="/galleries/seniorboy/9.jpg"
          alt=""
          width={500}
          height={20}
        />
        <Image
          className="w-full"
          src="/galleries/seniorboy/17.jpg"
          alt=""
          width={500}
          height={20}
        />
        <Image
          className="w-full"
          src="/galleries/seniorboy/11.jpg"
          alt=""
          width={500}
          height={20}
        />
        <Image
          className="w-full"
          src="/galleries/seniorboy/19.jpg"
          alt=""
          width={500}
          height={20}
        />
        <Image
          className="w-full"
          src="/galleries/seniorboy/24.jpg"
          alt=""
          width={500}
          height={20}
        />
      </div>
      <div className="md:w-9/10 ml-auto mr-auto gap-2 grid grid-cols-1 md:grid-cols-2 mt-2 mb-2">
        <Image
          className="w-full"
          src="/galleries/seniorboy/3w.jpg"
          alt=""
          width={1000}
          height={20}
        />
        <Image
          className="w-full"
          src="/galleries/seniorboy/7w.jpg"
          alt=""
          width={1000}
          height={20}
        />
      </div>
      <div className="md:w-9/10 ml-auto mr-auto gap-2 grid grid-cols-2 md:grid-cols-4">
        <Image
          className="w-full"
          src="/galleries/seniorboy/10.jpg"
          alt=""
          width={500}
          height={20}
        />
        <Image
          className="w-full"
          src="/galleries/seniorboy/13.jpg"
          alt=""
          width={500}
          height={20}
        />
        <Image
          className="w-full"
          src="/galleries/seniorboy/12.jpg"
          alt=""
          width={500}
          height={20}
        />
        <Image
          className="w-full"
          src="/galleries/seniorboy/15.jpg"
          alt=""
          width={500}
          height={20}
        />
        <Image
          className="w-full"
          src="/galleries/seniorboy/22.jpg"
          alt=""
          width={500}
          height={20}
        />
        <Image
          className="w-full"
          src="/galleries/seniorboy/5.jpg"
          alt=""
          width={500}
          height={20}
        />
        <Image
          className="w-full"
          src="/galleries/seniorboy/23.jpg"
          alt=""
          width={500}
          height={20}
        />
        <Image
          className="w-full"
          src="/galleries/seniorboy/21.jpg"
          alt=""
          width={500}
          height={20}
        />
      </div>
      <div className="md:w-9/10 ml-auto mr-auto gap-2 grid grid-cols-1 md:grid-cols-2 mt-2 mb-2">
        <Image
          className="w-full"
          src="/galleries/seniorboy/25w.jpg"
          alt=""
          width={1000}
          height={20}
        />
        <Image
          className="w-full"
          src="/galleries/seniorboy/27w.jpg"
          alt=""
          width={1000}
          height={20}
        />
      </div>
      <div className="md:w-9/10 ml-auto mr-auto gap-2 grid grid-cols-2 md:grid-cols-4 mb-14">
        <Image
          className="w-full"
          src="/galleries/seniorboy/26.jpg"
          alt=""
          width={500}
          height={20}
        />
        <Image
          className="w-full"
          src="/galleries/seniorboy/28.jpg"
          alt=""
          width={500}
          height={20}
        />
        <Image
          className="w-full"
          src="/galleries/seniorboy/29.jpg"
          alt=""
          width={500}
          height={20}
        />
        <Image
          className="w-full"
          src="/galleries/seniorboy/30.jpg"
          alt=""
          width={500}
          height={20}
        />
      </div>
    </div>
  );
}
