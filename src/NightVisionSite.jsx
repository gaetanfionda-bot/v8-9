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
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setVisible(true);
        });
      },
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

        <nav className="hidden items-center gap-8 md:flex text-[10px] md:text-xs text-neutral-300">
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

      <h1 className="logo-animated text-5xl md:text-6xl font-bold leading-tight tracking-[0.3em]">
        NIGHT VISION
      </h1>

      <h2 className="title-halo mt-8 bg-gradient-to-r from-[#CC1010] to-[#ff3b3b] bg-clip-text text-3xl md:text-4xl font-bold text-transparent leading-tight">
        DISTRIBUTEURS AUTOMATIQUES DE LUNETTES
      </h2>

      <p className="mt-4 text-xl md:text-2xl text-neutral-300">
        POUR CLUBS, BARS ET FESTIVALS
      </p>
    </section>
  );
}

/* SOLUTIONS */
function SolutionsSection() {
  const solutions = [
    {
      img: "/assets/CLUBS.png",
      title: "CLUBS",
      desc: "IMPACT VISUEL, CAPACITÉ HAUTE, INTÉGRATION PREMIUM EN SALLE.",
      cta: "ÉQUIPER MON CLUB",
    },
    {
      img: "/assets/PETITS-CLUBS-BARS.png",
      title: "PETITS CLUBS / BARS",
      desc: "FORMAT COMPACT, LUMIÈRE ROUGE DISTINCTIVE, LOOK LUXE MÊME EN ESPACE RÉDUIT.",
      cta: "ÉQUIPER MON CLUB",
    },
    {
      img: "/assets/FESTIVALS.png",
      title: "FESTIVALS",
      desc: "ROBUSTE, MOBILE, PRÊT À TENIR TOUTE LA NUIT EN EXTÉRIEUR.",
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
          className="card rounded-2xl overflow-hidden hover:shadow-[0_0_45px_rgba(204,16,16,0.4)] transition-all flex flex-col"
        >
          <div className="relative">
            <img
              src={img}
              alt={title}
              className="w-full h-[450px] object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(204,16,16,0.28)_0%,transparent_70%)] mix-blend-screen blur-xl" />
          </div>

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
    {
      title: "REVENU SUPPLÉMENTAIRE",
      desc: "UN FLUX COMPLÉMENTAIRE ET RÉGULIER POUR LE LIEU.",
    },
    {
      title: "MEILLEURE EXPÉRIENCE CLIENT",
      desc: "SERVICE PREMIUM, RAPIDE, SANS RUPTURE DE SOIRÉE.",
    },
    {
      title: "PAIEMENT SANS CONTACT",
      desc: "RAPIDE, SÛR, INTUITIF.",
    },
    {
      title: "0 COMPLEXITÉ POUR VOUS",
      desc: "INSTALLATION CLÉ EN MAIN. ON GÈRE.",
    },
  ];

  return (
    <section
      id="avantages"
      className="mx-auto max-w-7xl px-6 pb-16 text-center"
    >
      <h2 className="title-halo text-3xl mb-10">AVANTAGES</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {avantages.map(({ title, desc }) => (
          <div
            key={title}
            className="card rounded-2xl p-8 hover:shadow-[0_0_45px_rgba(204,16,16,0.35)] text-center"
          >
            <h3 className="halo-sync text-[#CC1010] text-sm md:text-base mb-3 leading-tight">
              {title}
            </h3>
            <p className="text-neutral-300 text-[10px] md:text-sm leading-relaxed normal-case">
              {desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* GALERIE / IMMERSION LIVE */
function GalerieSection() {
  return (
    <section id="galerie" className="mx-auto max-w-7xl px-6 py-16">
      <h2 className="title-halo text-center text-3xl mb-8">IMMERSION LIVE</h2>
<ImmersionLive />
    </section>
  );
}

/* IMMERSION LIVE slider panoramique */
function ImmersionLive() {
  const frames = [
    "/assets/immersion-1.png",
    "/assets/immersion-2.png",
    "/assets/immersion-3.png",
    "/assets/immersion-4.png",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % frames.length);
    }, 4000);
    return () => clearInterval(id);
  }, [frames.length]);

  return (
    <div className="rounded-2xl overflow-hidden border border-neutral-800 bg-black/40 p-4">
      <div className="relative w-full overflow-hidden rounded-xl border border-neutral-800 group hover:shadow-[0_0_60px_rgba(204,16,16,0.55)] hover:border-[#CC1010]/60 transition-all duration-700">

        <div className="nv-immersion-wrapper">
          {frames.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Night Vision Live ${i + 1}`}
              className={`nv-immersion-img ${i === index ? "active" : ""}`}
            />
          ))}
        </div>

        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4 flex flex-col items-center text-center">
          <span className="text-[#CC1010] text-base md:text-lg font-bold tracking-[0.3em] drop-shadow-[0_0_20px_rgba(204,16,16,0.6)]">
            NIGHT VISION
          </span>
          <span className="text-[8px] md:text-[10px] text-neutral-300 tracking-widest mt-2">
            HAUT DE GAMME · CONTACTLESS · ALL NIGHT
          </span>
        </div>
      </div>
    </div>
  );
}

/* CONTACT */
function ContactSection() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-3xl px-6 py-20 text-center"
    >
      <h2 className="title-halo text-3xl mb-6">
        DEMANDER UNE INSTALLATION
      </h2>
      <p className="text-neutral-300 mb-10 text-xs md:text-sm normal-case">
        REJOIGNEZ LES LIEUX ÉQUIPÉS NIGHT VISION ET OFFREZ À VOS CLIENTS
        UNE EXPÉRIENCE UNIQUE.
      </p>
      <InstallForm />
    </section>
  );
}

function InstallForm() {
  const [sent, setSent] = useState(false);
  const [err, setErr] = useState("");
  const [phoneError, setPhoneError] = useState("");

  function validatePhone(value) {
    if (!value) return true;
    const regex = /^\+?[0-9\s().-]{6,20}$/;
    return regex.test(value);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setErr("");
    setPhoneError("");

    const tel = e.target.Telephone.value;
    if (!validatePhone(tel)) {
      setPhoneError("Format de téléphone invalide (ex: +33 6 12 34 56 78)");
      return;
    }

    try {
      const form = e.currentTarget;
      const data = new FormData(form);
      await fetch("/", { method: "POST", body: data });
      setSent(true);
      form.reset();
    } catch {
      setErr("Problème lors de l'envoi. Réessaie.");
    }
  }

  if (sent) {
    return (
      <div className="rounded-2xl border border-neutral-800 bg-neutral-950 p-8">
        <p className="text-[#CC1010]">✔ DEMANDE ENVOYÉE</p>
        <p className="mt-2 text-neutral-300 text-[11px] md:text-sm normal-case">
          Merci ! Tu recevras un email de confirmation si activé sur Netlify.
        </p>
      </div>
    );
  }

  return (
    <form
      name="installation"
      method="POST"
      data-netlify="true"
      netlify-honeypot="_gotcha"
      onSubmit={handleSubmit}
      className="grid grid-cols-1 gap-4 text-left md:grid-cols-2"
    >
      <input type="hidden" name="form-name" value="installation" />
      <p className="hidden">
        <label>
          Ne pas remplir: <input name="_gotcha" />
        </label>
      </p>

      <input
        name="Etablissement"
        placeholder="Nom de l’établissement"
        required
        className="col-span-2 rounded-xl border border-neutral-800 bg-neutral-950 px-4 py-3 focus:border-[#CC1010]"
      />

      <select
        name="Type"
        className="rounded-xl border border-neutral-800 bg-neutral-950 px-4 py-3 focus:border-[#CC1010]"
      >
        <option>CLUB</option>
        <option>BAR / PETIT CLUB</option>
        <option>FESTIVAL</option>
      </select>

      <input
        name="Ville"
        placeholder="Ville"
        required
        className="rounded-xl border border-neutral-800 bg-neutral-950 px-4 py-3 focus:border-[#CC1010]"
      />

      <div className="flex flex-col"><label htmlFor="Capacite" className="mb-1 text-xs md:text-sm text-neutral-400">Capacité (nombre de places)</label><input id="Capacite" name="Capacite" type="number" min="0" step="1" required placeholder="Ex. 1000" className="rounded-xl border border-neutral-800 bg-neutral-950 px-4 py-3 focus:border-[#CC1010]" /></div>
<input
        name="Telephone"
        type="tel" required
        placeholder="Numéro de téléphone (ex: +33 6 12 34 56 78)"
        className={`rounded-xl bg-neutral-950 px-4 py-3 focus:border-[#CC1010] ${
          phoneError
            ? "border-red-500 ring-2 ring-red-500/50 shadow-[0_0_16px_rgba(204,16,16,0.45)]"
            : "border-neutral-800"
        }`}
        aria-invalid={Boolean(phoneError)}
        aria-describedby={phoneError ? "tel-error" : undefined}
      />
      {phoneError && (
        <p
          id="tel-error"
          className="col-span-2 text-red-400 text-xs md:text-sm"
        >
          {phoneError}
        </p>
      )}

      <input
        name="Email"
        type="email"
        placeholder="Email"
        required
        className="rounded-xl border border-neutral-800 bg-neutral-950 px-4 py-3 focus:border-[#CC1010]"
      />

      <textarea
        name="Message"
        placeholder="Votre message"
        rows={4}
        className="col-span-2 rounded-xl border border-neutral-800 bg-neutral-950 px-4 py-3 focus:border-[#CC1010] normal-case"
      />

      <div className="col-span-2 mt-4 text-center">
        <button
          type="submit"
          className="halo-sync rounded-xl bg-[#CC1010] px-6 py-3 text-white text-xs md:text-sm"
        >
          ENVOYER MA DEMANDE
        </button>
        {err && (
          <p className="mt-3 text-xs md:text-sm text-red-400">{err}</p>
        )}
      </div>
    </form>
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
