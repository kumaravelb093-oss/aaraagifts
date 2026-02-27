import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProcessSection from "@/components/ProcessSection";
import TrustSections from "@/components/TrustSections";

export default function AboutPage() {
    return (
        <main className="relative bg-brand-ivory min-h-screen">
            <Navbar />
            <div className="container mx-auto px-6 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center mb-32">
                    <div>
                        <span className="text-xs uppercase tracking-[0.5em] text-brand-brown font-bold mb-6 block">Our Legacy</span>
                        <h1 className="text-5xl md:text-8xl font-serif text-brand-brown mb-12 leading-[0.95]">The Aaraa <br /> <span className="italic text-brand-copper">Philosophy.</span></h1>
                        <p className="text-brand-espresso/60 text-lg md:text-xl font-light leading-relaxed mb-8">
                            Born from a passion for exquisite detailing and the age-old tradition of gift-giving, Aaraa is a modern sanctuary for those who seek to leave a lasting impression. We view gifting not as a transaction, but as a bridge between souls.
                        </p>
                        <p className="text-brand-espresso/60 text-lg font-light leading-relaxed italic mb-12">
                            "We believe that a gift is a physical manifestation of a relationship—a moment in time captured in a box."
                        </p>

                        <div className="grid grid-cols-2 gap-12 border-t border-brand-brown/10 pt-12">
                            <div>
                                <h4 className="text-2xl font-serif text-brand-brown mb-4">Artisanal Roots</h4>
                                <p className="text-brand-espresso/50 text-sm font-light">Every Aaraa box begins as a drawing, crafted with materials that tell a story of heritage and quality.</p>
                            </div>
                            <div>
                                <h4 className="text-2xl font-serif text-brand-brown mb-4">Precision Craft</h4>
                                <p className="text-brand-espresso/50 text-sm font-light">We balance weight, texture, and scent to ensure the tactile experience is as memorable as the visual one.</p>
                            </div>
                        </div>
                    </div>
                    <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl group">
                        <img
                            src="/assets/images/hero/branded.jpg"
                            alt="The Aaraa Studio"
                            className="object-cover w-full h-full transition-transform duration-[3s] group-hover:scale-110"
                        />
                        {/* Removed darkening overlay for clarity */}
                    </div>
                </div>

                <div className="bg-white rounded-[3rem] p-16 md:p-24 shadow-2xl border border-brand-brown/5 mb-32 relative overflow-hidden">
                    <div className="absolute top-10 right-10 w-[200px] h-[200px] opacity-[0.03] pointer-events-none">
                        <img src="/aaraa-logo-transparent.png" alt="" className="w-full h-full object-contain" />
                    </div>
                    <div className="max-w-4xl relative z-10">
                        <span className="text-[10px] uppercase tracking-[0.6em] text-brand-copper font-bold mb-8 block">The Standard</span>
                        <h2 className="text-4xl md:text-6xl font-serif text-brand-brown mb-12">Engineering the <br /><span className="italic">Gifting Experience.</span></h2>
                        <div className="space-y-12">
                            <div className="flex flex-col md:flex-row gap-8 items-start">
                                <span className="text-5xl font-serif text-brand-copper/20">01</span>
                                <div>
                                    <h3 className="text-2xl font-serif text-brand-brown mb-4">Material Provenance</h3>
                                    <p className="text-brand-espresso/60 font-light leading-relaxed">
                                        We source only the finest sustainable papers, rich linens, and untreated woods. Our commitment to quality means tracking every material to its source, ensuring ethical production and unmatched tactile luxury.
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-col md:flex-row gap-8 items-start">
                                <span className="text-5xl font-serif text-brand-copper/20">02</span>
                                <div>
                                    <h3 className="text-2xl font-serif text-brand-brown mb-4">Tactile Balance</h3>
                                    <p className="text-brand-espresso/60 font-light leading-relaxed">
                                        The "weightage" of a gift is critical. We engineer our boxes with specific load tolerances, ensuring that from the moment a box is lifted, it communicates a sense of significant value and reinforced structural integrity.
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-col md:flex-row gap-8 items-start">
                                <span className="text-5xl font-serif text-brand-copper/20">03</span>
                                <div>
                                    <h3 className="text-2xl font-serif text-brand-brown mb-4">Olfactory Integration</h3>
                                    <p className="text-brand-espresso/60 font-light leading-relaxed">
                                        Aaraa gifts engage all senses. Subtle woody scents from sandalwood shavings or custom-infused linens ensure that the unboxing experience begins with a calming, sophisticated olfactory cue.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ProcessSection />
            <TrustSections />
            <Footer />
        </main>
    );
}
