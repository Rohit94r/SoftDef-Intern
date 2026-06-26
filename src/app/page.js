import Navbar from "@/components/Navbar";
import HeroBanner from "@/components/HeroBanner";
import TrendingSection from "@/components/TrendingSection";
import SectionTitle from "@/components/SectionTitle";
import PlantCard from "@/components/PlantCard";
import TestimonialCard from "@/components/TestimonialCard";
import O2Section from "@/components/O2Section";
import Footer from "@/components/Footer";
import { topSellingPlants, trendingPlants } from "@/data/plants";
import { reviews } from "@/data/reviews";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroBanner />
      <TrendingSection />

      <section className="section-dark">
        <div className="page-wrap">
          <SectionTitle title="Our Top Selling Plants" variant="white" />
          <div className="plant-grid mb-12">
            {topSellingPlants.map((plant) => (
              <PlantCard key={plant.title} {...plant} />
            ))}
          </div>
          <div className="flex justify-center mb-12">
            <div className="w-8 h-0.5 bg-white rounded-full" />
          </div>
        </div>
      </section>

      <section className="section-dark-tight">
        <div className="page-wrap">
          <div className="plant-grid mb-16">
            {trendingPlants.map((plant) => (
              <PlantCard key={plant.title} {...plant} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-dark-tight">
        <div className="page-wrap">
          <div className="section-title-center">
            <h2 className="review-bracket text-xl md:text-2xl font-semibold text-white">Customer Review</h2>
          </div>
          <div className="review-grid">
            {reviews.map((item) => (
              <TestimonialCard key={item.name} {...item} />
            ))}
          </div>
        </div>
      </section>

      <O2Section />
      <Footer />
    </main>
  );
}
