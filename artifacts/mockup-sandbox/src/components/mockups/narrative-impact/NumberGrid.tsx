import { useState } from "react";

const ITEMS = [
  {
    num: "01",
    title: "Launch Narratives",
    body: "Shape pre-TGE, IDO, listing, and milestone narratives that give projects a cleaner story for the community to latch onto.",
  },
  {
    num: "02",
    title: "From Hype to Hold",
    body: "Build messaging that carries projects past announcement spikes and into stronger community belief, recurrence, and stickier participation loops.",
  },
  {
    num: "03",
    title: "X-First Distribution",
    body: "Develop thread-led, event-led, and meme-aware social cadence that fits crypto attention spans without flattening the project's core narrative.",
  },
  {
    num: "04",
    title: "Community-Led Growth",
    body: "Support quests, activations, and campaign rituals that give the community reasons to show up, engage, and keep showing up.",
  },
  {
    num: "05",
    title: "Content Systems",
    body: "Create repeatable editorial and social systems across X, blogs, newsletters, and community touchpoints so the narrative stays coherent across the lifecycle.",
  },
];

function Card({ item, isActive, onEnter, onLeave }: {
  item: typeof ITEMS[0];
  isActive: boolean;
  onEnter: () => void;
  onLeave: () => void;
}) {
  return (
    <div
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      className="relative rounded-2xl p-7 flex flex-col gap-4 cursor-default transition-all duration-300 overflow-hidden"
      style={{
        background: isActive ? "#fff" : "#fafafa",
        border: `1px solid ${isActive ? "rgba(249,115,22,0.35)" : "rgba(0,0,0,0.07)"}`,
        boxShadow: isActive ? "0 16px 50px rgba(249,115,22,0.09), 0 4px 20px rgba(0,0,0,0.06)" : "0 2px 8px rgba(0,0,0,0.04)",
        transform: isActive ? "translateY(-3px)" : "translateY(0)",
      }}
    >
      <span
        className="absolute top-4 right-5 font-black select-none pointer-events-none"
        style={{
          fontSize: "4.5rem",
          lineHeight: 1,
          color: isActive ? "rgba(249,115,22,0.1)" : "rgba(0,0,0,0.045)",
          fontFamily: "monospace",
          transition: "color 0.3s",
        }}
      >
        {item.num}
      </span>

      <div
        className="w-8 h-[3px] rounded-full"
        style={{
          background: isActive ? "#F97316" : "rgba(249,115,22,0.25)",
          boxShadow: isActive ? "0 0 8px rgba(249,115,22,0.4)" : "none",
          transition: "all 0.3s",
        }}
      />

      <h3
        className="text-[18px] font-bold leading-snug pr-12"
        style={{
          color: isActive ? "#111118" : "#1a1a2e",
          letterSpacing: "-0.01em",
        }}
      >
        {item.title}
      </h3>

      <p className="text-[13px] text-gray-400 leading-relaxed">
        {item.body}
      </p>
    </div>
  );
}

export function NumberGrid() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <div
      className="min-h-screen bg-white font-sans flex flex-col justify-center py-16 px-14"
      style={{ backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.035) 1px, transparent 1px)", backgroundSize: "22px 22px" }}
    >
      <div className="max-w-4xl w-full mx-auto">
        <div className="flex items-center gap-3 mb-5">
          <span className="h-px w-6 bg-[#F97316]" />
          <span
            className="text-[10px] font-bold tracking-[0.22em] uppercase"
            style={{ color: "#F97316", fontFamily: "monospace" }}
          >
            What I deliver
          </span>
        </div>
        <div className="flex items-end justify-between mb-11">
          <h2
            className="text-[2.6rem] font-black text-gray-900 leading-tight"
            style={{ letterSpacing: "-0.02em" }}
          >
            Narrative Impact
          </h2>
          <p className="text-[13px] text-gray-400 max-w-[220px] text-right leading-relaxed mb-1">
            Five areas where storytelling moves the needle.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-4">
          {ITEMS.slice(0, 3).map((item, i) => (
            <Card
              key={i}
              item={item}
              isActive={active === i}
              onEnter={() => setActive(i)}
              onLeave={() => setActive(null)}
            />
          ))}
        </div>
        <div className="grid grid-cols-2 gap-4 max-w-[calc(66.66%+8px)]">
          {ITEMS.slice(3).map((item, i) => (
            <Card
              key={i + 3}
              item={item}
              isActive={active === i + 3}
              onEnter={() => setActive(i + 3)}
              onLeave={() => setActive(null)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
