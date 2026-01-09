import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Packages from "@/components/Packages";
import CustomPackageBuilder from "@/components/CustomPackageBuilder";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FlyingPlane from "@/components/FlyingPlane";

const Index = () => {
  return (
    <div className="relative overflow-x-hidden">
      {/* Flying Plane Animation */}
      <FlyingPlane />
      
      {/* Navigation */}
      <Navbar />
      
      {/* Main Content */}
      <main>
        <Hero />
        <About />
        <Services />
        <Packages />
        <CustomPackageBuilder />
        <Contact />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
