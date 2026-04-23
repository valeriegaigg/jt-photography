// app/investment/page.tsx
import Image from "next/image";

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

export default function InvestmentPage() {
  return (
    <main className="flex flex-col items-center">
      <div className="md:flex md:flex-row-reverse md:justify-center md:max-w-7/8 mt-2 md:mt-8">
        <div className="w-full p-6">
          <Image
            className="w-full"
            src="/invest-m-op.jpg"
            alt=""
            width={450}
            height={20}
          />
        </div>
        <div className="leading-8 md:w-full m-4 p-4">
          <h2 className="text-3xl text-center mb-4 md:text-left">Investment</h2>
          <p>
            You deserve a unique, tailored approach to your family photo session
            or senior photo session. Kids grow and change so fast- each age and
            stage is so unique.
          </p>
          <p className="mt-4">
            Please contact me with any questions about what session is right for
            you.
          </p>
        </div>
      </div>
      <div className="mt-4 grid md:grid-cols-3 md:gap-8 w-7/8">
        <div className="flex flex-col items-center text-center md:translate-y-35">
          <h2 className="text-3xl mb-4">Seniors</h2>
          <div className="w-3/5 relative z-4">
            <Image
              className="w-full h-auto"
              src="/invest-1-op.jpg"
              alt=""
              width={450}
              height={50}
            />
          </div>
          <div className="bg-white relative z-1 -mt-25 pt-30 pb-8 w-full text-lg">
            <p className="mt-2">Multiple session options available</p>
            <p className="mt-2">Online Gallery</p>
            <p className="mt-6 text-sm italic">Starting at $475</p>
            <p className="mt-2 text-sm italic underline">View Gallery</p>
          </div>
        </div>

        <div className="flex flex-col items-center text-center mt-15">
          <h2 className="text-3xl mb-4">Seniors</h2>
          <div className="w-3/5 relative z-4">
            <Image
              className="w-full h-auto"
              src="/invest-2-op.jpg"
              alt=""
              width={400}
              height={20}
            />
          </div>
          <div className="bg-white relative z-1 -mt-25 pt-30 pb-8 w-full text-lg">
            <p className="mt-2">Multiple session options available</p>
            <p className="mt-2">Online Gallery</p>
            <p className="mt-6 text-sm italic">Starting at $475</p>
          </div>
        </div>

        <div className="flex flex-col items-center text-center mb-15 mt-15 md:translate-y-20">
          <h2 className="text-3xl mb-4">Seniors</h2>
          <div className="w-3/5 relative z-4">
            <Image
              className="w-full h-auto"
              src="/invest-3-op.jpg"
              alt=""
              width={400}
              height={20}
            />
          </div>
          <div className="bg-white relative z-1 -mt-25 pt-30 pb-8 w-full text-lg">
            <p className="mt-2">Multiple session options available</p>
            <p className="mt-2">Online Gallery</p>
            <p className="mt-6 text-sm italic">Starting at $475</p>
          </div>
        </div>
      </div>
    </main>
  );
}
