import { TipGuide } from '@ant-design/pro-editor';

import { Button } from 'antd';

export default () => {
  const guideKey = 'DEMO_KEY_2';

  return (
    <TipGuide guideKey={guideKey} title={'这是一个引导提示语'} offsetY={-24}>
      <Button
        onClick={() => {
          localStorage.removeItem(guideKey);
          location.reload();
        }}
      >
        清理引导缓存
      </Button>
    </TipGuide>
  );
};
