// app/investment/page.tsx
import Image from "next/image";
import Link from "next/link";

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
      <div className="w-full  md:flex md:flex-row-reverse mt-2 md:mt-10">
        <div className="md:w-3/5">
          <Image src="/invest/m-op.jpg" alt="" width={900} height={20} />
        </div>
        <div className="leading-8 md:p-10 m-4 p-4">
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
          <div className="mt-8 font-normal flex flex-row flex-wrap gap-6">
            <Link href="#seniors">Seniors &darr;</Link>
            <Link href="#families">Families &darr;</Link>
            <Link href="#babies">Babies &darr;</Link>
            <Link href="#weddings">Weddings &darr;</Link>
          </div>
        </div>
      </div>

      {/* <div className="mt-4 grid md:grid-cols-3 md:gap-8 w-7/8">
        <div className="flex flex-col items-center text-center md:translate-y-35">
          <h2 className="text-3xl mb-4">Seniors</h2>
          <div className="w-3/5 relative z-4">
            <Image
              className="w-full h-auto"
              src="/invest/2-op.jpg"
              alt=""
              width={400}
              height={20}
            />
          </div>
          <div className="flex flex-col items-center text-left bg-white relative z-1 -mt-25 pt-30 pb-8 w-full leading-8">
            <h3 className="w-80 text-xl mt-2">Package 1:</h3>
            <p className="text-left w-80 mt-2">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt
              odio numquam, consequatur repudiandae eum molestiae consectetur
              sit temporibus quo vel aspernatur, voluptatibus perspiciatis
              tenetur, veniam debitis. Iure accusamus deleniti a.
            </p>
            <h3 className="w-80 text-xl mt-4">Package 2:</h3>
            <p className="w-80 mt-2">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt
              odio numquam, consequatur repudiandae eum molestiae consectetur
              sit temporibus quo vel aspernatur, voluptatibus perspiciatis
              tenetur, veniam debitis. Iure accusamus deleniti a.
            </p>
            <p className="mt-6 text-sm italic">Starting at $475</p>
            <p className="mt-2 text-sm italic underline">View Gallery</p>
          </div>
        </div>

        <div className="flex flex-col items-center text-center mb-15 mt-15">
          <h2 className="text-3xl mb-4">Families</h2>
          <div className="w-3/5 relative z-4">
            <Image
              className="w-full h-auto"
              src="/invest/3-op.jpg"
              alt=""
              width={400}
              height={20}
            />
          </div>
          <div className="flex flex-col items-center text-left bg-white relative z-1 -mt-25 pt-30 pb-8 w-full leading-8">
            <h3 className="w-80 text-xl mt-2">Package 1:</h3>
            <p className="text-left w-80 mt-2">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt
              odio numquam, consequatur repudiandae eum molestiae consectetur
              sit temporibus quo vel aspernatur, voluptatibus perspiciatis
              tenetur, veniam debitis. Iure accusamus deleniti a.
            </p>
            <h3 className="w-80 text-xl mt-4">Package 2:</h3>
            <p className="w-80 mt-2">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt
              odio numquam, consequatur repudiandae eum molestiae consectetur
              sit temporibus quo vel aspernatur, voluptatibus perspiciatis
              tenetur, veniam debitis. Iure accusamus deleniti a.
            </p>
            <p className="mt-6 text-sm italic">Starting at $475</p>
            <p className="mt-2 text-sm italic underline">View Gallery</p>
          </div>
        </div>

        <div className="flex flex-col items-center text-center mb-15 mt-15 md:translate-y-20">
          <h2 className="text-3xl mb-4">Babies</h2>
          <div className="w-3/5 relative z-4 md:w-3/5">
            <Image
              className="w-full h-auto"
              src="/invest/1-op.jpg"
              alt=""
              width={450}
              height={50}
            />
          </div>
          <div className="flex flex-col items-center text-left bg-white relative z-1 -mt-25 pt-30 pb-8 w-full leading-8">
            <h3 className="w-80 text-xl mt-2">Package 1:</h3>
            <p className="text-left w-80 mt-2">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt
              odio numquam, consequatur repudiandae eum molestiae consectetur
              sit temporibus quo vel aspernatur, voluptatibus perspiciatis
              tenetur, veniam debitis. Iure accusamus deleniti a.
            </p>
            <h3 className="w-80 text-xl mt-4">Package 2:</h3>
            <p className="w-80 mt-2">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt
              odio numquam, consequatur repudiandae eum molestiae consectetur
              sit temporibus quo vel aspernatur, voluptatibus perspiciatis
              tenetur, veniam debitis. Iure accusamus deleniti a.
            </p>
            <p className="mt-6 text-sm italic">Starting at $475</p>
            <p className="mt-2 text-sm italic underline">View Gallery</p>
          </div>
        </div>
      </div> */}

      <div
        id="seniors"
        className="flex flex-col mt-6 items-center w-full bg-white"
      >
        <div className="md:w-7/8 md:grid md:grid-cols-4 md:mt-8">
          <Image
            className="mr-auto ml-auto pb-8 md:w-full"
            src="/invest/2-op.jpg"
            alt=""
            width={420}
            height={20}
          />
          <div className="w-auto ml-4 p-8 col-span-3 leading-8">
            <h2 className="text-3xl mb-4">Seniors</h2>
            <h3 className="text-xl mb-2">Package 1:</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Molestiae odit repellendus et facilis amet magni deleniti earum
              expedita est harum assumenda veritatis dolorem explicabo
              architecto nihil delectus fugit necessitatibus facere obcaecati
              consectetur, beatae ex? Officiis earum maxime eos ut quasi error,
              dolor pariatur non beatae provident, nemo ex repellendus? Dolorum.
            </p>
            <h3 className="text-xl mt-4 mb-2">Package 2:</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Molestiae odit repellendus et facilis amet magni deleniti earum
              expedita est harum assumenda veritatis dolorem explicabo
              architecto nihil delectus fugit necessitatibus facere obcaecati
              consectetur, beatae ex? Officiis earum maxime eos ut quasi error,
              dolor pariatur non beatae provident, nemo ex repellendus? Dolorum.
            </p>
            <h3 className="text-md font-normal mt-4 mb-2 underline">
              Download Guide
            </h3>
          </div>
        </div>
      </div>

      <div
        id="families"
        className="flex flex-col mt-6 items-center w-full bg-white"
      >
        <div className="md:w-7/8 md:grid md:grid-cols-4 md:mt-8">
          <Image
            className="mr-auto ml-auto pb-8 md:w-full"
            src="/invest/3-op.jpg"
            alt=""
            width={420}
            height={20}
          />
          <div className="w-auto ml-4 p-8 col-span-3 leading-8">
            <h2 className="text-3xl mb-4">Families</h2>
            <h3 className="text-xl mb-2">Package 1:</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Molestiae odit repellendus et facilis amet magni deleniti earum
              expedita est harum assumenda veritatis dolorem explicabo
              architecto nihil delectus fugit necessitatibus facere obcaecati
              consectetur, beatae ex? Officiis earum maxime eos ut quasi error,
              dolor pariatur non beatae provident, nemo ex repellendus? Dolorum.
            </p>
            <h3 className="text-xl mt-4 mb-2">Package 2:</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Molestiae odit repellendus et facilis amet magni deleniti earum
              expedita est harum assumenda veritatis dolorem explicabo
              architecto nihil delectus fugit necessitatibus facere obcaecati
              consectetur, beatae ex? Officiis earum maxime eos ut quasi error,
              dolor pariatur non beatae provident, nemo ex repellendus? Dolorum.
            </p>
            <h3 className="text-md font-normal mt-4 mb-2 underline">
              Download Guide
            </h3>
          </div>
        </div>
      </div>

      <div className="flex flex-col mt-6 items-center w-full bg-white">
        <div className="md:w-7/8 md:grid md:grid-cols-4 md:mt-8">
          <Image
            className="mr-auto ml-auto pb-8 md:w-full"
            src="/invest/1-op.jpg"
            alt=""
            width={420}
            height={20}
          />
          <div className="w-auto ml-4 p-8 col-span-3 leading-8">
            <h2 className="text-3xl mb-4">Babies</h2>
            <h3 className="text-xl mb-2">Package 1:</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Molestiae odit repellendus et facilis amet magni deleniti earum
              expedita est harum assumenda veritatis dolorem explicabo
              architecto nihil delectus fugit necessitatibus facere obcaecati
              consectetur, beatae ex? Officiis earum maxime eos ut quasi error,
              dolor pariatur non beatae provident, nemo ex repellendus? Dolorum.
            </p>
            <h3 className="text-xl mt-4 mb-2">Package 2:</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Molestiae odit repellendus et facilis amet magni deleniti earum
              expedita est harum assumenda veritatis dolorem explicabo
              architecto nihil delectus fugit necessitatibus facere obcaecati
              consectetur, beatae ex? Officiis earum maxime eos ut quasi error,
              dolor pariatur non beatae provident, nemo ex repellendus? Dolorum.
            </p>
            <h3 className="text-md font-normal mt-4 mb-2 underline">
              Download Guide
            </h3>
          </div>
        </div>
      </div>

      <div className="flex flex-col mt-6 items-center w-full bg-white">
        <div className="md:w-7/8 md:grid md:grid-cols-4 md:mt-8">
          <Image
            className="mr-auto ml-auto pb-8 md:w-full"
            src="/invest/4.jpg"
            alt=""
            width={420}
            height={20}
          />
          <div className="w-auto ml-4 p-8 col-span-3 leading-8">
            <h2 className="text-3xl mb-4">Weddings</h2>
            <h3 className="text-xl mb-2">Package 1:</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Molestiae odit repellendus et facilis amet magni deleniti earum
              expedita est harum assumenda veritatis dolorem explicabo
              architecto nihil delectus fugit necessitatibus facere obcaecati
              consectetur, beatae ex? Officiis earum maxime eos ut quasi error,
              dolor pariatur non beatae provident, nemo ex repellendus? Dolorum.
            </p>
            <h3 className="text-xl mt-4 mb-2">Package 2:</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Molestiae odit repellendus et facilis amet magni deleniti earum
              expedita est harum assumenda veritatis dolorem explicabo
              architecto nihil delectus fugit necessitatibus facere obcaecati
              consectetur, beatae ex? Officiis earum maxime eos ut quasi error,
              dolor pariatur non beatae provident, nemo ex repellendus? Dolorum.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white w-7/8 md:w-6/8 h-100 mt-8 mb-8">
        <h2 className="text-3xl text-center m-8">Mini Sessions</h2>
        info here
      </div>
    </main>
  );
}
