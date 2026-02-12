import Image from "next/image";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Benefits from "./components/Benefits";
import FAQ from "./components/FAQ";
import PersonalLoans from "./components/PersonalLoans";
import WhyFluxLend from "./components/WhyFluxLend";
import ProductShowcase from "./components/ProductShowcase";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="">
      <Header />
      <HeroSection />
      <Benefits />
      <FAQ/>
      <PersonalLoans />
      <WhyFluxLend />
      <ProductShowcase />
      <Footer/>
    </div>
  );
}

