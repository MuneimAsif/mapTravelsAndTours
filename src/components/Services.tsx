import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  FileText,
  Plane,
  Building2,
  Car,
  Stethoscope,
  Compass,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: FileText,
    title: "Visa Processing",
    description:
      "Fast and hassle-free Umrah visa processing with complete documentation support and guaranteed approval.",
    features: ["Quick Processing", "Document Assistance", "100% Approval Rate"],
  },
  {
    icon: Plane,
    title: "Airline Booking",
    description:
      "Premium flight bookings with major airlines. Choose from economy to business class with flexible dates.",
    features: ["Major Airlines", "Flexible Dates", "Best Prices"],
  },
  {
    icon: Building2,
    title: "Hotel Accommodation",
    description:
      "Stay near Haram with our curated selection of hotels ranging from 3-star to 5-star luxury.",
    features: ["Near Haram", "All Categories", "Verified Properties"],
  },
  {
    icon: Car,
    title: "Transportation",
    description:
      "Comfortable ground transportation including airport transfers and inter-city travel between Makkah and Madinah.",
    features: ["Airport Transfers", "AC Vehicles", "Professional Drivers"],
  },
  {
    icon: Stethoscope,
    title: "Medical Assistance",
    description:
      "24/7 medical support with access to healthcare facilities and emergency assistance throughout your journey.",
    features: ["24/7 Support", "Emergency Care", "Health Insurance"],
  },
  {
    icon: Compass,
    title: "End-to-End Guidance",
    description:
      "Expert religious guidance and assistance for all Umrah rituals with experienced scholars and guides.",
    features: ["Religious Guidance", "Ritual Assistance", "Multilingual Guides"],
  },
];

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="services" className="section-padding bg-secondary/30">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="text-gold font-semibold uppercase tracking-wider text-sm mb-4">
            Our Services
          </p>
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Complete Umrah
            <span className="text-primary block mt-2">Travel Solutions</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            From visa processing to spiritual guidance, we handle every aspect of your 
            sacred journey with professionalism and care.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group card-premium hover:border-gold/30 border border-transparent"
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-navy-light flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <service.icon className="w-8 h-8 text-primary-foreground" />
              </div>

              {/* Content */}
              <h3 className="font-serif text-2xl font-bold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <div className="flex flex-wrap gap-2 mb-6">
                {service.features.map((feature) => (
                  <span
                    key={feature}
                    className="px-3 py-1 bg-secondary rounded-full text-xs font-medium text-foreground"
                  >
                    {feature}
                  </span>
                ))}
              </div>

              {/* Learn More Link */}
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-primary font-medium group/link"
              >
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
