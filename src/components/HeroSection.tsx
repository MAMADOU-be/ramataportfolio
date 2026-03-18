import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col justify-end px-6 md:px-12 lg:px-20 pb-[15vh] pt-32">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease }}
      >
        <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-6 block">
          Photographe — Dakar, Sénégal
        </span>
        <h1 className="text-[12vw] md:text-[10vw] lg:text-[8vw] font-serif italic leading-[0.9] tracking-tighter-custom text-foreground">
          Ramata Kane
        </h1>
      </motion.div>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease, delay: 0.3 }}
        className="mt-8 text-lg md:text-xl leading-pretty text-muted-foreground max-w-[50ch]"
      >
        Je fige des instants uniques et authentiques. Chaque image raconte une histoire.
      </motion.p>
    </section>
  );
};

export default HeroSection;
