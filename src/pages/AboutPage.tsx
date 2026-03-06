import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Footer from "@/components/Footer";
import FlyingPlane from "@/components/FlyingPlane";

const AboutPage = () => {
  return (
    <div className="relative overflow-x-hidden">
      <FlyingPlane />
      <Navbar />
      <main className="pt-24">
        <About />
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
