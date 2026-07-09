import { MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
export default function WhatsAppButton() {
    const [hovered, setHovered] = useState(false);
    return (<div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
      {/* Tooltip */}
      <AnimatePresence>
        {hovered && (<motion.div initial={{ opacity: 0, y: 8, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 8, scale: 0.95 }} transition={{ duration: 0.2 }} className="bg-gray-900 text-white text-xs px-3 py-2 rounded-xl shadow-xl whitespace-nowrap">
            Chat with us on WhatsApp
          </motion.div>)}
      </AnimatePresence>

      {/* Pulse ring */}
      <div className="relative">
        <motion.div animate={{ scale: [1, 1.6, 1], opacity: [0.5, 0, 0.5] }} transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }} className="absolute inset-0 rounded-full bg-green-400 pointer-events-none"/>
        <motion.a href="https://wa.me/911800123456?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20Navjivan%20Hospital%20services." target="_blank" rel="noopener noreferrer" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} whileHover={{ scale: 1.1, y: -2 }} whileTap={{ scale: 0.95 }} className="relative flex items-center gap-2.5 bg-green-500 hover:bg-green-600 text-white px-5 py-3.5 rounded-full shadow-xl shadow-green-500/30 transition-colors" data-testid="whatsapp-button" aria-label="Chat on WhatsApp">
          <MessageCircle className="w-5 h-5 fill-white"/>
          <span className="text-sm font-bold">Chat Now</span>
        </motion.a>
      </div>
    </div>);
}
