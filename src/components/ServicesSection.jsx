import { Heart, Smile, Zap, Stethoscope, ArrowRight } from "lucide-react";
import { useLocation } from "wouter";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
const services = [
    {
    icon: Heart,
    title: "Cardiology Services",
    subtitle: "Heart Care Excellence",
    description: "Comprehensive cardiac care — from ECG and echocardiography to angioplasty and heart failure management — delivered with precision and compassion.",
    features: [
        "Critical Care",
        "Diabetes Management",
        "Hypertension (BP)",
        "Thyroid Disorders",
        "Heart Disorders",
        "Lung Disorders",
        "Liver Disorders",
        "Intestinal Disorders",
        "Kidney Disorders",
        "Urology Disorders",
        "Neurological Disorders",
        "Poison Cases",
        "Fever Treatment",
        "Septicemia Management"
    ],
    gradient: "from-red-500 to-rose-600",
    lightBg: "bg-red-50",
    border: "border-red-100 hover:border-red-200",
    tag: "bg-red-50 text-red-600 border-red-100",
    glow: "hover:shadow-red-100/60",
},
   {
    icon: Smile,
    title: "Dental Services",
    subtitle: "Aura Dental Clinic",
    description: "Complete dental care from routine cleanings to full smile makeovers — delivered with a gentle touch and the latest dental technology.",
    features: [
        "Cosmetic Dentistry",
        "Smile Restorations",
        "Family & General Dentistry",
        "Orthodontic Braces",
        "Dental Implants & Crowns",
        "Restorative Dentistry",
        "Porcelain Veneers",
        "Preventive Dentistry",
        "Cosmetic Teeth Bonding",
        "Scaling & Root Planing",
        "Teeth Whitening/Bleaching",
        "Prophylaxis (Dental Cleanings)",
        "Natural Tooth-Colored Fillings",
        "Bridges, Partials, & Dentures",
        "Mercury-Free Fillings",
        "Checkups & X-Rays",
        "Nightguards - Teeth Grinding",
        "Intra Oral Screening Exams",
        "Custom Athletic Mouthguards",
        "Children's Dentistry, Sealants & Fluoride"
    ],
    gradient: "from-emerald-500 to-teal-600",
    lightBg: "bg-emerald-50",
    border: "border-emerald-100 hover:border-emerald-200",
    tag: "bg-emerald-50 text-emerald-600 border-emerald-100",
    glow: "hover:shadow-emerald-100/60",
},
    {
        icon: Zap,
        title: "Emergency Care",
        subtitle: "24/7 Rapid Response",
        description: "Our round-the-clock emergency teams are always ready — from trauma care and critical care to life support and emergency surgery.",
        features: ["Trauma Care", "Critical Care Unit", "Rapid Response", "Emergency Surgery", "Life Support"],
        gradient: "from-orange-500 to-amber-600",
        lightBg: "bg-orange-50",
        border: "border-orange-100 hover:border-orange-200",
        tag: "bg-orange-50 text-orange-600 border-orange-100",
        glow: "hover:shadow-orange-100/60",
    },
    {
        icon: Stethoscope,
        title: "General Consultation",
        subtitle: "Primary Healthcare",
        description: "Comprehensive general medicine consultations for diagnosis, treatment, and ongoing management of a wide range of medical conditions.",
        features: ["Health Checkups", "Preventive Care", "Chronic Disease Mgmt", "Vaccinations", "Health Counseling"],
        gradient: "from-blue-500 to-indigo-600",
        lightBg: "bg-blue-50",
        border: "border-blue-100 hover:border-blue-200",
        tag: "bg-blue-50 text-blue-600 border-blue-100",
        glow: "hover:shadow-blue-100/60",
    },
];
export default function ServicesSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-80px" });
    const [, setLocation] = useLocation();
    return (<section id="services" className="py-24 bg-white overflow-hidden" data-testid="services-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="inline-block text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3 bg-blue-50 px-4 py-1.5 rounded-full">What We Offer</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Medical <span className="text-blue-600">Services</span>
          </h2>
          <div className="w-16 h-1.5 bg-gradient-to-r from-blue-500 to-green-500 mx-auto rounded-full mb-6"/>
          <p className="text-gray-400 max-w-xl mx-auto text-sm leading-relaxed">
            A full spectrum of medical specialties under one roof, so you never have to go far for world-class care.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map(({ icon: Icon, title, subtitle, description, features, gradient, border, tag, glow }, i) => (<motion.div key={title} initial={{ opacity: 0, y: 50 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: i * 0.12, duration: 0.55, ease: "easeOut" }} whileHover={{ y: -6 }} className={`rounded-3xl border ${border} p-7 group transition-all duration-300 hover:shadow-2xl ${glow} bg-white`} data-testid={`service-${title.toLowerCase().replace(/\s+/g, "-")}`}>
              <div className="flex items-start gap-5 mb-4">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-7 h-7 text-white"/>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">{title}</h3>
                  <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">{subtitle}</span>
                </div>
              </div>

              <p className="text-gray-500 text-sm leading-relaxed mb-5">{description}</p>

              <div className="flex flex-wrap gap-2 mb-5">
                {features.map((f) => (<span key={f} className={`text-xs px-3 py-1 rounded-full border font-medium ${tag}`}>{f}</span>))}
              </div>

              <motion.button whileHover={{ gap: "12px" }} onClick={() => setLocation("/appointment")} className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors" data-testid={`service-book-${title.toLowerCase().replace(/\s+/g, "-")}`}>
                Book a Consultation <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform"/>
              </motion.button>
            </motion.div>))}
        </div>
      </div>
    </section>);
}
