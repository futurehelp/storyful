import Image from "next/image";
import { Reveal } from "@/components/motion";
import { ArrowLink } from "@/components/ui/arrow-link";

/** Trust section mirrors the original credibility block with the local source image. */
export function AboutSection() {
  return (
    <section className="section about-section" id="about">
      <div className="container about-grid">
        <Reveal className="about-copy">
          <p className="eyebrow eyebrow-light">WHY STORYFUL</p>
          <h2>Real moments.<br /><em>Clear context.</em><br />Better decisions.</h2>
          <p>Storyful combines human verification, deep editorial expertise, and modern intelligence to help organizations act with clarity when the world moves fast.</p>
          <p>From reputation risk to eyewitness video, we help teams understand what is happening and decide what matters next.</p>
          <ArrowLink href="#contact" className="button button-light">See how we work</ArrowLink>
        </Reveal>
        <Reveal className="about-image" delay={0.12}>
          <Image src="/images/source/verification-team.png" alt="Storyful verification team reviewing eyewitness video" fill sizes="(max-width: 860px) 100vw, 50vw" />
        </Reveal>
      </div>
    </section>
  );
}
