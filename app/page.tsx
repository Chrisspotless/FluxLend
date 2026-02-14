import Image from "next/image";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import HowItWorks from "./components/HowItWorks";
import IndustriesStrip from "./components/IndustriesStrip";
import FAQ from "./components/FAQ";
import CheckoutFeatures from "./components/CheckoutFeatures";
import TrustAndSecurity from "./components/TrustAndSecurity";
import SolutionsShowcase from "./components/SolutionsShowcase";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="">
      <Header />
      <HeroSection />
      <HowItWorks />
      <IndustriesStrip />
      <FAQ/>
      <CheckoutFeatures />
      <TrustAndSecurity />
      <SolutionsShowcase />
      <Footer/>
    </div>
  );
}

