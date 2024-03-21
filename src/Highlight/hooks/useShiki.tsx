import { useEffect, useState } from 'react';
import { getHighlighter, type Highlighter } from 'shiki/bundle/web';
import { themeConfig } from '../theme';

// 目前支持的语言列表
export const HIGHLIGHT_LANGUAGES = [
  'javascript',
  'typescript',
  'css',
  'json',
  'markdown',
  'xml',
  'html',
  'yaml',
  'tsx',
  'jsx',
  'java',
  'python',
  'sql',
  'bash',
  'sh',
];

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
