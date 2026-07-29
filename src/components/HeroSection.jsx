import { useLocation } from "wouter";
import { Activity, Clock, UserCheck, AlertCircle, ChevronDown, Star, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" } }),
};
const highlights = [
    { icon: Clock, label: "24/7 Service", desc: "Round-the-clock emergency care" },
    { icon: UserCheck, label: "Expert Doctors", desc: "Board-certified specialists" },
    { icon: AlertCircle, label: "Emergency Care", desc: "Rapid response team" },
];
export default function HeroSection() {
    const [, setLocation] = useLocation();
    return (<section id="home" className="relative min-h-screen flex items-center overflow-hidden" data-testid="hero-section">
      
      
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-700 to-blue-500"/>

      {/* Floating circles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[
            { size: 500, x: "80%", y: "-10%", delay: 0 },
            { size: 350, x: "-5%", y: "60%", delay: 1 },
            { size: 250, x: "60%", y: "75%", delay: 2 },
            { size: 180, x: "40%", y: "10%", delay: 1.5 },
        ].map((c, i) => (<motion.div key={i} className="absolute rounded-full bg-white/5" style={{ width: c.size, height: c.size, left: c.x, top: c.y }} animate={{ scale: [1, 1.08, 1], opacity: [0.3, 0.5, 0.3] }} transition={{ duration: 6 + i, repeat: Infinity, delay: c.delay, ease: "easeInOut" }}/>))}
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
        }}/>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-36 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left column */}
          <div>
            <motion.div variants={fadeUp} initial="hidden" animate="show" custom={0} className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Activity className="w-4 h-4 text-green-400"/>
              Multi-Speciality Hospital — Bharuch,Gujarat 
            </motion.div>

            <motion.h1 variants={fadeUp} initial="hidden" animate="show" custom={1} className="text-5xl lg:text-7xl font-bold text-white leading-[1.05] mb-4">
              Navjivan<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-green-400">
                Hospital
              </span>
            </motion.h1>

            <motion.p variants={fadeUp} initial="hidden" animate="show" custom={2} className="text-xl text-blue-100 font-medium mb-3 italic">
              "Your Health, Our Priority"
            </motion.p>

            <motion.p variants={fadeUp} initial="hidden" animate="show" custom={3} className="text-blue-200 text-base leading-relaxed mb-8 max-w-lg">
              Where compassionate care meets clinical excellence. Our dedicated specialists are here to guide you toward a healthier, fuller life — every step of the way.
            </motion.p>

            {/* Animated stat counters */}
            <motion.div variants={fadeUp} initial="hidden" animate="show" custom={4} className="flex flex-wrap gap-8 mb-8">
              {[
            { value: "500+", label: "Appointments" },
            { value: "2", label: "Specialists" },
            { value: "24/7", label: "Available" },
            { value: "100%", label: "Committed" },
        ].map((s) => (<div key={s.label} className="text-center" data-testid={`stat-${s.label.toLowerCase()}`}>
                  <p className="text-3xl font-bold text-white">{s.value}</p>
                  <p className="text-blue-300 text-xs font-medium mt-0.5">{s.label}</p>
                </div>))}
            </motion.div>

            {/* Trust badges */}
            <motion.div variants={fadeUp} initial="hidden" animate="show" custom={4.5} className="flex items-center gap-3 mb-8">
              <div className="flex">
                {[...Array(5)].map((_, i) => (<Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400"/>))}
              </div>
              <span className="text-blue-200 text-sm">Rated 5.0 by 500+ patients</span>
            </motion.div>

            {/* CTAs */}
            <motion.div variants={fadeUp} initial="hidden" animate="show" custom={5} className="flex flex-wrap gap-4">
              <motion.button whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }} onClick={() => setLocation("/appointment")} className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white font-bold rounded-2xl shadow-lg shadow-green-500/30 hover:shadow-green-500/50 transition-shadow" data-testid="hero-book-btn">
                Book Appointment <ArrowRight className="w-4 h-4"/>
              </motion.button>
              <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })} className="px-8 py-4 border-2 border-white/40 hover:border-white/70 text-white font-semibold rounded-2xl transition-all hover:bg-white/10 backdrop-blur-sm" data-testid="hero-contact-btn">
                Contact Us
              </motion.button>
            </motion.div>
          </div>

          {/* Right column — highlight cards */}
          <div className="hidden lg:flex flex-col gap-4">
            {highlights.map(({ icon: Icon, label, desc }, i) => (<motion.div key={label} initial={{ opacity: 0, x: 60 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 + i * 0.15, duration: 0.6, ease: "easeOut" }} whileHover={{ scale: 1.02, x: 6 }} className="flex items-center gap-5 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 cursor-default" data-testid={`highlight-${label.toLowerCase().replace(/\s+/g, "-")}`}>
                <div className="w-14 h-14 rounded-xl bg-white/20 border border-white/30 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-7 h-7 text-white"/>
                </div>
                <div>
                  <p className="text-white font-bold text-base">{label}</p>
                  <p className="text-blue-200 text-sm mt-0.5">{desc}</p>
                </div>
                <div className="ml-auto w-2 h-2 rounded-full bg-green-400 animate-pulse"/>
              </motion.div>))}

            {/* Patient card */}
            <motion.div initial={{ opacity: 0, x: 60 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.85, duration: 0.6 }} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5">
              <div className="flex items-center gap-3 mb-3">
                <div className="flex -space-x-2">
                  {["RS", "PM", "AK"].map((initials, i) => (<div key={i} className={`w-8 h-8 rounded-full border-2 border-blue-700 flex items-center justify-center text-xs font-bold text-white ${["bg-blue-500", "bg-green-500", "bg-purple-500"][i]}`}>
                      {initials}
                    </div>))}
                </div>
                <div>
                  <p className="text-white text-sm font-semibold">500+ Happy Patients</p>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (<Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400"/>))}
                  </div>
                </div>
              </div>
              <p className="text-blue-200 text-xs italic">"The best hospital in Bharuch , Gujarat. Caring doctors and excellent service."</p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll chevron */}
      <motion.button animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }} onClick={() => document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })} className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors" data-testid="scroll-down">
        <ChevronDown className="w-8 h-8"/>
      </motion.button>
    </section>);
}
