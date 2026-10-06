import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { Menu, X, Phone, Heart } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Doctors", href: "/doctors" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "/gallery" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];
export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [location, setLocation] = useLocation();
    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    const scrollTo = (id) => {
        setMobileOpen(false);
        if (id.startsWith("/")) {
            setLocation(id);
            window.scrollTo({ top: 0, behavior: "smooth" });
            return;
        }
        if (location !== "/") {
            setLocation("/");
            setTimeout(() => {
                const homeEl = document.querySelector(id);
                if (homeEl)
                    homeEl.scrollIntoView({ behavior: "smooth" });
            }, 100);
            return;
        }
        const el = document.querySelector(id);
        if (el)
            el.scrollIntoView({ behavior: "smooth" });
    };
    return (<motion.header initial={{ y: -100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, ease: "easeOut" }} className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${scrolled
            ? "bg-white/98 backdrop-blur-lg shadow-lg shadow-blue-100/50 border-b border-blue-50"
            : "bg-transparent"}`} data-testid="navbar">
      {/* Emergency bar */}
      <div className="bg-gradient-to-r from-red-600 to-red-700 text-white text-center py-2 text-xs sm:text-sm font-medium">
        <span className="inline-flex items-center gap-2">
          <Phone className="w-3.5 h-3.5 animate-pulse"/>
          Emergency Helpline:
          <a href="tel:+911800123456" className="font-bold underline underline-offset-2 hover:text-red-100 transition-colors">
            8866626129
          </a>
          <span className="hidden sm:inline mx-2 opacity-50">|</span>
          <span className="hidden sm:inline">24/7 Emergency Care Available</span>
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button onClick={() => scrollTo("#home")} className="flex items-center gap-3 group" data-testid="nav-logo">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center shadow-md group-hover:shadow-blue-300/50 transition-shadow">
              <Heart className="w-5 h-5 text-white fill-white"/>
            </div>
            <div className="text-left">
              <p className={`font-bold text-base leading-tight transition-colors ${scrolled ? "text-blue-700" : "text-white"}`}>
                Navjivan Hospital
              </p>
              <p className={`text-xs font-medium leading-tight transition-colors ${scrolled ? "text-green-600" : "text-green-300"}`}>
                Your Health, Our Priority
              </p>
            </div>
          </button>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link, i) => (<motion.button key={link.href} initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 + i * 0.05 }} onClick={() => scrollTo(link.href)} className={`px-3 py-2 text-sm font-medium rounded-lg transition-all ${scrolled
                ? "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                : "text-white/90 hover:text-white hover:bg-white/10"}`} data-testid={`nav-link-${link.label.toLowerCase()}`}>
                {link.label}
              </motion.button>))}
            <motion.button initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.5 }} onClick={() => setLocation("/appointment")} className="ml-2 px-5 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-sm font-semibold rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all shadow-md hover:shadow-blue-300/50 hover:-translate-y-0.5 active:translate-y-0" data-testid="nav-book-appointment">
              Book Appointment
            </motion.button>
          </nav>

          {/* Mobile toggle */}
          <button onClick={() => setMobileOpen(!mobileOpen)} className={`md:hidden p-2 rounded-lg transition-colors ${scrolled ? "text-gray-600 hover:bg-gray-100" : "text-white hover:bg-white/10"}`} data-testid="nav-mobile-toggle">
            {mobileOpen ? <X className="w-5 h-5"/> : <Menu className="w-5 h-5"/>}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (<motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.2 }} className="md:hidden bg-white border-t border-gray-100 shadow-xl">
            <div className="px-4 py-3 space-y-1">
              {navLinks.map((link) => (<button key={link.href} onClick={() => scrollTo(link.href)} className="block w-full text-left px-4 py-2.5 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-colors" data-testid={`mobile-nav-${link.label.toLowerCase()}`}>
                  {link.label}
                </button>))}
              <button onClick={() => { setMobileOpen(false); setLocation("/appointment"); }} className="block w-full text-center px-4 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-sm font-bold rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all mt-2" data-testid="mobile-nav-book">
                Book Appointment
              </button>
            </div>
          </motion.div>)}
      </AnimatePresence>
    </motion.header>);
}
