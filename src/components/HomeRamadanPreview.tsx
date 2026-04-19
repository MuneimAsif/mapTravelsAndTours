import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Moon, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import kaabaImage from "@/assets/kaaba-makkah.webp";
import madinahImage from "@/assets/madinah-nabawi.webp";

const HomeRamadanPreview = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="section-padding bg-gradient-to-b from-primary/5 to-background relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-gold/5 blur-3xl" />
      
      <div className="container-custom relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/20 text-gold border border-gold/30 mb-6">
            <Moon className="w-5 h-5 fill-current" />
            <span className="font-semibold">Umrah Special</span>
          </div>
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Sacred Makkah &
            <span className="text-primary block mt-2">Madinah Tours</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Answer the call of faith and explore the Holy Lands with our perfectly planned, soul-enriching travel packages.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative rounded-3xl overflow-hidden group"
          >
            <img src={kaabaImage} alt="Kaaba in Masjid al-Haram, Makkah" className="w-full h-[280px] object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="font-serif text-2xl font-bold text-white mb-1">Holy Makkah</h3>
              <p className="text-white/80 text-sm">Sacred Kaaba & Spritual Tawaf</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative rounded-3xl overflow-hidden group"
          >
            <img src={madinahImage} alt="Prophet's Mosque in Madinah" className="w-full h-[280px] object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="font-serif text-2xl font-bold text-white mb-1">Holy Madinah</h3>
              <p className="text-white/80 text-sm">Prophet's Mosque & Riyad-ul-Jannah</p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <Button className="btn-gold group" asChild>
            <Link to="/umrah">
              <Moon className="mr-2 w-4 h-4" />
              View details
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeRamadanPreview;
