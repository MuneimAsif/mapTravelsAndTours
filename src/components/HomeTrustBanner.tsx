import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import mukarram from "@/assets/Mukarram.webp";
import farooq from "@/assets/Farooq.webp";
import sufiyan from "@/assets/Sufiyan.webp";
import hassan from "@/assets/Hassan.webp";
import naveed from "@/assets/Naveed.webp";
import moin from "@/assets/Moin.webp";
import usama from "@/assets/Usama.webp";

const HomeTrustBanner = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const testimonials = [
    {
      name: "Mukarram",
      location: "Pakistan",
      text: "Your honesty admire me most. You never oversell anything. I'd confidently recommend you to anyone looking for a trustworthy travel partner",
      image: mukarram,
    },
    {
      name: "Usama",
      location: "South Africa",
      text: "The sincerity and care you bring to everything you do is truly inspiring. You never make empty promises and that kind of honesty is incredibly rare. A travel partner worth trusting completely.",
      image: usama,
    },
    {
      name: "Sufiyan",
      location: "Pakistan",
      text: "The dedication and attention to detail you put to make a trip successful is remarkable. You have won my trust with your exceptional services.",
      image: sufiyan,
    },
    {
      name: "Naveed",
      location: "Pakistan",
      text: "You put so much genuine effort into what you do. Completely trustworthy and professional in every way. My absolute first recommendation for anyone planning their next journey.",
      image: naveed,
    },
    {
      name: "Farooq",
      location: "Pakistan",
      text: "Rarely meet someone so passionate about what they do. A genuinely reliable person. My go-to recommendation for anyone planning to travel.",
      image: farooq,
    },
    {
      name: "Moin",
      location: "Pakistan",
      text: "I truly admire your working and hardwork to making every trip perfect. You are the person of rare integrity and I can trust you with my travel plans without any hesitation whatsoever.",
      image: moin,
    },
  ];
  return (
    <section className="py-16 bg-primary relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-gold/10 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-sky/10 blur-3xl" />
      <div className="container-custom relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 overflow-hidden" // Added overflow-hidden
        >
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-white mb-4">
            What people say about us
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto mb-12">
            Don't just take our words. Instead, hear from the people who recommend us.
          </p>

          {/* MARQUEE CONTAINER */}
          <div className="relative flex">
            <motion.div
              className="flex gap-6"
              animate={{
                x: ["0%", "-50%"], // Moves halfway because we doubled the content
              }}
              transition={{
                ease: "linear",
                duration: 30, // Adjust speed here (higher = slower)
                repeat: Infinity,
              }}
            >
              {/* Render testimonials twice for seamless looping */}
              {[...testimonials, ...testimonials].map((testimonial, index) => (
                <div
                  key={`${testimonial.name}-${index}`}
                  className="card-premium relative group hover:border-gold/30 border border-transparent bg-sky/10 p-6 min-w-[300px] md:min-w-[400px]"
                >
                  {/* Quote Icon */}
                  <div className="absolute -top-4 right-6">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-navy-light flex items-center justify-center shadow-lg">
                      <Quote className="w-5 h-5 text-gold" />
                    </div>
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-white/70 mb-6 leading-relaxed italic">
                    "{testimonial.text}"
                  </p>

                  {/* Author Info */}
                  <div className="flex items-center gap-3 pt-4 border-t border-gold">
                    <div className="relative overflow-hidden w-12 h-12 rounded-full bg-gradient-to-br from-primary to-navy-light flex items-center justify-center text-primary-foreground font-bold text-lg">
                      {testimonial.image && (
                        <img
                          className="absolute inset-0 w-38 h-38 lazy-load object-cover"
                          src={testimonial.image}
                          alt={testimonial.name}
                        />
                      )}
                    </div>
                    <div className="text-left">
                      <h4 className="font-semibold text-gold">{testimonial.name}</h4>
                      <p className="text-sm text-white/70">{testimonial.location}</p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <Button className="btn-gold group" asChild>
            <Link to="/contact">
              Reserve Your Seat
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeTrustBanner;
