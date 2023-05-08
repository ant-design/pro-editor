/**
 * 日期, 时间, 日志状态的匹配规则
 */

export const customRule = [
  {
    className: 'number date',
    begin: /\d{4}(-|\/|.)\d{1,2}\1\d{1,2}/,
    relevance: 0,
  },
  {
    className: 'number time',
    begin: /\b\d{1,2}:\d{1,2}:\d{1,2}(?:[.,:]\d+)?(?:\s?[+-]\d{2}:?\d{2}|Z)?\b/,
    relevance: 0,
  },
  {
    className: 'important error',
    begin:
      /\b(?:ALERT|CRIT|CRITICAL|EMERG|EMERGENCY|ERR|ERROR|FAILURE|FATAL|SEVERE)\b/,
    relevance: 0,
  },
  {
    className: 'important warning',
    begin: /\b(?:WARN|WARNING|WRN)\b/,
    relevance: 0,
  },
  {
    className: 'keyword info',
    begin: /\b(?:DISPLAY|INF|INFO|NOTICE|STATUS)\b/,
    relevance: 0,
  },
  {
    className: 'keyword debug',
    begin: /\b(?:DBG|DEBUG|FINE)\b/,
    relevance: 0,
  },
  {
    className: 'comment trace',
    begin: /\b(?:FINER|FINEST|TRACE|TRC|VERBOSE|VRB)\b/,
    relevance: 0,
  },
];
