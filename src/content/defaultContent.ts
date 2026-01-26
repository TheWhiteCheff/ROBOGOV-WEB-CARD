import type { BizCardContent } from './model'

/**
 * ✅ תוכן דיפולטי (לא רגיש): בנוי בכוונה כ"Placeholder" כדי שתוכל להחליף/למחוק.
 * אם יש מידע פרטי/סודי — אל תשים אותו כאן. שים אותו רק אחרי שאתה מוכן לשיתוף.
 */
export const DEFAULT_CONTENT: BizCardContent = {
  brand: {
    name: 'ROBOGOV',
    tagline: 'Robotics • Sky • Governance',
    oneLiner: 'כרטיס ביקור דיגיטלי לפתרון מורכב — קצר, חד, ומרשים.'
  },
  sections: {
    who: {
      title: 'מי אנחנו',
      body:
        'אנחנו צוות קטן וחד שמחבר בין רובוטיקה, מערכות שמיים, תקשורת מאובטחת ותהליכי ממשל. בלי רעש — רק ביצוע.'
    },
    vision: {
      title: 'חזון',
      body:
        'לאפשר אוטונומיה מבוקרת בקנה מידה גדול: זהויות, הרשאות, תקשורת, ניטור וציות — כשכל רכיב עובד יחד כיחידה אחת.'
    },
    solution: {
      title: 'הפתרון',
      body:
        'שכבת יסוד אחודה שמסדרת תהליכים, אבטחה, תצורה ותפעול — כדי שהמערכת תעבוד מהיום הראשון ותגדל בלי לשבור כלום.',
      chips: ['Identity & Trust', 'Secure Comms', 'Fleet Control', 'Audit & Compliance', 'Ops Toolkit']
    },
    team: {
      title: 'צוות',
      body:
        'ניסיון מעשי במערכות מורכבות. אנחנו לא מחפשים “עוד כלי” — אנחנו בונים שכבה שמחברת את הכל.',
      highlights: ['Architecture-first', 'Security-by-design', 'Iterative rollout', 'Hands-on delivery']
    },
    contact: {
      title: 'צור קשר',
      body:
        'בדרך כלל מספיקות 7 דקות שיחה כדי להבין התאמה. אם יש צורך — נציג POC קצר עם צעדים ברורים.'
    }
  },
  timeline: {
    title: 'תוכנית עבודה (כרטיסיות טיימליין)',
    items: [
      {
        id: 't1',
        tag: 'Phase 01',
        title: 'יישור קו קצר',
        subtitle: 'מה המטרה + מה הגבולות',
        bullets: ['איסוף דרישות קצר', 'סיכוני אבטחה/רגולציה', 'הגדרת “Done” ברור']
      },
      {
        id: 't2',
        tag: 'Phase 02',
        title: 'POC ממוקד',
        subtitle: 'להוכיח יכולת במהירות',
        bullets: ['Prototype מהיר', 'מדדים להצלחה', 'דוח תובנות ותיקונים']
      },
      {
        id: 't3',
        tag: 'Phase 03',
        title: 'MVP מבוקר',
        subtitle: 'מינימום מוצר, מקסימום שליטה',
        bullets: ['Identity/Access', 'Secure comms', 'Telemetry בסיסי']
      },
      {
        id: 't4',
        tag: 'Phase 04',
        title: 'Pilot מדורג',
        subtitle: 'פריסה חכמה, בלי הפתעות',
        bullets: ['Feature flags', 'Observability', 'נהלי תפעול']
      },
      {
        id: 't5',
        tag: 'Phase 05',
        title: 'Scaling + Hardening',
        subtitle: 'ביצועים, אבטחה, יציבות',
        bullets: ['ניטור מתקדם', 'אוטומציה', 'תהליכי שינוי מבוקרים']
      }
    ]
  },
  contact: {
    name: 'Your Name',
    role: 'Founder / Program Lead',
    phone: '+972-XX-XXX-XXXX',
    email: 'name@domain.com',
    website: 'domain.com',
    linkedin: 'linkedin.com/in/yourprofile',
    note: 'תשנה את הפרטים כאן. אפשר גם לכבות שדות שלא רוצים להציג.'
  }
}
