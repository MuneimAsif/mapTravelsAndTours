import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { 
  Calendar, 
  Building2, 
  Plane, 
  Clock, 
  Plus, 
  Check,
  Sparkles,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";

const hotelOptions = [
  { id: "3star", name: "3-Star", price: 80, description: "Comfortable & budget-friendly" },
  { id: "4star", name: "4-Star", price: 150, description: "Premium amenities" },
  { id: "5star", name: "5-Star", price: 300, description: "Luxury experience" },
];

const airlineOptions = [
  { id: "economy", name: "Economy", price: 400, description: "Budget-friendly travel" },
  { id: "premium", name: "Premium Economy", price: 700, description: "Extra comfort" },
  { id: "business", name: "Business Class", price: 1500, description: "Luxury travel" },
];

const addOnServices = [
  { id: "guide", name: "Personal Guide", price: 200, selected: false },
  { id: "ziyarah", name: "Ziyarah Tours", price: 150, selected: false },
  { id: "insurance", name: "Premium Insurance", price: 100, selected: false },
  { id: "medical", name: "Medical Support", price: 75, selected: false },
  { id: "vip", name: "VIP Airport Service", price: 120, selected: false },
  { id: "meals", name: "Meal Package", price: 180, selected: false },
];

const CustomPackageBuilder = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const [duration, setDuration] = useState([10]);
  const [selectedHotel, setSelectedHotel] = useState("4star");
  const [selectedAirline, setSelectedAirline] = useState("economy");
  const [addOns, setAddOns] = useState(addOnServices);

  const toggleAddOn = (id: string) => {
    setAddOns(addOns.map(addon => 
      addon.id === id ? { ...addon, selected: !addon.selected } : addon
    ));
  };

  const calculateTotal = () => {
    const hotelPrice = hotelOptions.find(h => h.id === selectedHotel)?.price || 0;
    const airlinePrice = airlineOptions.find(a => a.id === selectedAirline)?.price || 0;
    const addOnPrice = addOns.filter(a => a.selected).reduce((sum, a) => sum + a.price, 0);
    const visaPrice = 150; // Fixed visa cost
    
    return (hotelPrice * duration[0]) + airlinePrice + addOnPrice + visaPrice;
  };

  return (
    <section id="customize" className="section-padding bg-gradient-to-b from-secondary/30 to-background">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 text-gold mb-6">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">Build Your Perfect Journey</span>
          </div>
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Customize Your
            <span className="text-primary block mt-2">Umrah Package</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Tailor every aspect of your journey. Select your preferences and we'll create 
            a personalized package just for you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Package Builder */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-8"
          >
            {/* Duration Selector */}
            <div className="card-premium">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-foreground">Duration of Stay</h3>
                  <p className="text-sm text-muted-foreground">How many nights in Saudi Arabia?</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Nights</span>
                  <span className="text-3xl font-serif font-bold text-primary">{duration[0]}</span>
                </div>
                <Slider
                  value={duration}
                  onValueChange={setDuration}
                  min={5}
                  max={21}
                  step={1}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>5 nights</span>
                  <span>21 nights</span>
                </div>
              </div>
            </div>

            {/* Hotel Selection */}
            <div className="card-premium">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-foreground">Hotel Category</h3>
                  <p className="text-sm text-muted-foreground">Choose your accommodation level</p>
                </div>
              </div>

              <div className="grid sm:grid-cols-3 gap-4">
                {hotelOptions.map((hotel) => (
                  <button
                    key={hotel.id}
                    onClick={() => setSelectedHotel(hotel.id)}
                    className={`p-4 rounded-xl border-2 transition-all duration-300 text-left ${
                      selectedHotel === hotel.id
                        ? "border-gold bg-gold/10 shadow-gold"
                        : "border-border hover:border-primary/30"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-foreground">{hotel.name}</span>
                      {selectedHotel === hotel.id && (
                        <Check className="w-5 h-5 text-gold" />
                      )}
                    </div>
                    <p className="text-xs text-muted-foreground mb-2">{hotel.description}</p>
                    <p className="text-lg font-bold text-primary">${hotel.price}<span className="text-sm font-normal text-muted-foreground">/night</span></p>
                  </button>
                ))}
              </div>
            </div>

            {/* Airline Selection */}
            <div className="card-premium">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Plane className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-foreground">Flight Class</h3>
                  <p className="text-sm text-muted-foreground">Select your preferred travel class</p>
                </div>
              </div>

              <div className="grid sm:grid-cols-3 gap-4">
                {airlineOptions.map((airline) => (
                  <button
                    key={airline.id}
                    onClick={() => setSelectedAirline(airline.id)}
                    className={`p-4 rounded-xl border-2 transition-all duration-300 text-left ${
                      selectedAirline === airline.id
                        ? "border-gold bg-gold/10 shadow-gold"
                        : "border-border hover:border-primary/30"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-foreground">{airline.name}</span>
                      {selectedAirline === airline.id && (
                        <Check className="w-5 h-5 text-gold" />
                      )}
                    </div>
                    <p className="text-xs text-muted-foreground mb-2">{airline.description}</p>
                    <p className="text-lg font-bold text-primary">${airline.price}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Add-on Services */}
            <div className="card-premium">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Plus className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-foreground">Additional Services</h3>
                  <p className="text-sm text-muted-foreground">Enhance your experience</p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {addOns.map((addon) => (
                  <button
                    key={addon.id}
                    onClick={() => toggleAddOn(addon.id)}
                    className={`p-4 rounded-xl border-2 transition-all duration-300 text-left ${
                      addon.selected
                        ? "border-gold bg-gold/10"
                        : "border-border hover:border-primary/30"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-foreground">{addon.name}</span>
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${
                        addon.selected ? "bg-gold border-gold" : "border-muted-foreground"
                      }`}>
                        {addon.selected && <Check className="w-3 h-3 text-primary" />}
                      </div>
                    </div>
                    <p className="text-sm font-semibold text-primary mt-2">+${addon.price}</p>
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Price Summary */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-1"
          >
            <div className="sticky top-28">
              <div className="card-premium bg-primary text-primary-foreground">
                <h3 className="font-serif text-2xl font-bold mb-6">Package Summary</h3>
                
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between items-center pb-3 border-b border-white/20">
                    <span className="text-primary-foreground/70">Duration</span>
                    <span className="font-semibold">{duration[0]} Nights</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-white/20">
                    <span className="text-primary-foreground/70">Hotel</span>
                    <span className="font-semibold">
                      {hotelOptions.find(h => h.id === selectedHotel)?.name}
                    </span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-white/20">
                    <span className="text-primary-foreground/70">Flight</span>
                    <span className="font-semibold">
                      {airlineOptions.find(a => a.id === selectedAirline)?.name}
                    </span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-white/20">
                    <span className="text-primary-foreground/70">Visa</span>
                    <span className="font-semibold">Included</span>
                  </div>
                  {addOns.filter(a => a.selected).length > 0 && (
                    <div className="pb-3 border-b border-white/20">
                      <span className="text-primary-foreground/70 block mb-2">Add-ons</span>
                      <div className="space-y-1">
                        {addOns.filter(a => a.selected).map(addon => (
                          <div key={addon.id} className="flex justify-between text-sm">
                            <span>{addon.name}</span>
                            <span>+${addon.price}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="mb-8">
                  <div className="flex justify-between items-baseline">
                    <span className="text-primary-foreground/70">Total Price</span>
                    <div className="text-right">
                      <span className="text-4xl font-serif font-bold text-gold">
                        ${calculateTotal().toLocaleString()}
                      </span>
                      <p className="text-sm text-primary-foreground/70">per person</p>
                    </div>
                  </div>
                </div>

                <Button className="btn-gold w-full group" asChild>
                  <a href="#contact">
                    Book This Package
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>

                <p className="text-center text-sm text-primary-foreground/60 mt-4">
                  No hidden fees. Price transparency guaranteed.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CustomPackageBuilder;
