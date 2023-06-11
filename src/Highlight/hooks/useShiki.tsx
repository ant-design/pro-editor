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

  const initShiki = async () => {
    const highlighter = await getHighlighter({
      langs: languageMap as any,
      themes: [themeConfig(true), themeConfig(false)],
      paths: {
        wasm: 'https://gw.alipayobjects.com/os/lib/shiki-es/0.2.0/dist/assets/dist/onig.wasm',
      },
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
