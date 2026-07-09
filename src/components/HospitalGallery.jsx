import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Activity,
  BedDouble,
  Building2,
  ChevronLeft,
  ChevronRight,
  ClipboardCheck,
  Droplets,
  Expand,
  Flame,
  HeartPulse,
  Hospital,
  Monitor,
  Pill,
  ShieldCheck,
  Siren,
  Sparkles,
  Stethoscope,
  TestTube2,
  Tv,
  Wind,
  X,
} from "lucide-react";

const imageBasePath = "/Gallery";

const galleryCategories = [
  {
    name: "ICU",
    description:
      "Modern Intensive Care Unit equipped with ventilators, patient monitors, oxygen support and emergency equipment.",
    // folder: "icu",
    images: ["icu1.jpeg","icu2.jpeg"],
  },
  {
    name: "Deluxe Room",
    description:
      "Premium deluxe rooms with comfortable beds, attached washroom, TV, AC and attendant seating.",
    // folder: "deluxe",
    images: ["Delux.jpeg"],
  },
  {
    name: "Special Room",
    description:
      "Private patient rooms designed for comfortable recovery, attentive care and a calm healing environment.",
    // folder: "special",
    images: ["superdelux.jpeg"],
  },
  {
    name: "Semi Special Ward",
    description:
      "Well-planned semi-special wards with clean beds, nursing support and essential medical facilities.",
    // folder: "semi-special",
    images: ["semispecial.JPG"],
  },
  {
    name: "General Ward",
    description:
      "Clean, functional and supervised general ward spaces for reliable inpatient care.",
    // folder: "general",
    images: ["General.jpeg"],
  },
  {
    name: "Emergency Room",
    description:
      "24x7 emergency room with two fully equipped beds, oxygen support and emergency monitoring.",
    // folder: "emergency",
    images: ["Emergency.jpeg"],
  },
  // {
  //   name: "Operation Theatre",
  //   description:
  //     "Sterile operation theatre supported by modern surgical equipment and trained clinical teams.",
  //   folder: "ot",
  //   images: ["ot1.jpg", "ot2.jpg", "ot3.jpg", "ot4.jpg"],
  // },
  {
    name: "Dr Nikhil Clinic",
    description:
      "Experienced Consulting Physician with over 10 years of expertise in Internal Medicine, Diabetes Management, Non-Invasive Cardiology, and Critical Care, delivering comprehensive and patient-centered healthcare.",
    // folder: "dental",
    images: ["nikhil2.JPG","nikhil1.JPG"],
  },
  {
    name: "Dr Riya Clinic",
    description:
      "Modern dental clinic with advanced equipment for all dental treatments.",
    // folder: "dental",
    images: ["riya2.JPG","riya1.JPG"],
  },
  {
    name: "Laboratory",
    description: "Blood & Urine Laboratory Collection Center.",
    // folder: "laboratory",
    images: ["Emergency.jpeg"],
  },
  // {
  //   name: "ECG & 2D Echo",
  //   description:
  //     "Cardiac diagnostic facilities for ECG and 2D Echo testing with clinical supervision.",
  //   folder: "ecg",
  //   images: ["ecg1.jpg", "ecg2.jpg", "echo1.jpg", "echo2.jpg"],
  // },
  {
    name: "Pharmacy",
    description: "24x7 Medical Store available for all medicines.",
    // folder: "pharmacy",
    images: ["Pharmacy.jpeg"],
  },
  {
    name: "Reception",
    description:
      "Welcoming reception and patient help desk for registration, guidance and support.",
    // folder: "reception",
    images: ["reception1.jpg", "reception2.jpg", "reception3.jpg"],
  },
  {
    name: "Hospital Building",
    description:
      "Accessible hospital building with organized clinical areas and patient-friendly facilities.",
    // folder: "building",
    images: [
      "building1.jpg",
      "building2.jpg",
      "building3.jpg",
      "building4.jpg",
      "building5.jpg",
    ],
  },
];

const facilities = [
  { icon: Hospital, label: "20 Bedded Fully Equipped & Functional Hospital" },
  { icon: Wind, label: "Central Oxygen System" },
  { icon: Activity, label: "Multifunctional Ventilators" },
  { icon: Monitor, label: "Patient Monitoring Systems" },
  { icon: Flame, label: "Fire Safety System" },
  { icon: HeartPulse, label: "ICU" },
  { icon: BedDouble, label: "Deluxe Rooms" },
  { icon: Tv, label: "Special Rooms" },
  { icon: BedDouble, label: "Semi-Special Rooms" },
  { icon: Hospital, label: "General Ward" },
  { icon: Siren, label: "Emergency Room (2 Bed)" },
  { icon: TestTube2, label: "Blood & Urine Laboratory Collection" },
  { icon: Activity, label: "ECG" },
  { icon: HeartPulse, label: "2D Echo" },
  { icon: ShieldCheck, label: "24x7 Emergency Services" },
  { icon: Pill, label: "24x7 Pharmacy" },
  { icon: Stethoscope, label: "Full Body Checkup" },
  { icon: ClipboardCheck, label: "Health Checkup Plans" },
  { icon: Droplets, label: "Mediclaim Facilities" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 34 },
  visible: { opacity: 1, y: 0 },
};

// function getImagePath(category, image) {
//   return `${imageBasePath}/${category.folder}/${image}`;
// }
function getImagePath(category, image) {
  return `${imageBasePath}/${image}`;
}

function GalleryImage({ src, alt, className = "" }) {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    setLoaded(false);
    setFailed(false);
  }, [src]);

  return (
    <div className={`relative overflow-hidden bg-slate-100 ${className}`}>
      {!loaded && !failed && (
        <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-slate-100 via-cyan-50 to-blue-50" />
      )}

      {failed ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-slate-50 via-cyan-50 to-blue-50 px-6 text-center">
          <Building2 className="mb-3 h-10 w-10 text-cyan-700" />
          <p className="text-sm font-semibold text-slate-700">{alt}</p>
          <p className="mt-1 text-xs text-slate-400">Image coming soon</p>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onLoad={() => setLoaded(true)}
          onError={() => setFailed(true)}
          className={`h-full w-full object-cover transition duration-700 group-hover:scale-110 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
        />
      )}
    </div>
  );
}

function GalleryCard({ category, index, onOpen }) {
  const coverImage = getImagePath(category, category.images[0]);

  return (
    <motion.article
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, delay: (index % 3) * 0.08, ease: "easeOut" }}
      whileHover={{ y: -8 }}
      className="group overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-lg shadow-slate-200/70 transition-all duration-300 hover:border-cyan-100 hover:shadow-2xl hover:shadow-cyan-100/70"
    >
      <button
        type="button"
        onClick={() => onOpen(index, 0)}
        className="relative block h-64 w-full cursor-pointer overflow-hidden text-left focus:outline-none focus-visible:ring-4 focus-visible:ring-cyan-200 sm:h-72 lg:h-64"
        aria-label={`View full image of ${category.name}`}
      >
        <GalleryImage src={coverImage} alt={category.name} className="h-full w-full" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-95" />
        <div className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/95 text-cyan-700 shadow-lg shadow-slate-900/10 transition duration-300 group-hover:scale-110">
          <Expand className="h-5 w-5" />
        </div>
        <div className="absolute bottom-4 left-4 rounded-full bg-white/95 px-3 py-1 text-xs font-bold uppercase tracking-widest text-blue-600 shadow-sm">
          {category.images.length} Photos
        </div>
      </button>

      <div className="p-6">
        <h3 className="text-xl font-bold text-slate-950">{category.name}</h3>
        <p className="mt-3 min-h-16 text-sm leading-6 text-slate-500">
          {category.description}
        </p>
        <button
          type="button"
          onClick={() => onOpen(index, 0)}
          className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-cyan-700 transition-colors hover:text-blue-600"
        >
          View Full Image
          <Expand className="h-4 w-4" />
        </button>
      </div>
    </motion.article>
  );
}

function FacilityCard({ icon: Icon, label, index }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-70px" }}
      transition={{ duration: 0.45, delay: (index % 5) * 0.04 }}
      whileHover={{ y: -5 }}
      className="group flex items-start gap-4 rounded-2xl border border-slate-100 bg-white p-5 shadow-md shadow-slate-200/60 transition-all duration-300 hover:border-cyan-100 hover:shadow-xl hover:shadow-cyan-100/60"
    >
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-700 transition duration-300 group-hover:bg-blue-600 group-hover:text-white">
        <Icon className="h-6 w-6" />
      </div>
      <p className="text-sm font-semibold leading-6 text-slate-700">{label}</p>
    </motion.div>
  );
}

function Lightbox({ categories, activeImage, onClose, onPrevious, onNext }) {
  const category = categories[activeImage.categoryIndex];
  const imageName = category.images[activeImage.imageIndex];
  const imageSrc = getImagePath(category, imageName);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") onPrevious();
      if (event.key === "ArrowRight") onNext();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose, onNext, onPrevious]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/95 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label={`${category.name} gallery lightbox`}
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 focus:outline-none focus-visible:ring-4 focus-visible:ring-white/30"
        aria-label="Close gallery"
      >
        <X className="h-6 w-6" />
      </button>

      <button
        type="button"
        onClick={onPrevious}
        className="absolute left-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white text-slate-900 shadow-xl transition hover:scale-105 focus:outline-none focus-visible:ring-4 focus-visible:ring-white/30"
        aria-label="Previous image"
      >
        <ChevronLeft className="h-7 w-7" />
      </button>

      <motion.div
        key={imageSrc}
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.25 }}
        className="relative flex max-h-[88vh] w-full max-w-6xl flex-col overflow-hidden rounded-3xl bg-white shadow-2xl"
      >
        <GalleryImage
          src={imageSrc}
          alt={`${category.name} ${activeImage.imageIndex + 1}`}
          className="h-[64vh] min-h-[360px] w-full bg-slate-100"
        />
        <div className="flex flex-col gap-2 border-t border-slate-100 bg-white p-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-cyan-700">
              {activeImage.imageIndex + 1} / {category.images.length}
            </p>
            <h3 className="mt-1 text-xl font-bold text-slate-950">{category.name}</h3>
          </div>
          <p className="text-sm text-slate-500">{imageName}</p>
        </div>
      </motion.div>

      <button
        type="button"
        onClick={onNext}
        className="absolute right-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white text-slate-900 shadow-xl transition hover:scale-105 focus:outline-none focus-visible:ring-4 focus-visible:ring-white/30"
        aria-label="Next image"
      >
        <ChevronRight className="h-7 w-7" />
      </button>
    </motion.div>
  );
}

export default function HospitalGallery() {
  const [activeImage, setActiveImage] = useState(null);

  const categories = useMemo(
    () =>
      galleryCategories.map((category) => ({
        ...category,
        images: category.images,
      })),
    [],
  );

  const openLightbox = (categoryIndex, imageIndex) => {
    setActiveImage({ categoryIndex, imageIndex });
  };

  const showPrevious = () => {
    setActiveImage((current) => {
      const category = categories[current.categoryIndex];
      return {
        ...current,
        imageIndex:
          current.imageIndex === 0 ? category.images.length - 1 : current.imageIndex - 1,
      };
    });
  };

  const showNext = () => {
    setActiveImage((current) => {
      const category = categories[current.categoryIndex];
      return {
        ...current,
        imageIndex:
          current.imageIndex === category.images.length - 1 ? 0 : current.imageIndex + 1,
      };
    });
  };

  return (
    <section id="hospital-gallery" className="w-full overflow-hidden bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-cyan-50 px-4 py-2 text-xs font-bold uppercase tracking-widest text-cyan-700">
            <Sparkles className="h-4 w-4" />
            Premium Facilities
          </span>
          <h2 className="mt-5 text-4xl font-extrabold text-slate-950 sm:text-5xl">
            Hospital <span className="text-blue-600">Gallery</span>
          </h2>
          <div className="mx-auto mt-5 h-1.5 w-20 rounded-full bg-gradient-to-r from-cyan-700 to-blue-600" />
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-500">
            Explore our modern infrastructure, advanced medical facilities,
            emergency services, and patient care environment.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-7 md:grid-cols-2 xl:grid-cols-3">
          {categories.map((category, index) => (
            <GalleryCard
              key={category.name}
              category={category}
              index={index}
              onOpen={openLightbox}
            />
          ))}
        </div>

        <div className="mt-24 rounded-[2rem] bg-slate-50 px-4 py-14 sm:px-8 lg:px-10">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="mx-auto mb-10 max-w-2xl text-center"
          >
            <span className="text-sm font-bold uppercase tracking-widest text-cyan-700">
              Complete Care Infrastructure
            </span>
            <h3 className="mt-3 text-3xl font-extrabold text-slate-950 sm:text-4xl">
              Hospital Facilities
            </h3>
            <p className="mt-4 text-sm leading-7 text-slate-500">
              Essential clinical, emergency, diagnostic and patient-care
              facilities available under one roof.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {facilities.map((facility, index) => (
              <FacilityCard key={facility.label} {...facility} index={index} />
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {activeImage && (
          <Lightbox
            categories={categories}
            activeImage={activeImage}
            onClose={() => setActiveImage(null)}
            onPrevious={showPrevious}
            onNext={showNext}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
