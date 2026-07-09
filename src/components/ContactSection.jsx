import { MapPin, Phone, Mail, Clock, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
const contactInfo = [
    {
        icon: MapPin,
        title: "Our Location",
        lines: ["SECOND FLOOR, Skyline Business Hub, Old Relief Cinema Complex, Panchbatti, Station Road Bharuch, Gujarat, 892001"],
        gradient: "from-blue-500 to-blue-600",
        bg: "bg-blue-50",
    },
    {
        icon: Phone,
        title: "Phone Numbers",
        lines: ["General: +91 8866626109", "Emergency: +91 8866626129"],
        gradient: "from-green-500 to-green-600",
        bg: "bg-green-50",
    },
    {
        icon: Mail,
        title: "Email Address",
        lines: ["navjivan.aura@gmail.com"],
        gradient: "from-orange-500 to-orange-600",
        bg: "bg-orange-50",
    },
    {
        icon: Clock,
        title: "Working Hours",
        lines: ["Mon – Sat: 10:00 AM – 7:00 PM", "Emergency: 24/7 Available"],
        gradient: "from-purple-500 to-purple-600",
        bg: "bg-purple-50",
    },
];
export default function ContactSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-80px" });
    return (<section id="contact" className="py-24 bg-gray-50 overflow-hidden" data-testid="contact-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="inline-block text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3 bg-blue-50 px-4 py-1.5 rounded-full">Get In Touch</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Contact <span className="text-blue-600">Us</span>
          </h2>
          <div className="w-16 h-1.5 bg-gradient-to-r from-blue-500 to-green-500 mx-auto rounded-full mb-6"/>
          <p className="text-gray-400 max-w-xl mx-auto text-sm leading-relaxed">
            Reach out any time. Our team is always ready to assist you with appointments, inquiries, or emergency care.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {contactInfo.map(({ icon: Icon, title, lines, gradient, bg }, i) => (<motion.div key={title} initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: i * 0.1, duration: 0.5 }} whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(0,0,0,0.08)" }} className="bg-white rounded-2xl p-6 border border-gray-100 transition-shadow" data-testid={`contact-${title.toLowerCase().replace(/\s+/g, "-")}`}>
              <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-4 shadow-sm`}>
                <Icon className="w-5 h-5 text-white"/>
              </div>
              <h3 className="font-bold text-gray-900 mb-2.5 text-sm">{title}</h3>
              {lines.map((line, j) => (<p key={j} className="text-sm text-gray-500 leading-relaxed">{line}</p>))}
            </motion.div>))}
        </div>

        {/* Map */}
        <motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6, delay: 0.2 }}
  className="rounded-3xl overflow-hidden shadow-md border border-gray-100"
>
  <div className="bg-white border-b border-gray-100 px-6 py-4 flex items-center justify-between">
    <div>
      <h3 className="font-bold text-gray-900">Find Us on the Map</h3>
      <p className="text-sm text-gray-400">
        Skyline Business Hub, Panchbatti, Bharuch, Gujarat
      </p>
    </div>

    <a
      href="https://maps.google.com/?q=Skyline+Business+Hub+Panchbatti+Bharuch+Gujarat"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 text-sm text-blue-600 hover:text-blue-700 font-medium bg-blue-50 px-4 py-2 rounded-xl transition-colors"
      data-testid="open-in-maps"
    >
      <ExternalLink className="w-3.5 h-3.5" />
      Open in Maps
    </a>
  </div>

  <iframe
    title="Navjivan Hospital Location"
    src="https://maps.google.com/maps?q=Skyline%20Business%20Hub%20Panchbatti%20Station%20Road%20Bharuch%20Gujarat&t=&z=15&ie=UTF8&iwloc=&output=embed"
    width="100%"
    height="400"
    style={{ border: 0, display: "block" }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    data-testid="map-embed"
  />
</motion.div>
      </div>
    </section>);
}
