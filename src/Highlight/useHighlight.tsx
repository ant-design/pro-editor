import hljs from 'highlight.js/lib/core';
import { default as javascript, default as jsx } from './languages/javascript';
// tsx 本质上也是采用typescript进行解析，hljs做了支持
import { useEffect } from 'react';
import css from './languages/css';
import java from './languages/java';
import json from './languages/json';
import markdown from './languages/markdown';
import { default as tsx, default as typescript } from './languages/typescript';
import xml from './languages/xml';
import yaml from './languages/yaml';

export const THEME_DARK = 'dark';
export const THEME_LIGHT = 'light';

// 主题类型
const tuple = <T extends string[]>(...args: T) => args;
const ThemeTypes = tuple(THEME_DARK, THEME_LIGHT);
export type ThemeType = (typeof ThemeTypes)[number];

// 目前支持的语言列表
export const languageMap = {
  javascript,
  typescript,
  css,
  json,
  markdown,
  xml,
  yaml,
  tsx,
  jsx,
  java,
};

// 支持的语言
const supportedLanguages = Object.keys(languageMap) as (keyof typeof languageMap)[];
export type LanguageType = (typeof supportedLanguages)[number];

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
};
