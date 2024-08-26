import ArrowRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";

export const ContactSection = () => {
  return (
    <section className="py-14 pt-12 lg:py-24 lg:pt-20">
      <div className="container">
        <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left relative overflow-hidden z-0">
          <div className="absolute inset-0 -z-10 opacity-5" style={{ backgroundImage: `url(${grainImage.src})` }}></div>
          <div className="flex flex-col items-center md:flex-row gap-8 md:gap-16">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl">Vamos a crear algo muy increible juntos</h2>
              <p className="text-sm md:text-base mt-2">
                Estas listo para darle vida a tu proximo proyecto? Conectemos y discutamos de que manera puedo ayudarte
                a lograr tus objetivos.
              </p>
            </div>
            <div>
              <button className="bg-gray-900 text-white inline-flex items-center px-6 h-12 rounded-xl gap-2 mt-8 w-max broder border-gray-900">
                <span className="font-semibold">Contactame</span>
                <ArrowRightIcon className="size-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
