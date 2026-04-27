import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Menu from "@/components/sections/Menu";
import Testimonials from "@/components/sections/Testimonials";
import PickupProcess from "@/components/sections/PickupProcess";
import Location from "@/components/sections/Location";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Menu />
        <Testimonials />
        <PickupProcess />
        <Location />
      </main>
      <Footer />
    </div>
  );
}
