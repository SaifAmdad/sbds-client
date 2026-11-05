"use client";
import { useEffect, useState } from "react";

const Footer = () => {
  const [year, setYear] = useState("");
  useEffect(() => {
    setYear(String(new Date().getFullYear()));
  }, []);

  return (
    <>
      {/* FOOTER */}
      <footer className="bg-[#142f23] px-6 py-12 text-white">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-10 border-b border-white/15 pb-10 md:flex-row">
            <div>
              <h3 className="text-2xl font-bold">Swapnabaaz</h3>
              <p className="mt-1 text-xs uppercase tracking-[3px] text-[#d6c08f]">
                Development Society
              </p>
              <p className="mt-5 text-sm text-white/60">
                Save Today. Build Tomorrow.
              </p>
            </div>

            <div>
              <p className="font-semibold">Quick Links</p>
              <div className="mt-4 flex flex-wrap gap-5 text-sm text-white/60">
                <a href="#about" className="hover:text-white">
                  About
                </a>
                <a href="#vision" className="hover:text-white">
                  Vision
                </a>
                <a href="#journey" className="hover:text-white">
                  Journey
                </a>
                <a href="#contact" className="hover:text-white">
                  Contact
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-between gap-4 pt-7 text-xs text-white/50 sm:flex-row">
            <p>© {year} Swapnabaaz Development Society. All rights reserved.</p>
            <p>Built on Trust. United by Dreams.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
