"use client";
import dynamic from 'next/dynamic';
import Hero from "@/components/Hero";
import Info from "@/components/Info";
import Progress from "@/components/Progress";
import Contact from "@/components/Contact";
import Reviews from "@/components/Reviews";
const ChatWidget = dynamic(() => import('@/components/ChatWidget'), {
  ssr: false,
});
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center bg-linear-to-r from-blue-800 via-blue-900 to-red-600 pb-12">
      <div className="flex flex-col items-center justify-center p-1">
          <Hero />
          <Progress />
          <Info />
          <Reviews />
          <Contact />
          <ChatWidget />
      </div>
    </div>
  );
}
