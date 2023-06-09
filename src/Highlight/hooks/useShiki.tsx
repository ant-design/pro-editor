import { useEffect, useState } from 'react';
import { getHighlighter, type Highlighter } from 'shiki-es';
import { themeConfig } from '../theme';

// 目前支持的语言列表
export const languageMap = [
  'javascript',
  'typescript',
  'css',
  'json',
  'markdown',
  'xml',
  'yaml',
  'tsx',
  'jsx',
  'java',
  'python',
  'sql',
];

export const useShiki = (language, theme) => {
  const [shiki, setShiki] = useState<Highlighter>(null);
  const [loading, setLoading] = useState(true); // [false, true, true, false
  const [error, setError] = useState(null);

  const initShiki = async () => {
    try {
      setLoading(true);
      const highlighter = await getHighlighter({
        langs: languageMap as any,
        themes: [themeConfig(true), themeConfig(false)],
        paths: {
          wasm: 'https://gw.alipayobjects.com/os/lib/shiki-es/0.2.0/dist/assets/dist/onig.wasm',
        },
      });
      setShiki(highlighter);
    } catch (e) {
      setError(e);
    }
    setLoading(false);
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

  return { loading, error, renderShiki };
};
