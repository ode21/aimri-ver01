import { Crown, Briefcase, FileText, Shield, Lightbulb } from "lucide-react";

const featured = [
  { name: "Ir. Agus Suhartono, M.Sc.", role: "Ketua Dewan Pembina", icon: Crown, accent: true },
  { name: "Achyar Al Rasyid", role: "Ketua Umum", icon: Briefcase, accent: true },
  { name: "Ali Zakiyudin", role: "Sekretaris Jenderal", icon: FileText, accent: true },
];

const councils = [
  {
    title: "Dewan Pengawas",
    icon: Shield,
    members: [
      { role: "Ketua", name: "Ferdinand N Iskandar" },
      { role: "Sekretaris", name: "Ruddy Tjanaka" },
    ],
  },
  {
    title: "Dewan Pakar",
    icon: Lightbulb,
    members: [
      { role: "Ketua", name: "Prof. Dr. Mont. M. Zaki Mubarok., S.T., M.T" },
      { role: "Sekretaris", name: "Prof. Ir. Muljo Widodo Kartidjo" },
      { role: "Anggota", name: "Prof. Ir. C. Danisworo., M.Sc" },
    ],
  },
];

const fields = [
  "Tata Kelola Pertambangan",
  "Hukum & Regulasi",
  "Humas dan CSR",
  "Lingkungan Hidup",
  "Hubungan Internasional",
  "Riset & Akademik",
  "Keanggotaan",
  "Investasi & Kerjasama",
];

export const Leadership = () => {
  return (
    <section id="struktur" className="relative py-24 md:py-32 bg-gradient-section">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-copper/10 text-copper text-xs uppercase tracking-[0.25em] font-semibold mb-5">
            Struktur Organisasi
          </div>
          <h2 className="font-display font-black text-3xl md:text-5xl text-foreground leading-tight mb-4">
            Kepemimpinan <span className="text-gradient-copper">AIMRI</span>
          </h2>
          <p className="text-muted-foreground">
            Dipimpin oleh para tokoh berpengalaman lintas sektor industri, akademik, dan kebijakan publik.
          </p>
        </div>

        {/* Featured Leadership */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {featured.map((p, i) => (
            <div
              key={p.name}
              className="group relative bg-card border border-border rounded-sm overflow-hidden hover-lift animate-fade-in"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {/* Top bar */}
              <div className="h-1.5 bg-gradient-copper" />
              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-16 h-16 rounded-sm bg-gradient-forest flex items-center justify-center shadow-card-elegant">
                    <p.icon className="h-7 w-7 text-copper" />
                  </div>
                  <div className="text-[10px] font-mono text-muted-foreground tracking-widest">
                    0{i + 1} / 03
                  </div>
                </div>
                <div className="text-xs uppercase tracking-[0.25em] text-copper font-bold mb-2">
                  {p.role}
                </div>
                <h3 className="font-display font-bold text-xl text-foreground leading-tight mb-4">
                  {p.name}
                </h3>
                <div className="pt-4 border-t border-border text-xs text-muted-foreground uppercase tracking-wider">
                  AIMRI Leadership
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Councils */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {councils.map((c) => (
            <div key={c.title} className="bg-card border border-border rounded-sm p-8 hover-lift">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border">
                <div className="w-10 h-10 rounded-sm bg-copper/10 flex items-center justify-center">
                  <c.icon className="h-5 w-5 text-copper" />
                </div>
                <h3 className="font-display font-bold text-xl text-foreground">{c.title}</h3>
              </div>
              <ul className="space-y-3">
                {c.members.map((m) => (
                  <li key={m.name} className="flex items-baseline justify-between gap-4 text-sm">
                    <span className="text-xs uppercase tracking-wider text-copper font-semibold shrink-0">
                      {m.role}
                    </span>
                    <span className="text-foreground text-right font-medium">{m.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bidang */}
        <div className="bg-gradient-forest text-white rounded-sm p-8 md:p-12 shadow-elegant">
          <div className="grid md:grid-cols-3 gap-8 items-start">
            <div>
              <div className="text-xs uppercase tracking-[0.25em] text-copper font-bold mb-3">
                Bidang-Bidang
              </div>
              <h3 className="font-display font-bold text-2xl text-white">
                Didukung oleh para profesional di setiap bidang strategis.
              </h3>
            </div>
            <div className="md:col-span-2 grid sm:grid-cols-2 gap-3">
              {fields.map((f, i) => (
                <div
                  key={f}
                  className="flex items-center gap-3 py-3 border-b border-white/10 hover:border-copper transition-colors"
                >
                  <span className="text-copper font-mono text-xs">{String(i + 1).padStart(2, "0")}</span>
                  <span className="text-silver text-sm">{f}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leadership;