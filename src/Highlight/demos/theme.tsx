/**
 * title: 切换语言与主题
 */

import { Highlight } from '@ant-design/pro-editor';
import { Select, Space } from 'antd';
import { useState } from 'react';
import configs from './config';

const DEFAULT_LANGUAGE = 'bash';
const DEFAULT_THEME = 'light';
const DEFAULT_LINENUMBER = 'false';
const { Option } = Select;

export default () => {
  const [theme, setTheme] = useState<'light' | 'dark'>(DEFAULT_THEME);
  const [language, setLanguage] = useState(DEFAULT_LANGUAGE);
  const [lineNumberStatus, setLineNumberStatus] = useState(DEFAULT_LINENUMBER);
  const code = configs.find((config) => config.language === language).code || '';

  return (
    <div>
      <Space>
        语言选择:
        <Select
          defaultValue={DEFAULT_LANGUAGE}
          style={{ width: 120 }}
          onChange={(value) => setLanguage(value)}
        >
          {configs.map((config) => {
            return (
              <Option key={config.language} value={config.language}>
                {config.text}
              </Option>
            );
          })}
        </Select>
        主题选择:
        <Select<'light' | 'dark'>
          defaultValue={DEFAULT_THEME}
          style={{ width: 120 }}
          onChange={(value) => setTheme(value)}
        >
          <Option value="light">白色主题</Option>
          <Option value="dark">黑色主题</Option>
        </Select>
        展示行号:
        <Select
          defaultValue={DEFAULT_LINENUMBER}
          style={{ width: 120 }}
          onChange={(value) => setLineNumberStatus(value)}
        >
          <Option value="false">不展示</Option>
          <Option value="true">展示</Option>
        </Select>
      </Space>
      <div style={{ height: 400, width: '100%', overflowY: 'scroll', marginBlockStart: '16px' }}>
        <Highlight
          language={language as 'json'}
          theme={theme}
          lineNumber={lineNumberStatus !== DEFAULT_LINENUMBER}
        >
          {code}
        </Highlight>
      </div>
    </div>
  );
};
