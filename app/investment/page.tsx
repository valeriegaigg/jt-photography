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
            You deserve a unique, tailored approach to your photo session, no
            matter the ocassion. Kids grow and change so fast- each age and
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
            <Link href="#other">Other &darr;</Link>
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
        className="flex flex-col mt-8 items-center w-full bg-white"
      >
        <div className="md:w-7/8 md:grid md:grid-cols-4 md:mt-8">
          <Image
            className="mr-auto ml-auto pb-8 md:w-full"
            src="/invest/2-op.jpg"
            alt=""
            width={420}
            height={20}
          />
          <div className="w-auto ml-4 p-8 col-span-2 leading-8">
            <h2 className="text-3xl mb-4">Seniors</h2>
            <h3 className="text-xl mb-2">Package 1:</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Molestiae odit repellendus et facilis amet magni deleniti earum
            </p>
            <h3 className="text-xl mt-4 mb-2">Package 2:</h3>
            <p className="mb-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Molestiae odit repellendus et facilis amet magni deleniti earum
            </p>
            <Link className="text-md font-normal mt-4 underline" href="/">
              Download Guide
            </Link>
          </div>
          <Image
            className="mr-auto ml-auto pb-8 md:w-full hidden md:block"
            src="/invest/7.jpg"
            alt=""
            width={420}
            height={20}
          />
        </div>
      </div>

      <div
        id="families"
        className="flex flex-col mt-8 items-center w-full bg-white"
      >
        <div className="md:w-7/8 md:grid md:grid-cols-4 md:mt-8">
          <Image
            className="mr-auto ml-auto pb-8 md:w-full"
            src="/invest/3-op.jpg"
            alt=""
            width={420}
            height={20}
          />
          <div className="w-auto ml-4 p-8 col-span-2 leading-8">
            <h2 className="text-3xl mb-4">Families</h2>
            <p>
              I love to capture outdoor family sessions, whether it's a sunny
              afternoon or an evening sunset. I travel to locations in the Fox
              Valley and would love to recommend my favorite spots for your
              shoot. Family sessions are approximately 1 hour long. Outfit
              changes are not a problem!
            </p>
            <li className="mt-2 ml-8">Package price: $450</li>
            <li className="ml-8">Location of your choice</li>
            <li className="ml-8">no. of images, online gallery</li>
          </div>
          <Image
            className="mr-auto ml-auto pb-8 md:w-full hidden md:block"
            src="/invest/5.jpg"
            alt=""
            width={420}
            height={20}
          />
        </div>
      </div>

      <div
        id="babies"
        className="flex flex-col mt-8 items-center w-full bg-white"
      >
        <div className="md:w-7/8 md:grid md:grid-cols-4 md:mt-8">
          <Image
            className="mr-auto ml-auto pb-8 md:w-full"
            src="/invest/1-op.jpg"
            alt=""
            width={420}
            height={20}
          />
          <div className="w-auto ml-4 p-8 col-span-2 leading-8">
            <h2 className="text-3xl mb-4">Babies</h2>
            <p>
              There is nothing quite like a sleepy newborn session. These can be
              done in the natural light of your home, or in my studio.
              Generally, newborn sessions are best within the first 10 days
              after birth. Siblings are welcome! I would love to include your
              big and little ones.
            </p>
            <li className="ml-8 mt-2">Package price: $400</li>
            <li className="ml-8">60 images in your online gallery</li>
            <p className="mt-4">
              I also offer maternity sessions in home, studio, or outdoors.
              Reach out with your details, I would love to work with you!
            </p>
          </div>
          <Image
            className="mr-auto ml-auto pb-8 md:w-full hidden md:block"
            src="/invest/maternity.jpg"
            alt=""
            width={420}
            height={20}
          />
        </div>
      </div>

      <div
        id="weddings"
        className="flex flex-col mt-8 items-center w-full bg-white"
      >
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
            <h3 className="text-xl mb-2">The Classic Wedding:</h3>
            <p>
              Includes getting ready candids, couple and family portraits,
              ceremony coverage, and one additional location for wedding party
              portraits.
            </p>
            <li className="ml-8">Hours of coverage</li>
            <li className="mb-4 ml-8">Number of photos</li>
            <h3 className="text-xl mt-4 mb-2">The Epic Wedding:</h3>
            <p>
              Includes everything listed in the Classic package, but I will also
              go to the reception site for approximately 2 hours.
            </p>
            <li className="ml-8">Hours of coverage</li>
            <li className="ml-8 ">Number of photos</li>
            <li className="ml-8 mb-4">
              Destination weddings - travel compensated
            </li>
            <p className="mb-4">
              Both packages include an engagement session and gallery available
              for those save-the-dates and invitations!{" "}
            </p>
            <Link className="text-md font-normal mt-4 underline" href="/">
              Download Full Guide
            </Link>
          </div>
        </div>
      </div>

      <div
        id="other"
        className="flex flex-col items-center w-7/8 md:w-6/8 h-100 mt-6 mb-8"
      >
        <h2 className="text-3xl text-center mt-8 mb-4">Other Sessions</h2>
        <p>
          For details about specialty sessions, please get in touch through the
          contact form.
        </p>
        <div className="grid grid-cols-2 gap-6 mt-8">
          <div className="bg-white p-4 md:pl-20 md:pr-20 text-center text-xl w-full">
            <h3 className="mt-2 md:mt-0">Seasonal Minis</h3>
            <Link href="/contact" className="text-sm italic">
              Request Info &rarr;
            </Link>
          </div>
          <div className="bg-white p-4 md:pl-20 md:pr-20 text-center text-xl w-full">
            <h3>Business Headshots</h3>
            <Link href="/contact" className="text-sm italic">
              Request Info &rarr;
            </Link>
          </div>
          <div className="bg-white p-4 md:pl-8 md:pr-8 text-center text-xl w-full">
            <h3>Graduations</h3>
            <Link href="/contact" className="text-sm italic">
              Request Info &rarr;
            </Link>
          </div>
          <div className="bg-white p-4 md:pl-8 md:pr-8 text-center text-xl w-full">
            <h3>Prom</h3>
            <Link href="/contact" className="text-sm italic">
              Request Info &rarr;
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
