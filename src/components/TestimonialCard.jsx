import Image from "next/image";

export default function TestimonialCard({ avatar, name, review, active }) {
  return (
    <div className="review-card">
      <div className="flex items-center gap-3 mb-3">
        <div className="w-10 h-10 rounded-full overflow-hidden shrink-0">
          <Image src={avatar} alt={name} width={40} height={40} className="w-full h-full object-cover" />
        </div>
        <div>
          <h4 className="text-white font-semibold text-sm">{name}</h4>
          <div className="flex gap-0.5">
            {[1, 2, 3, 4, 5].map((n) => (
              <svg key={n} width="11" height="11" viewBox="0 0 24 24" fill="#E3B505">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            ))}
          </div>
        </div>
      </div>
      <p className="text-[#9a9a9a] text-[11px] leading-relaxed flex-grow">{review}</p>
      {active && (
        <div className="flex justify-center mt-4">
          <div className="w-8 h-0.5 bg-white rounded-full" />
        </div>
      )}
    </div>
  );
}
