import { useEffect, useState } from 'react';
import { getHighlighter, type Highlighter } from 'shiki-es';
import { themeConfig } from '../theme';
import { languageMap } from './language';

// 支持的语言
const supportedLanguages = Object.keys(languageMap) as (keyof typeof languageMap)[];
export type LanguageType = (typeof supportedLanguages)[number];

export const useHighlight = (language, theme) => {
  const [shiki, setShiki] = useState<Highlighter>(null);

  const initShiki = async () => {
    const highlighter = await getHighlighter({
      langs: Object.keys(languageMap) as any,
      themes: [themeConfig(true), themeConfig(false)],
    });
    setShiki(highlighter);
  };

  useEffect(() => {
    initShiki();
  }, []);

  const renderShiki = (content) => {
    const result = shiki?.codeToHtml(content, {
      lang: language,
      theme,
    });
    return result;
  };

  return { loading: !shiki, renderShiki };
};
