import { useEffect, useState } from 'react';
import { getHighlighter, setCDN, type Highlighter } from 'shiki-es';
import { themeConfig } from '../theme';

// 国内使用 CDN 加速, 测试环境为 node，会加载失败
if (process.env.NODE_ENV !== 'test') {
  setCDN('https://npm.elemecdn.com/shiki-es/dist/assets');
}

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
