import type { BizCardContent } from './model'
import { DEFAULT_CONTENT } from './defaultContent'

const KEY = 'robogov_bizcard_content_v2'
const THEME_KEY = 'robogov_bizcard_theme_v2'

export function loadContent(): BizCardContent {
  try {
    const raw = localStorage.getItem(KEY)
    if (!raw) return DEFAULT_CONTENT
    const parsed = JSON.parse(raw) as BizCardContent
    // minimal sanity fallback
    return parsed?.brand?.name ? parsed : DEFAULT_CONTENT
  } catch {
    return DEFAULT_CONTENT
  }
}

export function saveContent(c: BizCardContent) {
  localStorage.setItem(KEY, JSON.stringify(c))
}

export function resetContent() {
  localStorage.removeItem(KEY)
}

export type ThemeMode = 'dark' | 'light'

export function loadTheme(): ThemeMode {
  const raw = localStorage.getItem(THEME_KEY)
  return raw === 'light' ? 'light' : 'dark'
}

export function saveTheme(m: ThemeMode) {
  localStorage.setItem(THEME_KEY, m)
}

export function applyTheme(m: ThemeMode) {
  document.documentElement.setAttribute('data-theme', m)
}
