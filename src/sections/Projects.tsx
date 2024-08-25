import Image from "next/image";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import mamaEstelar from "@/assets/images/mamaEstelar.png";
import mutiplySchool from "@/assets/images/MutiplySchool.png";
import cedronEs from "@/assets/images/cedronEs.png";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";

const portfolioProjects = [
  {
    company: "mamaestelar",
    year: "2022",
    title: "Web Servicios Astrales",
    results: [
      { title: "Desarrollo y diseño mejorado 50%" },
      { title: "Velocidad del sitio mejorada 50%" },
      { title: "Incremento del trafico 35%" },
    ],
    link: "#",
    image: mamaEstelar,
  },
  {
    company: "Multiply School",
    year: "2023",
    title: "Plataforma Bootcamps",
    results: [
      { title: "Mejoramos la ventas 25%" },
      { title: "Alcance de nuevos clientes 35%" },
      { title: "Posicionamiento SEO mejorado 15%" },
    ],
    link: "#",
    image: mutiplySchool,
  },
  {
    company: "Cedron es",
    year: "2023",
    title: "Booking Restaurante",
    results: [
      { title: "Fidelizacion clientes mejorada 40%" },
      { title: "Eficiencia recepcion mejorada 50%" },
      { title: "Experiencia usuario aumentada 35%" },
    ],
    link: "#",
    image: cedronEs,
  },
];

export const ProjectsSection = () => {
  return (
    <section className="pb-16 lg:py-24">
      <div className="container">
        <SectionHeader
          text={"Resultados High-level"}
          title={"Proyectos Realizados"}
          description={"Obeserva como transforme conceptos en maravillosas experiencias digitales."}
        />
        <div>
          <div className="flex flex-col mt-10 md:mt-20 gap-12">
            {portfolioProjects.map((project) => (
              <Card key={project.title} className="pt-8 px-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20">
                <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                  <div className="lg:pb-16">
                    <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                      <span className="">{project.company}</span>
                      <span>&bull;</span>
                      <span className="">{project.year}</span>
                    </div>

                    <h3 className="font-serif text-2xl md:text-4xl mt-2 md:mt-5">{project.title}</h3>
                    <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                    {project.results.map((result) => (
                      <ul key={result.title} className="flex flex-col gap-4 mt-4 md:mt-5">
                        <li className="flex gap-2 text-sm md:text-base text-white/50">
                          <CheckCircleIcon className="size-5 md:size-6" />
                          <span>{result.title}</span>
                        </li>
                      </ul>
                    ))}

                    <a href={project.link}>
                      <button className="bg-white text-gray-950 h-12 w-full rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8 md:w-auto px-6">
                        <span>Visitar Sitio Web</span>
                        <ArrowUpRightIcon className="size-4" />
                      </button>
                    </a>
                  </div>
                  <div className="relative">
                    <Image
                      src={project.image}
                      alt={project.title}
                      className="mt-8 -mb-4 md:mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                    />
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
