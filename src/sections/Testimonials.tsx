import { SectionHeader } from "@/components/SectionHeader";
import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import memojiAvatar4 from "@/assets/images/memoji-avatar-4.png";
import memojiAvatar5 from "@/assets/images/memoji-avatar-5.png";
import Image from "next/image";
import { Card } from "@/components/Card";
import { Fragment } from "react";

const testimonials = [
  {
    name: "Alex Rodriguez",
    position: "Marketing Manager @ TechStartups",
    text: "Fue fundamental para transformar nuestro sitio web en una poderosa herramienta de marketing. Su atención al detalle y su capacidad para comprender nuestra marca es excepcional.",
    avatar: memojiAvatar1,
  },
  {
    name: "Olivia Valverde",
    position: "Diseñadora @ GreenLeaf",
    text: "Trabajar con Martín fue un placer. Su experiencia como desarrollador wordpress le dio vida a nuestros diseños de una manera que nunca imaginamos superando nuestras expectativas.",
    avatar: memojiAvatar2,
  },
  {
    name: "Daniel Blanco",
    position: "CEO @ InnovateCo",
    text: "La capacidad de Martin para crear experiencias de usuario perfectas es incomparable. Nuestro sitio web ha mostrado un aumento en las conversiones desde el lanzamiento del nuevo diseño.",
    avatar: memojiAvatar3,
  },
  {
    name: "Emilia Martinez",
    position: "Product Manager @ GlobalTech",
    text: "Martin es un verdadero mago de wordpress. Tomó nuestro producto y lo transformó en una interfaz de usuario intuitiva y atractiva. Ya vemos comentarios positivos de nuestros clientes.",
    avatar: memojiAvatar4,
  },
  {
    name: "Federico González",
    position: "Director IT @ MegaCorp",
    text: "El trabajo de Martin en nuestro sitio web ha sido buenisimo. Es un desarrollador talentoso que también es un gran comunicador. Lo recomendamos ampliamente.",
    avatar: memojiAvatar5,
  },
];

export const TestimonialsSection = () => {
  return (
    <section className="py-16 lg:py-24">
      <div className="container">
        <SectionHeader
          text={"Clientes Satisfechos"}
          title={"Que dicen los clientes"}
          description={"No te quedes solo con mi palabra. Mira lo que mis clientes dicen sobre mi trabajo."}
        />
        <div className="mt-16 lg:mt-20 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4 -my-4">
          <div className="flex flex-none gap-8 pr-8 animate-move-left [animationDuration:90s] hover:[animation-play-state:paused]">
            {[...new Array(2)].fill(0).map((_, idx) => (
              <Fragment key={idx}>
                {testimonials.map((testimonial) => (
                  <Card
                    key={testimonial.name}
                    className="max-w-xs md:max-w-md p-6 md:p-8 hover:-rotate-3 transition duration-300"
                  >
                    <div className="flex gap-4 items-center">
                      <div className="size-14 bg-gray-700 inline-flex items-center justify-center rounded-full flex-shrink-0">
                        <Image src={testimonial.avatar} alt={testimonial.name} className="max-h-full" />
                      </div>
                      <div>
                        <div className="font-semibold pointer-events-none">{testimonial.name}</div>
                        <div className="text-sm text-white/40 pointer-events-none">{testimonial.position}</div>
                      </div>
                    </div>
                    <p className="mt-4 md:mt-6 text-sm md:text-base pointer-events-none">{testimonial.text}</p>
                  </Card>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
