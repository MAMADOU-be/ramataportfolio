import { motion } from "framer-motion";
import { useState } from "react";

import corporate1 from "@/assets/corporate-1.jpg";
import corporate2 from "@/assets/corporate-2.jpg";
import corporate3 from "@/assets/corporate-3.jpg";
import artistic1 from "@/assets/artistic-1.jpg";
import artistic2 from "@/assets/artistic-2.jpg";
import artistic3 from "@/assets/artistic-3.jpg";
import artistic4 from "@/assets/artistic-4.jpg";
import event1 from "@/assets/event-1.jpg";
import event2 from "@/assets/event-2.jpg";
import event3 from "@/assets/event-3.jpg";
import event4 from "@/assets/event-4.jpg";
import event5 from "@/assets/event-5.jpg";

const ease = [0.16, 1, 0.3, 1] as const;

type Category = "all" | "corporate" | "artistic" | "events";

const photos = [
  { src: corporate1, cat: "corporate" as const, label: "Corporate" },
  { src: corporate2, cat: "corporate" as const, label: "Corporate" },
  { src: corporate3, cat: "corporate" as const, label: "Corporate" },
  { src: artistic1, cat: "artistic" as const, label: "Artistique" },
  { src: artistic2, cat: "artistic" as const, label: "Artistique" },
  { src: artistic3, cat: "artistic" as const, label: "Artistique" },
  { src: artistic4, cat: "artistic" as const, label: "Artistique" },
  { src: event1, cat: "events" as const, label: "Événement" },
  { src: event2, cat: "events" as const, label: "Événement" },
  { src: event3, cat: "events" as const, label: "Événement" },
  { src: event4, cat: "events" as const, label: "Événement" },
  { src: event5, cat: "events" as const, label: "Événement" },
];

const filters: { key: Category; label: string }[] = [
  { key: "all", label: "Tout" },
  { key: "corporate", label: "Corporate" },
  { key: "artistic", label: "Artistique" },
  { key: "events", label: "Événements" },
];

const GallerySection = () => {
  const [active, setActive] = useState<Category>("all");

  const filtered = active === "all" ? photos : photos.filter((p) => p.cat === active);

  return (
    <section id="gallery" className="px-6 md:px-12 lg:px-20 py-[15vh] border-t border-border">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.8, ease }}
        className="mb-12"
      >
        <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4 block">
          Portfolio
        </span>
        <h2 className="text-5xl md:text-7xl font-serif italic tracking-tighter-custom">
          Galerie
        </h2>
      </motion.div>

      <div className="flex gap-3 mb-12 flex-wrap">
        {filters.map((f) => (
          <button
            key={f.key}
            onClick={() => setActive(f.key)}
            className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-widest border transition-all duration-300 ${
              active === f.key
                ? "bg-foreground text-background border-foreground"
                : "border-border text-muted-foreground hover:border-foreground hover:text-foreground"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      <motion.div layout className="grid grid-cols-12 gap-3 md:gap-4">
        {filtered.map((photo, i) => {
          const spanClass =
            i % 5 === 0
              ? "col-span-12 md:col-span-8"
              : i % 5 === 1
              ? "col-span-6 md:col-span-4"
              : i % 5 === 2
              ? "col-span-6 md:col-span-4"
              : i % 5 === 3
              ? "col-span-12 md:col-span-4"
              : "col-span-12 md:col-span-4";

          return (
            <motion.div
              key={photo.src + i}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5, ease }}
              className={`${spanClass} aspect-[4/3] overflow-hidden group relative`}
            >
              <motion.img
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.7, ease }}
                src={photo.src}
                alt={photo.label}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-all duration-500 flex items-end p-4">
                <span className="font-mono text-xs uppercase tracking-widest text-background opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {photo.label}
                </span>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default GallerySection;
