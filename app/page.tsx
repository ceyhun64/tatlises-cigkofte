import Navbar          from "@/components/Navbar";
import AnnouncementBar from "@/components/AnnouncementBar";
import Hero            from "@/components/Hero";
import StatsBar        from "@/components/StatsBar";
import Menu            from "@/components/Menu";
import WhyUs           from "@/components/WhyUs";
import About           from "@/components/About";
import Testimonials    from "@/components/Testimonials";
import Gallery         from "@/components/Gallery";
import Contact         from "@/components/Contact";
import Footer          from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <AnnouncementBar />
      <Navbar />
      <Hero />
      <StatsBar />
      <Menu />
      <WhyUs />
      <About />
      <Testimonials />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  );
}
