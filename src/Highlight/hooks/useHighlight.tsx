import hljs from 'highlight.js/lib/core';
import { default as bash, default as sh } from 'highlight.js/lib/languages/bash';
import css from 'highlight.js/lib/languages/css';
import java from 'highlight.js/lib/languages/java';
import { default as javascript, default as jsx } from 'highlight.js/lib/languages/javascript';
import json from 'highlight.js/lib/languages/json';
import markdown from 'highlight.js/lib/languages/markdown';
import python from 'highlight.js/lib/languages/python';
import sql from 'highlight.js/lib/languages/sql';
import { default as tsx, default as typescript } from 'highlight.js/lib/languages/typescript';
import xml from 'highlight.js/lib/languages/xml';
import yaml from 'highlight.js/lib/languages/yaml';
import { useEffect } from 'react';

// 目前支持的语言列表
export const languageMap = {
  javascript,
  typescript,
  css,
  json,
  markdown,
  xml,
  html: xml,
  yaml,
  tsx,
  jsx,
  java,
  python,
  sql,
  bash,
  sh,
};

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
    let result = null;
    if (language & languageMap[language]) {
      result = hljs.highlight(language, content || '').value;
    } else {
      result = hljs.highlightAuto(content).value;
    }
    return result;
  };
  return { renderHighlight };
};
