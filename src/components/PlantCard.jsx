import Image from "next/image";

export default function PlantCard({ image, title, description, price }) {
  return (
    <div className="plant-card">
      <div className="plant-card-image">
        <Image src={image} alt={title} width={180} height={170} className="object-contain max-h-[170px] w-auto" />
      </div>
      <div className="plant-card-box">
        <h3 className="text-white font-semibold text-[15px] mb-2">{title}</h3>
        <p className="text-[#9a9a9a] text-[11px] leading-relaxed mb-5 flex-grow">{description}</p>
        <div className="flex items-center justify-between mt-auto">
          <span className="text-white font-semibold text-lg">{price}</span>
          <button type="button" className="w-10 h-10 border border-white/50 rounded-lg flex items-center justify-center">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 01-8 0" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
