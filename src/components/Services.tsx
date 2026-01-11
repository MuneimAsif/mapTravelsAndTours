import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  FileText,
  Plane,
  Building2,
  Car,
  Globe,
  Compass,
  ArrowRight,
  Moon,
} from "lucide-react";

const services = [
  {
    icon: Moon,
    title: "Ramadan Umrah",
    description:
      "Special Ramadan Umrah packages with spiritual guidance, premium accommodations, and blessed journey arrangements.",
    features: ["Holy Land Tours", "Spiritual Guidance", "Ramadan Special"],
    featured: true,
  },
  {
    icon: Globe,
    title: "International Tours",
    description:
      "Explore the world with our curated international holiday packages. From Europe to Asia, we've got you covered.",
    features: ["Global Destinations", "Group Tours", "Custom Itineraries"],
    featured: false,
  },
  {
    icon: FileText,
    title: "Visa Processing",
    description:
      "Fast and hassle-free visa processing for all destinations with complete documentation support.",
    features: ["Quick Processing", "All Countries", "Document Assistance"],
    featured: false,
  },
  {
    icon: Plane,
    title: "Flight Booking",
    description:
      "Premium flight bookings with major airlines worldwide. Choose from economy to business class.",
    features: ["Major Airlines", "Best Prices", "Flexible Dates"],
    featured: false,
  },
  {
    icon: Building2,
    title: "Hotel Accommodation",
    description:
      "Curated selection of hotels worldwide ranging from budget-friendly to 5-star luxury properties.",
    features: ["Global Hotels", "All Categories", "Verified Properties"],
    featured: false,
  },
  {
    icon: Compass,
    title: "Holiday Packages",
    description:
      "Complete holiday packages with flights, hotels, and tours. Perfect for family vacations and honeymoons.",
    features: ["All-Inclusive", "Family Packages", "Honeymoon Specials"],
    featured: false,
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
            Global Travel
            <span className="text-primary block mt-2">Complete Solutions</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            From international tours to blessed Ramadan Umrah journeys, we handle every 
            aspect of your travel with professionalism and care.
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
              className={`group card-premium hover:border-gold/30 border border-transparent ${
                service.featured ? "ring-2 ring-gold/50 bg-gold/5" : ""
              }`}
            >
              {/* Featured Badge */}
              {service.featured && (
                <div className="absolute -top-3 left-6 px-3 py-1 bg-gold text-primary text-xs font-bold rounded-full">
                  Ramadan Special
                </div>
              )}

              {/* Icon */}
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg ${
                service.featured 
                  ? "bg-gradient-gold" 
                  : "bg-gradient-to-br from-primary to-navy-light"
              }`}>
                <service.icon className={`w-8 h-8 ${
                  service.featured ? "text-primary" : "text-primary-foreground"
                }`} />
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