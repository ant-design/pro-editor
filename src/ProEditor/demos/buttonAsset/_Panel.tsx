import { LevaPanel } from '@ant-design/pro-editor';
import { Button, Divider } from 'antd';
import isEqual from 'fast-deep-equal';
import { FC, memo } from 'react';
import { Flexbox } from 'react-layout-kit';

import { ButtonConfig, buttonSchema } from './models';
import { useStore } from './store';

export const ButtonPanel: FC = memo(() => {
  const data = useStore((s) => s.content, isEqual);
  const updateContent = useStore((s) => s.updateContent);

  return (
    <>
      <Flexbox horizontal gap={4} align={'center'} padding={8}>
        预设：
        <Button
          onClick={() => {
            updateContent({ children: '默认按钮', type: 'default' }, true);
          }}
        >
          默认按钮
        </Button>
        <Button
          onClick={() => {
            updateContent({ children: '主要按钮', size: 'small', type: 'primary' }, true);
          }}
        >
          主要按钮
        </Button>
        <Button
          onClick={() => {
            updateContent(
              {
                children: '危险按钮',
                type: 'dashed',
                danger: true,
                size: 'large',
                ghost: true,
                shape: 'round',
              },
              true,
            );
          }}
        >
          危险按钮
        </Button>
      </Flexbox>
      <Divider />
      <LevaPanel<ButtonConfig>
        schema={buttonSchema}
        onChange={(data, item) => {
          updateContent(item);
        }}
        value={data}
        title={'Button'}
      />
    </>
  );
});
