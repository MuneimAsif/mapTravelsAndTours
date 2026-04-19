import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Ambulance, Plane, Building2, FileText, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Plane,
    title: "Flight Booking",
    description: "Book your premium flights at lowest prices.",
  },
  {
    icon: Building2,
    title: "Hotel Accommodation",
    description: "Stay in 5-star luxury hotels with comfortable budget.",
  },
  {
    icon: FileText,
    title: "Visa Processing",
    description: "Fast and hassle-free visa services for all destinations.",
  },
  {
    icon: Ambulance,
    title: "Medical Support",
    description: "Get an  emergency medical support everywhere.",
  },
];

const HomeServicesPreview = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <p className="text-gold font-semibold uppercase tracking-wider text-sm mb-4">
            Our Services
          </p>
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Complete Travel
            <span className="text-primary block mt-2">Solutions Worldwide</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need for your perfect trip, all in one place.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card-premium hover:border-gold/30 border border-transparent bg-sky/10 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-navy-light flex items-center justify-center mb-5 group-hover:scale-110 transition-transform shadow-lg">
                <service.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-serif text-lg font-bold text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <Button
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-6"
            asChild
          >
            <Link to="/services">
              Explore All Services
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeServicesPreview;
