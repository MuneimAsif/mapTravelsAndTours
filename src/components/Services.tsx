import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  FileText,
  Plane,
  Building2,
  Briefcase,
  Globe,
  Compass,
  ArrowRight,
  Palmtree,
  Heart,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "International Tours",
    description:
      "Explore the world with our curated international holiday packages. From Europe to Asia, Americas to Australia, we've got you covered.",
    features: ["100+ Destinations", "Group Tours", "Custom Itineraries"],
    featured: true,
  },
  {
    icon: Palmtree,
    title: "Beach & Island Getaways",
    description:
      "Escape to paradise with our tropical beach packages. Maldives, Bali, Thailand, Caribbean – find your perfect beach destination.",
    features: ["Tropical Islands", "Resort Packages", "All-Inclusive"],
    featured: false,
  },
  {
    icon: Heart,
    title: "Honeymoon Packages",
    description:
      "Begin your forever with unforgettable romantic getaways. Curated honeymoon destinations with special couple amenities.",
    features: ["Romantic Escapes", "Luxury Hotels", "Special Occasions"],
    featured: false,
  },
  {
    icon: Plane,
    title: "Flight Booking",
    description:
      "Premium flight bookings with major airlines worldwide. Choose from economy to business class with best price guarantee.",
    features: ["Major Airlines", "Best Prices", "Flexible Dates"],
    featured: false,
  },
  {
    icon: Building2,
    title: "Hotel Accommodation",
    description:
      "Curated selection of hotels worldwide ranging from budget-friendly to 5-star luxury properties in prime locations.",
    features: ["Global Hotels", "All Categories", "Verified Properties"],
    featured: false,
  },
  {
    icon: FileText,
    title: "Visa Processing",
    description:
      "Fast and hassle-free visa processing for all destinations with complete documentation support and guidance.",
    features: ["Quick Processing", "All Countries", "Document Assistance"],
    featured: false,
  },
  {
    icon: Briefcase,
    title: "Corporate Travel",
    description:
      "Comprehensive business travel solutions for companies. Conference arrangements, group bookings, and travel management.",
    features: ["Business Class", "Group Bookings", "Travel Management"],
    featured: false,
  },
  {
    icon: Compass,
    title: "Adventure Tours",
    description:
      "Thrilling adventure experiences worldwide. From mountain treks to safari expeditions, create unforgettable memories.",
    features: ["Trekking Tours", "Safari Packages", "Extreme Sports"],
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
            Complete Travel
            <span className="text-primary block mt-2">Solutions Worldwide</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            From international tours to corporate travel, beach getaways to adventure expeditions – 
            we handle every aspect of your travel with professionalism and care.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`group card-premium hover:border-gold/30 border border-transparent ${
                service.featured ? "ring-2 ring-primary/50 bg-primary/5 md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              {/* Featured Badge */}
              {service.featured && (
                <div className="absolute -top-3 left-6 px-3 py-1 bg-primary text-primary-foreground text-xs font-bold rounded-full">
                  Most Popular
                </div>
              )}

              {/* Icon */}
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg ${
                service.featured 
                  ? "bg-gradient-to-br from-primary to-navy-light" 
                  : "bg-gradient-to-br from-primary to-navy-light"
              }`}>
                <service.icon className="w-7 h-7 text-primary-foreground" />
              </div>

              {/* Content */}
              <h3 className="font-serif text-xl font-bold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-5 leading-relaxed text-sm">
                {service.description}
              </p>

              {/* Features */}
              <div className="flex flex-wrap gap-2 mb-5">
                {service.features.map((feature) => (
                  <span
                    key={feature}
                    className="px-2 py-1 bg-secondary rounded-full text-xs font-medium text-foreground"
                  >
                    {feature}
                  </span>
                ))}
              </div>

              {/* Learn More Link */}
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-primary font-medium group/link text-sm"
              >
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
