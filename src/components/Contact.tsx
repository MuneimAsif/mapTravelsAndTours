import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  CheckCircle,
  Globe
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

// Environment variables with fallback defaults
const CONTACT_PHONE = import.meta.env.VITE_CONTACT_PHONE || "+92 317 778 7293";
const CONTACT_EMAIL = import.meta.env.VITE_CONTACT_EMAIL || "info.map@gmail.com";
const OFFICE_LOCATION = import.meta.env.VITE_OFFICE_LOCATION || "Karachi, Pakistan";
const OFFICE_HOURS = import.meta.env.VITE_OFFICE_HOURS || "09:00 am - 06:00 pm";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    value: CONTACT_PHONE,
    description: "Available 24/7",
  },
  {
    icon: Mail,
    title: "Email",
    value: CONTACT_EMAIL,
    description: "Response within 2 hours",
  },
  {
    icon: MapPin,
    title: "Office",
    value: OFFICE_LOCATION,
    description: "Visit by appointment",
  },
  {
    icon: Clock,
    title: "Hours",
    value: OFFICE_HOURS,
    description: "Mon - Sat",
  },
];

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const phoneNumber = import.meta.env.VITE_WHATSAPP_PHONE || "923177787293"; // WhatsApp number from env

    // 2. Message Format
    const message = `*New Trip Request*%0A` +
      `*Name:* ${formData.name}%0A` +
      `*Email:* ${formData.email}%0A` +
      `*Phone:* ${formData.phone}%0A` +
      `*Message:* ${formData.message}%0A`

    // 3. WhatsApp URL 
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;

    // 4. Open In A New Tab 
    window.open(whatsappURL, "_blank");
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Side - Contact Info */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary mb-4">
                <Globe className="w-3 h-3" />
                <span className="text-xs font-medium">Global Support Available</span>
              </div>
              <p className="text-gold font-semibold uppercase tracking-wider text-sm mb-4">
                Get In Touch
              </p>
              <h2 className="font-serif text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Start Your Journey
                <span className="text-primary block mt-2">With Our Agency </span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Ready to explore the world? Whether you're planning a vacation, business trip, or special getaway, we are here to assist you every step of the way.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="p-6 rounded-2xl bg-secondary/50 hover:bg-secondary transition-colors group"
                >
                  <info.icon className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
                  <h4 className="font-semibold text-foreground mb-1">{info.title}</h4>
                  <p className="text-foreground font-medium">{info.value}</p>
                  <p className="text-sm text-muted-foreground mt-1">{info.description}</p>
                </motion.div>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <a
                href={`https://wa.me/${import.meta.env.VITE_WHATSAPP_PHONE || "923177787293"}?text=Hello%20MAP%20Travels%20And%20Tours!%20I%20wanna%20discuss%20about:%20`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#25D366] text-white font-semibold hover:scale-105 transition-transform shadow-lg"
              >
                <MessageCircle className="w-6 h-6" />
                <span>Chat on WhatsApp</span>
              </a>
            </motion.div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="card-premium space-y-6">
              <h3 className="font-serif text-2xl font-bold text-foreground mb-2">
                Send Us a Message
              </h3>
              <p className="text-muted-foreground mb-6">
                Fill out the form below and we'll get back to you shortly.
              </p>

              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Full Name
                  </label>
                  <Input
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="h-12 rounded-xl bg-secondary/50 border-border focus:border-primary"
                    required
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Email Address
                    </label>
                    <Input
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="h-12 rounded-xl bg-secondary/50 border-border focus:border-primary"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Phone Number
                    </label>
                    <Input
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="h-12 rounded-xl bg-secondary/50 border-border focus:border-primary"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Message
                  </label>
                  <Textarea
                    placeholder="Tell us about your travel plans..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="min-h-32 rounded-xl bg-secondary/50 border-border focus:border-primary resize-none"
                    required
                  />
                </div>
              </div>

              <Button type="submit" className="btn-gold w-full group">
                <span>Send Message</span>
                <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>

              <div className="flex items-center gap-2 text-sm text-muted-foreground justify-center">
                <CheckCircle className="w-4 h-4 text-gold" />
                <span>Your information is secure and never shared</span>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
