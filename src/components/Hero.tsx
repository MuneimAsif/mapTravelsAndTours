import { motion } from "framer-motion";
import { Play, Star, Users, Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-kaaba.jpg";

const stats = [
  { icon: Users, value: "50,000+", label: "Pilgrims Served" },
  { icon: Star, value: "4.9/5", label: "Customer Rating" },
  { icon: Calendar, value: "15+", label: "Years Experience" },
];

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Holy Kaaba in Makkah"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-10 w-64 h-64 rounded-full bg-gold/10 blur-3xl" />
      <div className="absolute bottom-1/4 left-10 w-96 h-96 rounded-full bg-sky/10 blur-3xl" />

      {/* Content */}
      <div className="relative z-10 container-custom min-h-screen flex items-center pt-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
              <Star className="w-4 h-4 text-gold fill-gold" />
              <span className="text-sm font-medium">Trusted by 50,000+ Pilgrims</span>
            </div>

            <h1 className="font-serif text-5xl lg:text-7xl font-bold leading-tight">
              Your Sacred
              <span className="block text-gold mt-2">Journey Awaits</span>
            </h1>

            <p className="text-lg text-white/80 max-w-lg leading-relaxed">
              Experience a seamless and spiritually enriching Umrah journey with Al-Safar. 
              We provide complete travel solutions with personalized care and unmatched expertise.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button className="btn-gold group" asChild>
                <a href="#customize">
                  Build Your Package
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button className="btn-outline-light group" asChild>
                <a href="#packages">
                  <Play className="mr-2 w-5 h-5" />
                  View Packages
                </a>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-6 pt-6">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-white bg-gradient-to-br from-sky to-navy flex items-center justify-center text-xs font-bold text-white"
                  >
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <p className="text-sm text-white/70">
                <span className="text-white font-semibold">500+</span> travelers this month
              </p>
            </div>
          </motion.div>

          {/* Right Content - Stats Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden lg:block"
          >
            <div className="relative">
              {/* Floating Stats */}
              <div className="space-y-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
                    className={`glass rounded-2xl p-6 max-w-sm ${
                      index === 1 ? "ml-auto" : index === 2 ? "ml-12" : ""
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-xl bg-gradient-gold flex items-center justify-center shadow-gold">
                        <stat.icon className="w-7 h-7 text-primary" />
                      </div>
                      <div>
                        <p className="text-3xl font-bold text-primary">{stat.value}</p>
                        <p className="text-sm text-muted-foreground">{stat.label}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
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
