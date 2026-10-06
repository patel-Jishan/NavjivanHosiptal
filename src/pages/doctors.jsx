import Navbar from "@/components/Navbar";
import DoctorsSection from "@/components/DoctorsSection";

export default function DoctorsPage() {
  return (
    <>
      <Navbar />

      <main className="pt-24">
        <DoctorsSection />
      </main>
    </>
  );
}