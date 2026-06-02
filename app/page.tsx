import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Diensten from "@/components/Diensten";
import Reviews from "@/components/Reviews";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Diensten />
        <Reviews />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
