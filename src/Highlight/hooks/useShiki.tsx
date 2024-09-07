import DOMPurify from 'dompurify';
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
  'vue',
  'vue-html',
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
      return DOMPurify.sanitize(result);
    } else {
      // 在shiki加载完成之前，直接返回原始代码，同样需要进行xss过滤
      return DOMPurify.sanitize(`<pre><code>${content}</code></pre>`);
    }
  };

  return { loading: !shiki, renderShiki };
};
