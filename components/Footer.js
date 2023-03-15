import Script from 'next/script';
import Head from 'next/head';
import { useEffect, useState, useRef } from 'react';

export default function Footer() {

const algoliaRef = useRef(null);

  useEffect(() => {
    debugger;
    if (window.algoliasearchNetlify && algoliaRef.current) {
      window.algoliasearchNetlify({
        appId: 'HSPVQEW1FM',
        apiKey: '1e6495a9155bc2d3a7002f037b29b89c',
        siteId: 'c0ac1c6f-aed7-451e-9eb8-02f613b848fb',
        branch: 'main',
        selector: 'div#search',
      })
    }
  },[algoliaRef]);

  return (
    <>
      <Head>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/@algolia/algoliasearch-netlify-frontend@1/dist/algoliasearchNetlify.css"
      />
      </Head>

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
            <li>Face Book</li>
            <li>Instagram</li>
            <li>LinkedIn</li>
          </ul>
          
          <div id="search" ref={algoliaRef}>
            Search for a Products
            <Script 
              src="https://cdn.jsdelivr.net/npm/@algolia/algoliasearch-netlify-frontend@1/dist/algoliasearchNetlify.js" strategy="beforeInteractive"
            />
          </div>

        </section>
        <div className="project-credit">
          <p>
            This project is <a href="https://github.com/bridgpal/shopify-next-netlify">open source on GitHub</a>
            , hosted with <a href="https://bit.ly/2G29YwK">Netlify</a>, built
            with Next.js and made with 💚 by Anil Bridgpal (
            <a href="https://twitter.com/bridgpal">@bridgpal</a>)
          </p>
        </div>

      </footer> 
    </>
  );
}
