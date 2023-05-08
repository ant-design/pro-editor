import { TipGuide } from '@ant-design/pro-editor';

import { Button } from 'antd';

export default () => {
  const guideKey = 'DEMO_KEY';

  return (
    <TipGuide
      guideKey={guideKey}
      title={
        '道可道，非常道；名可名，非常名。无名天地之始，有名万物之母。故常无欲，以观其妙；常有欲，以观其徼（jiào）。此两者同出而异名，同谓之玄，玄之又玄，众妙之门。'
      }
    >
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
