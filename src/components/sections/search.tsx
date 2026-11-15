import { Reveal } from "@/components/motion";
import { ArrowLink } from "@/components/ui/arrow-link";

/** Property search call to action uses the original background asset and external HAR search. */
export function SearchSection() {
  return (
    <section className="search-section" id="process">
      <div className="search-overlay" />
      <Reveal className="container search-content">
        <p className="eyebrow eyebrow-light">TRIED AND TESTED</p>
        <h2>Processes that<br /><em>hold up.</em></h2>
        <ArrowLink href="#contact" className="button button-accent">See how we work</ArrowLink>
      </Reveal>
    </section>
  );
}
