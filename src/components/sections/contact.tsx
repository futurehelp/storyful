"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Reveal } from "@/components/motion";

/** Lightweight local contact form preserves the original fields without embedding WordPress forms. */
export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="section contact-section" id="contact">
      <div className="container contact-grid">
        <Reveal><p className="eyebrow">START A CONVERSATION</p><h2>Make sense<br /><em>of now.</em></h2><p className="contact-lede">Tell us what you need to understand, protect, or publish. We will bring the right questions and a clear next step.</p><a className="contact-phone" href="mailto:hello@storyful.com">hello@storyful.com</a></Reveal>
        <Reveal delay={0.12}>
          <form className="contact-form" onSubmit={(event) => { event.preventDefault(); setSubmitted(true); }}>
            <label><span>Name</span><input name="name" required placeholder="Your name" /></label>
            <label><span>Email</span><input type="email" name="email" required placeholder="you@example.com" /></label>
            <label><span>Company</span><input name="company" placeholder="Your company" /></label>
            <label><span>How can we help?</span><textarea name="message" rows={4} placeholder="Tell us a little about the challenge" /></label>
            <motion.button className="button button-primary" type="submit" whileHover={{ y: -3 }} whileTap={{ scale: 0.97 }}>{submitted ? "Thanks, we will be in touch" : "Start the conversation"}<span aria-hidden="true">↗</span></motion.button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
