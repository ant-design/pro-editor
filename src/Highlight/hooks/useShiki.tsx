import { useEffect, useState } from 'react';
import { getHighlighter, type Highlighter } from 'shiki-es';
import { themeConfig } from '../theme';
import { languageMap } from './language';

export const useShiki = (language, theme) => {
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