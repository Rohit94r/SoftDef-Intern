import Image from "next/image";
import { IMG } from "@/constants/images";

const quickLinks = ["Home", "Type's Of plant's", "Contact", "Privacy"];

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#0b120b] pt-12 pb-8">
      <div className="page-wrap">
        <div className="footer-grid mb-10">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Image src={IMG.logo} alt="FloraVision" width={30} height={30} />
              <span className="text-white font-bold text-lg">FloraVision.</span>
            </div>
            <p className="text-white/65 text-sm leading-relaxed">
              From lush indoor greens to vibrant outdoor blooms, our plants are crafted to thrive and elevate your living environment.
            </p>
            <div className="flex gap-5 pt-2">
              {["FB", "TW", "LI"].map((s) => (
                <span key={s} className="text-white font-bold text-sm">{s}</span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold text-base mb-4">Quick Link&apos;s</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-white/80 text-sm underline">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-base mb-4">For Every Update.</h3>
            <div className="flex border border-white/55 rounded-lg overflow-hidden">
              <input
                type="email"
                placeholder="Enter Email"
                readOnly
                className="flex-1 min-w-0 bg-transparent text-white text-sm px-4 py-3 placeholder:text-white/35 outline-none"
              />
              <button type="button" className="bg-white text-black font-bold text-[11px] px-5 py-3 shrink-0">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>

        <div className="flex justify-end mb-6">
          <p className="text-white/45 text-xs">FloraVision © all right reserve</p>
        </div>

        <div className="flex justify-center">
          <div className="w-24 h-1 bg-white/20 rounded-full" />
        </div>
      </div>
    </footer>
  );
}
