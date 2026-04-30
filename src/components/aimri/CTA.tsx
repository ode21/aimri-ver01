import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import textureImg from "@/assets/nickel-texture.jpg";

export const CTA = () => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <img
        src={textureImg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
        aria-hidden
      />
      <div className="absolute inset-0 bg-gradient-forest opacity-95" />
      <div className="container relative text-center max-w-3xl">
        <div className="inline-block px-3 py-1 rounded-full border border-copper/40 bg-copper/10 text-copper text-xs uppercase tracking-[0.25em] font-semibold mb-6">
          Bergabung Bersama Kami
        </div>
        <h2 className="font-display font-black text-3xl md:text-5xl text-white leading-tight mb-6">
          Jadilah bagian dari masa depan{" "}
          <span className="text-gradient-copper">industri mineral</span> Indonesia.
        </h2>
        <p className="text-silver text-lg mb-10">
          Bergabunglah dengan 103+ perusahaan, institusi, dan organisasi yang membentuk arah industri mineral nasional.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button variant="copper" size="lg" className="group">
            Gabung Menjadi Anggota
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button variant="outlineLight" size="lg">Hubungi Sekretariat</Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;