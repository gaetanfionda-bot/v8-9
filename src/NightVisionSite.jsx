import React, { useState, useEffect, useRef } from "react";

export default function NightVisionSite() {
  return (
    <div className="w-full min-h-screen bg-black text-white font-cinzel tracking-wide antialiased">
      <Header />
      <div className="pt-20" />
      <HeroSection />

      <SectionReveal><SolutionsSection /></SectionReveal>
      <SectionReveal><AvantagesSection /></SectionReveal>
      <SectionReveal><GalerieSection /></SectionReveal>
      <SectionReveal><ContactSection /></SectionReveal>

      <FooterSection />
    </div>
  );
}

/* Fade-in wrapper on scroll */
function SectionReveal({ children }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => e.isIntersecting && setVisible(true)),
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className={`reveal ${visible ? "show" : ""}`}>
      {children}
    </section>
  );
}

/* HEADER */
function Header() {
  return (
    <header className="nv-header fixed inset-x-0 top-0 z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <img
            src="/assets/LOGO.png.png"
            alt="Night Vision Logo"
            className="rounded glow-pulse h-12 w-12 md:h-16 md:w-16 xl:h-20 xl:w-20"
          />
          <span className="tracking-widest text-xs md:text-sm">
            NIGHT VISION
          </span>
        </div>

        <nav className="hidden md:flex gap-8 text-[10px] md:text-xs text-neutral-300">
          <a href="#solutions" className="hover:text-white">SOLUTIONS</a>
          <a href="#avantages" className="hover:text-white">AVANTAGES</a>
          <a href="#galerie" className="hover:text-white">GALERIE</a>
          <a href="#contact" className="hover:text-white">CONTACT</a>
        </nav>

        <a
          href="#contact"
          className="halo-sync rounded-xl bg-[#CC1010] px-3 py-2 text-[10px] md:text-xs text-white"
        >
          ÉQUIPER MON CLUB
        </a>
      </div>
    </header>
  );
}

/* HERO */
function HeroSection() {
  return (
    <section className="relative z-10 py-16 text-center">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(204,16,16,0.22)_0%,transparent_70%)] blur-3xl" />

      <h1 className="logo-animated text-5xl md:text-6xl font-bold tracking-[0.3em]">
        NIGHT VISION
      </h1>

      <h2 className="title-halo mt-8 bg-gradient-to-r from-[#CC1010] to-[#ff3b3b] bg-clip-text text-3xl md:text-4xl font-bold text-transparent">
        DISTRIBUTEURS AUTOMATIQUES DE LUNETTES
      </h2>

      <p className="mt-4 text-xl md:text-2xl text-neutral-300">
        POUR CLUBS, BARS ET FESTIVALS
      </p>
    </section>
  );
}

/* SOLUTIONS — HALO SUPPRIMÉ */
function SolutionsSection() {
  const solutions = [
    {
      img: "/assets/CLUBS.png",
      title: "CLUBS",
      desc: "CAPACITÉ 130 LUNETTES",
      cta: "ÉQUIPER MON CLUB",
    },
    {
      img: "/assets/PETITS-CLUBS-BARS.png",
      title: "PETITS CLUBS / BARS",
      desc: "CAPACITÉ 50 LUNETTES",
      cta: "ÉQUIPER MON CLUB",
    },
    {
      img: "/assets/FESTIVALS.png",
      title: "FESTIVALS",
      desc: "CAPACITÉ 600 LUNETTES",
      cta: "ÉQUIPER MON FESTIVAL",
    },
  ];

  return (
    <section
      id="solutions"
      className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 pb-24 md:grid-cols-3"
    >
      {solutions.map(({ img, title, desc, cta }) => (
        <div
          key={title}
          className="card rounded-2xl overflow-hidden flex flex-col transition-all"
        >
          <img
            src={img}
            alt={title}
            className="w-full h-[450px] object-cover opacity-90"
          />

          <div className="p-6 text-center flex flex-col flex-1">
            <h3 className="text-xl md:text-2xl text-[#CC1010] mb-2">
              {title}
            </h3>
            <p className="text-neutral-300 text-[11px] md:text-sm mb-6 normal-case">
              {desc}
            </p>
            <a
              href="#contact"
              className="halo-sync inline-block rounded-lg bg-[#CC1010] px-6 py-2 text-white mt-auto text-[10px] md:text-xs"
            >
              {cta}
            </a>
          </div>
        </div>
      ))}
    </section>
  );
}

/* AVANTAGES */
function AvantagesSection() {
  const avantages = [
    { title: "REVENU SUPPLÉMENTAIRE", desc: "UN FLUX COMPLÉMENTAIRE ET RÉGULIER POUR LE LIEU." },
    { title: "MEILLEURE EXPÉRIENCE CLIENT", desc: "SERVICE PREMIUM, RAPIDE, SANS RUPTURE DE SOIRÉE." },
    { title: "PAIEMENT SANS CONTACT", desc: "RAPIDE, SÛR, INTUITIF." },
    { title: "0 COMPLEXITÉ POUR VOUS", desc: "INSTALLATION CLÉ EN MAIN. ON GÈRE." },
  ];

  return (
    <section id="avantages" className="mx-auto max-w-7xl px-6 pb-16 text-center">
      <h2 className="title-halo text-3xl mb-10">AVANTAGES</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {avantages.map(({ title, desc }) => (
          <div
            key={title}
            className="card rounded-2xl p-8 hover:shadow-[0_0_45px_rgba(204,16,16,0.35)]"
          >
            <h3 className="halo-sync text-[#CC1010] mb-3 text-sm md:text-base">
              {title}
            </h3>
            <p className="text-neutral-300 text-[10px] md:text-sm normal-case">
              {desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* GALERIE */
function GalerieSection() {
  return (
    <section id="galerie" className="mx-auto max-w-7xl px-6 py-16">
      <h2 className="title-halo text-center text-3xl mb-8">IMMERSION LIVE</h2>
      <ImmersionLive />
    </section>
  );
}

/* IMMERSION LIVE */
function ImmersionLive() {
  const frames = [
    "/assets/immersion-1.png",
    "/assets/immersion-2.png",
    "/assets/immersion-3.png",
    "/assets/immersion-4.png",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex(i => (i + 1) % frames.length), 4000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="rounded-2xl overflow-hidden border border-neutral-800 bg-black/40 p-4">
      <div className="relative overflow-hidden rounded-xl border border-neutral-800 group hover:shadow-[0_0_60px_rgba(204,16,16,0.55)] transition-all">
        {frames.map((src, i) => (
          <img
            key={i}
            src={src}
            alt=""
            className={`nv-immersion-img ${i === index ? "active" : ""}`}
          />
        ))}
      </div>
    </div>
  );
}

/* CONTACT */
function ContactSection() {
  return (
    <section id="contact" className="mx-auto max-w-3xl px-6 py-20 text-center">
      <h2 className="title-halo text-3xl mb-6">DEMANDER UNE INSTALLATION</h2>
      <p className="text-neutral-300 mb-10 text-xs md:text-sm normal-case">
        REJOIGNEZ LES LIEUX ÉQUIPÉS NIGHT VISION ET OFFREZ À VOS CLIENTS UNE EXPÉRIENCE UNIQUE.
      </p>
      <InstallForm />
    </section>
  );
}

/* FOOTER */
function FooterSection() {
  return (
    <footer className="border-t border-neutral-900 bg-black py-10 text-center text-[10px] md:text-xs text-neutral-400 tracking-widest">
      CONTACT@NIGHTVISION.FR · MENTIONS LÉGALES · © NIGHT VISION
    </footer>
  );
}
