import bash from 'highlight.js/lib/languages/bash';
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
  bash,
  python,
  sql,
};

// 支持的语言
const supportedLanguages = Object.keys(languageMap) as (keyof typeof languageMap)[];
export type LanguageType = (typeof supportedLanguages)[number];
