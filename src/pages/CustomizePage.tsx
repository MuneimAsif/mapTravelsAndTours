import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Building2, Heart, Users, Check, Sparkles, Send,
  Medal,
  Moon,
  LayoutPanelLeft
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FlyingPlane from "@/components/FlyingPlane";

const destinations = [
  { name: "Europe", icon: "🏰" },
  { name: "Asia", icon: "🏯" },
  { name: "Maldives & Islands", icon: "🏝️" },
  { name: "Middle East", icon: "🕌" },
  { name: "Africa Safari", icon: "🦁" },
  { name: "Americas", icon: "🗽" },
];

const travelTypes = [
  { name: "Family Vacation", icon: Users },
  { name: "Student Trip", icon: Medal },
  { name: "Umrah", icon: Moon },
  { name: "Business Travel", icon: Building2 },
  { name: "Honeymoon", icon: Heart },
  { name: "Other", icon: LayoutPanelLeft },
];

const CustomizePage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const { toast } = useToast();

  const [selectedDestination, setSelectedDestination] = useState<string>("");
  const [selectedType, setSelectedType] = useState<string>("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    travelers: "",
    dates: "",
    budget: "",
    notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const phoneNumber = "923218273577";

    // 2. Message Format
    const message = `*New Trip Request*%0A` +
      `*Name:* ${formData.name}%0A` +
      `*Email:* ${formData.email}%0A` +
      `*Phone:* ${formData.phone}%0A` +
      `*Destination:* ${selectedDestination}%0A` +
      `*Travel Type:* ${selectedType}%0A` +
      `*Travelers:* ${formData.travelers}%0A` +
      `*Dates:* ${formData.dates}%0A` +
      `*Budget:* ${formData.budget}%0A` +
      `*Notes:* ${formData.notes}`;

    // 3. WhatsApp URL 
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;

    // 4. Open In A New Tab 
    window.open(whatsappURL, "_blank");
    toast({
      title: "Custom Trip Request Sent!",
      description: "Our travel expert will contact you within 2 hours",
    });
    setFormData({ name: "", email: "", phone: "", travelers: "", dates: "", budget: "", notes: "" });
    setSelectedDestination("");
    setSelectedType("");
  };

  return (
    <div className="relative overflow-x-hidden">
      <FlyingPlane />
      <Navbar />
      <main className="pt-24">
        <section className="  bg-background">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mx-auto mb-16"
          >
            <section className="bg-primary -mt-8 min-w-[100%] min-h-[70vh] flex items-center justify-center">
              <div className="mb-5">
                <p className="text-gold font-semibold uppercase tracking-wider text-sm mb-4">
                  Customize Your Trip
                </p>
                <h1
                  className="text-4xl lg:text-5xl font-bold text-white leading-tight"
                  style={{ fontSize: "clamp(2.4rem,5vw,4rem)" }}
                >
                  Build Your Perfect
                  <br /> Travel Package
                </h1>
              </div>
            </section>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/20 text-gold border border-gold/30 mt-14">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-semibold">Custom Trip Builder</span>
            </div>
          </motion.div>

          <form onSubmit={handleSubmit} className="max-w-4xl mx-auto space-y-12">
            {/* Step 1: Destination */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="font-serif text-2xl font-bold text-foreground mb-6">
                <span className="text-gold mr-2">1.</span> Where do you want to go?
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {destinations.map((dest) => (
                  <button
                    key={dest.name}
                    type="button"
                    onClick={() => setSelectedDestination(dest.name)}
                    className={`p-5 rounded-2xl border-2 transition-all duration-300 text-left ${selectedDestination === dest.name
                      ? "border-primary bg-primary/5 shadow-card"
                      : "border-border hover:border-primary/30 bg-card"
                      }`}
                  >
                    <span className="text-2xl block mb-2">{dest.icon}</span>
                    <span className="font-semibold text-foreground">{dest.name}</span>
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Step 2: Travel Type */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="font-serif text-2xl font-bold text-foreground mb-6">
                <span className="text-gold mr-2">2.</span> What type of trip?
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {travelTypes.map((type) => (
                  <button
                    key={type.name}
                    type="button"
                    onClick={() => setSelectedType(type.name)}
                    className={`p-5 rounded-2xl border-2 transition-all duration-300 flex items-center gap-3 ${selectedType === type.name
                      ? "border-primary bg-primary/5 shadow-card"
                      : "border-border hover:border-primary/30 bg-card"
                      }`}
                  >
                    <type.icon className={`w-6 h-6 ${selectedType === type.name ? "text-primary" : "text-muted-foreground"}`} />
                    <span className="font-semibold text-foreground">{type.name}</span>
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Step 3: Details */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="font-serif text-2xl font-bold text-foreground mb-6">
                <span className="text-gold mr-2">3.</span> Trip details
              </h3>
              <div className="card-premium space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Full Name</label>
                    <Input placeholder="Your name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="h-12 rounded-xl bg-secondary/50 border-border" required />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Email</label>
                    <Input type="email" placeholder="your@email.com" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="h-12 rounded-xl bg-secondary/50 border-border" required />
                  </div>
                </div>
                <div className="grid sm:grid-cols-3 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Phone</label>
                    <Input type="tel" placeholder="+1 555 000-0000" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="h-12 rounded-xl bg-secondary/50 border-border" required />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Number of Travelers</label>
                    <Input type="number" placeholder="2" value={formData.travelers} onChange={(e) => setFormData({ ...formData, travelers: e.target.value })} className="h-12 rounded-xl bg-secondary/50 border-border" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Preferred Dates</label>
                    <Input placeholder="e.g. March 2025" value={formData.dates} onChange={(e) => setFormData({ ...formData, dates: e.target.value })} className="h-12 rounded-xl bg-secondary/50 border-border" />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Budget Range (per person)</label>
                  <Input placeholder="e.g. $2,000 - $5,000" value={formData.budget} onChange={(e) => setFormData({ ...formData, budget: e.target.value })} className="h-12 rounded-xl bg-secondary/50 border-border" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Additional Notes</label>
                  <Textarea placeholder="Any special requirements, preferences, or must-visit places..." value={formData.notes} onChange={(e) => setFormData({ ...formData, notes: e.target.value })} className="min-h-24 rounded-xl bg-secondary/50 border-border resize-none" />
                </div>
              </div>
            </motion.div>

            {/* Submit */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center"
            >
              <Button type="submit" className="btn-gold group px-12 py-6 text-lg">
                <span>Submit Your Trip Request</span>
                <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <p className="text-sm text-muted-foreground mt-4 mb-8">
                <Check className="w-4 h-4 inline mr-1 text-gold" />
                Our travel expert will contact you within 2 hours
              </p>
            </motion.div>
          </form>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CustomizePage;
