import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import AboutLocation from "@/components/sections/AboutLocation";
import Menu from "@/components/sections/Menu";
import Testimonials from "@/components/sections/Testimonials";
import PickupProcess from "@/components/sections/PickupProcess";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <AboutLocation />
        <Menu />
        <Testimonials />
        <PickupProcess />
      </main>
      <Footer />
    </div>
  );
}
