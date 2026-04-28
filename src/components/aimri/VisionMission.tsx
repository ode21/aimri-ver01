import { Eye, Target, Handshake, Scale, Users, Globe2, GraduationCap, TrendingUp, Building2 } from "lucide-react";

const missions = [
  { icon: Handshake, text: "Fasilitator antara pelaku usaha sektor mineral dengan pemerintah." },
  { icon: Scale, text: "Membimbing pelaku usaha agar patuh pada regulasi terbaru." },
  { icon: Users, text: "Mendorong kerjasama antar sesama pelaku industri mineral." },
  { icon: Building2, text: "Mendampingi proses perizinan berusaha kepada pemangku kebijakan." },
  { icon: Handshake, text: "Mendorong kolaborasi dengan masyarakat sekitar industri." },
  { icon: Globe2, text: "Memfasilitasi jejaring internasional untuk investasi baru." },
  { icon: GraduationCap, text: "Menjembatani industri dengan akademisi perguruan tinggi." },
  { icon: TrendingUp, text: "Membimbing pengelolaan reserve berkelanjutan dan bernilai jangka panjang." },
];

export const VisionMission = () => {
  return (
    <section id="visi-misi" className="relative py-24 md:py-32 bg-gradient-steel text-white overflow-hidden">
      {/* Decorative grid */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: "linear-gradient(hsl(0 0% 100%) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 100%) 1px, transparent 1px)",
        backgroundSize: "64px 64px"
      }} />
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-copper/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-forest/30 rounded-full blur-3xl" />

      <div className="container relative">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-copper/15 text-copper text-xs uppercase tracking-[0.25em] font-semibold mb-5">
            Arah Organisasi
          </div>
          <h2 className="font-display font-black text-3xl md:text-5xl leading-tight">
            Visi & Misi <span className="text-gradient-copper">AIMRI</span>
          </h2>
        </div>

        {/* Vision card */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-sm p-8 md:p-12 hover-lift">
            <div className="flex items-start gap-6">
              <div className="shrink-0 w-14 h-14 rounded-sm bg-gradient-copper flex items-center justify-center shadow-copper">
                <Eye className="h-7 w-7 text-white" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-[0.3em] text-copper font-bold mb-3">Visi</div>
                <p className="text-lg md:text-xl text-silver leading-relaxed">
                  Mendukung Pemerintah Republik Indonesia mewujudkan negara yang mampu mengelola industri mineral secara <span className="text-white font-semibold">maju dan berkelanjutan</span>, memberikan dampak ekonomi positif, serta kesejahteraan dan kemakmuran bagi masyarakat — dengan peran asosiasi sebagai <span className="text-copper font-semibold">katalisator, konektor, dan pengayom</span>.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Missions grid */}
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-10 justify-center">
            <div className="h-px w-12 bg-copper" />
            <div className="flex items-center gap-2 text-copper font-semibold uppercase tracking-[0.3em] text-xs">
              <Target className="h-4 w-4" /> Misi Kami
            </div>
            <div className="h-px w-12 bg-copper" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {missions.map((m, i) => (
              <div
                key={i}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-sm p-6 hover:border-copper/40 hover:bg-white/[0.07] transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-sm bg-copper/15 border border-copper/30 flex items-center justify-center mb-4 group-hover:bg-gradient-copper group-hover:border-transparent transition-all">
                  <m.icon className="h-5 w-5 text-copper group-hover:text-white transition-colors" />
                </div>
                <p className="text-sm text-silver leading-relaxed">{m.text}</p>
                <div className="mt-4 text-[10px] font-mono text-copper/60">0{i + 1}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;