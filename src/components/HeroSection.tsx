import { motion } from "framer-motion";
import logo from "@/assets/logo.png";

const ease = [0.16, 1, 0.3, 1] as const;

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-end px-6 md:px-12 lg:px-20 pb-[15vh] pt-32">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between w-full gap-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease }}
          className="flex-1"
        >
          <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-6 block">
            Photographe — Dakar, Sénégal
          </span>
          <h1 className="text-[12vw] md:text-[10vw] lg:text-[8vw] font-serif italic leading-[0.9] tracking-tighter-custom text-foreground">
            Ramata Kane
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.3 }}
            className="mt-8 text-lg md:text-xl leading-pretty text-muted-foreground max-w-[50ch]"
          >
            Je fige des instants uniques et authentiques. Chaque image raconte une histoire.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease, delay: 0.2 }}
          className="flex-shrink-0"
        >
          <img src={logo} alt="Une Peulh" className="w-40 md:w-56 lg:w-64" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
