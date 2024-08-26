import memojiImage from "@/assets/images/memoji-computer.png";
import Image from "next/image";
import Link from "next/link";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import grainImage from "@/assets/images/grain.jpg";
import StarIcon from "@/assets/icons/star.svg";
import SparkleIcon from "@/assets/icons/sparkle.svg";
import { HeroOrbit } from "@/components/HeroOrbit";
import Hand from "@/assets/images/saludo.png";

export const HeroSection = () => {
  return (
    <section id="hero" className="py-32 md:py-48 lg:py-60">
      <div className="absolute inset-0 top-[80px] md:top-0 [mask-image:linear-gradient(to_bottom,transparent,black_9%,black_90%,transparent)] md:[mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)] overflow-x-clip -z-10">
        <div className="absolute inset-0 -z-30 opacity-5" style={{ backgroundImage: `url(${grainImage.src})` }}></div>
        <div className="hero-ring size-[520px] md:size-[620px]"></div>
        <div className="hero-ring size-[620px] md:size-[820px]"></div>
        <div className="hero-ring size-[720px] md:size-[1020px]"></div>
        <div className="hero-ring size-[8120px] md:size-[1220px]"></div>
        <HeroOrbit size={430} rotation={-14} shouldOrbit orbitDuration="30s" shouldSpin spinDuration="3s">
          <SparkleIcon className="size-8 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={440} rotation={79} shouldOrbit orbitDuration="32s" shouldSpin spinDuration="3s">
          <SparkleIcon className="size-5 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={520} rotation={-41} shouldOrbit orbitDuration="34s">
          <div className="size-2 rounded-full bg-emerald-300/20"></div>
        </HeroOrbit>
        <HeroOrbit size={530} rotation={178} shouldOrbit orbitDuration="36s" shouldSpin spinDuration="3s">
          <SparkleIcon className="size-10 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={550} rotation={20} shouldOrbit orbitDuration="38s" shouldSpin spinDuration="6s">
          <StarIcon className="size-12 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit size={590} rotation={98} shouldOrbit orbitDuration="40s" shouldSpin spinDuration="6s">
          <StarIcon className="size-8 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit size={650} rotation={-5} shouldOrbit orbitDuration="42s">
          <div className="size-2 rounded-full bg-emerald-300/20"></div>
        </HeroOrbit>
        <HeroOrbit size={710} rotation={144} shouldOrbit orbitDuration="44s" shouldSpin spinDuration="3s">
          <SparkleIcon className="size-14 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={720} rotation={85} shouldOrbit orbitDuration="46s">
          <div className="size-3 rounded-full bg-emerald-300/20"></div>
        </HeroOrbit>
        <HeroOrbit size={800} rotation={-72} shouldOrbit orbitDuration="48s" shouldSpin spinDuration="7s">
          <StarIcon className="size-28 text-emerald-300" />
        </HeroOrbit>
      </div>
      <div className="container">
        <div className="flex flex-col items-center relative z-10">
          <Image src={memojiImage} alt="Person peeking from behind laptop" className="size-[100px]" />
          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
            <div className="bg-green-500 size-2.5 rounded-full relative">
              <div className="absolute inset-0 bg-green-500 rounded-full animate-ping-large"></div>
            </div>
            <div className="text-sm font-medium">Desarrollador wordpress</div>
          </div>
        </div>
        <div className="max-w-lg mx-auto">
          <h1 className="font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide">
            Soy Martin creador de webs excepcionales.
          </h1>
          <p className="mt-4 text-center text-white/60 md:text-lg">
            Me apasiona hacer webs de calidad, bonitas y eficientes. Siempre trato de mejorar la forma de hacer las
            cosas.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4 z-10">
          <a href="#projects">
            <button className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl">
              <span className="font-semibold">Explora Mi Trabajo</span>
              <ArrowDown className="size-4" />
            </button>
          </a>
          <Link
            href="https://wa.me/34613765894?text=Hola%20Martin%20%F0%9F%91%8B%20Acabo%20de%20ver%20tu%20portfolio%20y%20tengo%20un%20proyecto%20en%20mente%3A"
            target="_blank"
          >
            <button className="cursor-pointer inline-flex items-center gap-2 border border-white bg-white text-gray-900 px-6 h-12 rounded-xl">
              <Image src={Hand} alt="saludo" className="size-6" />
              <span className="font-semibold">Conecta Conmigo</span>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};
