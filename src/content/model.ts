export type TimelineItem = {
  id: string
  title: string
  subtitle?: string
  bullets: string[]
  tag?: string
}

export type BizCardContent = {
  brand: {
    name: string
    tagline: string
    oneLiner: string
  }
  sections: {
    who: { title: string; body: string }
    vision: { title: string; body: string }
    solution: { title: string; body: string; chips: string[] }
    team: { title: string; body: string; highlights: string[] }
    contact: { title: string; body: string }
  }
  timeline: {
    title: string
    items: TimelineItem[]
  }
  contact: {
    name: string
    role: string
    phone: string
    email: string
    website: string
    linkedin: string
    note: string
  }
}
