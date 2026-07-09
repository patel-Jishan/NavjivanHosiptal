import { GraduationCap, Star, Building2, Phone, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { useLocation } from "wouter";
// const doctors = [
//     {
//         name: "Dr.  Nikhil patel ",
//         specialty: "Cardiologist",
//         clinic: "Navjivan Hospital",
//         description: "A leading cardiac specialist with over 10 years of expertise in diagnosing and treating complex heart conditions. Known for his compassionate approach and outstanding surgical outcomes.",
//         qualifications: ["MBBS", "MD (Cardiology)", "DM (Cardiology)"],
//         experience: "10+ Years",
//         rating: 5,
//         patients: "2,000+",
//         initials: "NP",
//         gradient: "from-blue-500 via-blue-600 to-indigo-700",
//         accentColor: "blue",
//     },
//     {
//         name: "Dr. Riya Patel",
//         specialty: "Dental surgeon Root canal and implant specialist",
//         clinic: "Aura Dental Clinic",
//         description: "An expert in transformative dental care and cosmetic dentistry, helping patients achieve confident, radiant smiles through gentle, state-of-the-art dental procedures.",
//         qualifications: ["BDS", "MDS (Cosmetic Dentistry)", "Implant Certified"],
//         experience: "10 Years",
//         rating: 5,
//         patients: "1,500+",
//         initials: "RP",
//         gradient: "from-teal-500 via-green-600 to-emerald-700",
//         accentColor: "green",
//     },
// ];
const doctors = [
  {
    name: "Dr. Nikhil B. Patel",
        image: "/images/Nikhil.jpeg",
    specialty:
      "MD Medicine, Non-Invasive Cardiologist, Diabetologist & Critical Care Specialist",
    clinic: "Navjivan Hospital Diabetes Clinic & ICU",
    description:
      "Experienced Consulting Physician with over 10 years of expertise in Internal Medicine, Diabetes Management, Non-Invasive Cardiology and Critical Care. Dedicated to providing comprehensive, patient-centered healthcare and advanced treatment solutions.",
    qualifications: [
      "MBBS",
      "MD Medicine",
      "Consulting Physician",
      "Fellow R.L.A (UK)",
    ],
    experience: "10+ Years",
    rating: 5,
    patients: "60k+",
    initials: "NP",
    gradient: "from-blue-500 via-blue-600 to-indigo-700",
    accentColor: "blue",
  },
  {
    name: "Dr. Riya N. Patel",
     image: "/images/riya.jpeg",
    specialty: "Dental Surgeon, Root Canal & Implant Specialist",
    clinic: "Aura Dental Care & Implant Clinic",
    description:
      "Dental Surgeon with 10 years of experience specializing in Root Canal Treatment, Dental Implants and advanced dental care. Committed to delivering comfortable, high-quality dental treatments and creating confident smiles.",
    qualifications: [
      "BDS",
      "Dental Surgeon",
      "Root Canal Specialist",
      "Implant Specialist",
    ],
    experience: "10 Years",
    rating: 5,
    patients: "20k+",
    initials: "RP",
    gradient: "from-teal-500 via-green-600 to-emerald-700",
    accentColor: "green",
  },
];
export default function DoctorsSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-80px" });
    const [, setLocation] = useLocation();
    return (<section id="doctors" className="py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden" data-testid="doctors-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="inline-block text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3 bg-blue-50 px-4 py-1.5 rounded-full">Our Team</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Meet Our <span className="text-blue-600">Specialists</span>
          </h2>
          <div className="w-16 h-1.5 bg-gradient-to-r from-blue-500 to-green-500 mx-auto rounded-full mb-6"/>
          <p className="text-gray-400 max-w-xl mx-auto text-sm leading-relaxed">
            Our board-certified specialists combine deep clinical expertise with genuine care to deliver outcomes that transform lives.
          </p>
        </motion.div>

        {/* Doctor Cards */}
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {doctors.map((doctor, i) => (<motion.div key={doctor.name} initial={{ opacity: 0, y: 60 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: i * 0.2, duration: 0.6, ease: "easeOut" }} whileHover={{ y: -8, boxShadow: "0 30px 60px rgba(0,0,0,0.12)" }} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 group transition-shadow" data-testid={`doctor-card-${doctor.name.toLowerCase().replace(/\s+/g, "-")}`}>
              {/* Banner */}
              <div className={`bg-gradient-to-br ${doctor.gradient} p-8 relative overflow-hidden`}>
                {/* Decorative rings */}
                <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full border-[30px] border-white/10"/>
                <div className="absolute -bottom-10 -left-10 w-36 h-36 rounded-full border-[20px] border-white/10"/>

                <div className="relative z-10 flex items-center gap-5">
                  {/* Avatar */}
                  <div className="relative">
<div className="w-32 h-32 rounded-2xl overflow-hidden border-4 border-white/40 shadow-xl bg-white">
  <img
    src={doctor.image}
    alt={doctor.name}
    className="w-full h-full object-cover object-top"
  />
</div>
  <div className="absolute -bottom-2 -right-2 w-6 h-6 rounded-full bg-green-400 border-2 border-white" />
</div>
                  <div>
                    <h3 className="text-xl font-bold text-white leading-tight">{doctor.name}</h3>
                    <p className="text-white/80 text-sm mt-1 flex items-center gap-1.5">
                      <GraduationCap className="w-3.5 h-3.5"/>
                      {doctor.specialty}
                    </p>
                    {doctor.clinic !== "Navjivan Hospital" && (<p className="text-white/70 text-xs mt-1 flex items-center gap-1.5">
                        <Building2 className="w-3 h-3"/>
                        {doctor.clinic}
                      </p>)}
                    {/* Stars */}
                    <div className="flex gap-0.5 mt-2">
                      {[...Array(doctor.rating)].map((_, j) => (<Star key={j} className="w-3.5 h-3.5 fill-yellow-300 text-yellow-300"/>))}
                    </div>
                  </div>
                </div>

                {/* Mini stats */}
                <div className="relative z-10 flex gap-6 mt-5 pt-4 border-t border-white/20">
                  <div>
                    <p className="text-white font-bold text-lg">{doctor.experience}</p>
                    <p className="text-white/60 text-xs">Experience</p>
                  </div>
                  <div>
                    <p className="text-white font-bold text-lg">{doctor.patients}</p>
                    <p className="text-white/60 text-xs">Patients Served</p>
                  </div>
                </div>
              </div>

              {/* Details */}
              <div className="p-6">
                <p className="text-gray-500 text-sm leading-relaxed mb-5">{doctor.description}</p>

                <div className="mb-5">
                  <p className="text-xs text-gray-400 uppercase tracking-widest font-semibold mb-2.5">Qualifications</p>
                  <div className="flex flex-wrap gap-2">
                    {doctor.qualifications.map((q) => (<span key={q} className="text-xs bg-blue-50 text-blue-700 px-3 py-1 rounded-full font-semibold border border-blue-100">
                        {q}
                      </span>))}
                  </div>
                </div>

                <div className="flex gap-3">
                  <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }} onClick={() => setLocation("/appointment")} className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-sm font-semibold rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all shadow-sm" data-testid={`book-with-${doctor.initials.toLowerCase()}`}>
                    <Calendar className="w-4 h-4"/> Book Appointment
                  </motion.button>
                  <motion.a whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }} href="tel:+911800123456" className="flex items-center justify-center gap-2 px-4 py-2.5 border border-gray-200 text-gray-600 text-sm font-semibold rounded-xl hover:border-blue-300 hover:text-blue-600 transition-colors" data-testid={`call-${doctor.initials.toLowerCase()}`}>
                    <Phone className="w-4 h-4"/>
                  </motion.a>
                </div>
              </div>
            </motion.div>))}
        </div>
      </div>
    </section>);
}
