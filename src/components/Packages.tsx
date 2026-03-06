import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Check, Star, Clock, MapPin, Plane, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const packages = [
  {
    name: "European Explorer",
    subtitle: "7-Country Grand Tour",
    price: 2499,
    duration: "14 Days",
    destinations: "Paris, Rome, Barcelona",
    category: "International Tour",
    popular: false,
    features: [
      "7 European countries",
      "4-star hotels included",
      "Guided city tours",
      "All transportation",
      "Breakfast daily",
      "Airport transfers",
    ],
  },
  {
    name: "Tropical Paradise",
    subtitle: "Maldives & Bali Combo",
    price: 3299,
    duration: "10 Days",
    destinations: "Maldives, Bali",
    category: "Beach Getaway",
    popular: true,
    features: [
      "Overwater villa stay",
      "Private beach access",
      "Spa treatments",
      "Water activities",
      "All meals included",
      "Sunset cruise",
      "Snorkeling trips",
      "Airport VIP service",
    ],
  },
  {
    name: "Dubai Experience",
    subtitle: "Luxury City Break",
    price: 1899,
    duration: "5 Days",
    destinations: "Dubai, Abu Dhabi",
    category: "City Break",
    popular: false,
    features: [
      "5-star hotel stay",
      "Desert safari",
      "Burj Khalifa visit",
      "Dubai Mall tour",
      "Abu Dhabi day trip",
      "Airport transfers",
      "Daily breakfast",
      "City tour included",
    ],
  },
];

const Packages = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="packages" className="section-padding bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
            <Plane className="w-4 h-4" />
            <span className="text-sm font-medium">Featured Destinations</span>
          </div>
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Popular Holiday
            <span className="text-primary block mt-2">Packages</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Discover our most loved travel packages. From tropical beaches to European adventures, 
            find your perfect getaway at unbeatable prices.
          </p>
        </motion.div>

        {/* Packages Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`relative rounded-3xl overflow-hidden ${
                pkg.popular
                  ? "bg-primary text-primary-foreground scale-105 shadow-elevated"
                  : "bg-card border border-border shadow-card"
              }`}
            >
              {/* Popular Badge */}
              {pkg.popular && (
                <div className="absolute top-6 right-6">
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-gold text-primary text-xs font-bold">
                    <Star className="w-3 h-3 fill-current" />
                    Best Seller
                  </span>
                </div>
              )}

              {/* Category Badge */}
              <div className="absolute top-6 left-6">
                <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${
                  pkg.popular ? "bg-white/20 text-white" : "bg-primary/10 text-primary"
                }`}>
                  <Plane className="w-3 h-3" />
                  {pkg.category}
                </span>
              </div>

              <div className="p-8 pt-16">
                {/* Package Header */}
                <div className="mb-8">
                  <h3 className={`font-serif text-2xl font-bold ${
                    pkg.popular ? "text-primary-foreground" : "text-foreground"
                  }`}>
                    {pkg.name}
                  </h3>
                  <p className={`text-sm mt-1 ${
                    pkg.popular ? "text-primary-foreground/70" : "text-muted-foreground"
                  }`}>
                    {pkg.subtitle}
                  </p>
                </div>

                {/* Price */}
                <div className="mb-8">
                  <div className="flex items-baseline gap-1">
                    <span className={`text-sm ${
                      pkg.popular ? "text-primary-foreground/70" : "text-muted-foreground"
                    }`}>
                      From
                    </span>
                    <span className={`font-serif text-5xl font-bold ${
                      pkg.popular ? "text-gold" : "text-foreground"
                    }`}>
                      ${pkg.price}
                    </span>
                  </div>
                  <p className={`text-sm mt-2 ${
                    pkg.popular ? "text-primary-foreground/70" : "text-muted-foreground"
                  }`}>
                    per person
                  </p>
                </div>

                {/* Quick Info */}
                <div className={`grid grid-cols-2 gap-4 mb-8 p-4 rounded-xl ${
                  pkg.popular ? "bg-white/10" : "bg-secondary/50"
                }`}>
                  <div className="flex items-center gap-2">
                    <Clock className={`w-4 h-4 ${
                      pkg.popular ? "text-gold" : "text-primary"
                    }`} />
                    <span className="text-sm">{pkg.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className={`w-4 h-4 ${
                      pkg.popular ? "text-gold" : "text-primary"
                    }`} />
                    <span className="text-sm truncate">{pkg.destinations}</span>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-3 mb-8">
                  {pkg.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3">
                      <Check className={`w-5 h-5 flex-shrink-0 ${
                        pkg.popular ? "text-gold" : "text-gold"
                      }`} />
                      <span className={`text-sm ${
                        pkg.popular ? "text-primary-foreground/90" : "text-foreground"
                      }`}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Button
                  className={`w-full py-6 font-semibold text-base ${
                    pkg.popular
                      ? "btn-gold"
                      : "bg-primary text-primary-foreground hover:bg-primary/90"
                  }`}
                  asChild
                >
                  <a href="#contact">Book This Package</a>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* More Destinations CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground mb-4">
            Looking for more destinations? Explore our full range of travel packages.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              variant="outline" 
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-6"
              asChild
            >
              <a href="#contact">
                <Users className="mr-2 w-4 h-4" />
                View All Packages
              </a>
            </Button>
            <Button 
              variant="outline" 
              className="border-gold text-gold hover:bg-gold hover:text-primary px-8 py-6"
              asChild
            >
              <a href="#ramadan-umrah">
                Ramadan Umrah Packages
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Packages;
