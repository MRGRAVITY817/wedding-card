import create from "zustand";

export type Language = "ko" | "en";

interface UseLanguageParams {
  lang: Language;
  setLang: (lang: Language) => void;
}

export const useLanguage = create<UseLanguageParams>((set) => ({
  lang: "ko",
  setLang: (lang) => set((_state) => ({ lang })),
}));
