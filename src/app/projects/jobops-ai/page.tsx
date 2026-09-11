import type { Metadata } from "next";
import Link from "next/link";
import { JobOpsFlow } from "@/components/JobOps";
import { Tags } from "@/components/SiteChrome";
import { jobopsStack, links } from "@/lib/portfolio";
export const metadata: Metadata = {
  title: "JobOps AI — Engineering Case Study",
  description:
    "Document ingestion, semantic retrieval, evidence-backed requirement analysis, provenance validation, and multi-tenant architecture in JobOps AI.",
  alternates: { canonical: "/projects/jobops-ai" },
  openGraph: {
    title: "JobOps AI — Engineering Case Study",
    description:
      "An evidence-backed RAG and job intelligence platform built by Robert Carl Auguste.",
    url: "/projects/jobops-ai",
  },
  twitter: {
    title: "JobOps AI — Engineering Case Study",
    description:
      "An evidence-backed RAG and job intelligence platform built by Robert Carl Auguste.",
  },
};
export default function JobOpsCaseStudy() {
  return (
    <main id="main">
      <section className="case-hero container">
        <Link className="text-link" href="/#work">
          ← Back to selected work
        </Link>
        <p className="eyebrow" style={{ marginTop: "2rem" }}>
          Engineering case study / JobOps AI
        </p>
        <h1>
          Evidence first.
          <br />
          <span className="accent">Analysis second.</span>
        </h1>
        <p className="lead">
          A deployed, multi-tenant application combining document ingestion,
          semantic retrieval, and grounded RAG to connect job requirements with
          résumé evidence.
        </p>
        <Tags items={jobopsStack} />
        <div className="actions">
          {links.jobopsLive && (
            <a className="button" href={links.jobopsLive}>
              Launch JobOps AI ↗
            </a>
          )}
          {links.jobopsRepo && (
            <a className="button secondary" href={links.jobopsRepo}>
              View GitHub ↗
            </a>
          )}
        </div>
      </section>
      <div className="dark">
        <section className="case-section container">
          <p className="eyebrow">01 / The problem</p>
          <h2>Make the basis of an assessment visible.</h2>
          <p>
            A résumé and a job description contain different kinds of
            information. JobOps brings them together at the requirement level,
            so the reader can inspect what is supported by source evidence.
          </p>
          <p>
            Each requirement is classified as Supported, Partially Supported, or
            Not Supported. The application does not produce numeric ATS scores
            or hiring predictions.
          </p>
          <JobOpsFlow />
        </section>
      </div>
      <div className="container case-content">
        <section className="case-section">
          <p className="eyebrow">02 / My role</p>
          <h2>Full-stack, self-directed engineering.</h2>
          <p>
            I built the application across the ingestion and embedding pipeline,
            API and database layers, grounded AI outputs, frontend, automated
            backend tests, and Railway deployment.
          </p>
        </section>
        <section className="case-section">
          <p className="eyebrow">03 / Architecture</p>
          <h2>From source documents to grounded output.</h2>
          <div className="split">
            <div>
              <h3>Ingestion &amp; retrieval</h3>
              <p>
                Documents enter an ingestion and embedding pipeline. PostgreSQL
                with pgvector supports semantic retrieval of relevant evidence
                for the analysis.
              </p>
              <h3>Generation &amp; provenance</h3>
              <p>
                OpenAI powers grounded RAG. Server-controlled provenance
                validation requires AI-generated citations to resolve to
                application-owned source evidence.
              </p>
            </div>
            <div>
              <h3>Application &amp; data</h3>
              <p>
                A Next.js frontend connects to FastAPI APIs. Tenant-scoped
                access is enforced in SQL, with session and CSRF authentication
                and Alembic database migrations.
              </p>
              <h3>Deployment &amp; checks</h3>
              <p>
                The containerized Railway deployment has a public frontend and
                private backend/database services. Automated backend tests and
                GitHub Actions CI quality gates support development.
              </p>
            </div>
          </div>
        </section>
        <section className="case-section">
          <p className="eyebrow">04 / Engineering decisions</p>
          <h2>Keep evidence and access under application control.</h2>
          <ul className="feature-list">
            <li>
              <strong>Requirement-level classifications.</strong> Readers can
              examine individual requirements and their supporting evidence
              without relying on a single numeric score.
            </li>
            <li>
              <strong>Server-owned provenance.</strong> Citation references must
              resolve to sources owned by the application; generated text alone
              is not the source of truth.
            </li>
            <li>
              <strong>Tenant-scoped SQL.</strong> Data access is scoped to the
              tenant at the query layer.
            </li>
            <li>
              <strong>Private application services.</strong> Railway exposes the
              frontend while the backend and database remain private services.
            </li>
          </ul>
        </section>
        <section className="case-section">
          <p className="eyebrow">05 / Scope &amp; tradeoffs</p>
          <h2>Support a human assessment.</h2>
          <p>
            A supported classification indicates résumé evidence for a
            requirement. It is not a prediction of performance, employability,
            or hiring outcomes. Provenance validation checks that citations
            resolve to application evidence; it does not by itself establish
            that every interpretation is correct.
          </p>
          <p>
            Requirement-level evidence makes the result inspectable, while
            leaving judgment with the reader. No accuracy, adoption, or
            time-saving metrics are claimed here.
          </p>
        </section>
        <div className="actions">
          <a className="button" href={links.email}>
            Discuss the engineering ↗
          </a>
          <Link className="button secondary" href="/#conversation-os">
            Next: ConversationOS →
          </Link>
        </div>
      </div>
    </main>
  );
}
