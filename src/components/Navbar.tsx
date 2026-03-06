import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Plane, Phone, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Packages", href: "/packages" },
  { name: "Customize Trip", href: "/customize" },
  { name: "Ramadan Umrah", href: "/umrah" },
  { name: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // On non-home pages, always show scrolled style
  const showScrolledStyle = isScrolled || !isHome;

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          showScrolledStyle
            ? "glass py-3 shadow-soft"
            : "bg-transparent py-6"
        }`}
      >
        <div className="container-custom flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="relative">
              <div className="w-10 h-10 rounded-full bg-gradient-gold flex items-center justify-center shadow-gold group-hover:scale-110 transition-transform duration-300">
                <Plane className="w-5 h-5 text-primary rotate-45" />
              </div>
              <Globe className="w-3 h-3 text-gold absolute -top-1 -right-1" />
            </div>
            <div className="flex flex-col">
              <span className={`font-serif font-bold text-lg leading-tight transition-colors ${
                showScrolledStyle ? "text-primary" : "text-white"
              }`}>
                MAP Travel & Tourism
              </span>
              <span className={`text-xs tracking-wider uppercase transition-colors ${
                showScrolledStyle ? "text-muted-foreground" : "text-white/70"
              }`}>
                Explore The World
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`text-sm font-medium transition-all duration-300 hover:scale-105 relative group ${
                  showScrolledStyle 
                    ? "text-foreground hover:text-primary" 
                    : "text-white/90 hover:text-white"
                } ${location.pathname === link.href ? (showScrolledStyle ? "text-primary" : "text-white") : ""}`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 h-0.5 transition-all duration-300 ${
                  location.pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
                } ${showScrolledStyle ? "bg-primary" : "bg-white"}`} />
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a 
              href="tel:+966500000000" 
              className={`flex items-center gap-2 text-sm font-medium transition-colors ${
                showScrolledStyle ? "text-foreground" : "text-white"
              }`}
            >
              <Phone className="w-4 h-4" />
              <span>+966 50 000 0000</span>
            </a>
            <Button className="btn-gold text-sm py-2.5 px-6" asChild>
              <Link to="/packages">Book Now</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              showScrolledStyle ? "text-foreground" : "text-white"
            }`}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-20 left-4 right-4 z-40 glass rounded-2xl shadow-elevated p-6 lg:hidden"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    to={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block text-foreground font-medium py-2 hover:text-primary transition-colors ${
                      location.pathname === link.href ? "text-primary" : ""
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <Button className="btn-gold mt-4" asChild>
                <Link to="/packages" onClick={() => setIsMobileMenuOpen(false)}>
                  Book Now
                </Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
