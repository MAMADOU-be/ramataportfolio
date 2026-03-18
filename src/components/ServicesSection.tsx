import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

const services = [
  { num: "01", title: "Shooting Studio", desc: "Portraits individuels, mode, artistique" },
  { num: "02", title: "Événementiel", desc: "Mariages, séminaires, anniversaires, réceptions" },
  { num: "03", title: "Reportage Photo", desc: "Entreprises et institutions" },
  { num: "04", title: "Post-production", desc: "Retouche professionnelle" },
  { num: "05", title: "Accompagnement Créatif", desc: "Projets personnalisés" },
];

const ServicesSection = () => {
  return (
    <section id="services" className="px-6 md:px-12 lg:px-20 py-[15vh] border-t border-border">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.8, ease }}
        className="mb-16"
      >
        <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4 block">
          Ce que je propose
        </span>
        <h2 className="text-5xl md:text-7xl font-serif italic tracking-tighter-custom">
          Services
        </h2>
      </motion.div>

      <div className="space-y-0">
        {services.map((service, i) => (
          <motion.div
            key={service.num}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease, delay: i * 0.08 }}
            className="grid grid-cols-12 gap-4 py-8 border-b border-border group cursor-default"
          >
            <span className="col-span-2 md:col-span-1 font-mono text-xs text-muted-foreground self-center">
              {service.num}
            </span>
            <h3 className="col-span-5 md:col-span-4 text-xl md:text-2xl font-serif italic self-center group-hover:text-accent transition-colors duration-500">
              {service.title}
            </h3>
            <p className="col-span-5 md:col-span-7 text-muted-foreground text-sm md:text-base self-center leading-pretty">
              {service.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
