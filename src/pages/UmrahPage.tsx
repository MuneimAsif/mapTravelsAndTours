import Navbar from "@/components/Navbar";
import RamadanUmrahSection from "@/components/RamadanUmrahSection";
import Footer from "@/components/Footer";
import FlyingPlane from "@/components/FlyingPlane";

const UmrahPage = () => {
  return (
    <div className="relative overflow-x-hidden">
      <FlyingPlane />
      <Navbar />
      <main className="pt-24">
        <RamadanUmrahSection />
      </main>
      <Footer />
    </div>
  );
};

export default UmrahPage;
