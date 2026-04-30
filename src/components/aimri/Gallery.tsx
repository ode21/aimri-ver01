import img1 from "@/assets/gallery/kegiatan-1.jpg";
import img2 from "@/assets/gallery/kegiatan-2.jpg";
import img3 from "@/assets/gallery/kegiatan-3.jpg";
import img4 from "@/assets/gallery/kegiatan-4.jpg";
import img5 from "@/assets/gallery/kegiatan-5.jpg";
import img6 from "@/assets/gallery/kegiatan-6.jpg";
import img7 from "@/assets/gallery/kegiatan-7.jpg";
import img8 from "@/assets/gallery/kegiatan-8.jpg";
import img9 from "@/assets/gallery/kegiatan-9.jpg";
import img10 from "@/assets/gallery/kegiatan-10.jpg";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const galleryItems = [
  { src: img1, alt: "Audiensi Kementerian Ketenagakerjaan" },
  { src: img2, alt: "Audiensi Kementerian Perdagangan" },
  { src: img3, alt: "Audiensi Kementerian Perhubungan" },
  { src: img4, alt: "Audiensi Wakil Kementerian Ketenagakerjaan" },
  { src: img5, alt: "Diskusi Publik AIMRI" },
  { src: img6, alt: "Pertemuan dengan MIND ID" },
  { src: img7, alt: "Rapat Umum Dengar Pendapat DPR RI" },
  { src: img8, alt: "Audiensi Kementerian Imigrasi" },
  { src: img9, alt: "Audiensi Kementerian UMKM" },
  { src: img10, alt: "Diskusi Bersama Staff Khusus" },
];

export const Gallery = () => {
  return (
    <section id="galeri" className="relative py-24 md:py-32 bg-background">
      <div className="container px-8 md:px-16">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-copper/10 text-copper text-xs uppercase tracking-[0.25em] font-semibold mb-5">
            Galeri Kegiatan
          </div>
          <h2 className="font-display font-black text-3xl md:text-5xl text-foreground leading-tight mb-4">
            Dokumentasi <span className="text-gradient-copper">AIMRI</span>
          </h2>
          <p className="text-muted-foreground">
            Rekam jejak dan kegiatan strategis dalam upaya mewujudkan ekosistem industri mineral yang berkelanjutan.
          </p>
        </div>

        <Carousel
          opts={{ align: "start", loop: true }}
          className="w-full relative"
        >
          <CarouselContent className="-ml-2 md:-ml-4 py-4">
            {galleryItems.map((item, i) => (
              <CarouselItem key={i} className="pl-2 md:pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                <div
                  className="group relative overflow-hidden rounded-sm bg-muted border border-border shadow-sm hover:shadow-card-elegant transition-all duration-300 animate-fade-in aspect-square md:aspect-video h-full"
                  style={{ animationDelay: `${(i % 4) * 0.1}s` }}
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 lg:p-6">
                    <span className="text-white font-display font-bold text-base lg:text-lg translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      {item.alt}
                    </span>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-6 lg:-left-12" />
          <CarouselNext className="hidden md:flex -right-6 lg:-right-12" />
        </Carousel>

        <div className="text-center mt-8 text-sm text-muted-foreground md:hidden">
          Geser untuk melihat foto lainnya &rarr;
        </div>
      </div>
    </section>
  );
};

export default Gallery;
