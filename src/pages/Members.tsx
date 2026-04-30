import { useNavigate } from "react-router-dom";
import Navbar from "@/components/aimri/Navbar";
import Footer from "@/components/aimri/Footer";
import { Button } from "@/components/ui/button";
import { LogOut, Building2, MapPin, Pickaxe, Leaf, GraduationCap, Ship, Briefcase, Factory, FlaskConical, Users2, TreePine, Wrench, Map, Truck } from "lucide-react";

// Mapping category names to icons
const getCategoryIcon = (category: string) => {
  switch (category) {
    case "Wilayah Izin Usaha Pertambangan (WIUP)": return Map;
    case "Izin Usaha Pertambangan Eksplorasi (IUP Eksplorasi)": return FlaskConical;
    case "Izin Usaha Pertambangan Operasi Produksi (IUP OP)": return Pickaxe;
    case "Izin Usaha Jasa Pertambangan (IUJP)": return Wrench;
    case "Izin Pengangkutan Penjualan (IPP)": return Factory;
    case "Perusahaan Lingkungan Hidup": return Leaf;
    case "Konsultan Lingkungan Hidup": return TreePine;
    case "Konsultan Pertambangan": return Briefcase;
    case "Perusahaan Angkutan Transportasi": return Truck;
    case "Institusi Pendidikan": return GraduationCap;
    case "Non-Government Organization (NGO) Lingkungan Hidup": return Users2;
    default: return Building2;
  }
};

const mockMembers = [
  { name: "PT. Mega Tambang Nikel", category: "Izin Usaha Pertambangan Operasi Produksi (IUP OP)", location: "Sulawesi Tenggara", status: "Aktif" },
  { name: "PT. Eksplorasi Bumi Raya", category: "Izin Usaha Pertambangan Eksplorasi (IUP Eksplorasi)", location: "Maluku Utara", status: "Aktif" },
  { name: "PT. Jasa Konstruksi Tambang", category: "Izin Usaha Jasa Pertambangan (IUJP)", location: "Jakarta", status: "Aktif" },
  { name: "CV. Konsultan Geologi Indonesia", category: "Konsultan Pertambangan", location: "Bandung", status: "Aktif" },
  { name: "PT. Tambang Wilayah Harapan", category: "Wilayah Izin Usaha Pertambangan (WIUP)", location: "Kalimantan Timur", status: "Aktif" },
  { name: "PT. Lintas Benua Logistik", category: "Perusahaan Angkutan Transportasi", location: "Surabaya", status: "Aktif" },
  { name: "PT. Solusi Lingkungan Bersih", category: "Perusahaan Lingkungan Hidup", location: "Jakarta", status: "Aktif" },
  { name: "Institut Teknologi Pertambangan", category: "Institusi Pendidikan", location: "Bandung", status: "Aktif" },
  { name: "PT. IPP Distribusi Makmur", category: "Izin Pengangkutan Penjualan (IPP)", location: "Sulawesi Selatan", status: "Aktif" },
  { name: "Yayasan Hijau Indonesia", category: "Non-Government Organization (NGO) Lingkungan Hidup", location: "Jakarta", status: "Aktif" },
  { name: "PT. Enviro Global Konsultan", category: "Konsultan Lingkungan Hidup", location: "Jakarta", status: "Aktif" },
  { name: "PT. Mineral Maju Bersama", category: "Izin Usaha Pertambangan Operasi Produksi (IUP OP)", location: "Sulawesi Tengah", status: "Aktif" },
];

const Members = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isAimriMember");
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-1 pt-28 pb-20 px-4 container">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-12">
          <div>
            <h1 className="font-display font-black text-3xl md:text-5xl text-foreground mb-3">
              Direktori <span className="text-gradient-copper">Anggota</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl">
              Daftar lengkap perusahaan, institusi, dan NGO yang tergabung dalam Asosiasi Industri Mineral Republik Indonesia.
            </p>
          </div>
          <Button variant="outlineLight" onClick={handleLogout} className="shrink-0 gap-2">
            <LogOut className="w-4 h-4" /> Keluar
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockMembers.map((member, i) => {
            const Icon = getCategoryIcon(member.category);
            return (
              <div key={i} className="bg-card border border-border rounded-sm p-6 hover-lift">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-copper/10 rounded-sm flex items-center justify-center">
                    <Icon className="w-6 h-6 text-copper" />
                  </div>
                  <span className="inline-flex px-2 py-1 text-[10px] uppercase tracking-wider bg-green-500/10 text-green-500 border border-green-500/20 rounded-full font-medium">
                    {member.status}
                  </span>
                </div>
                <h3 className="font-display font-bold text-xl text-foreground mb-2 leading-tight">
                  {member.name}
                </h3>
                <div className="text-sm font-medium text-copper mb-4">
                  {member.category}
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground pt-4 border-t border-border">
                  <MapPin className="w-4 h-4" /> {member.location}
                </div>
              </div>
            );
          })}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Members;
