const stages = [
  ["Workflow automation", "Zapier-based AI content and media pipelines"],
  [
    "Rovana Studio / Listing Factory",
    "Business automation and direct API integration",
  ],
  ["Kevin", "Multi-agent orchestration and external-service integrations"],
  [
    "ConversationOS",
    "Full-stack AI, persistent memory, and semantic retrieval",
  ],
  [
    "JobOps AI",
    "Grounded RAG, provenance validation, and multi-tenant deployment",
  ],
];
export default function Story() {
  return (
    <section id="why" className="section story" aria-labelledby="story-title">
      <div className="container">
        <p className="eyebrow">04 / Engineering journey</p>
        <div className="split">
          <div>
            <h2 id="story-title">
              It started with
              <br />
              45 minutes.
            </h2>
            <p>
              Every morning before work, I found myself with about forty-five
              minutes of free time. At first, I used those mornings to exercise.
              I became healthier and had more energy.
            </p>
            <p>
              But the bigger lesson wasn’t physical. Those forty-five minutes
              changed how I thought about time.
            </p>
            <blockquote>
              Time isn’t something we find.
              <br />
              It’s something we create.
            </blockquote>
            <p>
              If reclaiming forty-five minutes could make that much difference
              in my own life, what could intelligent systems do for other
              people?
            </p>
          </div>
          <ol className="journey">
            {stages.map(([title, copy], i) => (
              <li key={title}>
                <span className="journey-number">0{i + 1}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
        <p className="journey-closing">
          Each project forced me to solve a harder class of problem—and pushed
          me deeper into software and AI engineering.
        </p>
      </div>
    </section>
  );
}
