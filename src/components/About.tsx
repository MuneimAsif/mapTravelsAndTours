import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Heart,
  Handshake,
  BaggageClaim,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  Lightbulb,
  Crown,
  Quote,
} from "lucide-react";
import aboutImage from "@/assets/about-travel.webp";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";

const values = [
  {
    icon: ShieldCheck,
    title: "Seamless Travel Planning",
    description: "Making every journey simple from start to finish",
  },
  {
    icon: Handshake,
    title: "Global Accessibility",
    description: "Connecting people to destinations around the world",
  },
  {
    icon: Heart,
    title: "Personalized Experiences",
    description: "Designing trips based on individual preferences",
  },
  {
    icon: Sparkles,
    title: "Affordable Exploration",
    description: "Enabling travel opportunities for every budget",
  },
];

const otherValues = [
  {
    icon: BaggageClaim,
    title: "Responsible Travel",
    description: "Your journey is our journey. Every trip is planned with full attention and every traveler is treated with complete respect.",
  },
  {
    icon: Lightbulb,
    title: "Expert Knowledge",
    description: "We do not guess. We know. Every local detail, every global destination, planned with expertise you can feel.",
  },
  {
    icon: Crown,
    title: "Excellence First",
    description: "Good enough has never been good enough for us. You deserve the best and that is exactly what we deliver.",
  },
];


const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const navigate = useNavigate()

  return (
    <section id="about" className="bg-background">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="relative"
      >
        <section className="bg-primary -mt-8 min-h-[70vh] flex items-center justify-center text-center">
          <div className="mb-5">
            <div className="text-gold font-semibold uppercase tracking-wider text-sm mb-4">
              About MAP Travels & Tours
            </div>
            <h1
              className="text-4xl lg:text-5xl font-bold text-white leading-tight"
              style={{ fontSize: "clamp(2.4rem,5vw,4rem)" }}
            >
              A Trusted Travel Agency
              <br />  For Customized Trips
            </h1>
          </div>
        </section>
      </motion.div>
      <div className="container-custom my-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-elevated">
              <img
                src={aboutImage}
                alt="Global travel experiences"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />

              {/* Badge Overlay */}
              {/* <div className="absolute top-6 left-6 flex items-center gap-2 px-4 py-2 rounded-full bg-gold/90 text-primary">
                <Plane className="w-4 h-4" />
                <span className="text-sm font-semibold">
                  Global Destinations
                </span>
              </div> */}
            </div>

            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-8 -right-8 bg-card p-6 rounded-2xl shadow-elevated max-w-xs max-[450px]:w-64 ms-4 me-4"
            >
              <div className="flex items-center gap-4">
                <div className="space-y-2">
                  <p className="text-muted-foreground italic leading-relaxed flex items-start gap-2 max-[450px]:text-sm">
                    <Quote className="w-4 h-4 mt-1 text-primary shrink-0" />
                    <span>People remember how a journey made them feel.</span>
                  </p>

                  <p className="text-sm text-primary/70 font-medium pl-6 tracking-wide  max-[450px]:text-xs">
                    — Moazzam Asif Patel
                    <span className="block text-xs text-muted-foreground font-normal">
                      Founder, MAP Travels & Tours
                    </span>
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Decorative Element */}
            <div className="absolute -top-6 -left-6 w-24 h-24 rounded-2xl bg-sky-light/50 -z-10" />
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-8"
          >
            <div>
              <p className="text-gold font-semibold uppercase tracking-wider text-sm">
                Our Mission
              </p>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              When it started, trust was not an option on the list.
              It was the very first brick which laided as foundation and everything else was built on the top of it. Our mission includes:
            </p>

            {/* Values Grid */}
            <div className="grid grid-cols-1 [@media(min-width:400px)]:grid-cols-2 gap-4 pt-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="group p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors"
                >
                  <value.icon className="w-8 h-8 text-primary mb-3 group-hover:scale-110 transition-t ransform" />
                  <h4 className="font-semibold text-foreground">
                    {value.title}
                  </h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <div className="container-custom my-20 bg-primary px-12 py-12 [@media(max-width:360px)]:px-4 rounded-2xl w-[100%]">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <p className="text-gold font-semibold uppercase tracking-wider text-sm mb-4">
            Our Values
          </p>
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-white mb-6">
            Why Travellers Choose MAP
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {otherValues.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card-premium relative group border border-gold/25 bg-sky/10"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-navy-light flex items-center justify-center mb-5 group-hover:scale-110 transition-transform shadow-lg border border-gold/20">
                <service.icon className="w-7 h-7 text-gold" />
              </div>
              <h3 className="font-serif text-xl font-bold text-white mb-2">
                {service.title}
              </h3>
              <p className="text-[0.9rem] text-white/40 leading-relaxed">
                {service.description}
              </p>

            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <Button onClick={() => navigate("/services")} className="btn-gold group">
            Explore our services
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>

      </div>
    </section>
  );
};

export default About;
