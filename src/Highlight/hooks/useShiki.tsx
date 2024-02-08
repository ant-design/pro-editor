import { useEffect, useState } from 'react';
import { getHighlighter, type Highlighter } from 'shikiji';
import { themeConfig } from '../theme';
import { languageMap } from './useHighlight';

// 目前支持的语言列表
export const HIGHLIGHT_LANGUAGES = Object.keys(languageMap);

export const useShiki = (language, theme) => {
  const [shiki, setShiki] = useState<Highlighter>(null);

  const initShiki = async () => {
    const highlighter = await getHighlighter({
      langs: HIGHLIGHT_LANGUAGES as any,
      themes: [themeConfig(true), themeConfig(false)],
    });
    setShiki(highlighter);
  };

  useEffect(() => {
    initShiki();
  }, []);

  const renderShiki = (content) => {
    if (shiki && shiki.getLoadedLanguages().includes(language)) {
      const result = shiki?.codeToHtml(content, {
        lang: language,
        theme,
      });
      return result;
    } else {
      return `<pre><code>${content}</code></pre>`;
    }
  };

  return { loading: !shiki, renderShiki };
};
