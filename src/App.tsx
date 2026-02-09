import React, { useEffect, useMemo, useState } from "react";
import Parallax3D from "./components/Parallax3D";
import ThemeToggle from "./components/ThemeToggle";
import LangToggle from "./components/LangToggle";
import LogoMark from "./components/LogoMark";
import Reveal from "./components/Reveal";
import Card from "./components/Card";
import Timeline from "./components/Timeline";
import HeroVisual from "./components/HeroVisual";
import mapImg from "./assets/map.webp";
import { content, Lang } from "./content/content";

function useStoredState<T>(key: string, initial: T) {
  const [value, setValue] = useState<T>(() => {
    try {
      const raw = localStorage.getItem(key);
      if (!raw) return initial;
      return JSON.parse(raw) as T;
    } catch {
      return initial;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch {
      // ignore
    }
  }, [key, value]);

  return [value, setValue] as const;
}

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function App() {
  const [theme, setTheme] = useStoredState<"dark" | "light">("rg_theme", "dark");
  const [lang, setLang] = useStoredState<Lang>("rg_lang", "he");

  const c = useMemo(() => content[lang], [lang]);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  useEffect(() => {
    document.documentElement.lang = lang === "he" ? "he" : "en";
    document.documentElement.dir = lang === "he" ? "rtl" : "ltr";
  }, [lang]);

  return (
    <div className="app">
      <Parallax3D />

      <a className="skipLink" href="#who">
        דלג לתוכן
      </a>

      <header className="topbar">
        <div className="topbar__inner">
          <div className="brand">
            <LogoMark size={36} />
            <div className="brand__txt">
              <div className="brand__name">{c.brand.name}</div>
              <div className="brand__tag">{c.brand.tagline}</div>
            </div>
          </div>

          <nav className="nav" aria-label="Primary">
            {c.nav.map((n) => (
              <button key={n.id} className="nav__link" onClick={() => scrollToId(n.id)} type="button">
                {n.label}
              </button>
            ))}
          </nav>

          <div className="topbar__tools">
            <LangToggle lang={lang} setLang={setLang} />
            <ThemeToggle
              theme={theme}
              setTheme={setTheme}
              label={lang === "he" ? "שנה מצב תצוגה" : "Toggle theme"}
            />
          </div>
        </div>
      </header>

      <main className="main">
        <section className="hero">
          <div className="hero__inner">
            <div className="hero__left">
              <Reveal>
                <HeroVisual />
              </Reveal>
            </div>

            <div className="hero__right">
              <Card className="heroPanel" hover={false}>
                <Reveal>
                  <h1 className="hero__h">{c.hero.headline}</h1>
                </Reveal>
                <Reveal delayMs={80}>
                  <p className="hero__p">{c.hero.sub}</p>
                </Reveal>

                <Reveal delayMs={140}>
                  <div className="hero__ctaRow">
                    <a className="btn btn--primary" href={c.hero.ctas.primaryHref}>
                      <span>{c.hero.ctas.primary}</span>
                      <span className="btn__shine" aria-hidden="true" />
                    </a>
                    <a className="btn btn--ghost" href={c.hero.ctas.secondaryHref}>
                      <span>{c.hero.ctas.secondary}</span>
                    </a>
                  </div>
                </Reveal>

                <Reveal delayMs={220}>
                  <div className="miniStats">
                    <div className="miniStat">
                      <div className="miniStat__k">{lang === "he" ? "פרקטי" : "Practical"}</div>
                      <div className="miniStat__v">{lang === "he" ? "הטמעה מדורגת" : "Staged rollout"}</div>
                    </div>
                    <div className="miniStat">
                      <div className="miniStat__k">{lang === "he" ? "מאובטח" : "Secure"}</div>
                      <div className="miniStat__v">{lang === "he" ? "זהות ומדיניות" : "Identity & policy"}</div>
                    </div>
                    <div className="miniStat">
                      <div className="miniStat__k">{lang === "he" ? "מדיד" : "Measurable"}</div>
                      <div className="miniStat__v">{lang === "he" ? "Telemetry & Audit" : "Telemetry & audit"}</div>
                    </div>
                  </div>
                </Reveal>
              </Card>
            </div>
          </div>
        </section>

        <section id="who" className="section">
          <div className="section__inner">
            <Reveal>
              <h2 className="h2">{c.sections.who.title}</h2>
            </Reveal>
            <div className="grid2">
              {c.sections.who.body.map((p, i) => (
                <Reveal key={i} delayMs={i * 90}>
                  <Card>
                    <p className="p">{p}</p>
                  </Card>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="vision" className="section">
          <div className="section__inner">
            <Reveal>
              <h2 className="h2">{c.sections.vision.title}</h2>
            </Reveal>
            <div className="grid2">
              {c.sections.vision.body.map((p, i) => (
                <Reveal key={i} delayMs={i * 90}>
                  <Card>
                    <p className="p">{p}</p>
                  </Card>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="solution" className="section">
          <div className="section__inner">
            <Reveal>
              <h2 className="h2">{c.sections.solution.title}</h2>
            </Reveal>

            <div className="grid4">
              {c.sections.solution.highlights.map((h, i) => (
                <Reveal key={i} delayMs={i * 70}>
                  <Card className="featureCard">
                    <div className="featureCard__title">{h.title}</div>
                    <div className="featureCard__body">{h.body}</div>
                  </Card>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="timeline" className="section section--tight">
          <div className="section__inner">
            <Reveal>
              <h2 className="h2">{c.sections.timeline.title}</h2>
            </Reveal>
            <Timeline items={c.sections.timeline.items} />
          </div>
        </section>

        <section id="team" className="section">
          <div className="section__inner">
            <Reveal>
              <h2 className="h2">{c.sections.team.title}</h2>
            </Reveal>
            <div className="grid3">
              {c.sections.team.cards.map((t, i) => (
                <Reveal key={i} delayMs={i * 90}>
                  <Card className="teamCard">
                    <div className="teamCard__name">{t.name}</div>
                    <div className="teamCard__role">{t.role}</div>
                    <div className="teamCard__note">{t.note}</div>
                  </Card>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section section--cta">
          <div className="section__inner">
            <Reveal>
              <h2 className="h2">{c.sections.contact.title}</h2>
            </Reveal>

            <Reveal delayMs={80}>
              <Card className="contactCard" hover={false}>
                <div className="contactGrid">
                  <div className="contactLeft">
                    <p className="p p--lead">{c.sections.contact.body}</p>

                    <div className="contactDetails">
                      {c.sections.contact.details.map((d, i) => (
                        <div key={i} className="contactDetail">
                          <span className="contactDetail__icon" aria-hidden="true">
                            {d.icon === "phone" ? "📞" : d.icon === "email" ? "✉️" : "📍"}
                          </span>
                          <span className="contactDetail__text">{d.text}</span>
                        </div>
                      ))}
                    </div>

                    <div className="contactRow">
                      {c.sections.contact.actions.map((a, i) => (
                        <a key={i} className={i === 0 ? "btn btn--primary" : "btn btn--ghost"} href={a.href}>
                          <span>{a.label}</span>
                          {i === 0 ? <span className="btn__shine" aria-hidden="true" /> : null}
                        </a>
                      ))}
                    </div>

                    <div className="hint">{c.footer.note}</div>
                  </div>

                  <div className="contactMap" style={{ backgroundImage: `url(${mapImg})` }} aria-hidden="true" />
                </div>
              </Card>
            </Reveal>
          </div>
        </section>

        <footer className="footer">
          <div className="footer__inner">
            <span>© {new Date().getFullYear()} {c.brand.name}</span>
            <span className="footer__sep">·</span>
            <span className="footer__small">{lang === "he" ? "מוכן לפריסה סטטית" : "Ready for static deploy"}</span>
          </div>
        </footer>
      </main>
    </div>
  );
}
