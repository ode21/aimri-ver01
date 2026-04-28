import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import logo from "@/assets/aimri-logo.png";

const navItems = [
  { label: "Beranda", href: "#beranda" },
  { label: "Tentang Kami", href: "#tentang" },
  { label: "Visi & Misi", href: "#visi-misi" },
  { label: "Struktur Organisasi", href: "#struktur" },
  { label: "Anggota", href: "#anggota" },
  { label: "Kontak", href: "#kontak" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-steel-deep/90 backdrop-blur-md border-b border-white/5 shadow-card-elegant"
          : "bg-transparent"
      )}
    >
      <div className="container flex items-center justify-between h-20">
        <a href="#beranda" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-sm bg-gradient-copper flex items-center justify-center font-display font-black text-white text-lg shadow-copper">
            A
          </div>
          <div className="leading-tight">
            <div className="font-display font-extrabold text-white tracking-wide text-lg">AIMRI</div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-silver/80">Mineral Indonesia</div>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="nav-underline text-sm font-medium text-silver hover:text-white transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button variant="copper" size="sm">Gabung Menjadi Anggota</Button>
        </div>

        <button
          className="lg:hidden text-white p-2"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-steel-deep border-t border-white/5 animate-fade-in">
          <nav className="container flex flex-col py-4 gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-3 text-silver hover:text-copper transition-colors text-sm font-medium border-b border-white/5"
              >
                {item.label}
              </a>
            ))}
            <Button variant="copper" className="mt-4 w-full">Gabung Menjadi Anggota</Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;