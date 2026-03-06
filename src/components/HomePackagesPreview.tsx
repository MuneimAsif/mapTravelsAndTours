import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Clock, MapPin, Plane, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const featuredPackages = [
  {
    name: "European Explorer",
    subtitle: "7-Country Grand Tour",
    price: 2499,
    duration: "14 Days",
    destinations: "Paris, Rome, Barcelona",
    category: "International Tour",
  },
  {
    name: "Tropical Paradise",
    subtitle: "Maldives & Bali Combo",
    price: 3299,
    duration: "10 Days",
    destinations: "Maldives, Bali",
    category: "Beach Getaway",
    popular: true,
  },
  {
    name: "Dubai Experience",
    subtitle: "Luxury City Break",
    price: 1899,
    duration: "5 Days",
    destinations: "Dubai, Abu Dhabi",
    category: "City Break",
  },
];

const HomePackagesPreview = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
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
            Discover our most loved travel packages at unbeatable prices.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {featuredPackages.map((pkg, index) => (
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
              {pkg.popular && (
                <div className="absolute top-6 right-6">
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-gold text-primary text-xs font-bold">
                    <Star className="w-3 h-3 fill-current" />
                    Best Seller
                  </span>
                </div>
              )}

              <div className="absolute top-6 left-6">
                <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${
                  pkg.popular ? "bg-white/20 text-white" : "bg-primary/10 text-primary"
                }`}>
                  <Plane className="w-3 h-3" />
                  {pkg.category}
                </span>
              </div>

              <div className="p-8 pt-16">
                <h3 className={`font-serif text-2xl font-bold mb-1 ${
                  pkg.popular ? "text-primary-foreground" : "text-foreground"
                }`}>{pkg.name}</h3>
                <p className={`text-sm mb-6 ${pkg.popular ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                  {pkg.subtitle}
                </p>

                <div className="flex items-baseline gap-1 mb-6">
                  <span className={`text-sm ${pkg.popular ? "text-primary-foreground/70" : "text-muted-foreground"}`}>From</span>
                  <span className={`font-serif text-4xl font-bold ${pkg.popular ? "text-gold" : "text-foreground"}`}>${pkg.price}</span>
                </div>

                <div className={`grid grid-cols-2 gap-4 p-4 rounded-xl ${pkg.popular ? "bg-white/10" : "bg-secondary/50"}`}>
                  <div className="flex items-center gap-2">
                    <Clock className={`w-4 h-4 ${pkg.popular ? "text-gold" : "text-primary"}`} />
                    <span className="text-sm">{pkg.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className={`w-4 h-4 ${pkg.popular ? "text-gold" : "text-primary"}`} />
                    <span className="text-sm truncate">{pkg.destinations}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-6" asChild>
            <Link to="/packages">
              View All Packages
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default HomePackagesPreview;
