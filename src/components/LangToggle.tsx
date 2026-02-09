import React from "react";
import { Lang } from "../content/content";

export default function LangToggle({ lang, setLang }: { lang: Lang; setLang: (l: Lang) => void }) {
  return (
    <div className="segmented" role="group" aria-label="Language toggle">
      <button
        type="button"
        className={lang === "he" ? "segmented__btn isActive" : "segmented__btn"}
        onClick={() => setLang("he")}
        aria-pressed={lang === "he"}
      >
        עברית
      </button>
      <button
        type="button"
        className={lang === "en" ? "segmented__btn isActive" : "segmented__btn"}
        onClick={() => setLang("en")}
        aria-pressed={lang === "en"}
      >
        EN
      </button>
    </div>
  );
}
