import Link from "next/link";
import { jobopsStack, links } from "@/lib/portfolio";
import { Tags } from "./SiteChrome";
export function JobOpsFlow() {
  return (
    <figure className="pipeline">
      <figcaption>
        System flow <span>Architecture overview</span>
      </figcaption>
      <ol>
        <li>
          <span className="step">01 / Ingest</span>
          <h3>Documents</h3>
          <p>Résumé and job description</p>
          <div className="flow-detail">
            Document ingestion
            <br />
            Embedding pipeline
          </div>
        </li>
        <li>
          <span className="step">02 / Retrieve</span>
          <h3>Semantic search</h3>
          <p>Relevant source evidence</p>
          <div className="flow-detail">
            PostgreSQL + pgvector
            <br />
            Tenant-scoped access
          </div>
        </li>
        <li>
          <span className="step">03 / Ground</span>
          <h3>Requirement analysis</h3>
          <p>Classifications tied to evidence</p>
          <div className="flow-detail">
            Grounded RAG
            <br />
            Provenance validation
          </div>
        </li>
      </ol>
      <p className="pipeline-note">
        Supported · Partially Supported · Not Supported
      </p>
    </figure>
  );
}
export default function JobOps() {
  return (
    <section id="work" className="section dark" aria-labelledby="jobops-title">
      <div className="container">
        <div className="section-label">
          <p className="eyebrow">01 / Featured engineering project</p>
          <span className="project-status">Deployed on Railway</span>
        </div>
        <div className="project-heading">
          <h2 id="jobops-title">
            JobOps AI<span className="accent">.</span>
          </h2>
          <p>
            Evidence-backed RAG &amp;
            <br />
            job intelligence platform
          </p>
        </div>
        <p className="project-intro">
          A multi-tenant AI application that turns résumés and job descriptions
          into evidence-backed requirement analysis.
        </p>
        <JobOpsFlow />
        <div className="split project-details">
          <div>
            <h3>Evidence behind every conclusion.</h3>
            <p>
              JobOps evaluates individual requirements as Supported, Partially
              Supported, or Not Supported and connects its conclusions to résumé
              evidence. It does not generate numeric ATS scores or hiring
              predictions.
            </p>
          </div>
          <ul className="feature-list">
            <li>Server-controlled citation and provenance validation</li>
            <li>Tenant-scoped SQL access and session/CSRF authentication</li>
            <li>
              Alembic migrations, automated backend tests, and CI quality gates
            </li>
            <li>Public frontend with private backend and database services</li>
          </ul>
        </div>
        <Tags items={jobopsStack} />
        <div className="actions">
          <Link className="button" href="/projects/jobops-ai">
            Explore the case study ↗
          </Link>
          {links.jobopsLive && (
            <a className="button secondary" href={links.jobopsLive}>
              Launch JobOps AI ↗
            </a>
          )}
          {links.jobopsRepo && (
            <a className="text-link" href={links.jobopsRepo}>
              View GitHub ↗
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
