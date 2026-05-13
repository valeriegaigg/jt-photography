// app/baby/page.tsx
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

export default function Baby() {
  return (
    <div className="w-full flex flex-col justify-center p-5">
      <h2 className="text-3xl text-center md:mt-50 md:ml-8 md:text-left md:pl-8">
        Baby
      </h2>
      <div className="md:w-9/10 ml-auto mr-auto gap-2 grid grid-cols-1 md:grid-cols-2 mt-8 mb-2">
        <Image
          className="w-full"
          src="/galleries/baby/1w.jpg"
          alt=""
          width={400}
          height={20}
        />
        <Image
          className="w-full"
          src="/galleries/baby/2w.jpg"
          alt=""
          width={400}
          height={20}
        />
        <Image
          className="w-full"
          src="/galleries/baby/5.jpg"
          alt=""
          width={400}
          height={20}
        />
        <Image
          className="w-full"
          src="/galleries/baby/11.jpg"
          alt=""
          width={400}
          height={20}
        />
        <Image
          className="w-full"
          src="/galleries/baby/3w.jpg"
          alt=""
          width={400}
          height={20}
        />
        <Image
          className="w-full"
          src="/galleries/baby/4w.jpg"
          alt=""
          width={400}
          height={20}
        />
        <Image
          className="w-full"
          src="/galleries/baby/6.jpg"
          alt=""
          width={400}
          height={20}
        />
        <Image
          className="w-full"
          src="/galleries/baby/15.jpg"
          alt=""
          width={400}
          height={20}
        />
        <Image
          className="w-full"
          src="/galleries/baby/7w.jpg"
          alt=""
          width={400}
          height={20}
        />
        <Image
          className="w-full"
          src="/galleries/baby/8w.jpg"
          alt=""
          width={400}
          height={20}
        />
        <Image
          className="w-full"
          src="/galleries/baby/9w.jpg"
          alt=""
          width={400}
          height={20}
        />
        <Image
          className="w-full"
          src="/galleries/baby/10w.jpg"
          alt=""
          width={400}
          height={20}
        />
        <Image
          className="w-full"
          src="/galleries/baby/12.jpg"
          alt=""
          width={400}
          height={20}
        />
        <Image
          className="w-full"
          src="/galleries/baby/13.jpg"
          alt=""
          width={400}
          height={20}
        />
        <Image
          className="w-full"
          src="/galleries/baby/14.jpg"
          alt=""
          width={400}
          height={20}
        />
        <Image
          className="w-full"
          src="/galleries/baby/18.jpg"
          alt=""
          width={400}
          height={20}
        />
      </div>
    </div>
  );
}
