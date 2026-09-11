import { links } from "@/lib/portfolio";
import { Tags } from "./SiteChrome";
export default function Kevin() {
  return (
    <section
      id="kevin"
      className="section dark kevin"
      aria-labelledby="kevin-title"
    >
      <div className="container">
        <p className="eyebrow">03 / Kevin · Multi-agent AI chief of staff</p>
        <div className="split">
          <div>
            <h2 id="kevin-title">
              Kevin gave me
              <br />
              my mornings back<span className="accent">.</span>
            </h2>
            <p className="subtitle">And that was the point.</p>
            <a
              className="button"
              href={links.kevin}
              target="_blank"
              rel="noopener noreferrer"
            >
              Watch Kevin in action ↗
            </a>
          </div>
          <div>
            <p>
              Kevin began with a question: could I build an AI system that
              didn’t just answer questions, but actually coordinate work?
            </p>
            <p>
              It evolved into a modular multi-agent system supporting Rovana
              Studio operations through research, creative direction, design
              specifications, and image-generation workflows.
            </p>
            <p>
              Specialized agents coordinate through a CLI dispatcher and
              structured JSON handoffs. Gmail and Google Calendar integrations
              support email triage, contextual drafts, and scheduled executive
              briefings.
            </p>
            <p className="small muted">
              Built with OAuth 2.0 token refresh/recovery, API retries, and
              scheduled execution.
            </p>
          </div>
        </div>
        <Tags
          items={[
            "Python",
            "Anthropic Claude SDK",
            "Gemini",
            "Gmail API",
            "Google Calendar API",
            "OAuth 2.0",
            "Cron",
          ]}
        />
      </div>
    </section>
  );
}
