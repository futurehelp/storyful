import { navigation } from "@/lib/site-content";

/** Footer keeps the original address, regulatory links, and equal housing mark visible. */
export function SiteFooter() {
  return (
    <footer className="site-footer" id="contact">
      <div className="footer-main">
        <div className="footer-intro">
          <p className="eyebrow eyebrow-light">STORYFUL / FROM DOW JONES</p>
          <h2>Know what<br /><em>matters.</em></h2>
          <p>Verified intelligence for the moments that shape trust.</p>
        </div>
        <div className="footer-column">
          <span>CONTACT</span>
          <p>Global intelligence, verified video, and editorial expertise.</p>
          <a href="mailto:hello@storyful.com">hello@storyful.com</a>
        </div>
        <div className="footer-column">
          <span>EXPLORE</span>
          {navigation.slice(0, 4).map((item) => <a key={item.label} href={item.href}>{item.label}</a>)}
        </div>
        <div className="footer-column">
          <span>RESOURCES</span>
          <a href="#partners">Our partners</a>
          <a href="#process">Our process</a>
          <a href="#top">Back to top ↑</a>
        </div>
      </div>
      <div className="footer-white">
        <span className="footer-wordmark">storyful</span>
        <div className="footer-legal">
          <span>© 2026 Storyful Limited</span>
          <span>Part of Dow Jones</span>
        </div>
      </div>
    </footer>
  );
}
