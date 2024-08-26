import ArrowUpRight from "@/assets/icons/arrow-up-right.svg";
import Link from "next/link";

const footerLink = [
  {
    title: "Email",
    href: "mailto:martin.maiolo@gmail.com",
  },
  {
    title: "LinkedIn",
    href: "https://es.linkedin.com/in/martinmaiolo",
  },
  {
    title: "Youtube",
    href: "https://www.youtube.com/@empachado69",
  },
  {
    title: "Whatsapp",
    href: "https://wa.me/34613765894?text=Hola%20Martin%20%F0%9F%91%8B%20Acabo%20de%20ver%20tu%20portfolio%20y%20tengo%20un%20proyecto%20en%20mente%3A",
  },
];
export const Footer = () => {
  return (
    <footer className="relative overflow-x-clip">
      <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10"></div>
      <div className="container">
        <div className="border-t border-white/15 py-6 text-sm flex flex-col md:flex-row items-center md:justify-between gap-8">
          <div className="text-white/50">&copy; 2024. All rights reserved.</div>
          <nav className="flex flex-col md:flex-row items-center gap-8">
            {footerLink.map((link) => (
              <Link
                key={link.title}
                href={link.href}
                target="_blank"
                className="inline-flex items-center gap-1.5 cursor-pointer"
              >
                <span className="font-semibold">{link.title}</span>
                <ArrowUpRight className="size-4" />
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};
