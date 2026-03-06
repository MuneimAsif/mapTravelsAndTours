import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
import FlyingPlane from "@/components/FlyingPlane";

const ServicesPage = () => {
  return (
    <div className="relative overflow-x-hidden">
      <FlyingPlane />
      <Navbar />
      <main className="pt-24">
        <Services />
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;
