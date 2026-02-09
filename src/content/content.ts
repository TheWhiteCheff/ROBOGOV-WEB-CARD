export type Lang = "he" | "en";

export type TimelineItem = {
  title: string;
  subtitle: string;
  bullets: string[];
  image?: "factory" | "drone" | "robotarm" | "governance";
};

export type Content = {
  brand: {
    name: string;
    tagline: string;
  };
  nav: { id: string; label: string }[];
  hero: {
    headline: string;
    sub: string;
    ctas: { primary: string; secondary: string } & { primaryHref: string; secondaryHref: string };
  };
  sections: {
    who: { title: string; body: string[] };
    vision: { title: string; body: string[] };
    solution: { title: string; highlights: { title: string; body: string }[] };
    timeline: { title: string; items: TimelineItem[] };
    team: { title: string; cards: { name: string; role: string; note: string }[] };
    contact: { title: string; body: string; actions: { label: string; href: string }[]; details: { icon: "phone"|"email"|"pin"; text: string }[] };
  };
  footer: { note: string };
};

const baseHighlightsHe = [
  { title: "זהות, הרשאות ומדיניות", body: "הגדרת מי עושה מה — בצורה עקבית, ניתנת לבקרה ומותאמת לארגונים." },
  { title: "תקשורת מאובטחת & תפעול", body: "שכבת תקשורת וניהול שמסייעת לפריסה, ניטור ותחזוקה של מערכות חכמות." },
  { title: "תיעוד, Audit ו-Telemetry", body: "איסוף אירועים וסטטוסים כדי להחליט מהר — בלי לנחש." },
  { title: "אינטגרציה נקייה", body: "API-ים ומודולים שנועדו להתחבר למערכות קיימות, לא להחליף אותן בכוח." },
];

const baseTimelineHe: TimelineItem[] = [
  {
    title: "אבחון קצר ומדויק",
    subtitle: "מה כואב באמת",
    image: "factory",
    bullets: ["מיפוי זרימות עבודה", "הגדרת KPI", "זיהוי חסמים תפעוליים"],
  },
  {
    title: "POC מהיר",
    subtitle: "להוכיח ערך בשטח",
    image: "drone",
    bullets: ["חיבור למקורות נתונים", "דשבורד סטטוס", "תסריטי בדיקה"],
  },
  {
    title: "MVP מדורג",
    subtitle: "מינימום שמייצר אימפקט",
    image: "robotarm",
    bullets: ["רכיבים מודולריים", "הרשאות בסיסיות", "פריסה מבוקרת"],
  },
  {
    title: "פיילוטים",
    subtitle: "עם תוצאות מדידות",
    image: "drone",
    bullets: ["מדידה והשוואה", "שיפור נקודתי", "ייצוב תהליכים"],
  },
  {
    title: "Scale & Governance",
    subtitle: "מוכנות לארגון גדול",
    image: "governance",
    bullets: ["Audit מלא", "SLA/Monitoring", "תיעוד והדרכות"],
  },
];

export const content: Record<Lang, Content> = {
  he: {
    brand: { name: "RoboGov", tagline: "Sky Robotics · Secure Ops · Governance" },
    nav: [
      { id: "who", label: "מי אנחנו" },
      { id: "vision", label: "חזון" },
      { id: "solution", label: "מה אנחנו מציעים" },
      { id: "timeline", label: "שלבים" },
      { id: "team", label: "הצוות" },
      { id: "contact", label: "צור קשר" },
    ],
    hero: {
      headline: "כרטיס ביקור שמרגיש כמו מוצר.",
      sub: "פתרונות שמחברים בין רובוטיקה, שמיים ותפעול מאובטח — בצורה פרקטית, מדידה ומבוססת מציאות.",
      ctas: {
        primary: "לתיאום שיחה",
        secondary: "לראות את השלבים",
        primaryHref: "#contact",
        secondaryHref: "#timeline",
      },
    },
    sections: {
      who: {
        title: "מי אנחנו",
        body: [
          "אנחנו בונים שכבת יסוד למערכות חכמות: תפעול, ממשל, זהות, ניטור ותקשורת — בלי רעש מיותר.",
          "המטרה: להפוך מערכות מתקדמות למשהו שאפשר לפרוס, לתחזק ולהפעיל בביטחון — גם בקנה מידה ארגוני.",
        ],
      },
      vision: {
        title: "חזון",
        body: [
          "לא עוד פתרון נקודתי שנשבר בפריסה.",
          "כן למערכת שמתחברת למציאות: תהליכים, הרשאות, מדידה, ואחריות תפעולית — מהיום הראשון.",
        ],
      },
      solution: { title: "מה אנחנו מציעים", highlights: baseHighlightsHe },
      timeline: { title: "שלבים — כמו כרטיסיות", items: baseTimelineHe },
      team: {
        title: "הצוות",
        cards: [
          { name: "מייסד/ת", role: "Architecture & Product", note: "Hands-on · תכנון מערכות · אינטגרציה" },
          { name: "הנדסה", role: "Platform & Ops", note: "מודולריות · ניטור · תשתיות" },
          { name: "שותפים", role: "Field & Delivery", note: "POC · פיילוטים · הטמעה" },
        ],
      },
      contact: {
        title: "צור קשר",
        body: "אם אתה צריך להציג את זה למישהו — זה בדיוק המקום ללחוץ, לדבר, ולהמשיך משם.",
        actions: [
          { label: "WhatsApp", href: "https://wa.me/972501234567" },
          { label: "Email", href: "mailto:hello@example.com" },
          { label: "Call", href: "tel:+972501234567" },
        ],
        details: [
          { icon: "phone", text: "+972 55-555-5555" },
          { icon: "email", text: "info@robogov.com" },
          { icon: "pin", text: "Israel" },
        ],
      },
    },
    footer: { note: "תוכן ברירת המחדל כאן כללי. החלף אותו לפני פרסום." },
  },
  en: {
    brand: { name: "RoboGov", tagline: "Sky Robotics · Secure Ops · Governance" },
    nav: [
      { id: "who", label: "Who" },
      { id: "vision", label: "Vision" },
      { id: "solution", label: "Offer" },
      { id: "timeline", label: "Stages" },
      { id: "team", label: "Team" },
      { id: "contact", label: "Contact" },
    ],
    hero: {
      headline: "A business card that feels like a product.",
      sub: "Practical, measurable foundations that connect robotics, sky systems, and secure operations — built for real-world deployment.",
      ctas: { primary: "Book a call", secondary: "See stages", primaryHref: "#contact", secondaryHref: "#timeline" },
    },
    sections: {
      who: {
        title: "Who we are",
        body: [
          "We build the foundation layer for smart systems: operations, governance, identity, telemetry, and secure communications — without the noise.",
          "The goal: make advanced systems deployable and maintainable at organizational scale.",
        ],
      },
      vision: {
        title: "Vision",
        body: ["No more brittle point-solutions.", "Yes to an operationally responsible system: policy, measurement, and accountability from day one."],
      },
      solution: {
        title: "What we offer",
        highlights: [
          { title: "Identity & Policy", body: "Define who can do what — consistent, auditable, enterprise-ready." },
          { title: "Secure Comms & Ops", body: "A layer that helps you deploy, monitor, and operate smart fleets safely." },
          { title: "Audit & Telemetry", body: "Capture events and states to decide fast — without guessing." },
          { title: "Clean Integration", body: "Modular APIs designed to connect to existing systems, not replace them by force." },
        ],
      },
      timeline: {
        title: "Stages — card timeline",
        items: [
          { title: "Fast diagnosis", subtitle: "What actually hurts", image: "factory", bullets: ["Workflow mapping", "KPI definition", "Operational bottlenecks"] },
          { title: "Quick POC", subtitle: "Prove value in the field", image: "drone", bullets: ["Connect data sources", "Status dashboard", "Test scenarios"] },
          { title: "Staged MVP", subtitle: "Minimum that impacts", image: "robotarm", bullets: ["Modular components", "Baseline permissions", "Controlled rollout"] },
          { title: "Pilots", subtitle: "Measurable outcomes", image: "drone", bullets: ["Measure & compare", "Targeted iterations", "Stabilize processes"] },
          { title: "Scale & governance", subtitle: "Enterprise readiness", image: "governance", bullets: ["Full audit", "SLA/monitoring", "Docs & training"] },
        ],
      },
      team: {
        title: "Team",
        cards: [
          { name: "Founder", role: "Architecture & Product", note: "Hands-on · systems · integration" },
          { name: "Engineering", role: "Platform & Ops", note: "modularity · telemetry · infra" },
          { name: "Partners", role: "Field & Delivery", note: "POC · pilots · delivery" },
        ],
      },
      contact: {
        title: "Contact",
        body: "If you're showing this to someone — this is the moment to tap, talk, and move forward.",
        actions: [
          { label: "WhatsApp", href: "https://wa.me/972501234567" },
          { label: "Email", href: "mailto:hello@example.com" },
          { label: "Call", href: "tel:+972501234567" },
        ],
        details: [
          { icon: "phone", text: "+972 55-555-5555" },
          { icon: "email", text: "info@robogov.com" },
          { icon: "pin", text: "Israel" },
        ],
      },
    },
    footer: { note: "Default content is generic. Replace before publishing." },
  },
};
