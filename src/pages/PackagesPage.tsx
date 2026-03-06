import Navbar from "@/components/Navbar";
import Packages from "@/components/Packages";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import FlyingPlane from "@/components/FlyingPlane";

const PackagesPage = () => {
  return (
    <div className="relative overflow-x-hidden">
      <FlyingPlane />
      <Navbar />
      <main className="pt-24">
        <Packages />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default PackagesPage;
