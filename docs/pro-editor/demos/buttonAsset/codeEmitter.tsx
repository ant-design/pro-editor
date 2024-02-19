import { generateJSXCode } from '@ant-design/pro-editor';
import template from 'lodash.template';
import { prettier } from './format';

const codeTemplate = `
import { Button } from 'antd';

export default () => <%= component %>;
`;

interface TemplateParams {
  iconDeps?: string;
  component: string;
}

const emitter: (params: TemplateParams) => string = template(codeTemplate);

const codeEmitter = (config) => {
  const code = emitter({
    component: generateJSXCode('Button', {
      ...config,
    }),
  });
  return prettier(code);
};

export default codeEmitter;
