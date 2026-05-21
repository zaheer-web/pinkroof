import React from "react";
import mainImg from "../img/za-2.jpeg";
import smallImg from "../img/za-1.jpeg";

export default function AboutStory() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,300;0,400;1,300;1,400&family=Jost:wght@300;400;500&display=swap');

        .ab-section {
          position: relative;
          overflow: hidden;
          padding: 80px 20px;
          background: linear-gradient(145deg, #FEFEFD 0%, #FBE6E5 55%, #f8dede 100%);
          font-family: 'Jost', sans-serif;
        }
        @media (min-width: 768px) { .ab-section { padding: 100px 48px; } }
        @media (min-width: 1024px) { .ab-section { padding: 110px 80px; } }

        .ab-blob1 {
          position: absolute; top: -100px; left: -80px;
          width: 380px; height: 380px; border-radius: 50%;
          background: rgba(184,139,139,0.09); pointer-events: none;
        }
        .ab-blob2 {
          position: absolute; bottom: -80px; right: -60px;
          width: 300px; height: 300px; border-radius: 50%;
          background: rgba(217,194,194,0.13); pointer-events: none;
        }

        .ab-grid {
          position: relative; z-index: 1;
          display: grid;
          grid-template-columns: 1fr;
          gap: 56px;
          align-items: center;
          max-width: 1200px;
          margin: 0 auto;
        }
        @media (min-width: 1024px) {
          .ab-grid { grid-template-columns: 1fr 1fr; gap: 72px; }
        }

        /* ── LEFT ── */
        .ab-label {
          display: flex; align-items: center; gap: 14px; margin-bottom: 20px;
        }
        .ab-label-line { width: 36px; height: 1px; background: #2a1a1a; }
        .ab-label-text {
          font-size: 9px; letter-spacing: 0.32em;
          text-transform: uppercase; color: #2a1a1a;
        }

        .ab-heading {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2.4rem, 5vw, 4.2rem);
          font-weight: 300; line-height: 1.06;
          color: #2a1a1a; margin-bottom: 28px;
        }
        .ab-heading em { font-style: italic; color: #b88b8b; }

        .ab-para {
          font-size: 15px; line-height: 1.82;
          color: #5a4848; margin-bottom: 16px; max-width: 480px;
        }

        /* stat cards */
        .ab-stats {
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 12px; margin: 32px 0 36px;
        }
        .ab-stat {
          background: rgba(184,139,139,0.09);
          border: 1px solid rgba(184,139,139,0.22);
          padding: 18px 20px;
          transition: background 0.25s ease;
        }
        .ab-stat:hover { background: rgba(184,139,139,0.16); }
        .ab-stat-num {
          font-family: 'Playfair Display', serif;
          font-size: 34px; font-weight: 300; color: #b88b8b; line-height: 1;
        }
        .ab-stat-unit { font-size: 14px; color: #b88b8b; }
        .ab-stat-label {
          font-size: 10px; letter-spacing: 0.12em;
          text-transform: uppercase; color: #9a7a7a; margin-top: 6px;
        }

        .ab-btn {
          display: inline-flex; align-items: center; gap: 10px;
          padding: 14px 32px;
          background: #2a1a1a; color: #fefefd;
          font-family: 'Jost', sans-serif;
          font-size: 10px; letter-spacing: 0.22em; text-transform: uppercase;
          border: none;  cursor: pointer;
          transition: background 0.25s ease, transform 0.2s ease;
        }
        .ab-btn:hover { background: #b88b8b; transform: translateY(-1px); }

        /* ── RIGHT ── */
        .ab-right {
          position: relative;
          height: 520px;
        }
        @media (min-width: 768px) { .ab-right { height: 580px; } }

        .ab-main-img {
          position: absolute;
          top: 0; right: 0;
          width: 80%; height: 100%;
           overflow: hidden;
          box-shadow: 0 24px 64px rgba(42,26,26,0.18);
        }
        .ab-main-img img {
          width: 100%; height: 100%; object-fit: cover;
          display: block;
          transition: transform 0.7s cubic-bezier(0.25,0.46,0.45,0.94);
        }
        .ab-main-img:hover img { transform: scale(1.04); }
        .ab-main-img-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(to top, rgba(42,26,26,0.45) 0%, transparent 55%);
          border-radius: 28px;
        }

        /* big number watermark */
        .ab-watermark {
          position: absolute; top: 28px; right: 28px;
          font-family: 'Playfair Display', serif;
          font-size: clamp(4rem, 10vw, 8rem);
          font-weight: 300; line-height: 1;
          color: rgba(255,255,255,0.15);
          pointer-events: none; z-index: 2;
        }

        /* small floating image */
        .ab-small-img {
          position: absolute;
          bottom: 32px; left: 0;
          width: 160px; height: 200px;
          border-radius: 22px; overflow: hidden;
          border: 7px solid #FEFEFD;
          box-shadow: 0 16px 40px rgba(42,26,26,0.2);
          z-index: 3;
          transition: transform 0.4s ease;
        }
        .ab-small-img:hover { transform: translateY(-4px); }
        .ab-small-img img { width: 100%; height: 100%; object-fit: cover; display: block; }

        @media (min-width: 768px) {
          .ab-small-img { width: 200px; height: 240px; left: -16px; }
        }

        /* floating badge */
        .ab-badge {
          position: absolute;
          top: 28px; left: 0;
          background: #2a1a1a; color: #fefefd;
          padding: 14px 20px;
          border-radius: 16px;
          box-shadow: 0 12px 32px rgba(0,0,0,0.22);
          z-index: 4;
        }
        @media (min-width: 768px) { .ab-badge { left: -16px; } }
        .ab-badge-sub {
          font-size: 8px; letter-spacing: 0.28em;
          text-transform: uppercase; color: rgba(255,255,255,0.45);
        }
        .ab-badge-title { font-size: 15px; font-weight: 500; margin-top: 4px; }

        /* est. pill */
        .ab-est-pill {
          position: absolute;
          bottom: 48px; right: -4px;
          background: #b88b8b; color: #fefefd;
          font-size: 9px; letter-spacing: 0.18em; text-transform: uppercase;
          padding: 7px 16px; border-radius: 100px;
          box-shadow: 0 6px 20px rgba(184,139,139,0.4);
          z-index: 4;
        }

        /* experience ribbon at bottom of main image */
        .ab-ribbon {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          padding: 20px 24px;
          display: flex; align-items: center; gap: 16px;
          z-index: 3;
        }
        .ab-ribbon-divider { width: 1px; height: 32px; background: rgba(255,255,255,0.25); }
        .ab-ribbon-num {
          font-family: 'Playfair Display', serif;
          font-size: 28px; font-weight: 300; color: #fefefd; line-height: 1;
        }
        .ab-ribbon-label {
          font-size: 10px; letter-spacing: 0.12em;
          text-transform: uppercase; color: rgba(255,255,255,0.55);
          margin-top: 3px;
        }
      `}</style>

      <section className="ab-section">
        <div className="ab-blob1" />
        <div className="ab-blob2" />

        <div className="ab-grid">

          {/* ─── LEFT ─── */}
          <div>
            <div className="ab-label">
              <div className="ab-label-line" />
              <span className="ab-label-text">Who We Are</span>
            </div>

            <h2 className="ab-heading">
              Born from a<br />
              <em>Passion</em> for<br />
              Beautiful Spaces
            </h2>

            <p className="ab-para">
              Pink Roof Interior was founded with a vision to create
              elegant and meaningful spaces that combine comfort,
              luxury and functionality.
            </p>
            <p className="ab-para">
              Our philosophy is simple — every design should feel
              personal, timeless and emotionally connected to the
              people who live in it.
            </p>
            <p className="ab-para">
              We collaborate with skilled designers and craftsmen
              to transform interiors into inspiring experiences
              filled with warmth and sophistication.
            </p>

            {/* Stats */}
            <div className="ab-stats">
              <div className="ab-stat">
                <div>
                  <span className="ab-stat-num">12</span>
                  <span className="ab-stat-unit">+</span>
                </div>
                <div className="ab-stat-label">Years of Experience</div>
              </div>
              <div className="ab-stat">
                <div>
                  <span className="ab-stat-num">340</span>
                  <span className="ab-stat-unit">+</span>
                </div>
                <div className="ab-stat-label">Projects Delivered</div>
              </div>
            </div>

            <button className="ab-btn">
              Start a Conversation →
            </button>
          </div>

          {/* ─── RIGHT ─── */}
          <div className="ab-right">

            {/* Main image */}
            <div className="ab-main-img">
              <img src={mainImg} alt="Interior design studio work" />
              <div className="ab-main-img-overlay" />

              {/* Big number watermark */}
              <div className="ab-watermark">12</div>

              {/* Bottom ribbon inside main image */}
              <div className="ab-ribbon">
                <div>
                 
                </div>
                <div className="ab-ribbon-divider" />
                <div>
                  
                </div>
              </div>
            </div>

            {/* Floating small image */}
            <div className="ab-small-img">
              <img src={smallImg} alt="Interior detail" />
            </div>

           

          </div>
        </div>
      </section>
    </>
  );
}