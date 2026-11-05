"use client";
import { useEffect, useState } from "react";
const goals = [
  {
    number: "01",
    title: "Save Together",
    description:
      "Every member contributes regularly, building a shared financial foundation through discipline and commitment.",
    icon: "◈",
  },
  {
    number: "02",
    title: "Plan Together",
    description:
      "We discuss our ideas, evaluate opportunities, and make collective decisions about our future.",
    icon: "⌘",
  },
  {
    number: "03",
    title: "Build Together",
    description:
      "Turn years of dedication and savings into something meaningful that benefits our members.",
    icon: "⌂",
  },
];

const principles = [
  {
    title: "Unity",
    description: "Stronger together, growing together.",
  },
  {
    title: "Transparency",
    description: "Every contribution and decision matters.",
  },
  {
    title: "Discipline",
    description: "Small savings today create bigger possibilities.",
  },
  {
    title: "Shared Vision",
    description: "One goal, many hands, a brighter future.",
  },
];

export default function HomePage() {
  const [year, setYear] = useState("");
  useEffect(() => {
    setYear(String(new Date().getFullYear()));
  }, []);
  return (
    <main className="min-h-screen bg-[#fafbf7] text-[#183c2c]">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:px-10 lg:py-28">
          <div className="relative z-10">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#183c2c]/15 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-widest text-[#b18b47]">
              <span className="h-2 w-2 rounded-full bg-[#b18b47]" />
              Together We Grow
            </span>

            <h1 className="mt-8 text-5xl font-bold leading-[1.12] tracking-tight sm:text-6xl lg:text-7xl">
              Save Today.
              <br />
              <span className="text-[#b18b47]">Build Tomorrow.</span>
            </h1>

            <p className="mt-7 max-w-lg text-lg leading-8 text-[#66776a]">
              A shared dream. A common purpose. A stronger future. We bring
              people together to save with discipline, plan with purpose, and
              build something meaningful for tomorrow.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#about"
                className="rounded-full bg-[#183c2c] px-8 py-4 text-sm font-semibold text-white transition hover:bg-[#b18b47]"
              >
                Discover Our Society →
              </a>
              <a
                href="#vision"
                className="rounded-full border border-[#183c2c]/25 px-8 py-4 text-sm font-semibold transition hover:bg-[#183c2c] hover:text-white"
              >
                Explore Our Vision
              </a>
            </div>

            <div className="mt-12 flex items-center gap-4">
              <div className="flex -space-x-3">
                {["S", "D", "G", "T"].map((letter, i) => (
                  <div
                    key={i}
                    className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#fafbf7] bg-[#183c2c] text-sm font-bold text-white"
                  >
                    {letter}
                  </div>
                ))}
              </div>
              <p className="text-sm text-[#66776a]">
                <strong className="text-[#183c2c]">15–20 members</strong>
                <br />
                One shared dream.
              </p>
            </div>
          </div>

          {/* HERO VISUAL */}
          <div className="relative">
            <div className="absolute -right-10 -top-10 h-64 w-64 rounded-full bg-[#e9dfc6]/60 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] bg-[#183c2c] p-5 sm:p-8">
              <div className="relative flex min-h-[420px] flex-col justify-between overflow-hidden rounded-2xl border border-white/15 p-7 sm:p-9">
                <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full border border-white/10" />
                <div className="absolute -right-4 -top-4 h-40 w-40 rounded-full border border-white/10" />

                <div className="relative">
                  <p className="text-xs uppercase tracking-[4px] text-[#d6c08f]">
                    Our Shared Purpose
                  </p>
                  <h2 className="mt-6 max-w-sm text-4xl font-semibold leading-tight text-white sm:text-5xl">
                    Small steps.
                    <br />
                    Big dreams.
                    <br />
                    <span className="text-[#d6c08f]">One future.</span>
                  </h2>
                </div>

                <div className="relative mt-12">
                  <div className="mb-4 h-px bg-white/20" />
                  <div className="flex items-end justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-widest text-white/50">
                        Our Philosophy
                      </p>
                      <p className="mt-2 text-lg font-medium text-white">
                        Together, We Make It Possible.
                      </p>
                    </div>
                    <div className="text-5xl text-[#d6c08f]">↗</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO STRIP */}
      <section className="bg-[#183c2c] px-6 py-12 text-center text-white">
        <p className="text-xs uppercase tracking-[4px] text-[#d6c08f]">
          More Than Just Saving
        </p>
        <h2 className="mx-auto mt-4 max-w-3xl text-2xl font-semibold leading-relaxed sm:text-3xl">
          We believe that a better tomorrow begins with the decisions we make
          today.
        </h2>
      </section>

      {/* ABOUT */}
      <section id="about" className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[3px] text-[#b18b47]">
              Who We Are
            </p>
            <h2 className="mt-5 text-4xl font-bold leading-tight sm:text-5xl">
              A Society Built on
              <span className="text-[#b18b47]"> Shared Dreams.</span>
            </h2>
          </div>

          <div className="space-y-5 text-base leading-8 text-[#66776a]">
            <p>
              Swapnabaaz Development Society is a group of people united by a
              common vision: to create something valuable through collective
              savings, cooperation, and long-term planning.
            </p>
            <p>
              We believe that when individuals come together with a shared
              purpose, even small contributions can become the foundation of
              something bigger.
            </p>
            <p>
              Our journey is about trust, responsibility, teamwork, and turning
              our collective dreams into reality.
            </p>
          </div>
        </div>
      </section>

      {/* JOURNEY */}
      <section id="journey" className="bg-[#f0f2e9] px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-[3px] text-[#b18b47]">
              How We Work
            </p>
            <h2 className="mt-5 text-4xl font-bold sm:text-5xl">
              Our Journey Together
            </h2>
            <p className="mt-5 leading-7 text-[#66776a]">
              Every great achievement begins with a simple decision. Here's how
              we turn our shared vision into action.
            </p>
          </div>

          <div className="mt-16 grid gap-7 md:grid-cols-3">
            {goals.map((goal) => (
              <div
                key={goal.number}
                className="rounded-2xl border border-[#183c2c]/10 bg-white p-8 transition hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="flex items-center justify-between">
                  <span className="text-4xl text-[#b18b47]">{goal.icon}</span>
                  <span className="text-sm font-bold tracking-widest text-[#b18b47]">
                    {goal.number}
                  </span>
                </div>
                <h3 className="mt-10 text-2xl font-bold">{goal.title}</h3>
                <p className="mt-4 leading-7 text-[#66776a]">
                  {goal.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VISION */}
      <section id="vision" className="px-6 py-24">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#183c2c] px-8 py-16 text-center text-white sm:px-16">
          <p className="text-xs font-bold uppercase tracking-[4px] text-[#d6c08f]">
            Looking Ahead
          </p>
          <h2 className="mx-auto mt-6 max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
            Today's Savings.
            <br />
            Tomorrow's Achievements.
          </h2>
          <p className="mx-auto mt-7 max-w-2xl leading-8 text-white/70">
            Our vision is to build a strong collective foundation that can help
            us achieve meaningful goals, whether purchasing assets, developing
            property, or creating something lasting for our members.
          </p>
          <a
            href="#contact"
            className="mt-9 inline-block rounded-full bg-[#d6c08f] px-9 py-4 text-sm font-bold text-[#183c2c] transition hover:bg-white"
          >
            Be Part of Our Journey →
          </a>
        </div>
      </section>

      {/* VALUES */}
      <section id="values" className="bg-[#f0f2e9] px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[3px] text-[#b18b47]">
              What We Stand For
            </p>
            <h2 className="mt-5 text-4xl font-bold">Our Core Values</h2>
          </div>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {principles.map((item, index) => (
              <div key={item.title} className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#183c2c] text-2xl font-bold text-[#d6c08f]">
                  {index + 1}
                </div>
                <h3 className="mt-6 text-xl font-bold">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#66776a]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section id="contact" className="px-6 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-bold uppercase tracking-[3px] text-[#b18b47]">
            The Future Starts Today
          </p>
          <h2 className="mt-5 text-4xl font-bold leading-tight sm:text-5xl">
            Let's Build Something
            <span className="text-[#b18b47]"> Meaningful.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl leading-8 text-[#66776a]">
            Every big dream starts with people who believe in it. Together,
            let's keep saving, keep planning, and keep moving towards a better
            tomorrow.
          </p>
          <a
            href="mailto:YOUR_EMAIL@example.com"
            className="mt-9 inline-block rounded-full bg-[#183c2c] px-9 py-4 font-semibold text-white transition hover:bg-[#b18b47]"
          >
            Contact Our Society →
          </a>
        </div>
      </section>

      {/* FOOTER */}
      {/* <footer className="bg-[#142f23] px-6 py-12 text-white">
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
      </footer> */}
    </main>
  );
}
