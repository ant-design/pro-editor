import { TipGuide } from '@ant-design/pro-editor';

import { Button } from 'antd';

export default () => {
  return (
    <TipGuide title={'这是一个引导提示语'} offsetY={-24}>
      <Button>Pro-Editor</Button>
    </TipGuide>
  );
};
