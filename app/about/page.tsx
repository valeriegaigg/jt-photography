// app/about/page.tsx
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

export default function AboutPage() {
  return (
    <div className="w-full max-w-[2000px] mx-auto">
      <div className="hidden md:block bg-blue-200 h-150 w-full"></div>
      <div className="md:-mt-95 md:w-7/8 mx-auto flex flex-col justify-center">
        <Image
          className="md:max-w-1/3 mx-auto"
          src="/about/about1.jpeg"
          alt="Jennifer Tabbert"
          width={1000}
          height={20}
        />
        <div className="leading-8 w-full p-8">
          <h2 className="text-3xl text-center md:text-left mt-2">About Me</h2>
          <div className="md:flex md:flex-col-2 md:gap-8">
            <p className="indent-5 mt-4">
              I have been a photographer for the past 23 years, and during that
              time I have built so many amazing relationships with my clients
              and their families. Word of mouth has been the foundation of my
              business and has helped it grow into what it is today. One of the
              greatest joys of my career is walking alongside my clients through
              different stages of their lives.
            </p>
            <p className="indent-5 mt-4">
              I feel incredibly blessed to work with wonderful brides who later
              become longtime clients. Many of those wedding clients have grown
              into families that I now photograph year after year, creating
              memories and documenting milestones as their families grow. It is
              truly an honor to be a part of their stories and to build lasting
              relationships that extend far beyond a single photography session.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full mx-auto md:flex md:flex-col-2  md:gap-8 mb-8 items-center justify-center">
        <div className="bg-white mx-auto w-7/8 md:w-1/2 md:m-6">
          <Image
            className="w-full md:translate-x-6 md:translate-y-6"
            src="/about/about6.jpg"
            alt="Jennifer Tabbert"
            width={1200}
            height={20}
          />
        </div>
        <p className="md:max-w-md p-6 md:p-4 indent-5 mt-4  md:mt-10 leading-8">
          My photography style is fueled by my love for all things outdoors. I
          believe that the natural light and settings create a more authentic
          and beautiful atmosphere for my portraits. I strive to capture the
          genuine emotions and connections between my clients, allowing their
          personalities to shine through in every image. Whether it's a wedding,
          family session, or individual portrait, I aim to create timeless
          photographs that my clients will cherish for a lifetime.
        </p>
      </div>
    </div>
  );
}
