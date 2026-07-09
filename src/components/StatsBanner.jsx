import { Users, Award, Clock, Star } from "lucide-react";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
const stats = [
    { icon: Users, value: "5,000+", label: "Patients Treated", color: "text-blue-600", bg: "bg-blue-50" },
    { icon: Award, value: "2", label: "Expert Specialists", color: "text-green-600", bg: "bg-green-50" },
    { icon: Clock, value: "24/7", label: "Emergency Care", color: "text-orange-600", bg: "bg-orange-50" },
    { icon: Star, value: "5.0", label: "Patient Rating", color: "text-purple-600", bg: "bg-purple-50" },
];
export default function StatsBanner() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-60px" });
    return (<section className="py-10 bg-white border-b border-gray-100" ref={ref}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map(({ icon: Icon, value, label, color, bg }, i) => (<motion.div key={label} initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: i * 0.1, duration: 0.5 }} whileHover={{ y: -4, boxShadow: "0 12px 30px rgba(0,0,0,0.07)" }} className="flex items-center gap-4 p-5 rounded-2xl border border-gray-100 bg-white transition-shadow">
              <div className={`w-12 h-12 rounded-xl ${bg} flex items-center justify-center flex-shrink-0`}>
                <Icon className={`w-6 h-6 ${color}`}/>
              </div>
              <div>
                <p className={`text-2xl font-black ${color}`}>{value}</p>
                <p className="text-gray-500 text-xs font-medium">{label}</p>
              </div>
            </motion.div>))}
        </div>
      </div>
    </section>);
}
