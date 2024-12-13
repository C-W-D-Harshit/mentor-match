import { Navbar } from "@/app/_components/navbar";
import { Hero } from "@/app/_components/hero";
import { SocialProof } from "@/app/_components/social-proof";
import { Benefits } from "@/app/_components/benefits";
import { HowItWorks } from "@/app/_components/how-it-works";
import { Testimonials } from "@/app/_components/testimonials";
import { FAQ } from "@/app/_components/faq";
import { CTA } from "@/app/_components/cta";
import { Footer } from "@/app/_components/footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <SocialProof />
        <Benefits />
        <HowItWorks />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
