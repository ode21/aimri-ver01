import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-mining.jpg";

export const Hero = () => {
  return (
    <section
      id="beranda"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <img
        src={heroImg}
        alt="Pertambangan mineral nikel modern di Indonesia"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_hsl(165_50%_8%_/_0.6),_transparent_70%)]" />

      <div className="container relative z-10 pt-28 pb-20">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-copper/40 bg-copper/10 backdrop-blur-sm text-copper text-xs uppercase tracking-[0.25em] font-semibold mb-8 animate-fade-in">
            <span className="w-1.5 h-1.5 rounded-full bg-copper animate-pulse" />
            Asosiasi Industri Mineral Republik Indonesia
          </div>

          <h1 className="font-display font-black text-white leading-[1.05] text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-8 animate-fade-in-slow">
            Memajukan{" "}
            <span className="text-gradient-copper">Industri Mineral</span>{" "}
            Indonesia secara Berkelanjutan
          </h1>

          <p className="text-lg md:text-xl text-silver/90 max-w-2xl mb-10 leading-relaxed animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Wadah strategis bagi <span className="text-white font-semibold">105 anggota</span> — dari perusahaan tambang, institusi pendidikan, hingga NGO lingkungan — yang bersinergi membangun masa depan mineral Indonesia yang maju, patuh, dan lestari.
          </p>

          <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Button variant="copper" size="lg" className="group">
              Pelajari Lebih Lanjut
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outlineLight" size="lg">
              Hubungi Kami
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-3xl border-t border-white/10 pt-10 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            {[
              { v: "105+", l: "Anggota" },
              { v: "2022", l: "Berdiri" },
              { v: "10+", l: "Bidang Usaha" },
              { v: "34", l: "Provinsi" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-display font-extrabold text-3xl md:text-4xl text-white">{s.v}</div>
                <div className="text-xs uppercase tracking-[0.2em] text-silver/70 mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <a
        href="#tentang"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-silver/70 hover:text-copper transition-colors animate-bounce z-10"
        aria-label="Scroll down"
      >
        <ChevronDown className="h-6 w-6" />
      </a>
    </section>
  );
};

export default Hero;