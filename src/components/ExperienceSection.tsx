import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

const experiences = [
  {
    title: "COJOJ",
    desc: "Collaboration avec le Comité d'Organisation des Jeux Olympiques de la Jeunesse",
  },
  {
    title: "Shooting Studio & Extérieur",
    desc: "Réalisation de shootings en studio et en extérieur pour des projets variés",
  },
  {
    title: "Couverture Événementielle",
    desc: "Mariages, séminaires, cérémonies, soirées professionnelles et graduations",
  },
  {
    title: "Visuels Impactants",
    desc: "Création de visuels pour particuliers et professionnels",
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="px-6 md:px-12 lg:px-20 py-[15vh] border-t border-border">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.8, ease }}
        className="grid grid-cols-12 gap-4 md:gap-8"
      >
        <div className="col-span-12 md:col-span-4 mb-12 md:mb-0">
          <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4 block">
            Parcours
          </span>
          <h2 className="text-5xl md:text-6xl font-serif italic tracking-tighter-custom">
            Expériences
          </h2>
        </div>

        <div className="col-span-12 md:col-span-7 md:col-start-6 space-y-12">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease, delay: i * 0.1 }}
            >
              <h3 className="text-xl md:text-2xl font-serif italic mb-2">{exp.title}</h3>
              <p className="text-muted-foreground leading-pretty max-w-[50ch]">{exp.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ExperienceSection;
