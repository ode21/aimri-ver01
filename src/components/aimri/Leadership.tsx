import { Crown, Lightbulb, Shield, Briefcase, User } from "lucide-react";
import photo1 from "@/assets/leadership/photo-1.jpg";
import photo2 from "@/assets/leadership/photo-2.jpg";
import photo3 from "@/assets/leadership/photo-3.jpg";
import photo4 from "@/assets/leadership/photo-4.jpg";
import photo5 from "@/assets/leadership/photo-5.jpg";
import photo6 from "@/assets/leadership/photo-6.jpg";
import photo7 from "@/assets/leadership/photo-7.jpg";
import photo8 from "@/assets/leadership/photo-8.jpg";
import photo9 from "@/assets/leadership/photo-9.jpg";
import photo10 from "@/assets/leadership/photo-10.jpg";
import photo11 from "@/assets/leadership/photo-11.jpg";
import photo12 from "@/assets/leadership/photo-12.jpg";
import photo13 from "@/assets/leadership/photo-13.jpg";

const dewanPembina = {
  title: "Dewan Pembina",
  icon: Crown,
  members: [
    { role: "Ketua Dewan Pembina", name: "Ir. Agus Suhartono, M.Sc.", photo: photo1 },
    { role: "Sekretaris Dewan Pembina", name: "Deni Sri Wardana", photo: photo5 },
    { role: "Anggota Dewan Pembina", name: "Hendra S. Sinadia", photo: photo9 },
    { role: "Anggota Dewan Pembina", name: "Sudjadi Sudjianto", photo: photo10 },
  ],
};

const dewanPenasehat = {
  title: "Dewan Penasehat",
  icon: Lightbulb,
  members: [
    { role: "Ketua Dewan Penasehat", name: "Bambang Patijaya", photo: photo4 },
    { role: "Sekretaris Dewan Penasehat", name: "Eka Sastra, S.E.", photo: photo7 },
    { role: "Anggota Dewan Penasehat", name: "Abd. Sadat, S.T.", photo: null },
    { role: "Anggota Dewan Penasehat", name: "Muhamad Surya Wijaya", photo: null },
  ],
};

const dewanPengawas = {
  title: "Dewan Pengawas",
  icon: Shield,
  members: [
    { role: "Ketua Dewan Pengawas", name: "Ferdinand N. Iskandar", photo: photo6 },
    { role: "Sekretaris Dewan Pengawas", name: "Ahmad Alamsyah Saragih, S.E.", photo: photo2 },
    { role: "Anggota Dewan Pengawas", name: "Ruddy Tjanaka", photo: photo12 },
    { role: "Anggota Dewan Pengawas", name: "Sandri Saputra", photo: photo11 },
  ],
};

const dewanPengurus = {
  title: "Dewan Pengurus",
  icon: Briefcase,
  members: [
    { role: "Ketua Anggota Dewan Pengurus", name: "Achyar Al Rasyid", photo: photo13 },
    { role: "Wakil Ketua Dewan Pengurus", name: "Dwi Cahyo Prabowo", photo: null },
    { role: "Sekretaris Dewan Pengurus", name: "Ali Zakiyuddin", photo: photo3 },
    { role: "Bendahara Dewan Pengurus", name: "Dika Chrisna Irzandi", photo: photo8 },
  ],
};

const allCouncils = [dewanPembina, dewanPenasehat, dewanPengawas, dewanPengurus];

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
            Sinergi kepengurusan profesional lintas sektor guna membangun masa depan industri mineral Indonesia yang berkelanjutan dan terstruktur.
          </p>
        </div>

        <div className="space-y-20">
          {allCouncils.map((council, idx) => (
            <div key={idx} className="animate-fade-in" style={{ animationDelay: `${idx * 0.1}s` }}>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-sm bg-copper/10 flex items-center justify-center border border-copper/20 shadow-sm">
                  <council.icon className="h-6 w-6 text-copper" />
                </div>
                <h3 className="font-display font-bold text-2xl md:text-3xl text-foreground border-b border-border/50 pb-2 flex-grow">
                  {council.title}
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {council.members.map((member, i) => (
                  <div 
                    key={i} 
                    className="group bg-card border border-border rounded-sm overflow-hidden hover:shadow-card-elegant hover:border-copper/50 transition-all duration-300 flex flex-col"
                  >
                    <div className="relative aspect-square w-full bg-muted border-b border-border overflow-hidden">
                      {member.photo ? (
                        <img 
                          src={member.photo} 
                          alt={member.name} 
                          className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                          loading="lazy"
                        />
                      ) : (
                        <div className="w-full h-full flex flex-col items-center justify-center bg-background/50 text-muted-foreground group-hover:text-copper transition-colors duration-300">
                          <User className="h-16 w-16 mb-2 opacity-50" />
                          <span className="text-xs font-medium uppercase tracking-widest opacity-60">Foto Belum Tersedia</span>
                        </div>
                      )}
                      
                      {/* Accent strip */}
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-copper opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    
                    <div className="p-6 flex-grow flex flex-col justify-center text-center">
                      <h4 className="font-display font-bold text-lg text-foreground leading-tight mb-2 group-hover:text-copper transition-colors">
                        {member.name}
                      </h4>
                      <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                        {member.role}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;