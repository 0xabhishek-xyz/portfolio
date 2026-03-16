import { useRef, useState } from "react";

const ITEMS = [
  {
    num: "01",
    title: "Launch Narratives",
    body: "Shape pre-TGE, IDO, listing, and milestone narratives that give projects a cleaner story for the community to latch onto.",
    tag: "TGE · IDO · Listing",
  },
  {
    num: "02",
    title: "From Hype to Hold",
    body: "Build messaging that carries projects past announcement spikes and into stronger community belief, recurrence, and stickier participation loops.",
    tag: "Retention · Community",
  },
  {
    num: "03",
    title: "X-First Distribution",
    body: "Develop thread-led, event-led, and meme-aware social cadence that fits crypto attention spans without flattening the project's core narrative.",
    tag: "Threads · X Strategy",
  },
  {
    num: "04",
    title: "Community-Led Growth",
    body: "Support quests, activations, and campaign rituals that give the community reasons to show up, engage, and keep showing up.",
    tag: "Quests · Campaigns",
  },
  {
    num: "05",
    title: "Content Systems",
    body: "Create repeatable editorial and social systems across X, blogs, newsletters, and community touchpoints so the narrative stays coherent across the lifecycle.",
    tag: "Editorial · Systems",
  },
];

export function HorizontalScroll() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white font-sans flex flex-col justify-center py-16 px-0 overflow-hidden">
      <div className="px-14 mb-12">
        <div className="flex items-center gap-3 mb-4">
          <span className="h-px w-6 bg-[#F97316]" />
          <span
            className="text-[10px] font-bold tracking-[0.22em] uppercase"
            style={{ color: "#F97316", fontFamily: "monospace" }}
          >
            What I deliver
          </span>
        </div>
        <h2
          className="text-[2.6rem] font-black leading-tight text-gray-900 mb-2"
          style={{ letterSpacing: "-0.02em" }}
        >
          Narrative Impact
        </h2>
        <p className="text-[15px] text-gray-400 max-w-md leading-relaxed">
          Five areas where strategic storytelling moves the needle for Web3 projects.
        </p>
      </div>

      <div
        ref={trackRef}
        className="flex gap-5 px-14 overflow-x-auto pb-4 scroll-smooth"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {ITEMS.map((item, i) => (
          <div
            key={i}
            onMouseEnter={() => setActive(i)}
            onMouseLeave={() => setActive(null)}
            className="flex-none w-[280px] rounded-2xl flex flex-col justify-between cursor-pointer transition-all duration-300"
            style={{
              background: active === i ? "#0f0f1c" : "#111118",
              border: `1px solid ${active === i ? "rgba(249,115,22,0.45)" : "rgba(255,255,255,0.06)"}`,
              boxShadow: active === i
                ? "0 0 40px rgba(249,115,22,0.12), 0 20px 60px rgba(0,0,0,0.4)"
                : "0 8px 32px rgba(0,0,0,0.25)",
              padding: "28px 26px 24px",
              transform: active === i ? "translateY(-4px)" : "translateY(0)",
            }}
          >
            <div>
              <div
                className="w-full h-[2px] rounded-full mb-7"
                style={{
                  background: active === i
                    ? "linear-gradient(90deg, #F97316 0%, rgba(249,115,22,0.3) 100%)"
                    : "rgba(249,115,22,0.25)",
                  boxShadow: active === i ? "0 0 12px rgba(249,115,22,0.4)" : "none",
                }}
              />
              <span
                className="text-[11px] font-bold tracking-[0.2em] uppercase mb-4 block"
                style={{ color: "#F97316", opacity: 0.6, fontFamily: "monospace" }}
              >
                {item.num}
              </span>
              <h3
                className="text-[19px] font-bold text-white leading-tight mb-4"
                style={{ letterSpacing: "-0.01em" }}
              >
                {item.title}
              </h3>
              <p className="text-[13px] leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>
                {item.body}
              </p>
            </div>
            <div className="mt-8 pt-5" style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
              <span
                className="text-[10px] font-semibold tracking-widest uppercase"
                style={{ color: "rgba(249,115,22,0.5)", fontFamily: "monospace" }}
              >
                {item.tag}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="px-14 mt-8 flex items-center gap-2">
        {ITEMS.map((_, i) => (
          <div
            key={i}
            className="h-[2px] rounded-full transition-all duration-300"
            style={{
              width: active === i ? 28 : 10,
              background: active === i ? "#F97316" : "rgba(249,115,22,0.2)",
            }}
          />
        ))}
      </div>
    </div>
  );
}
