import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-cover bg-center">
      <Image 
        src="/assets/png/backgroundWallpaper.png"
        alt="Background"
        layout="fill"
        objectFit="cover"
      />

      <div className="absolute inset-0 flex items-center justify-center">
        <Hero />
      </div>
    </div>
  );
}
