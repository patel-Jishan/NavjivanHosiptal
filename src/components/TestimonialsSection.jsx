import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";
import { useRef, useState } from "react";

const testimonials = [
    {
        name: "Ramesh Shah",
        location: "Ahmedabad, Gujarat",
        rating: 5,
        text: "Dr. Nikhilkumar Patel and his team saved my life. After my heart attack, their prompt response and expert care helped me recover fully and return to my family. Navjivan Hospital is a true blessing.",
        treatment: "Cardiac Care",
        initials: "RS",
        gradient: "from-blue-500 to-blue-700",
    },
    {
        name: "Priya Mehta",
        location: "Surat, Gujarat",
        rating: 5,
        text: "Dr. Riya Patel at Aura Dental Clinic gave me the smile I always dreamed of. The procedure was completely painless and the results are beyond what I imagined. Truly exceptional care!",
        treatment: "Cosmetic Dentistry",
        initials: "PM",
        gradient: "from-green-500 to-teal-600",
    },
    {
        name: "Ankit Desai",
        location: "Vadodara, Gujarat",
        rating: 5,
        text: "When my son had an accident, Navjivan's emergency team responded instantly. Their skill and compassion were extraordinary. I cannot thank them enough for the outstanding care provided.",
        treatment: "Emergency Care",
        initials: "AD",
        gradient: "from-orange-500 to-amber-600",
    },
    {
        name: "Sunita Joshi",
        location: "Rajkot, Gujarat",
        rating: 5,
        text: "The orthopedic team handled my knee replacement surgery with utmost precision. Recovery was smooth and the physiotherapy support was fantastic. Back to walking without pain!",
        treatment: "Orthopedics",
        initials: "SJ",
        gradient: "from-purple-500 to-violet-700",
    },
    {
        name: "Mihir Trivedi",
        location: "Gandhinagar, Gujarat",
        rating: 5,
        text: "World-class neurology care right here in Gujarat. Dr. Patel's diagnosis was spot-on and the treatment plan worked wonders. Grateful for the attentive nursing staff as well.",
        treatment: "Neurology",
        initials: "MT",
        gradient: "from-rose-500 to-pink-600",
    },
    {
        name: "Kavita Rao",
        location: "Bharuch, Gujarat",
        rating: 5,
        text: "My maternity experience at Navjivan was magical. The compassionate doctors and nurses made sure both me and my baby were comfortable every step of the way. Highly recommend!",
        treatment: "Maternity Care",
        initials: "KR",
        gradient: "from-cyan-500 to-sky-600",
    },
];

// Duplicate for seamless infinite scroll
const allCards = [...testimonials, ...testimonials];

function TestimonialCard({ t, i }) {
    return (
        <div
            className="flex-shrink-0 w-80 bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-7 relative overflow-hidden group mx-3"
            style={{ minWidth: "320px" }}
        >
            {/* Top gradient accent */}
            <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${t.gradient}`} />

            <Quote className="w-9 h-9 text-white/20 mb-4 group-hover:text-white/30 transition-colors" />

            <div className="flex mb-4">
                {[...Array(t.rating)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
            </div>

            <p className="text-blue-100 text-sm leading-relaxed mb-7 italic">"{t.text}"</p>

            <div className="flex items-center gap-3">
                <div
                    className={`w-11 h-11 rounded-xl bg-gradient-to-br ${t.gradient} border-2 border-white/20 flex items-center justify-center flex-shrink-0`}
                >
                    <span className="text-white font-bold text-sm">{t.initials}</span>
                </div>
                <div className="flex-1 min-w-0">
                    <p className="text-white font-semibold text-sm">{t.name}</p>
                    <p className="text-blue-300 text-xs">{t.location}</p>
                </div>
                <span className="text-xs bg-white/10 text-blue-200 px-2.5 py-1 rounded-full border border-white/15 whitespace-nowrap">
                    {t.treatment}
                </span>
            </div>
        </div>
    );
}

export default function TestimonialsSection() {
    const [paused, setPaused] = useState(false);

    return (
        <section
            id="testimonials"
            className="py-24 relative overflow-hidden"
            data-testid="testimonials-section"
        >
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-900" />
            <div
                className="absolute inset-0 opacity-10"
                style={{
                    backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255,255,255,0.3) 0%, transparent 40%), radial-gradient(circle at 75% 75%, rgba(99,179,237,0.3) 0%, transparent 40%)`,
                }}
            />

            {/* Floating shapes */}
            {[
                { size: 300, x: "5%", y: "10%" },
                { size: 200, x: "80%", y: "60%" },
                { size: 150, x: "50%", y: "5%" },
            ].map((c, i) => (
                <motion.div
                    key={i}
                    className="absolute rounded-full bg-white/5 pointer-events-none"
                    style={{ width: c.size, height: c.size, left: c.x, top: c.y }}
                    animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }}
                    transition={{ duration: 8 + i * 2, repeat: Infinity, ease: "easeInOut" }}
                />
            ))}

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="inline-block text-blue-200 font-semibold text-sm uppercase tracking-widest mb-3 bg-white/10 px-4 py-1.5 rounded-full border border-white/20">
                        Patient Stories
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        What Our <span className="text-green-400">Patients Say</span>
                    </h2>
                    <div className="w-16 h-1.5 bg-gradient-to-r from-green-400 to-blue-400 mx-auto rounded-full" />
                </motion.div>
            </div>

            {/* Auto-scroll marquee — full width, bleeds outside container */}
            <div
                className="relative w-full overflow-hidden"
                onMouseEnter={() => setPaused(true)}
                onMouseLeave={() => setPaused(false)}
            >
                {/* Left fade */}
                <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none bg-gradient-to-r from-blue-800 to-transparent" />
                {/* Right fade */}
                <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none bg-gradient-to-l from-indigo-900 to-transparent" />

                <div
                    className="flex"
                    style={{
                        animation: "marquee 35s linear infinite",
                        animationPlayState: paused ? "paused" : "running",
                        width: "max-content",
                    }}
                >
                    {allCards.map((t, i) => (
                        <TestimonialCard key={i} t={t} i={i} />
                    ))}
                </div>
            </div>

            {/* Pause hint */}
            <p className="text-center text-blue-300/60 text-xs mt-4 relative z-10">
                Hover to pause
            </p>

            {/* Bottom CTA */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="text-center mt-10"
                >
                    <p className="text-blue-200 text-sm mb-4">
                        Join thousands of patients who trust Navjivan Hospital
                    </p>
                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.97 }}
                        href="/appointment"
                        className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-blue-700 font-bold rounded-2xl shadow-lg hover:shadow-xl transition-shadow text-sm"
                    >
                        Book Your Appointment Today
                    </motion.a>
                </motion.div>
            </div>

            {/* Keyframe animation */}
            <style>{`
                @keyframes marquee {
                    0%   { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
            `}</style>
        </section>
    );
}