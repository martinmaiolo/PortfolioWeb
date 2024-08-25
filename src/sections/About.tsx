import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import StarIcon from "@/assets/icons/star.svg";
import Image from "next/image";
import bookImage from "@/assets/images/book-cover.png";

const toolboxItems = [
  {
    title: "PHP",
    icon: "",
  },
  {
    title: "HTML5",
    icon: "",
  },
  {
    title: "CSS",
    icon: "",
  },
  {
    title: "Salesforce",
    icon: "",
  },
  {
    title: "ChatGPT",
    icon: "",
  },
  {
    title: "Wordpress",
    icon: "",
  },
  {
    title: "Elementor",
    icon: "",
  },
  {
    title: "SEO",
    icon: "",
  },
];

export const AboutSection = () => {
  return (
    <section className="">
      <SectionHeader
        text="Sobre Mi"
        title="Un Vistazo De Mi Mundo"
        description="Aprende mas sobre quien soy, lo que hago y lo que me inspira"
      />
      <div className="">
        <Card>
          <div>
            <StarIcon />
            <h2>Mis Logros</h2>
            <p>Explora las certificaciones que avalan mis conocimientos.</p>
          </div>
          <Image src={bookImage} alt="Book Cover" />
        </Card>
        <Card>
          <div>
            <StarIcon />
            <h2>Mis Herramientas</h2>
            <p>Explora las tecnologia que utilizo para crear expecionales experiencias digitales.</p>
          </div>
          <div>
            {toolboxItems.map((item) => (
              <div key={item.title}></div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};
