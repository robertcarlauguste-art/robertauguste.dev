import { links } from "@/lib/portfolio";
export default function Hero() {
  return (
    <section className="hero container" aria-labelledby="hero-title">
      <div className="hero-topline">
        <p className="eyebrow">Robert Carl Auguste / Applied AI Engineer</p>
        <span className="location">New Jersey</span>
      </div>
      <h1 id="hero-title">
        Applied AI Engineer
        <br />
        building systems that
        <br />
        <span>give people their time back.</span>
      </h1>
      <div className="hero-bottom">
        <div>
          <p className="lead">
            I build full-stack AI applications, grounded RAG systems, and
            intelligent agents using Python, FastAPI, PostgreSQL/pgvector,
            Next.js, and modern LLM APIs.
          </p>
          <p className="muted">
            Practical AI: turning repetitive workflows and unstructured
            information into reliable software people can actually use.
          </p>
          <div className="actions">
            <a className="button" href="#work">
              View my work ↓
            </a>
            <a className="button secondary" href={links.resume} download>
              Download résumé ↗
            </a>
          </div>
        </div>
        <div className="hero-aside">
          <span className="eyebrow">The work, at a glance</span>
          <a href="#work">
            <span>01</span> Grounded RAG
          </a>
          <a href="#conversation-os">
            <span>02</span> Persistent memory
          </a>
          <a href="#kevin">
            <span>03</span> Intelligent agents
          </a>
          <div className="text-links">
            <a href={links.github}>GitHub ↗</a>
            <a href={links.linkedin}>LinkedIn ↗</a>
          </div>
        </div>
      </div>
      <p className="discipline-strip">
        RAG <span>·</span> AI Agents <span>·</span> Semantic Retrieval{" "}
        <span>·</span> Full-Stack AI <span>·</span> Automation
      </p>
    </section>
  );
}
