import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CategoryShowcase from "@/components/CategoryShowcase";
import CollectionShowcase from "@/components/CollectionShowcase";
import TrustSections from "@/components/TrustSections";
import ContactSection from "@/components/ContactSection";
import ProcessSection from "@/components/ProcessSection";
import CorporateSection from "@/components/CorporateSection";
import InstagramSection from "@/components/InstagramSection";
import BrandedSection from "@/components/BrandedSection";
import ApparelSection from "@/components/ApparelSection";
import WeddingReturnSection from "@/components/WeddingReturnSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import TechnicalDetails from "@/components/TechnicalDetails";
import QuickCategories from "@/components/QuickCategories";

export default function Home() {
  return (
    <main className="relative bg-brand-ivory">
      <WhatsAppButton />
      <Navbar />
      <QuickCategories />
      <Hero />
      <CategoryShowcase />
      <ProcessSection />
      <TechnicalDetails />
      <WeddingReturnSection />
      <ApparelSection />
      <CorporateSection />
      <BrandedSection />
      <CollectionShowcase />
      <TrustSections />
      <InstagramSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
