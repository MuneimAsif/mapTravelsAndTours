import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
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
  Ambulance,
  Medal,
  Moon,
  Car,
  SmartphoneNfc,
  Landmark,
  PlaneTakeoff,
  Sparkles,
  Phone,
} from "lucide-react";
import { Button } from "./ui/button";

const services = [
  {
    icon: Plane,
    title: "Flight Booking",
    description:
      "Fly yourself in premium flights with major airlines. Choose from economy to business class with best price guarantee.",
    features: ["Major Airlines", "Guaranteed Best Prices", "Flexible Travel Dates"],
    featured: false,
  },
  {
    icon: Car,
    title: "Transport Booking",
    description:
      "Don't pay too much to taxis. Instead, save for shopping. We provide door-to-door transport for your comfort and savings.",
    features: ["Door-to-Door Pickup", "Professional Drivers", "Fixed Pricing"],
    featured: false,
  },
  {
    icon: FileText,
    title: "Visa Processing",
    description:
      "Visa confusion stops here. Leave it to us & pack your bags. We handle all the paperwork for you so you can focus on your trip.",
    features: ["Fast Visa Approvals", "All destinations covered", "Easy documentation"],
    featured: false,
  },
  {
    icon: Building2,
    title: "Hotel Accommodation",
    description:
      "Not every hotel deserves your hard earned money. We do all the searching for you to find the best stay for your trip.",
    features: ["Prime Locations", "Every Budget Covered", "Comfortable Stays"],
    featured: false,
  },
  {
    icon: Compass,
    title: "Tour Guides",
    description:
      "Don’t just visit places, understand them. Experienced local guides will be with you making trips memorable.",
    features: ["Hidden Gem Access", "Untold Stories Revealed", "Flexible Timings"],
    featured: false,
  },
  {
    icon: SmartphoneNfc,
    title: "SIM Packages",
    description:
      "Stay connected from the moment you land. Get high-speed local data instantly without any bill headache.",
    features: ["Pre-Activated Cards", "Excessible Data Plans", "Hotspot Support"],
    featured: false,
  },
  {
    icon: Landmark,
    title: "Currency Exchange",
    description:
      "Spend like a local. Skip the bad airport rates with our transparent services. Get the cash you need without the worry.",
    features: ["Multi-Currency Support", "Best Exchange Rates", "Anti-Fraud Protection"],
    featured: false,
  },
  {
    icon: Ambulance,
    title: "Medical Support",
    description:
      "Health emergencies don't wait. We provide 24/7 medical support so every traveler stays safe everywhere, everytime",
    features: ["Travel Safety First", "Emergency Care", "24/7 Medical Assistance"],
    featured: false,
  },
];
const packages = [
  {
    icon: Moon,
    title: "Umrah Trips",
    description:
      "Standing before the Kaaba and the Prophet's Mosque are the spiritual moments. We make sure every arrangement is perfect so nothing can distract you.",
    features: ["Makkah-Madinah Tours", "Guided Ziyaarah", "Nearby Hotels"],
    featured: false,
    topFeatured: true,
  },
  {
    icon: Globe,
    title: "International Tours",
    description:
      "Your dream destination is closer than you think. Explore handpicked holiday packages across Europe, Asia, Americas, Australia and so much more.",
    features: ["Worldwide Destinations", "Group Travel Packages", "Flexible Travel Schedules"],
    featured: true,
  },
  {
    icon: Medal,
    title: "Student Travel",
    description:
      "Student trips should be exciting instead of stressful. We take care of your planning, so you can focus on learning, exploring, and making memories.",
    features: ["Special Student Discounts", "Easy Group Bookings", "24/7 Student Support"],
    featured: true,
  },
  {
    icon: PlaneTakeoff,
    title: "Vacation Trips",
    description:
      "Stop wasting your vacations in the hometown. We have the best vacation packages to make your vacation time unforgettable and memorable.",
    features: ["Kid-friendly Planning", "Unforgettable Routes", "Private Stays"],
    featured: true,
  },
  {
    icon: Palmtree,
    title: "Beach Getaways",
    description:
      "The ocean is calling you! Find your perfect tropical escape across Maldives, Bali, Thailand and every breathtaking beach destination beyond.",
    features: ["White Sand Beaches", "Luxury Resort Stays", "Everything Included"],
    featured: false,
  },
  {
    icon: Heart,
    title: "Honeymoon Packages",
    description:
      "You said yes. Now let us take care of everything else. Explore romantic honeymoon destinations thoughtfully planned with special details.",
    features: ["Romantic Escapes", "Couple Gateways", "Celebrate Your Love"],
    featured: false,
  },
  {
    icon: Briefcase,
    title: "Corporate Travel",
    description:
      "We take the stress out of corporate travel. Every booking and conference is handled carefully so you can focus on the meetings.",
    features: ["Premium Business Class", "Conference Arrangements", "24/7 Corporate Support"],
    featured: false,
  },
  {
    icon: Compass,
    title: "Adventure Tours",
    description:
      "Adventure is calling you and we know exactly where to take. From mountain treks to wild safaris, every experience is built to leave you breathless.",
    features: ["Expert Local Guides", "Safe Adventure Travel", "Small Group Adventures"],
    featured: false,
  },
]
const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [isWidthGreater400, setIsWidthGreater400] = useState(false);
  const ctaDivRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const divElement = ctaDivRef.current;
    if (!divElement) return;
    // Initial check
    setIsWidthGreater400(divElement.offsetWidth > 400);
    const resizeObserver = new ResizeObserver(() => {
      setIsWidthGreater400(divElement.offsetWidth > 400);
    });

    resizeObserver.observe(divElement);

    return () => resizeObserver.disconnect();
  }, []);

  return (

    <section id="services" className="bg-secondary/30">
      {/* Section Header */}
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="relative"
      >
        <section className="bg-primary -mt-8 min-h-[70vh] flex items-center justify-center text-center">
          <div className="mb-5">
            <div className="text-gold font-semibold uppercase tracking-wider text-sm mb-4">
              What we do
            </div>
            <h1
              className="text-4xl lg:text-5xl font-bold text-white leading-tight"
              style={{ fontSize: "clamp(2.4rem,5vw,4rem)" }}
            >
              Our Full Range <br />of Services
            </h1>
          </div>
        </section>
      </motion.div>

      <div className="container-custom my-20">
        {/* Services Grid */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative"
        >
          <p className="text-center text-gold font-semibold uppercase tracking-wider text-sm mb-10">
            Our Services
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
            >

              <div className={`flex flex-col group card-premium h-full hover:border-gold/30 border border-transparent}`}>
                {/* Icon */}
                <div className={` w-14 h-14 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg bg-gradient-to-br from-primary to-navy-light`}>
                  <service.icon className="w-7 h-7 text-primary-foreground" />
                </div>

                {/* Content */}
                <h3 className="my-auto font-serif text-xl font-bold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="my-auto text-muted-foreground mb-5 leading-relaxed text-sm">
                  {service.description}
                </p>

                {/* Features */}
                <div className="my-auto flex flex-wrap gap-2 mb-5 mt-auto">
                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-2 py-1 bg-secondary rounded-full text-xs font-medium text-foreground overflow-hidden whitespace-nowrap"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        {/* Packages Grid */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className=""
        >
          <p className="text-center text-gold font-semibold uppercase tracking-wider text-sm my-14">
            Tours We Provide
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {packages.map((pack, index) => (
            <motion.div
              key={pack.title}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 + 1 }}
            >

              <div className={`flex flex-col h-full group card-premium hover:border-gold/30 border border-transparent ${pack.featured ? "ring-2 ring-primary/50 bg-primary/5 md:col-span-2 lg:col-span-1" : pack.topFeatured ? "ring-2 ring-gold/50 bg-gold/5 shadow-gold md:col-span-2 lg:col-span-1" : ""
                }`}>
                {/* Featured Badge */}
                {pack.featured ? (
                  <div className="absolute -top-3 left-6 px-3 py-1 bg-primary text-primary-foreground text-xs font-bold rounded-full">
                    Most Popular
                  </div>
                ) : pack.topFeatured ? (
                  <div className="absolute -top-3 left-6 px-3 py-1 bg-gold text-gold-foreground shadow-gold text-xs font-bold rounded-full">
                    Top Featured
                  </div>
                ) : null}

                {/* Icon */}
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg ${pack.featured
                  ? "bg-gradient-to-br from-primary to-navy-light"
                  : pack.topFeatured ? "bg-gradient-to-br from-gold to-gold-light" : "bg-gradient-to-br from-primary to-navy-light"
                  }`}>
                  <pack.icon className="w-7 h-7 text-primary-foreground" />
                </div>

                {/* Content */}
                <h3 className="my-auto font-serif text-xl font-bold text-foreground mb-3">
                  {pack.title}
                </h3>
                <p className="my-auto text-muted-foreground mb-5 leading-relaxed text-sm">
                  {pack.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-5 mt-auto">
                  {pack.features.map((feature) => (
                    <span
                      key={feature}
                      className={pack.featured ? "px-2 py-1 overflow-hidden whitespace-nowrap   bg-secondary rounded-full text-xs font-medium text-foreground" : pack.topFeatured ? "px-2 py-1 overflow-hidden whitespace-nowrap bg-gold rounded-full text-xs font-medium text-white/80" : "px-2 py-1 overflow-hidden whitespace-nowrap bg-secondary rounded-full text-xs font-medium text-foreground"}
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        {/* CTA */}
        <section className="bg-background">
          <div
            ref={ctaDivRef}
            className={isWidthGreater400 ? "container-custom" : ""}
          >
            <motion.div
              ref={ref}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-primary via-primary/95 to-primary p-12 max-[400px]:px-8 max-[400px]:py-10 md:p-16 text-center"
            >
              <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-gold/10 blur-3xl" />
              <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-sky/5 blur-3xl" />
              <div className="relative z-10 max-w-3xl mx-auto">
                <h2 className="font-serif text-3xl lg:text-5xl font-bold text-white mb-6">
                  Need A Custom Solution?
                </h2>
                <p className="text-white/80 text-lg mb-8">
                  Every travel need is unique. Speak with our specialist to design a service package perfectly tailored to you.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button className="btn-gold group" asChild>
                    <Link to="/customize">
                      {/* <Sparkles className="mr-1 w-4 h-4" /> */}
                      Customize Package
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                  <Button className="btn-outline-light" asChild>
                    <a      
                      href="tel:+923177787293"
                      className={`flex items-center gap-2 text-sm font-medium}`}
                    >
                      <Phone className="w-4 h-4" />
                      <span>Talk With Specialist</span>
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

      </div>
    </section>
  );
};

export default Services;
