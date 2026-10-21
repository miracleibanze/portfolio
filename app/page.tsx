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
          <div id="skills" className="py-96">
            Skills <br />
            <div className="inline-block rounded-2xl border border-white/60 bg-white/30 px-6 py-4 shadow-lg shadow-blue-500/10 backdrop-blur-xl">
              <h2 className="text-xl font-semibold text-slate-900">
                UI & Web Developer
              </h2>
              <p className="text-sm text-slate-600">
                Turning ideas into real products
              </p>
            </div>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita
            accusantium voluptates architecto, id neque sapiente? Quia sapiente
            ad nisi a ullam, voluptatibus sed molestias tempore id! Facilis
            iusto nam magni.
          </div>
          <div id="projects" className="py-96">
            Project <br />
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita
            accusantium voluptates architecto, id neque sapiente? Quia sapiente
            ad nisi a ullam, voluptatibus sed molestias tempore id! Facilis
            iusto nam magni.
          </div>
          <div id="contact" className="py-96">
            contact
            <br /> Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Expedita accusantium voluptates architecto, id neque sapiente? Quia
            sapiente ad nisi a ullam, voluptatibus sed molestias tempore id!
            Facilis iusto nam magni.
          </div>
        </main>
      </div>
    </PageShell>
  );
}
