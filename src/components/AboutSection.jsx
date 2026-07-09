import {
  CheckCircle, Heart, Shield, Users, Award,
  BedDouble, Stethoscope, Zap, Wind, Flame,
  Building2, AlertCircle, FlaskConical, Activity,
  Clock, ShoppingBag, ClipboardList, CreditCard
} from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const whyChooseUs = [
  { icon: Heart,  title: "Patient-First Care",    desc: "Every decision guided by the well-being and comfort of our patients.",        color: "from-red-500 to-red-600",    bg: "bg-red-50"    },
  { icon: Shield, title: "Advanced Technology",   desc: "State-of-the-art medical equipment for accurate, modern treatment.",           color: "from-blue-500 to-blue-600",  bg: "bg-blue-50"   },
  { icon: Users,  title: "Expert Specialists",    desc: "Board-certified doctors with decades of combined experience.",                 color: "from-green-500 to-green-600",bg: "bg-green-50"  },
  { icon: Award,  title: "Accredited Facility",   desc: "Meeting the highest standards of healthcare quality and safety.",              color: "from-purple-500 to-purple-600",bg:"bg-purple-50" },
];

const values = [
  "Compassionate and respectful patient care",
  "Transparent communication at every step",
  "Continuous medical education and innovation",
  "Affordable, accessible healthcare for all",
  "State-of-the-art diagnostic facilities",
  "Multidisciplinary approach to complex cases",
];

const facilities = [
  {
    icon: BedDouble,
    title: "20-Bed Hospital & Dental Clinic",
    desc: "Fully equipped & functional hospital with modern dental clinic, central oxygen system, multifunctional ventilators & patient monitors, and advanced fire safety system.",
    color: "from-blue-500 to-blue-600",
    accent: "blue",
  },
  {
    icon: Building2,
    title: "Ward Rooms",
    desc: "ICU, Deluxe, Special, Semi-Special & General Ward (Day Care) rooms designed for patient comfort and recovery.",
    color: "from-teal-500 to-teal-600",
    accent: "teal",
  },
  {
    icon: AlertCircle,
    title: "Emergency Room",
    desc: "Dedicated 2-bed emergency room with round-the-clock readiness for critical and urgent medical cases.",
    color: "from-red-500 to-red-600",
    accent: "red",
  },
  {
    icon: FlaskConical,
    title: "Investigations",
    desc: "In-house blood & urine laboratory sample collection for fast, reliable diagnostic results.",
    color: "from-violet-500 to-violet-600",
    accent: "violet",
  },
  {
    icon: Activity,
    title: "ECG & 2D Echo",
    desc: "Advanced cardiac diagnostics including ECG and 2D echocardiography for accurate heart health assessment.",
    color: "from-pink-500 to-pink-600",
    accent: "pink",
  },
  {
    icon: Clock,
    title: "24×7 Emergency Services",
    desc: "Round-the-clock emergency medical care available every day of the year — because health never waits.",
    color: "from-orange-500 to-orange-600",
    accent: "orange",
  },
  {
    icon: ShoppingBag,
    title: "24×7 Medical Store",
    desc: "On-site pharmacy open 24 hours a day, 7 days a week, ensuring medicines are always within reach.",
    color: "from-green-500 to-green-600",
    accent: "green",
  },
  {
    icon: ClipboardList,
    title: "Health Checkup Plans",
    desc: "Comprehensive full body checkup and customized health checkup plans for proactive wellness management.",
    color: "from-cyan-500 to-cyan-600",
    accent: "cyan",
  },
  {
    icon: CreditCard,
    title: "Mediclaim Facilities",
    desc: "Cashless mediclaim and insurance claim assistance available for a hassle-free treatment experience.",
    color: "from-indigo-500 to-indigo-600",
    accent: "indigo",
  },
];

function AnimatedSection({ children, className = "" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const facilityRef = useRef(null);
  const facilityInView = useInView(facilityRef, { once: true, margin: "-60px" });

  return (
    <section id="about" className="py-24 bg-white overflow-hidden" data-testid="about-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3 bg-blue-50 px-4 py-1.5 rounded-full">
            About Us
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            A Legacy of <span className="text-blue-600">Healing</span>
          </h2>
          <div className="w-16 h-1.5 bg-gradient-to-r from-blue-500 to-green-500 mx-auto rounded-full" />
        </AnimatedSection>

        {/* Introduction */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-24">
          <AnimatedSection>
            <div className="relative">
              <span className="absolute -top-8 -left-4 text-9xl font-black text-blue-50 select-none pointer-events-none">
                NH
              </span>
              <h3 className="relative text-2xl font-bold text-gray-900 mb-5">
                Gujarat's Most Trusted Multi-Speciality Hospital
              </h3>
              <p className="text-gray-500 leading-relaxed mb-4">
                Navjivan Hospital is a premier healthcare institution in Gujarat, India, committed to serving the community with unwavering dedication to clinical excellence, patient safety, and compassionate care.
              </p>
              <p className="text-gray-500 leading-relaxed mb-7">
                From routine consultations to complex cardiac and dental procedures, we bring together the best medical minds, cutting-edge technology, and a patient-first philosophy to deliver healthcare that truly transforms lives.
              </p>
              <ul className="space-y-3">
                {values.map((value, i) => (
                  <motion.li
                    key={value}
                    ref={ref}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.1 + i * 0.07, duration: 0.4 }}
                    className="flex items-center gap-3 text-sm text-gray-600"
                  >
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    {value}
                  </motion.li>
                ))}
              </ul>
            </div>
          </AnimatedSection>

          <div className="space-y-5">
            <AnimatedSection>
              <motion.div
                whileHover={{ y: -4, boxShadow: "0 20px 40px rgba(59,130,246,0.15)" }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl p-7 overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-20 translate-x-20" />
                <div className="relative z-10">
                  <div className="w-11 h-11 rounded-xl bg-white/20 flex items-center justify-center mb-4">
                    <Heart className="w-5 h-5 text-white fill-white" />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">Our Mission</h4>
                  <p className="text-blue-100 text-sm leading-relaxed">
                    To provide exceptional, patient-centered healthcare that improves quality of life for individuals and families in Gujarat and beyond — with compassion, affordability, and innovation.
                  </p>
                </div>
              </motion.div>
            </AnimatedSection>

            <AnimatedSection>
              <motion.div
                whileHover={{ y: -4, boxShadow: "0 20px 40px rgba(22,163,74,0.15)" }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative bg-gradient-to-br from-green-600 to-green-700 rounded-3xl p-7 overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-20 translate-x-20" />
                <div className="relative z-10">
                  <div className="w-11 h-11 rounded-xl bg-white/20 flex items-center justify-center mb-4">
                    <Shield className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">Our Vision</h4>
                  <p className="text-green-100 text-sm leading-relaxed">
                    To be Gujarat's most trusted healthcare provider — recognized for clinical excellence, technological advancement, and the life-changing impact we have on every patient we serve.
                  </p>
                </div>
              </motion.div>
            </AnimatedSection>
          </div>
        </div>

        {/* ── FACILITIES SECTION ── */}
        <AnimatedSection className="text-center mb-10">
          <span className="inline-block text-green-600 font-semibold text-sm uppercase tracking-widest mb-3 bg-green-50 px-4 py-1.5 rounded-full">
            Our Infrastructure
          </span>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            World-Class <span className="text-blue-600">Facilities</span>
          </h3>
          <p className="text-gray-400 text-sm max-w-xl mx-auto">
            Every corner of Navjivan Hospital is built to deliver the best possible care — equipped, staffed, and ready.
          </p>
          <div className="w-16 h-1.5 bg-gradient-to-r from-blue-500 to-green-500 mx-auto rounded-full mt-4" />
        </AnimatedSection>

        <div ref={facilityRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-24">
          {facilities.map(({ icon: Icon, title, desc, color }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 40 }}
              animate={facilityInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.05 + i * 0.08, duration: 0.5 }}
              whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(0,0,0,0.09)" }}
              className="flex gap-4 p-6 rounded-3xl border border-gray-100 bg-white cursor-default transition-shadow"
            >
              <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center flex-shrink-0 shadow-md`}>
                <Icon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-sm mb-1">{title}</h4>
                <p className="text-gray-400 text-xs leading-relaxed">{desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Why Choose Us */}
        <AnimatedSection className="text-center mb-10">
          <h3 className="text-3xl font-bold text-gray-900">
            Why Choose <span className="text-blue-600">Navjivan Hospital?</span>
          </h3>
        </AnimatedSection>

        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {whyChooseUs.map(({ icon: Icon, title, desc, color }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.1, duration: 0.5 }}
              whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
              className="text-center p-7 rounded-3xl border border-gray-100 bg-white cursor-default transition-shadow"
              data-testid={`why-choose-${title.toLowerCase().replace(/\s+/g, "-")}`}
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center mx-auto mb-5 shadow-lg`}>
                <Icon className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2 text-base">{title}</h4>
              <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}