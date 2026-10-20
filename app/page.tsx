import Navbar from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { PageShell } from "@/components/ui/page-shell";
import { HeroSection } from "@/components/sections/hero-section";

export default function Home() {
  const Hr = (
    <hr className="mt-24 bg-secondary/30 border-0 h-0.5 w-full max-w-screen-xl mx-auto " />
  );
  return (
    <PageShell>
      <div className="relative min-h-screen overflow-x-hidden">
        <Navbar />
        <main className="pt-16">
          <HeroSection />
          {Hr}
          {/* <Footer /> */}
        </main>
      </div>
    </PageShell>
  );
}
