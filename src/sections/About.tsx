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

const toolboxItems = [
  {
    title: "PHP",
    icon: <Php />,
  },
  {
    title: "HTML5",
    icon: <Html5 />,
  },
  {
    title: "CSS",
    icon: <Css3 />,
  },
  {
    title: "Salesforce",
    icon: <Salesforce />,
  },
  {
    title: "ChatGPT",
    icon: <Chatgpt />,
  },
  {
    title: "Wordpress",
    icon: <Wordpress />,
  },
  {
    title: "Elementor",
    icon: <Elementor />,
  },
  {
    title: "SEO",
    icon: <Seo />,
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
