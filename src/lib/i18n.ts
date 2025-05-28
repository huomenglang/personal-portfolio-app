// src/lib/i18n.ts
import 'server-only';

export type Locale = 'en' | 'kh';
interface Dictionary {
  en:()=>object,
  kh:()=>object
}
const dictionaries:Dictionary = {
  en: () => import('../../public/locales/en/common.json').then((m) => m.default),
  kh: () => import('../../public/locales/kh/common.json').then((m) => m.default),
};

export const getDictionary = async (locale: Locale) => {
  return dictionaries[locale]?.() ?? dictionaries.en();
};
