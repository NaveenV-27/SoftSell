import React from 'react';
import software from '@/public/software.png';
import Image from 'next/image';

const Hero = () => {
  return (
    <section
      id="hero"
      className=" text-white py-16 px-4 md:px-0 text-center md:text-left"
    >
      <div className="flex flex-col-reverse md:flex-row items-center justify-between max-w-6xl mx-auto gap-2">
      
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start gap-4">
        <div>

          <p className="text-sm text-blue-300">
            softsell - a software resale company
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            TURN UNUSED SOFTWARE INTO CASH
          </h1>
        </div>
          <p className="text-lg text-blue-300 md:text-xl">
            Easily sell your unused licenses in minutes—secure, fast, and hassle-free.
          </p>
          <a
            href="#contact"
            className="bg-gradient-to-r from-blue-500 via-blue-900 to-red-600 hover:bg-indigo-600 text-white py-3 px-6 rounded-full font-semibold transition hover:scale-105"
          >
            Sell My Licenses
          </a>
        </div>

        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <Image
            src={software}
            alt="Software"
            className="w-4/5 hidden md:block max-w-xs "
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
