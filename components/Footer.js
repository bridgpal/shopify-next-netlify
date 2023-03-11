export default function Footer() {
  return (
    <>
      <footer>
        <section className="testimonial">
          <h2>
            “Somewhere between the bottom of the climb and the summit is the answer to the mystery why we climb."
          </h2>
          <p>Greg Child</p>
        </section>
        <section className="app-footer-links">
          <ul>
            <li>About</li>
            <li>Company</li>
            <li>Locations</li>
            <li>Contact</li>
            <li>Hours</li>
          </ul>
          <ul>
            <li>Twitter</li>
            <li>Facebook</li>
            <li>Instagram</li>
            <li>LinkedIn</li>
          </ul>
          <div className="newsletter">
            <h2 className="newsletter-title">Sign up for our newsletter:</h2>
            <input
              className="newsletter-input"
              type="email"
              placeholder="Enter your email"
            />
          </div>
        </section>
        <div className="project-credit">
          <p>
            This project is
            <a href="https://github.com/brigpal/shopify-next-netlify">
              open source on GitHub
            </a>
            , hosted with <a href="https://bit.ly/2G29YwK">Netlify</a>, built
            with Next.js and made with 💚 by Anil Bridgpal (
            <a href="https://twitter.com/bridgpal">@bridgpal</a>)
          </p>
        </div>
      </footer>
    </>
  );
}
