import { useEffect, useRef, useState } from "react";
import { Cross, Calendar, Ambulance, Pill, HeartPulse } from "lucide-react";

/**
 * Hospital-site cursor.
 *
 * Har page/section apna "variant" bata sakta hai (icon + color), cursor
 * usi hisaab se badal jaata hai. Rotation hata diya hai — icon ab ek
 * fixed, natural tilt pe rehta hai, sirf position smoothly follow karta
 * hai. Isse professional/medical site jaisa lagta hai, gaming-cursor jaisa
 * nahi.
 *
 * Kaise use karein:
 * 1. App root me ek baar <CustomCursor /> daalein.
 * 2. Kisi bhi page/section me jo cursor badalna chahta hai, us wrapper pe
 *    data-cursor="appointment" (ya jo bhi variant) laga dein:
 *
 *      <section data-cursor="appointment">...</section>
 *      <div data-cursor="emergency">...</div>
 *
 * 3. Naya variant chahiye to niche VARIANTS object me add kar dein.
 */

const VARIANTS = {
  default: { Icon: Cross, color: "#991b1b" }, // cyan-600, general pages (medicine/hospital cross)
  appointment: { Icon: Calendar, color: "#059669" }, // emerald-600, booking pages
  emergency: { Icon: Ambulance, color: "#dc2626" }, // red-600, emergency section
  pharmacy: { Icon: Pill, color: "#7c3aed" }, // violet-600, pharmacy/medicine pages
  cardiology: { Icon: HeartPulse, color: "#e11d48" }, // rose-600, heart dept.
};

function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [variant, setVariant] = useState("default");

  const current = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });
  const cursorRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    const handleMove = (e) => {
      if (!isVisible) setIsVisible(true);

      target.current.x = e.clientX;
      target.current.y = e.clientY;

      const el = document.elementFromPoint(e.clientX, e.clientY);

      setIsHovering(
        !!el?.closest("button, a, [role='button'], input, select, textarea")
      );

      // Nearest ancestor with data-cursor decides the variant. Agar
      // koi bhi ancestor nahi milta to "default" pe wapas chala jaata hai.
      const section = el?.closest("[data-cursor]");
      setVariant(section?.getAttribute("data-cursor") || "default");
    };

    const handleLeave = () => setIsVisible(false);

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseleave", handleLeave);

    const prevCursor = document.body.style.cursor;
    document.body.style.cursor = "none";

    const lerp = (a, b, t) => a + (b - a) * t;

    const tick = () => {
      current.current.x = lerp(current.current.x, target.current.x, 0.3);
      current.current.y = lerp(current.current.y, target.current.y, 0.3);

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${current.current.x}px, ${current.current.y}px) translate(-50%, -50%) rotate(-20deg)`;
      }

      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseleave", handleLeave);
      document.body.style.cursor = prevCursor;
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [isVisible]);

  const { Icon, color } = VARIANTS[variant] || VARIANTS.default;

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 z-[9999] pointer-events-none hidden md:block transition-opacity duration-150"
      style={{ opacity: isVisible ? 1 : 0 }}
    >
      <Icon
        size={isHovering ? 46 : 38}
        strokeWidth={2}
        style={{ color, filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.25))" }}
        className="transition-[width,height] duration-150 ease-out"
      />
    </div>
  );
}

export default CustomCursor;