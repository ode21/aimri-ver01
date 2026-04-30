import { Mail, MapPin, Phone, Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import logo from "@/assets/aimri-logo-transparent.png";

export const Footer = () => {
  return (
    <footer id="kontak" className="relative bg-steel-deep text-silver">
      <div className="container py-20">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <a href="/#beranda" className="inline-block mb-6 group">
              <div className="h-20 md:h-24 flex items-center">
                <img 
                  src={logo} 
                  alt="Logo AIMRI" 
                  className="h-full w-auto object-contain scale-150 origin-left drop-shadow-[0_0_8px_rgba(255,255,255,0.2)] group-hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.4)] transition-all duration-300" 
                />
              </div>
            </a>
            <p className="text-sm leading-relaxed text-silver/80 mb-6 max-w-sm">
              Asosiasi Industri Mineral Republik Indonesia — wadah strategis bagi pelaku industri mineral, akademisi, dan NGO untuk membangun masa depan berkelanjutan.
            </p>
            <div className="flex gap-3">
              {[Facebook, Instagram, Linkedin, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-sm border border-white/10 flex items-center justify-center text-silver hover:bg-gradient-copper hover:border-transparent hover:text-white transition-all"
                  aria-label="Social media"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-display font-bold mb-5 text-sm uppercase tracking-[0.2em]">Tautan</h4>
            <ul className="space-y-3 text-sm">
              {["Beranda", "Tentang Kami", "Visi & Misi", "Anggota", "Struktur"].map((l) => (
                <li key={l}>
                  <a href="#" className="hover:text-copper transition-colors">{l}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-display font-bold mb-5 text-sm uppercase tracking-[0.2em]">Sumber</h4>
            <ul className="space-y-3 text-sm">
              {["Dasar Hukum", "Publikasi", "Berita", "Kebijakan", "FAQ"].map((l) => (
                <li key={l}>
                  <a href="#" className="hover:text-copper transition-colors">{l}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-4">
            <h4 className="text-white font-display font-bold mb-5 text-sm uppercase tracking-[0.2em]">Kontak Sekretariat</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3">
                <MapPin className="h-5 w-5 text-copper shrink-0 mt-0.5" />
                <span>Jl. Tebet Barat Dalam VI C No. I,<br /> Jakarta Selatan, DKI Jakarta</span>
              </li>
              <li className="flex gap-3 items-center">
                <Phone className="h-5 w-5 text-copper shrink-0" />
                <a href="tel:+6281327725332" className="hover:text-copper transition-colors">
                  +62 813 2772 5332 — Muh. Fachri Dangkang
                </a>
              </li>
              <li className="flex gap-3 items-center">
                <Mail className="h-5 w-5 text-copper shrink-0" />
                <a href="mailto:contact@aimriofficial.com" className="hover:text-copper transition-colors break-all">
                  contact@aimriofficial.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-silver/60">
          <div>© {new Date().getFullYear()} AIMRI — Asosiasi Industri Mineral Republik Indonesia. Hak Cipta Dilindungi.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-copper transition-colors">Kebijakan Privasi</a>
            <a href="#" className="hover:text-copper transition-colors">Syarat & Ketentuan</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;