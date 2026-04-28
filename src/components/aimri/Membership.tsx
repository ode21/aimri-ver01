import { Factory, Pickaxe, Briefcase, Ship, Leaf, GraduationCap, TreePine, Users2, Wrench, FlaskConical } from "lucide-react";

const categories = [
  { icon: Pickaxe, label: "IUP Produksi Nikel" },
  { icon: FlaskConical, label: "IUP Eksplorasi Nikel" },
  { icon: Wrench, label: "Jasa Pertambangan (SIUJP)" },
  { icon: Briefcase, label: "Konsultan Pertambangan" },
  { icon: Factory, label: "Pertambangan Batubara" },
  { icon: Ship, label: "Perusahaan Pelayaran" },
  { icon: Leaf, label: "Perusahaan Lingkungan" },
  { icon: GraduationCap, label: "Institusi Pendidikan" },
  { icon: TreePine, label: "Komunitas Lingkungan" },
  { icon: Users2, label: "NGO Lingkungan" },
];

export const Membership = () => {
  return (
    <section id="anggota" className="relative py-24 md:py-32 bg-background">
      <div className="container">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-4 lg:sticky lg:top-32">
            <div className="inline-block px-3 py-1 rounded-full bg-copper/10 text-copper text-xs uppercase tracking-[0.25em] font-semibold mb-5">
              Keanggotaan
            </div>
            <h2 className="font-display font-black text-3xl md:text-5xl text-foreground leading-tight mb-6">
              <span className="text-gradient-copper">105</span> Anggota Bersinergi.
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              AIMRI menyatukan beragam pemangku kepentingan industri mineral dalam satu ekosistem strategis yang kuat dan berkelanjutan.
            </p>
            <div className="bg-gradient-forest text-white p-6 rounded-sm shadow-elegant">
              <div className="text-xs uppercase tracking-[0.25em] text-copper mb-2">2024</div>
              <div className="font-display font-black text-5xl mb-2">103+</div>
              <p className="text-sm text-silver">
                AIMRI berkomitmen mendorong industri mineral Indonesia menuju masa depan yang berkelanjutan.
              </p>
            </div>
          </div>

          <div className="lg:col-span-8 grid sm:grid-cols-2 gap-3">
            {categories.map((c, i) => (
              <div
                key={c.label}
                className="group flex items-center gap-4 p-5 bg-card border border-border rounded-sm hover:border-copper hover:shadow-card-elegant transition-all duration-300"
              >
                <div className="shrink-0 w-12 h-12 rounded-sm bg-muted group-hover:bg-gradient-copper flex items-center justify-center transition-all">
                  <c.icon className="h-5 w-5 text-foreground group-hover:text-white transition-colors" />
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-foreground">{c.label}</div>
                </div>
                <div className="text-xs font-mono text-muted-foreground">{String(i + 1).padStart(2, "0")}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Membership;