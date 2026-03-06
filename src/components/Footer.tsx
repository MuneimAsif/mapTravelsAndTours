import { Plane, Facebook, Instagram, Twitter, Youtube, ArrowUp, Globe } from "lucide-react";
import { Link } from "react-router-dom";

const footerLinks = {
  company: [
    { name: "About Us", href: "/about" },
    { name: "Our Services", href: "/services" },
    { name: "Packages", href: "/packages" },
    { name: "Contact", href: "/contact" },
  ],
  services: [
    { name: "International Tours", href: "/services" },
    { name: "Flight Booking", href: "/services" },
    { name: "Hotel Reservations", href: "/services" },
    { name: "Ramadan Umrah", href: "/umrah" },
  ],
  support: [
    { name: "Customize Trip", href: "/customize" },
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Refund Policy", href: "#" },
  ],
};

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Youtube, href: "#", label: "Youtube" },
];

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="relative w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center shadow-gold">
                <Plane className="w-6 h-6 text-primary rotate-45" />
                <Globe className="w-3 h-3 text-primary absolute -top-1 -right-1" />
              </div>
              <div>
                <span className="font-serif font-bold text-xl text-primary-foreground block">
                  MAP Travel & Tourism
                </span>
                <span className="text-xs tracking-wider uppercase text-primary-foreground/70">
                  Explore The World
                </span>
              </div>
            </Link>
            <p className="text-primary-foreground/70 mb-6 max-w-sm leading-relaxed">
              Your trusted global travel partner. Experience worldwide destinations with 
              expert guidance. From beach getaways to cultural expeditions, we make every journey extraordinary.
            </p>
            <div className="flex items-center gap-2 mb-6 text-gold">
              <Globe className="w-4 h-4" />
              <span className="text-sm font-medium">Serving travelers in 100+ countries</span>
            </div>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold hover:text-primary transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-6">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-primary-foreground/70 hover:text-gold transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-6">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-primary-foreground/70 hover:text-gold transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-6">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  {link.href.startsWith("/") ? (
                    <Link to={link.href} className="text-primary-foreground/70 hover:text-gold transition-colors">
                      {link.name}
                    </Link>
                  ) : (
                    <a href={link.href} className="text-primary-foreground/70 hover:text-gold transition-colors">
                      {link.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-custom py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-primary-foreground/60">
            © 2025 MAP Travel & Tourism. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-sm text-primary-foreground/60 hover:text-gold transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
