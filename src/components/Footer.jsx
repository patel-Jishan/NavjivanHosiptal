import { Facebook, Twitter, Instagram, Youtube, Phone, Mail, MapPin, Heart, ArrowRight, Code2, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Our Doctors", href: "#doctors" },
  { label: "Services", href: "#services" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];
const socialLinks = [
  {
    icon: Facebook,
    label: "Facebook",
    href: "#",
    hoverClass: "hover:bg-blue-600",
  },
  {
    icon: Twitter,
    label: "Twitter",
    href: "#",
    hoverClass: "hover:bg-sky-500",
  },
  {
    icon: Instagram,
    label: "Instagram",
    href: "https://www.instagram.com/navjivan.aura.healthcare?igsh=MTlvZWMzY3I2ZmRtMg==",
    hoverClass: "hover:bg-gradient-to-r hover:from-pink-500 hover:via-purple-500 hover:to-orange-500",
  },
  {
    icon: Youtube,
    label: "YouTube",
    href: "#",
    hoverClass: "hover:bg-red-600",
  },
];
export default function Footer() {
  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el)
      el.scrollIntoView({ behavior: "smooth" });
  };
  return (<footer className="bg-gray-950 text-gray-300" data-testid="footer">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-12">
        {/* Brand — wider */}
        <div className="md:col-span-4">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center shadow-md">
              <Heart className="w-5 h-5 text-white fill-white" />
            </div>
            <div>
              <p className="font-bold text-white text-base">Navjivan Hospital</p>
              <p className="text-xs text-green-400 font-medium">Your Health, Our Priority</p>
            </div>
          </div>
          <p className="text-sm leading-relaxed text-gray-400 mb-6">
            A premier multi-speciality hospital in Bharuch, Gujarat, committed to delivering exceptional healthcare with compassion, innovation, and clinical excellence.
          </p>

          {/* Emergency CTA */}
          <div className="bg-red-600/10 border border-red-500/20 rounded-2xl p-4 mb-5">
            <p className="text-red-400 font-semibold text-sm mb-1">Emergency Helpline</p>
            <a href="tel:+911800999000" className="text-white font-bold text-xl hover:text-red-400 transition-colors">
             8866626129
            </a>
            <p className="text-gray-500 text-xs mt-1">Available 24 hours, 7 days a week</p>
          </div>

          {/* Socials */}
          <div className="flex gap-2">
            {socialLinks.map(({ icon: Icon, label, href, hoverClass }) => (
              <motion.a
                key={label}
                href={href}
                aria-label={label}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`w-9 h-9 rounded-xl bg-gray-800 border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white ${hoverClass} hover:border-transparent transition-all`}
                data-testid={`social-${label.toLowerCase()}`}
              >
                <Icon className="w-4 h-4" />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="md:col-span-3">
          <h4 className="text-white font-bold mb-5 text-sm uppercase tracking-wider">Quick Links</h4>
          <ul className="space-y-2.5">
            {quickLinks.map(({ label, href }) => (<li key={label}>
              <button onClick={() => scrollTo(href)} className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-2 group" data-testid={`footer-link-${label.toLowerCase().replace(/\s+/g, "-")}`}>
                <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all" />
                {label}
              </button>
            </li>))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="md:col-span-5">
          <h4 className="text-white font-bold mb-5 text-sm uppercase tracking-wider">Contact Information</h4>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-blue-600/20 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-3.5 h-3.5 text-blue-400" />
              </div>
              <span className="text-sm text-gray-400 leading-relaxed">SECOND FLOOR, Skyline Business Hub, Old Relief
                Cinema Complex, Panchbatti, Station Road Bharuch, Gujarat, 392001</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-green-600/20 flex items-center justify-center flex-shrink-0">
                <Phone className="w-3.5 h-3.5 text-green-400" />
              </div>
              <div>
                <p className="text-sm text-gray-400">+91 8866626109(General)</p>
                <p className="text-sm text-gray-400">+91 8866626129(Emergency)</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-orange-600/20 flex items-center justify-center flex-shrink-0">
                <Mail className="w-3.5 h-3.5 text-orange-400" />
              </div>
              <div>
                <p className="text-sm text-gray-400">navjivan.aura@gmail.com</p>
                 </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
        <p>© 2026 Navjivan Hospital. All rights reserved.</p>

        {/* Center */}
        <a
          href="https://jshanportfolio-tan.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center gap-2 px-5 py-2.5 rounded-full border border-gray-700/50 bg-gradient-to-r from-gray-800/80 to-gray-900/80 backdrop-blur-sm hover:border-transparent transition-all duration-300 overflow-hidden"
        >
          {/* Animated gradient background on hover */}
          <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>

          {/* Content */}
          <span className="relative flex items-center gap-2">
            <Code2 className="w-3.5 h-3.5 text-blue-400 group-hover:text-white transition-colors duration-300" />
            <span className="text-gray-400 group-hover:text-white transition-colors duration-300 text-sm">
              Designed & Developed by
            </span>
            <span className="font-semibold text-white flex items-center gap-1">
              Jishan's
              <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
            </span>
          </span>
        </a>

        {/* Right */}
        <p className="flex items-center gap-1 text-center md:text-right">
          Made with{" "}
          <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" />
          for better healthcare in Bharuch , Gujarat
        </p>

      </div>
    </div>
  </footer>);
}
