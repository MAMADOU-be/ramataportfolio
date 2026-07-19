import { motion } from "framer-motion";
import ramataPortrait from "@/assets/ramata-portrait.jpg";

const ease = [0.16, 1, 0.3, 1] as const;

const AboutSection = () => {
  return (
    <section
      id="about"
      className="grid grid-cols-12 gap-4 md:gap-8 px-6 md:px-12 lg:px-20 py-[15vh] border-t border-border"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.8, ease }}
        className="col-span-12 md:col-span-5 mb-8 md:mb-0"
      >
        <div className="aspect-[3/4] overflow-hidden">
          <motion.img
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.7, ease }}
            src={ramataPortrait}
            alt="Ramata Kane, photographe"
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.8, ease, delay: 0.15 }}
        className="col-span-12 md:col-span-6 md:col-start-7 flex flex-col justify-center"
      >
        <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">À propos</span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif italic tracking-tighter-custom mb-8">
          Une_Peulh
          <br />
          Photographe
        </h2>
        <p className="text-base leading-pretty text-muted-foreground max-w-[55ch] mb-6">
          Formé à la photographie au sein de Eyelitestudio, j'ai développé une maîtrise technique et artistique qui me
          permet de sublimer mes sujets sous différents angles : portrait, studio, événements ou encore reportages
          visuels.
        </p>
        <p className="text-base leading-pretty text-muted-foreground max-w-[55ch]">
          Titulaire d'un Master en Audit, Contrôle et Comptabilité, je porte une rigueur et une organisation précieuses
          dans la gestion de mes projets et collaborations.
        </p>
      </motion.div>
    </section>
  );
};

export default AboutSection;
