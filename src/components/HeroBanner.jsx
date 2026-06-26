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

function StarRating() {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4].map((n) => (
        <svg key={n} width="10" height="10" viewBox="0 0 24 24" fill="#E3B505">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#E3B505" strokeWidth="1.5">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    </div>
  );
}

function HeroReviewCard() {
  return (
    <div className="glass rounded-2xl p-4 max-w-[285px]">
      <div className="flex items-center gap-3 mb-3">
        <div className="w-9 h-9 rounded-full overflow-hidden">
          <Image src={IMG.review2} alt="Ronnie Hamill" width={36} height={36} className="w-full h-full object-cover" />
        </div>
        <div>
          <h4 className="text-white font-semibold text-sm">Ronnie Hamill</h4>
          <StarRating />
        </div>
      </div>
      <p className="text-white/55 text-[11px] leading-relaxed">
        I can&apos;t express how thrilled I am with my new natural plants! They bring such a fresh and vibrant energy to my home.
      </p>
    </div>
  );
}

function HeroProductCard() {
  return (
    <div className="glass rounded-[30px] p-5 w-[260px] shrink-0">
      <div className="h-[200px] flex items-center justify-center">
        <Image src={IMG.aglaonema} alt="Aglaonema plant" width={220} height={200} className="object-contain max-h-[200px] w-auto" />
      </div>
      <p className="text-white/50 text-[11px] mt-2 mb-1">Indoor Plant</p>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-white font-semibold text-[15px]">Aglaonema plant</h3>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
          <path d="M9 18l6-6-6-6" />
        </svg>
      </div>
      <Button className="w-full rounded-full">Buy Now</Button>
      <div className="flex justify-center items-center gap-2 mt-4">
        <span className="w-5 h-1 rounded-full bg-white" />
        <span className="w-1.5 h-1.5 rounded-full bg-white/35" />
        <span className="w-1.5 h-1.5 rounded-full bg-white/35" />
      </div>
    </div>
  );
}

export default function HeroBanner() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-bg">
        <Image src={IMG.bgTree} alt="" fill className="object-cover object-center" priority />
        <div className="absolute inset-0 bg-black/42" />
      </div>

      <div className="hero-inner page-wrap">
        <div className="hero-top-row">
          <div className="hero-left">
            <h1 className="hero-title">Earth&apos;s Exhale</h1>
            <p className="hero-subtitle">
              &ldquo;Earth Exhale&rdquo; symbolizes the purity and vitality of the Earth&apos;s natural environment and its essential role in sustaining life.
            </p>
            <div className="hero-btns">
              <Button className="rounded-full px-7">Buy Now</Button>
              <button type="button" className="hero-demo-btn">
                <span className="play-circle">
                  <svg width="9" height="9" viewBox="0 0 24 24" fill="white">
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                </span>
                Live Demo...
              </button>
            </div>
            <div className="mt-8 lg:hidden">
              <HeroReviewCard />
            </div>
          </div>
          <div className="hero-right">
            <HeroProductCard />
          </div>
        </div>

        <div className="hero-review-float hidden lg:block">
          <HeroReviewCard />
        </div>

        <div className="hero-trendy-title">
          <h2 className="section-bracket text-xl md:text-2xl font-semibold text-white">Our Trendy plants</h2>
        </div>

        <div className="hero-desk-card glass">
          <div className="hero-desk-grid">
            <div className="hero-desk-img">
              <Image src={IMG.trendyPlant1} alt="Desk plant" width={320} height={360} className="object-contain max-h-[340px] w-auto" />
            </div>
            <div className="hero-desk-text">
              <h3>For Your Desks Decorations</h3>
              <p>I recently added a beautiful desk decoration plant to my workspace, and it has made such a positive difference!</p>
              <p className="price">Rs. 599/-</p>
              <div className="flex items-center gap-3">
                <Button className="rounded-full">Explore</Button>
                <Button variant="icon" size="icon" icon={<CartIcon />} />
              </div>
            </div>
          </div>
        </div>

        <div className="hero-scroll-bar">
          <div className="w-28 h-1 bg-white/25 rounded-full" />
        </div>
      </div>
    </section>
  );
}
