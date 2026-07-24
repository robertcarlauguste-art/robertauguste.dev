"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useInView,
  useReducedMotion,
} from "framer-motion";
import {
  Mic,
  Clock,
  Users,
  Check,
  Loader2,
  Ear,
  Brain,
  Sparkles,
  Wand2,
  FileText,
  Mail,
  CalendarCheck,
  Database,
  LucideIcon,
} from "lucide-react";
import WorkflowCard from "@/components/ui/WorkflowCard";
import WorkflowConnector from "@/components/ui/WorkflowConnector";

type Stage = "meeting" | "processing" | "deliverables";
type StatusState = "pending" | "active" | "done";

const STATUSES = [
  { icon: Ear, label: "Listening" },
  { icon: Brain, label: "Understanding context" },
  { icon: Sparkles, label: "Extracting decisions" },
  { icon: Wand2, label: "Generating deliverables" },
] as const;

const DELIVERABLES = [
  {
    icon: FileText,
    title: "Meeting Notes",
    description: "Decisions and context, organized automatically.",
  },
  {
    icon: Mail,
    title: "Follow-up Email",
    description: "Drafted in your voice and ready to send.",
  },
  {
    icon: CalendarCheck,
    title: "Calendar Tasks",
    description: "Action items scheduled with an owner and due date.",
  },
  {
    icon: Database,
    title: "CRM Updated",
    description: "Records synced — nothing typed twice.",
  },
] as const;

const MEETING_HOLD_MS = 1400;
const STATUS_STEP_MS = 600;
const PROCESSING_TAIL_MS = 350;
const DELIVERABLE_STEP_MS = 480;
const FINAL_DELAY_MS = 700;

function StageKicker({
  label,
  icon: Icon,
  pulsing = false,
}: {
  label: string;
  icon?: LucideIcon;
  pulsing?: boolean;
}) {
  return (
    <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-cyan-300">
      {pulsing ? (
        <span className="relative flex h-2 w-2" aria-hidden="true">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
        </span>
      ) : Icon ? (
        <Icon size={12} aria-hidden="true" />
      ) : null}
      {label}
    </div>
  );
}

function MeetingSummary() {
  return (
    <div>
      <h3 className="text-xl font-semibold text-white">
        Client Strategy Meeting
      </h3>

      <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-zinc-400">
        <span className="inline-flex items-center gap-1.5">
          <Clock size={14} aria-hidden="true" />
          42 minutes
        </span>
        <span className="inline-flex items-center gap-1.5">
          <Users size={14} aria-hidden="true" />
          3 participants
        </span>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300">
          <Check size={12} className="text-cyan-400" aria-hidden="true" />
          Decisions made
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300">
          <Check size={12} className="text-cyan-400" aria-hidden="true" />
          Action items identified
        </span>
      </div>
    </div>
  );
}

function ProcessingRow({
  icon: Icon,
  label,
  state,
}: {
  icon: LucideIcon;
  label: string;
  state: StatusState;
}) {
  return (
    <div className="flex items-center gap-3 py-3">
      <div
        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border transition-colors duration-300 ${
          state === "pending"
            ? "border-white/10 bg-white/5 text-zinc-600"
            : "border-cyan-400/30 bg-cyan-500/10 text-cyan-400"
        }`}
      >
        <Icon size={16} aria-hidden="true" />
      </div>

      <span
        className={`flex-1 text-sm transition-colors duration-300 ${
          state === "pending" ? "text-zinc-600" : "text-zinc-200"
        }`}
      >
        {label}
      </span>

      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
        <AnimatePresence mode="wait" initial={false}>
          {state === "active" && (
            <motion.span
              key="active"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Loader2
                size={16}
                className="animate-spin text-cyan-400"
                aria-hidden="true"
              />
            </motion.span>
          )}
          {state === "done" && (
            <motion.span
              key="done"
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              <Check size={16} className="text-cyan-400" aria-hidden="true" />
            </motion.span>
          )}
        </AnimatePresence>
      </span>
    </div>
  );
}

function ProcessingList({ statusIndex }: { statusIndex: number }) {
  return (
    <ul className="mt-2 divide-y divide-white/5">
      {STATUSES.map((status, index) => {
        const state: StatusState =
          index < statusIndex
            ? "done"
            : index === statusIndex
              ? "active"
              : "pending";

        return (
          <li key={status.label}>
            <ProcessingRow icon={status.icon} label={status.label} state={state} />
          </li>
        );
      })}
    </ul>
  );
}

function DeliverablesList({ count }: { count: number }) {
  return (
    <ul
      className="mt-2 space-y-3"
      aria-label="Deliverables generated from this meeting"
    >
      {DELIVERABLES.slice(0, count).map((item) => (
        <li key={item.title}>
          <WorkflowCard
            icon={item.icon}
            title={item.title}
            description={item.description}
          />
        </li>
      ))}
    </ul>
  );
}

function ClosingStatement({
  visible,
  animated,
}: {
  visible: boolean;
  animated: boolean;
}) {
  const content = (
    <>
      The meeting is over.
      <br />
      <span className="font-semibold text-white">
        The work is already organized.
      </span>
    </>
  );

  if (!animated) {
    return (
      <p className="mt-4 max-w-2xl text-center text-2xl text-gray-300 md:text-3xl">
        {content}
      </p>
    );
  }

  return (
    <motion.p
      initial={{ opacity: 0, y: 16 }}
      animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="mt-4 max-w-2xl text-center text-2xl text-gray-300 md:text-3xl"
    >
      {content}
    </motion.p>
  );
}

export default function ConversationOS() {
  const prefersReducedMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  const [stage, setStage] = useState<Stage>("meeting");
  const [statusIndex, setStatusIndex] = useState(-1);
  const [deliverableCount, setDeliverableCount] = useState(0);
  const [showFinal, setShowFinal] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion || !isInView) return;

    const timers: ReturnType<typeof setTimeout>[] = [];
    let elapsed = MEETING_HOLD_MS;

    timers.push(setTimeout(() => setStage("processing"), elapsed));

    STATUSES.forEach((_, index) => {
      timers.push(setTimeout(() => setStatusIndex(index), elapsed));
      elapsed += STATUS_STEP_MS;
    });

    timers.push(
      setTimeout(() => {
        setStatusIndex(STATUSES.length);
        setStage("deliverables");
      }, elapsed)
    );
    elapsed += PROCESSING_TAIL_MS;

    DELIVERABLES.forEach((_, index) => {
      timers.push(setTimeout(() => setDeliverableCount(index + 1), elapsed));
      elapsed += DELIVERABLE_STEP_MS;
    });

    timers.push(setTimeout(() => setShowFinal(true), elapsed + FINAL_DELAY_MS));

    return () => timers.forEach(clearTimeout);
  }, [isInView, prefersReducedMotion]);

  const liveMessage =
    stage === "processing" && statusIndex >= 0 && statusIndex < STATUSES.length
      ? `ConversationOS: ${STATUSES[statusIndex].label}`
      : stage === "deliverables" &&
          deliverableCount > 0 &&
          deliverableCount <= DELIVERABLES.length &&
          !showFinal
        ? `${DELIVERABLES[deliverableCount - 1].title} ready`
        : showFinal
          ? "The meeting is over. The work is already organized."
          : "";

  const header = (
    <div className="mx-auto max-w-2xl text-center">
      <p className="mb-6 text-xs font-medium uppercase tracking-[0.3em] text-gray-400">
        Meeting Intelligence, Automated
      </p>
      <h2
        id="conversation-os-heading"
        className="text-5xl font-bold leading-tight md:text-7xl"
      >
        One conversation.
        <br />
        Four outcomes.
      </h2>
    </div>
  );

  if (prefersReducedMotion) {
    return (
      <section
        ref={sectionRef}
        id="conversation-os"
        aria-labelledby="conversation-os-heading"
        className="relative overflow-hidden bg-black px-8 py-32 text-white"
      >
        <div className="relative mx-auto max-w-3xl">
          {header}

          <div className="mt-16 flex flex-col items-center gap-2">
            <div className="w-full max-w-md rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
              <StageKicker icon={Mic} label="Client Meeting" />
              <MeetingSummary />
            </div>

            <WorkflowConnector direction="vertical" />

            <div className="w-full max-w-md rounded-2xl border border-cyan-400/30 bg-white/[0.06] p-8 backdrop-blur-xl">
              <StageKicker icon={Check} label="ConversationOS complete" />
              <ProcessingList statusIndex={STATUSES.length} />
            </div>

            <WorkflowConnector direction="vertical" />

            <div className="w-full max-w-md">
              <StageKicker icon={Check} label="Delivered instantly" />
              <DeliverablesList count={DELIVERABLES.length} />
            </div>

            <WorkflowConnector direction="vertical" />

            <ClosingStatement visible animated={false} />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      ref={sectionRef}
      id="conversation-os"
      aria-labelledby="conversation-os-heading"
      className="relative overflow-hidden bg-black px-8 py-32 text-white"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/3 rounded-full bg-cyan-500/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {header}
        </motion.div>

        <div aria-live="polite" className="sr-only">
          {liveMessage}
        </div>

        <div className="mt-16 flex flex-col items-center">
          <motion.div layout className="mx-auto w-full max-w-md">
            <AnimatePresence mode="wait">
              {stage === "meeting" && (
                <motion.div
                  key="meeting"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
                >
                  <StageKicker icon={Mic} label="Client Meeting" />
                  <MeetingSummary />
                </motion.div>
              )}

              {stage === "processing" && (
                <motion.div
                  key="processing"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="rounded-2xl border border-cyan-400/30 bg-white/[0.06] p-8 backdrop-blur-xl shadow-2xl shadow-cyan-500/10"
                >
                  <StageKicker pulsing label="ConversationOS is working" />
                  <ProcessingList statusIndex={statusIndex} />
                </motion.div>
              )}

              {stage === "deliverables" && (
                <motion.div
                  key="deliverables"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  <StageKicker icon={Check} label="Delivered instantly" />
                  <DeliverablesList count={deliverableCount} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          <WorkflowConnector direction="vertical" delay={0.1} />

          <ClosingStatement visible={showFinal} animated />
        </div>
      </div>
    </section>
  );
}
