import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    location: "London, UK",
    rating: 5,
    text: "Absolutely incredible experience! MAP Travel planned our entire European tour flawlessly. From flights to hotels, every detail was perfect. Highly recommend!",
    trip: "European Explorer Tour",
  },
  {
    name: "Ahmed Al-Rashid",
    location: "Dubai, UAE",
    rating: 5,
    text: "Our family Umrah trip was spiritually fulfilling and perfectly organized. The team handled everything with care and professionalism. A truly blessed journey.",
    trip: "Ramadan Umrah Package",
  },
  {
    name: "Jennifer & Mark Thompson",
    location: "Sydney, Australia",
    rating: 5,
    text: "Best honeymoon ever! The Maldives package exceeded all expectations. The resort was stunning and every romantic detail was thoughtfully arranged.",
    trip: "Maldives Honeymoon",
  },
  {
    name: "David Chen",
    location: "Singapore",
    rating: 5,
    text: "As a corporate client, I trust MAP Travel for all our business travel needs. Reliable, efficient, and always professional. Outstanding service!",
    trip: "Corporate Travel Management",
  },
  {
    name: "Fatima Hassan",
    location: "Toronto, Canada",
    rating: 5,
    text: "The Dubai experience package was amazing! From the Burj Khalifa to desert safari, everything was well planned. Will definitely book again!",
    trip: "Dubai Experience Package",
  },
  {
    name: "Michael Roberts",
    location: "New York, USA",
    rating: 5,
    text: "Exceptional visa processing service! Got my multi-country visa approved in record time. The documentation support was incredibly helpful.",
    trip: "Visa Services",
  },
];

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="testimonials" className="section-padding bg-background">
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
            Testimonials
          </p>
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-foreground mb-6">
            What Our Travelers
            <span className="text-primary block mt-2">Say About Us</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Thousands of happy travelers have experienced the world with us. 
            Here's what they have to say about their journeys.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card-premium relative group hover:border-gold/30 border border-transparent"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 right-6">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-navy-light flex items-center justify-center shadow-lg">
                  <Quote className="w-5 h-5 text-primary-foreground" />
                </div>
              </div>

              {/* Rating Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-gold text-gold"
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-muted-foreground mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              {/* Trip Badge */}
              <div className="mb-4">
                <span className="px-3 py-1 bg-secondary rounded-full text-xs font-medium text-foreground">
                  {testimonial.trip}
                </span>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-navy-light flex items-center justify-center text-primary-foreground font-bold text-lg">
                  {testimonial.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-8 px-8 py-4 bg-secondary/50 rounded-full">
            <div className="text-center">
              <p className="text-2xl font-bold text-primary">10,000+</p>
              <p className="text-sm text-muted-foreground">Happy Travelers</p>
            </div>
            <div className="w-px h-10 bg-border" />
            <div className="text-center">
              <p className="text-2xl font-bold text-primary">4.9/5</p>
              <p className="text-sm text-muted-foreground">Average Rating</p>
            </div>
            <div className="w-px h-10 bg-border" />
            <div className="text-center">
              <p className="text-2xl font-bold text-primary">50+</p>
              <p className="text-sm text-muted-foreground">Countries Served</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
