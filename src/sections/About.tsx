import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import StarIcon from "@/assets/icons/star.svg";
import Image from "next/image";
import bookImage from "@/assets/images/book-cover.png";
import Php from "@/assets/icons/php.svg";
import Html5 from "@/assets/icons/html5.svg";
import Css3 from "@/assets/icons/css3.svg";
import Salesforce from "@/assets/icons/salesforce.svg";
import Chatgpt from "@/assets/icons/chatgpt.svg";
import Wordpress from "@/assets/icons/wordpress.svg";
import Elementor from "@/assets/icons/elementor.svg";
import Seo from "@/assets/icons/seo.svg";
import { TechIcon } from "@/components/TechIcon";
import mapImage from "@/assets/images/map.png";
import smileMemoji from "@/assets/images/memoji-smile.png";
import natacion from "@/assets/images/natacion.png";
import ciclismo from "@/assets/images/ciclismo.png";
import entrenamiento from "@/assets/images/entrenamiento.png";
import barista from "@/assets/images/barista.png";
import guitarra from "@/assets/images/guitarra.png";
import viajar from "@/assets/images/viajar.png";
import rock from "@/assets/images/rock.png";
import { CardHeader } from "@/components/CardHeader";

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
  },
  {
    title: "Ciclismo",
    emoji: ciclismo,
  },
  {
    title: "Barista",
    emoji: barista,
  },
  {
    title: "Guitarra Electrica",
    emoji: guitarra,
  },
  {
    title: "Entrenamiento",
    emoji: entrenamiento,
  },
  {
    title: "Viajar",
    emoji: viajar,
  },
  {
    title: "Rock",
    emoji: rock,
  },
];

export const AboutSection = () => {
  return (
    <section className="py-20">
      <div className="container">
        <SectionHeader
          text="Sobre Mi"
          title="Un Vistazo De Mi Mundo"
          description="Aprende mas sobre quien soy, lo que me gusta hacer y lo que me inspira para mejorar."
        />
        <div className="mt-20">
          <Card className="h-[320px]">
            <CardHeader title="Mis Logros" description="Explora las certificaciones que avalan mis conocimientos." />
            <div className="w-40 mx-auto mt-8">
              <Image src={bookImage} alt="Book Cover" />
            </div>
          </Card>
          <Card className="h-[320px]">
            <CardHeader
              title="Mis Herramientas"
              description="Explora las tecnologia que utilizo para crear expecionales experiencias digitales."
            />
            <div>
              {toolboxItems.map((item) => (
                <div key={item.title} className="">
                  <TechIcon component={item.iconType} />
                  <span className="">{item.title}</span>
                </div>
              ))}
            </div>
          </Card>
          <Card className="h-[320px]">
            <CardHeader
              title="Detras del Codigo"
              description="Explora mis intereses y hobbies detras del mundo digital."
            />
            <div>
              {hobbies.map((hobby) => (
                <div key={hobby.title} className="flex gap-2">
                  <span className="">{hobby.title}</span>
                  <Image src={hobby.emoji} alt={hobby.title} className="size-6" />
                </div>
              ))}
            </div>
          </Card>
          <Card className="h-[320px]">
            <Image src={mapImage} alt="Map Location" />
            <Image src={smileMemoji} alt="Smiling emoji" />
          </Card>
        </div>
      </div>
    </section>
  );
};
