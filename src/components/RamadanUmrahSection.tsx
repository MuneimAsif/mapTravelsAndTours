import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Building2, Moon, ArrowRight, SmartphoneNfc, Compass, UtensilsCrossed, MapPin, CarTaxiFront } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import kaabaImage from "@/assets/kaaba-makkah.webp";
import madinahImage from "@/assets/madinah-nabawi.webp";


const values = [
  {
    icon: CarTaxiFront,
    title: "Transportation",
    description: "Stop worrying about airport, hotel or ziarah travels. Our transportation covers all & drops you at your doorstep.",
  },
  {
    icon: SmartphoneNfc,
    title: "SIM Packages",
    description: "Get activated SIM packages keeping you connected with your loved ones throughout the whole journey.",
  },
  {
    icon: MapPin,
    title: "Ziaraah Tours",
    description: "Visit Jabal-e-Noor, Jabal-e-Uhud, Baqi, Wadie-e-Jinn and whereever you want to go in Makkah and Madinah.",
  },
  {
    icon: Compass,
    title: "Tour Guides",
    description: "Visiting just sites isn't enough. Build connection with them with explained history by our expert tour guides.",
  },
  {
    icon: Building2,
    title: "Nearby Hotels",
    description: "Stay just a few steps away from the Haram and experience the spiritual vibes of Makkah and Madinah 24/7.",
  },
  {
    icon: UtensilsCrossed,
    title: "Meals & Dining",
    description: "Enjoy delicious meals with us. We offer a variety of dining options to suit your taste and dietary needs.",
  },
];
const RamadanUmrahSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="ramadan-umrah" className="bg-gradient-to-b from-gold/10 to-background relative overflow-hidden -mt-8 py-10">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-gold/5 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-primary/5 blur-3xl" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/20 text-gold border border-gold/30 mb-6 shadow-gold">
            <Moon className="w-5 h-5 fill-current" />
            <span className="font-semibold">Umrah Special</span>
          </div>
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Welcome To The
            <span className="text-primary block mt-2">Spiritual World</span>
          </h2>
          <p className=" text-muted-foreground mb-5 leading-relaxed text-lg">
            Is your heart still waiting to feel the blessed winds of Makkah and Madinah? This can be a sign.
            Don't miss the chance! Pack your bags - the Holy lands are calling you.
          </p>
        </motion.div>

        {/* Dual Feature Images - Makkah & Madinah */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {/* Kaaba - Makkah */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative rounded-3xl overflow-hidden group"
          >
            <img
              src={kaabaImage}
              alt="Kaaba in Masjid al-Haram, Makkah"
              className="w-full h-[350px] object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
              <div className="text-white">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/20 text-gold border border-gold/30 mb-3">
                  <Moon className="w-4 h-4 fill-current" />
                  <span className="text-sm font-medium">Holy Makkah</span>
                </div>
                <h3 className="font-serif text-2xl md:text-3xl font-bold mb-2">
                  Haram-e-Kaaba
                </h3>
                <p className="text-white/80 text-sm md:text-base">
                  Perform Tawaf around the House of Allah عزّوجل and exprience the spiritual energy of it.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Masjid-e-Nabawi - Madinah */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative rounded-3xl overflow-hidden group"
          >
            <img
              src={madinahImage}
              alt="Prophet's Mosque in Madinah"
              className="w-full h-[350px] object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
              <div className="text-white">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/20 text-gold border border-gold/30 mb-3">
                  <Moon className="w-4 h-4 fill-current" />
                  <span className="text-sm font-medium">Holy Madinah</span>
                </div>
                <h3 className="font-serif text-2xl md:text-3xl font-bold mb-2">
                  Haram-e-Taiba
                </h3>
                <p className="text-white/80 text-sm md:text-base">
                  Stand before Prophet Muhammad ﷺ and seek his intercession in his blessed city.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative"
        >
          <p className="text-center text-gold font-semibold uppercase tracking-wider text-sm mb-10">
            Umrah Values
          </p>
        </motion.div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 pt-6">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              className="group text-center flex flex-col items-center py-5 rounded-xl card-premium hover:border-gold/30 ring-2 ring-gold/50 bg-gold/5">
              <value.icon className="w-8 h-8 text-gold mb-3 group-hover:scale-110 transition-transform" />
              <h4 className="font-semibold text-foreground">
                {value.title}
              </h4>
              <p className="w-[99%] text-muted-foreground mt-3 leading-relaxed text-sm">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>


        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative rounded-2xl overflow-hidden mt-20 bg-gradient-to-r from-primary via-primary/95 to-primary p-8 md:p-10"
        >
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-gold/10 blur-3xl" />
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-white mb-2">
                Blessed Journey Awaits
              </h3>
              <p className="text-white/80">
                It's your turn. Patience is over. One step more and you are in front of the most blessed places on the planet.
              </p>
            </div>
            <Button className="btn-gold whitespace-nowrap" asChild>
              <Link to="/contact">
                <Moon className="mr-2 w-4 h-4" />
                Book your slot
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </motion.div>

        {/* Custom Package CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground mb-4">
            Need a customized Umrah package? Let us create your perfect spiritual journey.
          </p>
          <Button
            variant="outline"
            className=" border-gold text-gold hover:bg-gold hover:text-primary px-8 py-6 mx-auto max-[400px]:px-4 max-[360px]:text-[14px] max-[360px]:px-2"
            asChild
          >
            <Link to="/customize">
              <Moon className="mr-1 w-4 h-4 max-[350px]:hidden" />
              <p className="ms-1">Request Custom Umrah Package</p>
              <ArrowRight className="ml-1 w-4 h-4 max-[360px]:ml-0" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default RamadanUmrahSection;
