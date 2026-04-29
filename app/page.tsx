import Navbar          from "@/components/Navbar";
import FranchiseBanner from "@/components/FranchiseBanner";
import Hero            from "@/components/Hero";
import Menu            from "@/components/Menu";
import About           from "@/components/About";
import Contact         from "@/components/Contact";
import Footer          from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <FranchiseBanner />
      <Navbar />
      <Hero />
      <Menu />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
