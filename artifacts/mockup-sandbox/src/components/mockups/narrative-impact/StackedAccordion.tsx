import { useState } from "react";

const ITEMS = [
  {
    num: "01",
    title: "Launch Narratives",
    body: "Shape pre-TGE, IDO, listing, and milestone narratives that give projects a cleaner story for the community to latch onto.",
    kw: ["TGE", "IDO", "Listing"],
  },
  {
    num: "02",
    title: "From Hype to Hold",
    body: "Build messaging that carries projects past announcement spikes and into stronger community belief, recurrence, and stickier participation loops.",
    kw: ["Retention", "Belief", "Recurrence"],
  },
  {
    num: "03",
    title: "X-First Distribution",
    body: "Develop thread-led, event-led, and meme-aware social cadence that fits crypto attention spans without flattening the project's core narrative.",
    kw: ["Threads", "Social Cadence", "X"],
  },
  {
    num: "04",
    title: "Community-Led Growth",
    body: "Support quests, activations, and campaign rituals that give the community reasons to show up, engage, and keep showing up.",
    kw: ["Quests", "Activations", "Campaigns"],
  },
  {
    num: "05",
    title: "Content Systems",
    body: "Create repeatable editorial and social systems across X, blogs, newsletters, and community touchpoints so the narrative stays coherent across the lifecycle.",
    kw: ["Editorial", "Social", "Newsletter"],
  },
];

export function StackedAccordion() {
  const [open, setOpen] = useState<number>(0);

  return (
    <div className="min-h-screen bg-white font-sans flex flex-col justify-center py-16 px-14">
      <div className="max-w-3xl w-full mx-auto">
        <div className="flex items-center gap-3 mb-5">
          <span className="h-px w-6 bg-[#F97316]" />
          <span
            className="text-[10px] font-bold tracking-[0.22em] uppercase"
            style={{ color: "#F97316", fontFamily: "monospace" }}
          >
            What I deliver
          </span>
        </div>
        <div className="flex items-end justify-between mb-14">
          <h2
            className="text-[2.6rem] font-black text-gray-900 leading-tight"
            style={{ letterSpacing: "-0.02em" }}
          >
            Narrative Impact
          </h2>
          <p className="text-[13px] text-gray-400 max-w-[220px] text-right leading-relaxed mb-1">
            Strategic storytelling across the full Web3 lifecycle.
          </p>
        </div>

        <div className="space-y-0">
          {ITEMS.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                onClick={() => setOpen(isOpen ? -1 : i)}
                className="cursor-pointer group"
                style={{
                  borderTop: "1px solid",
                  borderColor: isOpen ? "rgba(249,115,22,0.3)" : "rgba(0,0,0,0.08)",
                }}
              >
                <div
                  className="flex items-center justify-between py-5 transition-all duration-200"
                  style={{ paddingLeft: isOpen ? "0" : "0" }}
                >
                  <div className="flex items-center gap-6">
                    <span
                      className="text-[11px] font-bold tracking-[0.18em] w-8 flex-none"
                      style={{ color: "#F97316", fontFamily: "monospace" }}
                    >
                      {item.num}
                    </span>
                    <span
                      className="text-[19px] font-bold transition-colors duration-200"
                      style={{
                        color: isOpen ? "#F97316" : "#111118",
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {item.title}
                    </span>
                  </div>
                  <div
                    className="w-7 h-7 rounded-full flex items-center justify-center flex-none transition-all duration-300"
                    style={{
                      background: isOpen ? "#F97316" : "rgba(249,115,22,0.08)",
                      transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                    }}
                  >
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <line x1="6" y1="0" x2="6" y2="12" stroke={isOpen ? "white" : "#F97316"} strokeWidth="1.5"/>
                      <line x1="0" y1="6" x2="12" y2="6" stroke={isOpen ? "white" : "#F97316"} strokeWidth="1.5"/>
                    </svg>
                  </div>
                </div>

                <div
                  className="overflow-hidden transition-all duration-400"
                  style={{ maxHeight: isOpen ? "200px" : "0", opacity: isOpen ? 1 : 0 }}
                >
                  <div
                    className="ml-14 pb-7 pr-10"
                    style={{
                      borderLeft: "2px solid #F97316",
                      paddingLeft: "20px",
                    }}
                  >
                    <p className="text-[14px] text-gray-500 leading-relaxed mb-4">
                      {item.body}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {item.kw.map(k => (
                        <span
                          key={k}
                          className="text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-md"
                          style={{
                            color: "#F97316",
                            background: "rgba(249,115,22,0.07)",
                            border: "1px solid rgba(249,115,22,0.2)",
                            fontFamily: "monospace",
                          }}
                        >
                          {k}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          <div style={{ borderTop: "1px solid rgba(0,0,0,0.08)" }} />
        </div>
      </div>
    </div>
  );
}
