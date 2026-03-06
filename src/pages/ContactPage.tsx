import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FlyingPlane from "@/components/FlyingPlane";

const ContactPage = () => {
  return (
    <div className="relative overflow-x-hidden">
      <FlyingPlane />
      <Navbar />
      <main className="pt-24">
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
