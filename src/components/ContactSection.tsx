import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";

const ease = [0.16, 1, 0.3, 1];

const ContactSection = () => {
  return (
    <section id="contact" className="px-6 md:px-12 lg:px-20 py-[15vh] border-t border-border">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.8, ease }}
        className="grid grid-cols-12 gap-4 md:gap-8"
      >
        <div className="col-span-12 mb-12">
          <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4 block">
            Collaborons
          </span>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif italic tracking-tighter-custom">
            Un projet ?
          </h2>
        </div>

        <div className="col-span-12 md:col-span-8">
          <p className="text-lg leading-pretty text-muted-foreground max-w-[55ch] mb-12">
            Pour toute réservation, collaboration ou demande d'informations, je suis disponible et à votre écoute. Je serai ravie d'échanger avec vous sur vos projets afin de leur donner vie à travers mon objectif.
          </p>

          <div className="space-y-6">
            <a
              href="tel:+221772727114"
              className="flex items-center gap-4 text-foreground hover:text-accent transition-colors duration-300 group"
            >
              <Phone className="w-5 h-5" />
              <span className="text-xl md:text-2xl font-serif italic">+221 77 272 71 14</span>
            </a>
            <a
              href="mailto:ramatakane129@gmail.com"
              className="flex items-center gap-4 text-foreground hover:text-accent transition-colors duration-300 group"
            >
              <Mail className="w-5 h-5" />
              <span className="text-xl md:text-2xl font-serif italic">ramatakane129@gmail.com</span>
            </a>
          </div>
        </div>
      </motion.div>

      <div className="mt-[15vh] pt-8 border-t border-border flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <span className="font-mono text-xs text-muted-foreground uppercase tracking-widest">
          © 2025 Ramata Kane — Une_Peulh Photographe
        </span>
        <span className="font-mono text-xs text-muted-foreground uppercase tracking-widest">
          Dakar, Sénégal
        </span>
      </div>
    </section>
  );
};

export default ContactSection;
