import React from 'react'
import { Parallax3D } from './components/Parallax3D'
import { Mark } from './components/Icons'
import { Button } from './components/Button'
import { GlassCard } from './components/GlassCard'
import { Chip } from './components/Chip'
import { Reveal } from './components/Reveal'
import { applyTheme, loadContent, loadTheme, saveContent, saveTheme, type ThemeMode } from './content/storage'
import type { BizCardContent } from './content/model'
import { motion } from 'framer-motion'

function useHashNav() {
  React.useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const t = e.target as HTMLElement | null
      const a = t?.closest('a[href^="#"]') as HTMLAnchorElement | null
      if (!a) return
      const id = a.getAttribute('href')?.slice(1)
      if (!id) return
      const el = document.getElementById(id)
      if (!el) return
      e.preventDefault()
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      history.replaceState(null, '', `#${id}`)
    }
    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [])
}

function ThemeToggle({ theme, setTheme }: { theme: ThemeMode; setTheme: (m: ThemeMode) => void }) {
  return (
    <button
      className="theme-toggle"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      aria-label="Toggle theme"
      title="Light / Dark"
    >
      <span className="theme-dot" />
      <span className="theme-label">{theme === 'dark' ? 'Dark' : 'Light'}</span>
    </button>
  )
}

function AdminDrawer({
  open,
  onClose,
  content,
  setContent
}: {
  open: boolean
  onClose: () => void
  content: BizCardContent
  setContent: (c: BizCardContent) => void
}) {
  const [text, setText] = React.useState<string>(() => JSON.stringify(content, null, 2))
  React.useEffect(() => setText(JSON.stringify(content, null, 2)), [content])

  function save() {
    try {
      const parsed = JSON.parse(text) as BizCardContent
      setContent(parsed)
      saveContent(parsed)
      onClose()
    } catch {
      alert('JSON לא תקין. בדוק פסיקים/סוגריים.')
    }
  }

  return (
    <div className={`admin ${open ? 'open' : ''}`} role="dialog" aria-modal="true" aria-label="Admin Drawer">
      <div className="admin-head">
        <div className="admin-title">
          <Mark variant="shield" width={18} height={18} />
          <span>Admin (Local only)</span>
        </div>
        <button className="icon-btn" onClick={onClose} aria-label="Close">✕</button>
      </div>

      <div className="admin-body">
        <p className="admin-note">
          זה נשמר <b>רק</b> בדפדפן שלך (localStorage). מומלץ להשאיר כאן תוכן כללי ולשתול פרטי רק לפני שיתוף.
        </p>
        <textarea value={text} onChange={(e) => setText(e.target.value)} spellCheck={false} />
        <div className="admin-actions">
          <Button variant="ghost" glow={false} onClick={() => setText(JSON.stringify(content, null, 2))}>Reset view</Button>
          <Button onClick={save}>Save</Button>
        </div>
      </div>
    </div>
  )
}

export default function App() {
  useHashNav()

  const [content, setContent] = React.useState<BizCardContent>(() => loadContent())
  const [theme, setTheme] = React.useState<ThemeMode>(() => loadTheme())
  const [adminOpen, setAdminOpen] = React.useState(false)

  React.useEffect(() => {
    applyTheme(theme)
    saveTheme(theme)
  }, [theme])

  return (
    <div className="app">
      <Parallax3D />

      <header className="topbar">
        <a className="brand" href="#top">
          <span className="brand-badge">
            <Mark variant="spark" width={18} height={18} />
          </span>
          <span className="brand-text">
            <span className="brand-name">{content.brand.name}</span>
            <span className="brand-tag">{content.brand.tagline}</span>
          </span>
        </a>

        <nav className="nav">
          <a href="#who">מי אנחנו</a>
          <a href="#vision">חזון</a>
          <a href="#solution">פתרון</a>
          <a href="#timeline">טיימליין</a>
          <a href="#team">צוות</a>
          <a href="#contact">צור קשר</a>
        </nav>

        <div className="topbar-actions">
          <ThemeToggle theme={theme} setTheme={setTheme} />
          <button className="icon-btn" onClick={() => setAdminOpen(true)} aria-label="Open admin" title="Admin">
            ⚙
          </button>
        </div>
      </header>

      <main id="top" className="container">
        <section className="hero">
          <div className="hero-left">
            <Reveal>
              <div className="kicker">
                <Mark variant="bot" width={18} height={18} />
                <span>Business Card • One Page • High Impact</span>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="title">
                {content.brand.oneLiner}
                <span className="title-glow" aria-hidden="true" />
              </h1>
            </Reveal>

            <Reveal delay={0.14}>
              <p className="subtitle">
                אתר שנועד לשיחה בעל-פה: קצר, חד, מרשים — בלי לגרום לאנשים “ללכת לאיבוד”.
                <span className="sub-strong"> אתה בוחר מה לחשוף.</span>
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="cta-row">
                <Button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                  דבר איתי
                </Button>
                <a className="link-quiet" href="#solution">מה אנחנו מציעים →</a>
              </div>
            </Reveal>

            <Reveal delay={0.26}>
              <div className="mini-stats">
                <div className="stat">
                  <span className="stat-num">01</span>
                  <span className="stat-label">Scope ברור</span>
                </div>
                <div className="stat">
                  <span className="stat-num">02</span>
                  <span className="stat-label">POC מהיר</span>
                </div>
                <div className="stat">
                  <span className="stat-num">03</span>
                  <span className="stat-label">Rollout מדורג</span>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="hero-right">
            <motion.div
              className="badge-stack"
              initial={{ opacity: 0, y: 18, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1], delay: 0.18 }}
            >
              <GlassCard className="big-card" tilt pop>
                <div className="big-card-top">
                  <div className="big-icon">
                    <Mark variant="sky" width={22} height={22} />
                  </div>
                  <div className="big-title">
                    <div className="big-name">{content.contact.name}</div>
                    <div className="big-role">{content.contact.role}</div>
                  </div>
                </div>

                <div className="big-lines">
                  <div className="line">
                    <span className="dot" />
                    <span>{content.contact.phone}</span>
                  </div>
                  <div className="line">
                    <span className="dot" />
                    <span>{content.contact.email}</span>
                  </div>
                  <div className="line">
                    <span className="dot" />
                    <span>{content.contact.website}</span>
                  </div>
                </div>

                <div className="big-footer">
                  <span className="tag">Sky & Robotics</span>
                  <span className="tag">Security-first</span>
                  <span className="tag">Delivery</span>
                </div>

                <div className="shine" aria-hidden="true" />
              </GlassCard>

              <div className="floating-cards">
                <GlassCard className="float-card a" tilt={false} pop>
                  <Mark variant="shield" width={18} height={18} />
                  <div>
                    <div className="fc-title">Trust Layer</div>
                    <div className="fc-sub">Identity • Policy • Audit</div>
                  </div>
                </GlassCard>

                <GlassCard className="float-card b" tilt={false} pop>
                  <Mark variant="bot" width={18} height={18} />
                  <div>
                    <div className="fc-title">Control</div>
                    <div className="fc-sub">Fleet • Ops • Tooling</div>
                  </div>
                </GlassCard>

                <GlassCard className="float-card c" tilt={false} pop>
                  <Mark variant="sky" width={18} height={18} />
                  <div>
                    <div className="fc-title">Sky</div>
                    <div className="fc-sub">Comms • Telemetry</div>
                  </div>
                </GlassCard>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="who" className="section">
          <Reveal>
            <SectionHeader icon="bot" title={content.sections.who.title} />
          </Reveal>
          <Reveal delay={0.08}>
            <p className="section-body">{content.sections.who.body}</p>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="grid-3">
              <Feature title="לא “עוד ספק”" body="שכבת יסוד שחוצה מוצרים — כדי להפסיק לתקן נקודתית." />
              <Feature title="מימוש מדורג" body="לא זורקים הכל. בונים שלב-שלב, עם מדדים וגבולות." />
              <Feature title="איכות תפעול" body="תצורה, ניטור, אבטחה — חלק מהDNA, לא “אחר כך”." />
            </div>
          </Reveal>
        </section>

        <section id="vision" className="section">
          <Reveal>
            <SectionHeader icon="spark" title={content.sections.vision.title} />
          </Reveal>
          <Reveal delay={0.08}>
            <GlassCard className="quote" tilt={false} pop>
              <div className="quote-mark">“</div>
              <div className="quote-text">{content.sections.vision.body}</div>
              <div className="quote-foot">— Program statement</div>
            </GlassCard>
          </Reveal>
        </section>

        <section id="solution" className="section">
          <Reveal>
            <SectionHeader icon="shield" title={content.sections.solution.title} />
          </Reveal>
          <Reveal delay={0.08}>
            <p className="section-body">{content.sections.solution.body}</p>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="chips">
              {content.sections.solution.chips.map((c) => (
                <Chip key={c}>{c}</Chip>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.16}>
            <div className="grid-2">
              <GlassCard className="pillar" tilt pop>
                <div className="pillar-top">
                  <Mark variant="shield" width={20} height={20} />
                  <div>
                    <div className="pillar-title">Governance & Security</div>
                    <div className="pillar-sub">כללים, זהות, הרשאות, בקרה</div>
                  </div>
                </div>
                <ul className="list">
                  <li>Policy + access מובנה</li>
                  <li>Audit & traces “by default”</li>
                  <li>עבודה תקינה תחת שינוי</li>
                </ul>
              </GlassCard>

              <GlassCard className="pillar" tilt pop>
                <div className="pillar-top">
                  <Mark variant="bot" width={20} height={20} />
                  <div>
                    <div className="pillar-title">Operations & Control</div>
                    <div className="pillar-sub">תפעול, ניהול, כלים</div>
                  </div>
                </div>
                <ul className="list">
                  <li>Telemetry + health</li>
                  <li>Rollout מדורג ומדיד</li>
                  <li>תשתית כלי מנהל</li>
                </ul>
              </GlassCard>
            </div>
          </Reveal>
        </section>

        <section id="timeline" className="section">
          <Reveal>
            <SectionHeader icon="sky" title={content.timeline.title} />
          </Reveal>

          <div className="timeline">
            {content.timeline.items.map((it, idx) => (
              <Reveal key={it.id} delay={0.04 * idx} y={24}>
                <GlassCard className="tcard" tilt pop>
                  <div className="tcard-top">
                    <span className="phase">{it.tag}</span>
                    <span className="pulse" aria-hidden="true" />
                  </div>
                  <div className="tcard-title">{it.title}</div>
                  {it.subtitle && <div className="tcard-sub">{it.subtitle}</div>}
                  <ul className="tbullets">
                    {it.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                </GlassCard>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="team" className="section">
          <Reveal>
            <SectionHeader icon="bot" title={content.sections.team.title} />
          </Reveal>
          <Reveal delay={0.08}>
            <p className="section-body">{content.sections.team.body}</p>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="grid-4">
              {content.sections.team.highlights.map((h) => (
                <GlassCard key={h} className="mini" tilt pop>
                  <div className="mini-dot" />
                  <div className="mini-text">{h}</div>
                </GlassCard>
              ))}
            </div>
          </Reveal>
        </section>

        <section id="contact" className="section contact">
          <Reveal>
            <SectionHeader icon="spark" title={content.sections.contact.title} />
          </Reveal>
          <Reveal delay={0.08}>
            <p className="section-body">{content.sections.contact.body}</p>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="contact-grid">
              <GlassCard className="contact-card" tilt pop>
                <div className="contact-name">{content.contact.name}</div>
                <div className="contact-role">{content.contact.role}</div>

                <div className="contact-lines">
                  <a className="cl" href={`tel:${content.contact.phone}`}>
                    <span className="cl-k">טל׳</span><span className="cl-v">{content.contact.phone}</span>
                  </a>
                  <a className="cl" href={`mailto:${content.contact.email}`}>
                    <span className="cl-k">מייל</span><span className="cl-v">{content.contact.email}</span>
                  </a>
                  <a className="cl" href={`https://${content.contact.website}`} target="_blank" rel="noreferrer">
                    <span className="cl-k">אתר</span><span className="cl-v">{content.contact.website}</span>
                  </a>
                  <a className="cl" href={`https://${content.contact.linkedin}`} target="_blank" rel="noreferrer">
                    <span className="cl-k">LinkedIn</span><span className="cl-v">{content.contact.linkedin}</span>
                  </a>
                </div>

                <div className="contact-actions">
                  <Button onClick={() => copyAll(content)}>העתק פרטים</Button>
                  <Button variant="ghost" glow={false} onClick={() => downloadVCard(content)}>VCF</Button>
                </div>

                <div className="small-note">{content.contact.note}</div>
              </GlassCard>

              <GlassCard className="contact-card alt" tilt pop>
                <div className="alt-title">מה לעשות עכשיו?</div>
                <ol className="steps">
                  <li>שיחה קצרה: גבולות + תוצאה רצויה</li>
                  <li>POC ממוקד: מדדים + החלטה</li>
                  <li>מסלול פריסה: מדורג ויציב</li>
                </ol>
                <div className="divider" />
                <div className="alt-cta">
                  <a className="bubble-link" href={`mailto:${content.contact.email}?subject=Intro%20Call&body=היי,%20אשמח%20לשיחה%20קצרה.`}>
                    שלח מייל עכשיו
                  </a>
                  <span className="hint">זה דף “כרטיס” — לא קטלוג.</span>
                </div>
              </GlassCard>
            </div>
          </Reveal>
        </section>

        <footer className="footer">
          <div className="foot-left">
            <span className="foot-dot" />
            <span>Built for impact • Editable • Privacy-first</span>
          </div>
          <div className="foot-right">
            <a href="#top">חזרה למעלה</a>
          </div>
        </footer>
      </main>

      <AdminDrawer open={adminOpen} onClose={() => setAdminOpen(false)} content={content} setContent={setContent} />
    </div>
  )
}

function SectionHeader({ icon, title }: { icon: 'bot' | 'shield' | 'sky' | 'spark'; title: string }) {
  return (
    <div className="section-head">
      <span className="section-icon">
        <Mark variant={icon} width={18} height={18} />
      </span>
      <h2 className="section-title">{title}</h2>
      <span className="section-line" aria-hidden="true" />
    </div>
  )
}

function Feature({ title, body }: { title: string; body: string }) {
  return (
    <GlassCard className="feature" tilt pop>
      <div className="feature-title">{title}</div>
      <div className="feature-body">{body}</div>
      <div className="feature-pop" aria-hidden="true" />
    </GlassCard>
  )
}

function copyAll(content: BizCardContent) {
  const lines = [
    content.contact.name,
    content.contact.role,
    `טל: ${content.contact.phone}`,
    `מייל: ${content.contact.email}`,
    `אתר: ${content.contact.website}`,
    `LinkedIn: ${content.contact.linkedin}`
  ].join('\n')
  navigator.clipboard?.writeText(lines)
  alert('הועתק!')
}

function downloadVCard(content: BizCardContent) {
  const safe = (s: string) => (s || '').replace(/\n/g, ' ')
  const vcf = [
    'BEGIN:VCARD',
    'VERSION:3.0',
    `FN:${safe(content.contact.name)}`,
    `TITLE:${safe(content.contact.role)}`,
    `TEL;TYPE=CELL:${safe(content.contact.phone)}`,
    `EMAIL;TYPE=INTERNET:${safe(content.contact.email)}`,
    `URL:${safe(content.contact.website.startsWith('http') ? content.contact.website : 'https://' + content.contact.website)}`,
    `NOTE:${safe(content.brand.tagline)}`,
    'END:VCARD'
  ].join('\n')

  const blob = new Blob([vcf], { type: 'text/vcard;charset=utf-8' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = 'contact.vcf'
  document.body.appendChild(a)
  a.click()
  a.remove()
  URL.revokeObjectURL(url)
}
