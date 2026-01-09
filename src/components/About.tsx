import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Heart, Globe, Award, CheckCircle } from "lucide-react";
import madinahImage from "@/assets/madinah-mosque.jpg";

const values = [
  {
    icon: Shield,
    title: "Trust & Reliability",
    description: "Licensed and certified by Saudi Ministry of Hajj",
  },
  {
    icon: Heart,
    title: "Personalized Care",
    description: "Dedicated support throughout your journey",
  },
  {
    icon: Globe,
    title: "Complete Solutions",
    description: "End-to-end travel management services",
  },
  {
    icon: Award,
    title: "Best Value",
    description: "Market-beating prices with premium quality",
  },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="about" className="section-padding bg-background">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-elevated">
              <img
                src={madinahImage}
                alt="Prophet's Mosque in Madinah"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
            </div>

            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-8 -right-8 bg-card p-6 rounded-2xl shadow-elevated max-w-xs"
            >
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-gold flex items-center justify-center shadow-gold animate-pulse-glow">
                  <span className="text-2xl font-bold text-primary">15+</span>
                </div>
                <div>
                  <p className="font-serif text-xl font-bold text-foreground">Years of</p>
                  <p className="text-muted-foreground">Excellence</p>
                </div>
              </div>
            </motion.div>

            {/* Decorative Element */}
            <div className="absolute -top-6 -left-6 w-24 h-24 rounded-2xl bg-sky-light/50 -z-10" />
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <p className="text-gold font-semibold uppercase tracking-wider text-sm mb-4">
                About Al-Safar
              </p>
              <h2 className="font-serif text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                Your Trusted Partner in
                <span className="text-primary block mt-2">Sacred Journeys</span>
              </h2>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              At Al-Safar, we understand that Umrah is more than just a trip—it's a 
              life-changing spiritual experience. With over 15 years of expertise, we've 
              helped more than 50,000 pilgrims fulfill their sacred obligations with 
              comfort, dignity, and peace of mind.
            </p>

            <div className="space-y-4">
              {["Government licensed and fully insured", "24/7 on-ground support in Saudi Arabia", "Transparent pricing with no hidden fees", "Customizable packages for every budget"].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-gold flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </motion.div>
              ))}
            </div>

            {/* Values Grid */}
            <div className="grid grid-cols-2 gap-4 pt-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="group p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors"
                >
                  <value.icon className="w-8 h-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
                  <h4 className="font-semibold text-foreground">{value.title}</h4>
                  <p className="text-sm text-muted-foreground mt-1">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
