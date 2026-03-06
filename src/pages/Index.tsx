import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HomeAboutPreview from "@/components/HomeAboutPreview";
import HomeServicesPreview from "@/components/HomeServicesPreview";
import HomePackagesPreview from "@/components/HomePackagesPreview";
import HomeRamadanPreview from "@/components/HomeRamadanPreview";
import HomeTrustBanner from "@/components/HomeTrustBanner";
import HomeCTA from "@/components/HomeCTA";
import Footer from "@/components/Footer";
import FlyingPlane from "@/components/FlyingPlane";

const Index = () => {
  return (
    <div className="relative overflow-x-hidden">
      <FlyingPlane />
      <Navbar />
      <main>
        <Hero />
        <HomeAboutPreview />
        <HomeServicesPreview />
        <HomePackagesPreview />
        <HomeTrustBanner />
        <HomeRamadanPreview />
        <HomeCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
