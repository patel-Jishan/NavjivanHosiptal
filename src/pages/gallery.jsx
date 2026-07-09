import Navbar from "@/components/Navbar";
import HospitalGallery from "@/components/HospitalGallery";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <div className="bg-gradient-to-r from-cyan-700 to-blue-700 pb-12 pt-32" />
        <HospitalGallery />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
