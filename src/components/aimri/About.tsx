import { Calendar, FileCheck2, Sparkles } from "lucide-react";
import aboutImg from "@/assets/about-mining.jpg";

export const About = () => {
  return (
    <section id="tentang" className="relative py-24 md:py-32 bg-background">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-copper opacity-20 blur-2xl rounded-2xl" />
            <div className="relative overflow-hidden rounded-sm shadow-elegant">
              <img
                src={aboutImg}
                alt="Pekerja tambang AIMRI di lokasi operasional"
                className="w-full h-[520px] object-cover"
                loading="lazy"
                width={1280}
                height={1024}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-steel-deep/60 via-transparent to-transparent" />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-8 -right-4 md:-right-8 bg-card border border-border shadow-elegant p-6 rounded-sm max-w-[260px] hidden sm:block">
              <div className="text-xs uppercase tracking-[0.2em] text-copper font-semibold mb-2">Sejak 2022</div>
              <div className="font-display font-bold text-foreground leading-tight">
                Komitmen membangun ekosistem mineral berkelanjutan.
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <div className="inline-block px-3 py-1 rounded-full bg-copper/10 text-copper text-xs uppercase tracking-[0.25em] font-semibold mb-5">
              Tentang Kami
            </div>
            <h2 className="font-display font-black text-3xl md:text-5xl text-foreground leading-tight mb-6">
              Wadah Strategis bagi Pelaku Industri Mineral Indonesia
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              <span className="font-semibold text-foreground">AIMRI</span> (Asosiasi Industri Mineral Republik Indonesia) adalah organisasi yang mewadahi perusahaan, institusi pendidikan, dan NGO yang bergerak dalam industri mineral. Kami berkomitmen melindungi kepentingan anggota dan mendukung pengembangan sektor mineral nasional secara berkelanjutan melalui program, kerjasama, dan pengembangan kebijakan yang relevan.
            </p>

            {/* Timeline */}
            <div className="mt-10 relative pl-6 border-l-2 border-copper/30 space-y-8">
              <div className="relative">
                <div className="absolute -left-[31px] top-1 w-5 h-5 rounded-full bg-gradient-copper shadow-copper" />
                <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-copper font-bold mb-1">
                  <Calendar className="h-3.5 w-3.5" /> 11 Januari 2022
                </div>
                <h3 className="font-display font-bold text-xl text-foreground">APNIPER Didirikan</h3>
                <p className="text-muted-foreground text-sm mt-1">
                  Asosiasi Pengusaha Nikel Perjuangan resmi berdiri sebagai cikal bakal organisasi.
                </p>
              </div>
              <div className="relative">
                <div className="absolute -left-[31px] top-1 w-5 h-5 rounded-full bg-gradient-copper shadow-copper" />
                <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-copper font-bold mb-1">
                  <FileCheck2 className="h-3.5 w-3.5" /> 27 September 2024
                </div>
                <h3 className="font-display font-bold text-xl text-foreground">Transformasi menjadi AIMRI</h3>
                <p className="text-muted-foreground text-sm mt-1">
                  Bertransformasi melalui Akta Notaris No. 07 dengan nomor akta hukum 0001641.AH 01 08 — memperluas cakupan ke seluruh industri mineral Indonesia.
                </p>
              </div>
              <div className="relative">
                <div className="absolute -left-[31px] top-1 w-5 h-5 rounded-full bg-gradient-copper shadow-copper" />
                <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-copper font-bold mb-1">
                  <Sparkles className="h-3.5 w-3.5" /> Hari Ini
                </div>
                <h3 className="font-display font-bold text-xl text-foreground">105 Anggota Aktif</h3>
                <p className="text-muted-foreground text-sm mt-1">
                  Jejaring kuat lintas sektor — perusahaan, akademisi, dan NGO — bergerak bersama menuju masa depan berkelanjutan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;