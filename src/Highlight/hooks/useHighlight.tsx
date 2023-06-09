import hljs from 'highlight.js/lib/core';
import { useEffect } from 'react';
import { languageMap } from './language';

export const useHighlight = (language) => {
  // 按需加载语言
  useEffect(() => {
    if (language && languageMap[language]) {
      hljs.registerLanguage(language, languageMap[language]);
    } else {
      Object.keys(languageMap).forEach((lan) => {
        hljs.registerLanguage(lan, languageMap[lan]);
      });
    }
  }, [language]);

  const renderHighlight = (content) => {
    const result = (
      language ? hljs.highlight(language, content || '') : hljs.highlightAuto(content)
    )?.value;

    return result;
  };
  return { renderHighlight };
};
