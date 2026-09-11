import Link from "next/link";
import { links } from "@/lib/portfolio";
export function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="brand" aria-label="Robert Carl Auguste home">
          RA<span aria-hidden="true">.</span>
        </Link>
        <nav aria-label="Main navigation">
          <Link href="/#work">Work</Link>
          <Link href="/#why">Journey</Link>
          <Link href="/#about">About</Link>
          <Link href="/#contact">Contact</Link>
        </nav>
        <a className="header-resume" href={links.resume} download>
          Résumé ↗
        </a>
      </div>
    </header>
  );
}
export function Footer() {
  return (
    <footer className="site-footer container">
      <p>
        Robert Carl Auguste <span>Applied AI Engineer · New Jersey</span>
      </p>
      <div className="text-links">
        <a href={links.github}>GitHub</a>
        <a href={links.linkedin}>LinkedIn</a>
        <a href={links.email}>Email</a>
      </div>
    </footer>
  );
}
export function Tags({ items }: { items: string[] }) {
  return (
    <ul className="tags" aria-label="Technologies">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
