import Image from "next/image";
import Button from "./Button";
import { IMG } from "@/constants/images";

function CartIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <path d="M16 10a4 4 0 01-8 0" />
    </svg>
  );
}

export default function TrendingSection() {
  return (
    <section id="plants" className="relative py-14 md:py-20">
      <div className="absolute inset-0">
        <Image src={IMG.bgTree} alt="" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/65" />
      </div>
      <div className="relative z-10 page-wrap">
        <div className="glass rounded-[36px]">
          <div className="feature-banner">
            <div className="feature-banner-text order-2 md:order-1 space-y-3">
              <h3 className="text-2xl md:text-[26px] font-bold text-white">For Your Desks Decorations</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                The greenery adds a touch of nature and serenity to my desk, making it feel more inviting and calming
              </p>
              <p className="text-white text-2xl font-bold">Rs. 399/-</p>
              <div className="flex items-center gap-3">
                <Button className="rounded-full">Explore</Button>
                <Button variant="icon" size="icon" icon={<CartIcon />} />
              </div>
            </div>
            <div className="feature-banner-img order-1 md:order-2">
              <Image src={IMG.trendyPlant2} alt="Desk succulent" width={260} height={300} className="object-contain max-h-[270px] w-auto" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
