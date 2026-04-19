import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Phone, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HomeCTA = () => {
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
          className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-primary via-primary/95 to-primary p-12 md:p-16 text-center"
        >
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-gold/10 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-sky/5 blur-3xl" />

          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="font-serif text-3xl lg:text-5xl font-bold text-white mb-6">
              Ready to Explore the World?
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Build your own perfect travel package or talk to a travel expert. 
              Your dream journey is just one step away.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="btn-gold group" asChild>
                <Link to="/customize">
                  <Sparkles className="mr-1 w-4 h-4" />
                  Build your Package
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button className="btn-outline-light">
            <a
              href="tel:+92321273577"
              className={`flex items-center gap-2 text-sm font-medium}`}
            >
              <Phone className="w-4 h-4" />
              <span>Talk to a Travel Expert</span>
            </a>
          </Button>
    
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeCTA;
