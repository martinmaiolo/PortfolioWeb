"use client";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import Image from "next/image";
import salesforceAdmin from "@/assets/images/Advanced-Administrator.png";
import Php from "@/assets/icons/php.svg";
import Html5 from "@/assets/icons/html5.svg";
import Css3 from "@/assets/icons/css3.svg";
import Salesforce from "@/assets/icons/salesforce.svg";
import Chatgpt from "@/assets/icons/chatgpt.svg";
import Wordpress from "@/assets/icons/wordpress.svg";
import Elementor from "@/assets/icons/elementor.svg";
import Seo from "@/assets/icons/seo.svg";
import mapImage from "@/assets/images/map.jpg";
import smileMemoji from "@/assets/images/memoji-smile.png";
import natacion from "@/assets/images/natacion.png";
import ciclismo from "@/assets/images/ciclismo.png";
import entrenamiento from "@/assets/images/entrenamiento.png";
import barista from "@/assets/images/barista.png";
import guitarra from "@/assets/images/guitarra.png";
import viajar from "@/assets/images/viajar.png";
import rock from "@/assets/images/rock.png";
import { CardHeader } from "@/components/CardHeader";
import { ToolboxIcons } from "@/components/ToolboxItems";
import { useRef } from "react";

const toolboxItems = [
  {
    title: "PHP",
    iconType: Php,
  },
  {
    title: "HTML5",
    iconType: Html5,
  },
  {
    title: "CSS",
    iconType: Css3,
  },
  {
    title: "Salesforce",
    iconType: Salesforce,
  },
  {
    title: "ChatGPT",
    iconType: Chatgpt,
  },
  {
    title: "Wordpress",
    iconType: Wordpress,
  },
  {
    title: "Elementor",
    iconType: Elementor,
  },
  {
    title: "SEO",
    iconType: Seo,
  },
];

const hobbies = [
  {
    title: "Natación",
    emoji: natacion,
    left: "5%",
    top: "5%",
  },
  {
    title: "Guitarra",
    emoji: guitarra,
    left: "55%",
    top: "5%",
  },
  {
    title: "Ciclismo",
    emoji: ciclismo,
    left: "35%",
    top: "40%",
  },
  {
    title: "Barista",
    emoji: barista,
    left: "10%",
    top: "35%",
  },
  {
    title: "Gym",
    emoji: entrenamiento,
    left: "70%",
    top: "45%",
  },
  {
    title: "Viajar",
    emoji: viajar,
    left: "5%",
    top: "65%",
  },
  {
    title: "Rock",
    emoji: rock,
    left: "45%",
    top: "70%",
  },
];

export const AboutSection = () => {
  const constrainRef = useRef(null);
  return (
    <section id="about" className="py-20 lg:py-28">
      <div className="container">
        <SectionHeader
          text="Sobre Mi"
          title="Un Vistazo De Mi Mundo"
          description="Aprende mas sobre quien soy, lo que me gusta hacer y lo que me inspira para mejorar."
        />
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 space-y-8 md:grid-cols-5 md:space-y-0 md:gap-8 lg:grid-cols-3">
            <Card className="h-[320px] col-span-2 lg:col-span-1">
              <CardHeader title="Mis Logros" description="Las certificaciones que avalan mis conocimientos." />
              <div className="w-60 mx-auto mt-2 md:mt-0 ">
                <Image src={salesforceAdmin} alt="salesforce certification" />
              </div>
            </Card>
            <Card className="h-[320px] col-span-3 lg:col-span-2">
              <CardHeader
                title="Mis Herramientas"
                description="Explora las tecnologia que utilizo para crear expecionales experiencias digitales."
              />
              <ToolboxIcons
                items={toolboxItems}
                itemsWrapperClassName="animate-move-left [animationDuration:40s] will-change-transform"
              />
              <ToolboxIcons
                items={toolboxItems}
                className="mt-6"
                itemsWrapperClassName="animate-move-right [animationDuration:30s] will-change-transform"
              />
            </Card>
          </div>
          <div className="grid grid-cols-1 space-y-8 md:grid-cols-5 md:space-y-0 md:gap-8 lg:grid-cols-3">
            <Card className="h-[320px] flex flex-col md:col-span-3 lg:col-span-2">
              <CardHeader
                title="Mis Hobbies"
                description="Explora lo que soy detras del mundo digital. Clickealos y ordenalos como prefieras."
              />
              <div ref={constrainRef} className="flex-1 relative">
                {hobbies.map((hobby) => (
                  <motion.div
                    key={hobby.title}
                    className="cursor-pointer inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute"
                    style={{ left: hobby.left, top: hobby.top }}
                    drag
                    dragConstraints={constrainRef}
                  >
                    <span className="font-medium text-gray-950">{hobby.title}</span>
                    <Image src={hobby.emoji} alt={hobby.title} className="size-6 pointer-events-none" />
                  </motion.div>
                ))}
              </div>
            </Card>
            <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
              <Image src={mapImage} alt="Map Location" className="h-full w-full object-cover object-right-bottom" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animationDuration:2s]">
                  {" "}
                </div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10">
                  <Image
                    src={smileMemoji}
                    alt="Smiling emoji"
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-16 "
                  />
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
