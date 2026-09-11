import { links } from "@/lib/portfolio";
import { Tags } from "./SiteChrome";
export default function ConversationOS() {
  return (
    <section
      id="conversation-os"
      className="section container"
      aria-labelledby="conversation-title"
    >
      <p className="eyebrow">02 / Full-stack AI system</p>
      <div className="split">
        <div>
          <h2 id="conversation-title">ConversationOS</h2>
          <p className="subtitle">AI relationship intelligence platform</p>
          <p>
            ConversationOS transforms unstructured conversations into
            persistent, searchable client intelligence and structured follow-up
            context.
          </p>
          <p>
            Whisper transcription and Claude memory extraction feed client
            profiles with remembered facts, confidence metadata, and linked
            conversation history. Semantic retrieval makes that context
            searchable.
          </p>
          <a className="text-link" href={links.conversation}>
            Explore ConversationOS on GitHub ↗
          </a>
        </div>
        <div className="memory-flow" aria-label="ConversationOS architecture">
          <p className="eyebrow">From conversation to context</p>
          <ol>
            <li>
              <span>01</span>
              <div>
                <h3>Capture the conversation</h3>
                <p>Audio → Whisper transcription</p>
              </div>
            </li>
            <li>
              <span>02</span>
              <div>
                <h3>Extract structured memory</h3>
                <p>Claude → facts, confidence, client reconciliation</p>
              </div>
            </li>
            <li>
              <span>03</span>
              <div>
                <h3>Recall what matters</h3>
                <p>Client profiles → pgvector semantic retrieval</p>
              </div>
            </li>
          </ol>
          <p className="small muted">
            FastAPI APIs · PostgreSQL / Redis persistence · Docker Compose
          </p>
        </div>
      </div>
      <Tags
        items={[
          "Python",
          "FastAPI",
          "PostgreSQL",
          "pgvector",
          "Redis",
          "Next.js",
          "Claude",
          "Whisper",
          "Docker",
        ]}
      />
    </section>
  );
}
