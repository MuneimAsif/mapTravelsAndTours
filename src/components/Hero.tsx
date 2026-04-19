import { motion } from "framer-motion";
import { Globe, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-static.webp";
import moin from "@/assets/Moin.webp";
import mukarram from "@/assets/Mukarram.webp";
import farooq from "@/assets/Farooq.webp";
import sufiyan from "@/assets/Sufiyan.webp";

const arr = [mukarram, moin, farooq, sufiyan];
const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen md:h-[750px] lg:h-[800px] overflow-hidden">
      {/* Background Static Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Airplane taking off at golden hour - MAP Travel & Tourism"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-10 w-64 h-64 rounded-full bg-gold/10 blur-3xl" />
      <div className="absolute bottom-1/4 left-10 w-96 h-96 rounded-full bg-sky/10 blur-3xl" />

      {/* Globe Decoration */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute top-32 right-20 hidden lg:block"
      >
        <Globe className="w-16 h-16 text-gold/30" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 container-custom min-h-screen lg:h-[750px] 2xl:h-[800px] flex items-center pt-10">
        <div className="gap-12 items-center w-full">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white space-y-9 flex flex-col items-center min-[1024px]:mb-5 min-[1024px]:-mt-5"
          >
            <h1 className="font-serif text-6xl md:mt-20 sm:text-7xl md:text-8xl lg:text-8xl 2xl:text-9xl xl:-mt-5 2xl:-mt-5 font-bold text-center max-[330px]:mt-5 max-[360px]:text-[46px] max-[420px]:text-[52px] max-[420px]:whitespace-nowrap max-[420px]:text-ellipsis">
              Explore The
              <span className="block text-gold mt-2">World Now</span>
            </h1>

            <p className="text-md md:text-xl lg:text-xl 2xl:text-2xl text-white/80 max-w-[530px] sm:max-w-[560px] md:max-w-2xl lg:max-w-2xl xl:max-w-2xl 2xl:max-w-2xl max-[420px]:text-[16px] max-[420px]:max-w-[500px] max-[420px]:ms-3 max-[360px]:ms-1 leading-relaxed text-center">
              Our expert travel agency provide stress-free visa processing & other all travel documentation so you can travel with comfort and trust.
            </p>
            {/* <p className="text-md md:text-xl lg:text-xl 2xl:text-2xl text-white/80 w-[80%] text-center">
              Our expert travel agency provide stress-free visa processing & other all travel documentation so you can travel with comfort and trust.
            </p> */}

            <div className="flex flex-wrap gap-4">
              <Button className="btn-gold group max-[420px]:text-[13px]" asChild>
                <Link to="/customize">
                  <Sparkles className="mr-1 w-7 h-5" />
                  Customize Your Package
                </Link>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-6 pt-6 min-[1024px]:pt-0">
              <p className="text-sm text-white/70 max-[400px]:-me-3 max-[400px]:text-[13px]">
                <span className="text-white font-semibold">Trusted by</span>
              </p>
              <div className="flex -space-x-3">
                {arr.map((i) => (
                  <div
                    key={i}
                    className="relative w-10 h-10 max-[400px]:w-8 max-[400px]:h-8 rounded-full border bg-gradient-to-br from-sky to-navy flex items-center justify-center text-xs font-bold text-white overflow-hidden border-white/50"
                  >
                    {i ? <img src={i} alt="sufiyan" className="absolute inset-0 w-38 h-38 lazy-load object-cover" /> : null}
                    {/* {String.fromCharCode(64 + i)} */}
                  </div>
                ))}
              </div>
              <p className="text-sm text-white/70 max-[400px]:-ms-3 max-[400px]:text-[13px]">and more ...</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="hsl(210 20% 98%)"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
