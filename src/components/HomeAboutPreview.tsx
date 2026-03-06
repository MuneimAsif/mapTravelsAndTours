import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Heart, Globe, Award, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const values = [
  { icon: Globe, title: "Global Reach", description: "Worldwide destinations with local expertise" },
  { icon: Heart, title: "Personalized Care", description: "Dedicated support throughout your journey" },
  { icon: Shield, title: "Trust & Reliability", description: "Licensed and certified travel experts" },
  { icon: Award, title: "Best Value", description: "Competitive prices with premium quality" },
];

const HomeAboutPreview = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <p className="text-gold font-semibold uppercase tracking-wider text-sm mb-4">
            About MAP Travel & Tourism
          </p>
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Your Global Partner for
            <span className="text-primary block mt-2">Unforgettable Journeys</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            With over 15 years of expertise and 50,000+ happy travelers, we deliver exceptional 
            travel experiences across 100+ worldwide destinations.
          </p>
        </motion.div>

        {/* Values Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="group card-premium text-center hover:border-gold/30 border border-transparent"
            >
              <value.icon className="w-10 h-10 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h4 className="font-semibold text-foreground mb-2">{value.title}</h4>
              <p className="text-sm text-muted-foreground">{value.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-6" asChild>
            <Link to="/about">
              Learn More About Us
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeAboutPreview;
