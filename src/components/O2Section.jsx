import Image from "next/image";
import Button from "./Button";
import { IMG } from "@/constants/images";

export default function O2Section() {
  return (
    <section className="section-dark">
      <div className="page-wrap">
        <div className="section-title-center">
          <h2 className="o2-bracket text-xl md:text-2xl font-semibold text-white">Our Best o2</h2>
        </div>

        <div className="o2-card">
          <div className="o2-card-img">
            <Image src={IMG.aglaonema} alt="O2 plant" width={300} height={360} className="object-contain max-h-[360px] w-auto" />
          </div>
          <div className="o2-card-text space-y-4">
            <h3 className="text-xl md:text-2xl font-bold text-white leading-snug">
              We Have Small And Best O2 Plants Collection&apos;s
            </h3>
            <p className="text-white/65 text-sm leading-relaxed">
              Oxygen-producing plants, often referred to as &ldquo;O2 plants,&rdquo; are those that release oxygen into the atmosphere through the process of photosynthesis.
            </p>
            <p className="text-white/65 text-sm leading-relaxed">
              Many plants can help filter out pollutants and toxins from the air, such as formaldehyde, benzene, and trichloroethylene. This makes the air cleaner and healthier to breathe.
            </p>
            <div className="flex items-center justify-between flex-wrap gap-4">
              <Button>Explore</Button>
              <div className="flex items-center gap-3 text-white/60 text-sm">
                <span>&lt;</span>
                <span>01/04</span>
                <span>&gt;</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center gap-2 mt-8">
          <div className="w-7 h-1 bg-white rounded-full" />
          <div className="w-1.5 h-1.5 rounded-full bg-white/30" />
          <div className="w-1.5 h-1.5 rounded-full bg-white/30" />
        </div>
      </div>
    </section>
  );
}
