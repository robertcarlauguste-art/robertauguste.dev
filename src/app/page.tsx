import type { Metadata } from "next";
export const metadata: Metadata = { alternates: { canonical: "/" } };
import Hero from "@/components/Hero";
import JobOps from "@/components/JobOps";
import ConversationOS from "@/components/ConversationOS";
import Kevin from "@/components/Kevin";
import Story from "@/components/Story";
import { credentials, toolkit, links } from "@/lib/portfolio";
export default function Home() {
  return (
    <main id="main">
      <Hero />
      <JobOps />
      <ConversationOS />
      <Kevin />
      <Story />
      <section
        id="about"
        className="section container"
        aria-labelledby="about-title"
      >
        <p className="eyebrow">05 / About &amp; technical toolkit</p>
        <div className="split">
          <h2 id="about-title">
            Operations taught me what to automate.
            <br />
            <span className="muted">Engineering taught me how.</span>
          </h2>
          <div>
            <p>
              Before building AI systems, I spent more than 20 years in
              high-accountability logistics operations at UPS.
            </p>
            <p>
              That experience shaped how I approach software: incomplete
              information, time pressure, exceptions, handoffs, and people who
              need technology to make their work easier.
            </p>
            <p>
              Today, I bring that operational perspective to self-directed
              Applied AI engineering, from API design and data models to
              frontend delivery, testing, and deployment.
            </p>
            <p className="small">
              New Jersey · English, French, Haitian Creole
            </p>
          </div>
        </div>
        <h3 className="toolkit-title">What I build with</h3>
        <div className="toolkit">
          {toolkit.map(([title, copy]) => (
            <div key={title}>
              <h4>{title}</h4>
              <p>{copy}</p>
            </div>
          ))}
        </div>
      </section>
      <section
        id="credentials"
        className="section credentials"
        aria-labelledby="credentials-title"
      >
        <div className="container">
          <p className="eyebrow">06 / Learning &amp; credentials</p>
          <div className="split">
            <div>
              <h2 id="credentials-title">
                Continuous learning.
                <br />
                Applied immediately.
              </h2>
              <p>Learn it. Build with it. Prove it works.</p>
              <p className="muted">
                Selected from 40+ AI, cloud &amp; automation credentials.
              </p>
              {links.credentials && (
                <a className="text-link" href={links.credentials}>
                  View all credentials ↗
                </a>
              )}
            </div>
            <div className="credential-list">
              {credentials.map((item) => (
                <div key={item.provider}>
                  <h3>{item.provider}</h3>
                  <ul>
                    {item.courses.map((course) => (
                      <li key={course}>{course}</li>
                    ))}
                  </ul>
                </div>
              ))}
              <p className="small muted">
                Florida International University · Biomedical Engineering
                coursework
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
        id="contact"
        className="section container contact"
        aria-labelledby="contact-title"
      >
        <p className="eyebrow">07 / Get in touch</p>
        <h2 id="contact-title">
          Let’s build
          <br />
          something useful<span className="accent">.</span>
        </h2>
        <p className="lead">
          I’m interested in opportunities involving Applied AI, RAG, AI agents,
          full-stack AI systems, and intelligent workflow automation.
        </p>
        <p>
          Building an AI product or turning a manual workflow into software? I’d
          be interested in the conversation.
        </p>
        <div className="actions">
          <a className="button" href={links.email}>
            Contact Robert ↗
          </a>
          <a className="button secondary" href={links.resume} download>
            Download résumé ↗
          </a>
        </div>
      </section>
    </main>
  );
}
