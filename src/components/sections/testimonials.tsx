"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Reveal } from "@/components/motion";
import { partners } from "@/lib/site-content";

/** Partner rail turns the legacy logo wall into a restrained proof-of-capability section. */
export function TestimonialsSection() {
  return (
    <section className="section partners-section" id="partners">
      <div className="container">
        <Reveal><p className="eyebrow">OUR PARTNERS</p><h2>Built with the<br /><em>best in the business.</em></h2></Reveal>
        <div className="partner-grid">
          {partners.map(([name, image], index) => (
            <motion.div className="partner-mark" key={name} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .3 }} transition={{ delay: index * .06 }} whileHover={{ y: -5 }}>
              <Image src={image} alt={name} width={220} height={70} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
