import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Check, Star, Clock, Building2, Moon, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import kaabaImage from "@/assets/kaaba-makkah.jpg";
import madinahImage from "@/assets/madinah-nabawi.jpg";

const umrahPackages = [
  {
    name: "Economy Umrah",
    subtitle: "Essential Ramadan Experience",
    price: 1299,
    duration: "7 Days / 6 Nights",
    hotel: "3-Star Hotel",
    distance: "500m from Haram",
    popular: false,
    features: [
      "Economy class flights",
      "3-star accommodation",
      "Shared transfers",
      "Umrah visa processing",
      "Basic travel insurance",
      "Group guidance",
    ],
  },
  {
    name: "Premium Umrah",
    subtitle: "Blessed Ramadan Journey",
    price: 2199,
    duration: "10 Days / 9 Nights",
    hotel: "4-Star Hotel",
    distance: "300m from Haram",
    popular: true,
    features: [
      "Premium economy flights",
      "4-star accommodation",
      "Private transfers",
      "Umrah visa processing",
      "Comprehensive insurance",
      "Personal guide",
      "Ziyarah tours",
      "24/7 support",
    ],
  },
  {
    name: "Luxury Umrah",
    subtitle: "Ultimate Ramadan Experience",
    price: 3999,
    duration: "14 Days / 13 Nights",
    hotel: "5-Star Hotel",
    distance: "Haram View",
    popular: false,
    features: [
      "Business class flights",
      "5-star luxury hotel",
      "VIP private transfers",
      "Priority visa processing",
      "Premium insurance",
      "Dedicated guide",
      "Full Ziyarah package",
      "24/7 concierge",
      "Special amenities",
      "VIP Haram access",
    ],
  },
];

const RamadanUmrahSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="ramadan-umrah" className="section-padding bg-gradient-to-b from-primary/5 to-background relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-gold/5 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-primary/5 blur-3xl" />
      
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/20 text-gold border border-gold/30 mb-6">
            <Moon className="w-5 h-5 fill-current" />
            <span className="font-semibold">Ramadan Special 2025</span>
          </div>
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Ramadan Umrah &
            <span className="text-primary block mt-2">Madinah Tours</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Experience the blessed month of Ramadan in the Holy Lands. Our carefully curated 
            packages ensure a spiritually enriching and comfortable journey to Makkah and Madinah.
          </p>
        </motion.div>

        {/* Dual Feature Images - Makkah & Madinah */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {/* Kaaba - Makkah */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative rounded-3xl overflow-hidden group"
          >
            <img
              src={kaabaImage}
              alt="Kaaba in Masjid al-Haram, Makkah"
              className="w-full h-[350px] object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
              <div className="text-white">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/20 text-gold border border-gold/30 mb-3">
                  <Moon className="w-4 h-4 fill-current" />
                  <span className="text-sm font-medium">Holy Makkah</span>
                </div>
                <h3 className="font-serif text-2xl md:text-3xl font-bold mb-2">
                  The Sacred Kaaba
                </h3>
                <p className="text-white/80 text-sm md:text-base">
                  Perform Tawaf around the House of Allah during the blessed month of Ramadan.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Masjid-e-Nabawi - Madinah */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative rounded-3xl overflow-hidden group"
          >
            <img
              src={madinahImage}
              alt="Prophet's Mosque in Madinah"
              className="w-full h-[350px] object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
              <div className="text-white">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/20 text-gold border border-gold/30 mb-3">
                  <Moon className="w-4 h-4 fill-current" />
                  <span className="text-sm font-medium">Holy Madinah</span>
                </div>
                <h3 className="font-serif text-2xl md:text-3xl font-bold mb-2">
                  Prophet's Mosque
                </h3>
                <p className="text-white/80 text-sm md:text-base">
                  Visit the peaceful Masjid-e-Nabawi and offer prayers at Riyad-ul-Jannah.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative rounded-2xl overflow-hidden mb-16 bg-gradient-to-r from-primary via-primary/95 to-primary p-8 md:p-10"
        >
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-gold/10 blur-3xl" />
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-white mb-2">
                Blessed Journey Awaits
              </h3>
              <p className="text-white/80">
                Join thousands of pilgrims this Ramadan for a transformative spiritual experience.
              </p>
            </div>
            <Button className="btn-gold whitespace-nowrap" asChild>
              <Link to="/contact">
                <Moon className="mr-2 w-4 h-4" />
                Enquire Now
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </motion.div>

        {/* Packages Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {umrahPackages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
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
                    Most Popular
                  </span>
                </div>
              )}

              {/* Ramadan Badge */}
              <div className="absolute top-6 left-6">
                <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${
                  pkg.popular ? "bg-white/20 text-white" : "bg-gold/10 text-gold"
                }`}>
                  <Moon className="w-3 h-3" />
                  Ramadan
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
                    <Building2 className={`w-4 h-4 ${
                      pkg.popular ? "text-gold" : "text-primary"
                    }`} />
                    <span className="text-sm">{pkg.hotel}</span>
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
                  <Link to="/contact">Book This Package</Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Custom Package CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground mb-4">
            Need a customized Umrah package? Let us create your perfect spiritual journey.
          </p>
          <Button 
            variant="outline" 
            className="border-gold text-gold hover:bg-gold hover:text-primary px-8 py-6"
            asChild
          >
            <Link to="/contact">
              <Moon className="mr-2 w-4 h-4" />
              Request Custom Umrah Package
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default RamadanUmrahSection;
