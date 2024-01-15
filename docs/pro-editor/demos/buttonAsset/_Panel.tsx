import { RedoOutlined, UndoOutlined } from '@ant-design/icons';
import { LevaPanel } from '@ant-design/leva-panel';
import { useProBuilderStore } from '@ant-design/pro-editor';
import { Button, Divider } from 'antd';
import isEqual from 'fast-deep-equal';
import { FC, memo } from 'react';
import { Flexbox } from 'react-layout-kit';
import { shallow } from 'zustand/shallow';

import { ButtonConfig, buttonModel } from './models';

export const ButtonPanel: FC = memo(() => {
  const data = useProBuilderStore((s) => s.config, isEqual);
  const [updateConfig, undo, redo, undoStack, redoStack] = useProBuilderStore(
    (s) => [s.setConfig, s.undo, s.redo, s.undoStack().length, s.redoStack().length],
    shallow,
  );

  return (
    <>
      <LevaPanel<ButtonConfig>
        schema={buttonModel.schema()}
        onChange={(data, item) => {
          updateConfig(item, { replace: true });
        }}
        value={data}
        title={'Button'}
      />
      <Divider />
      <Flexbox horizontal gap={4} align={'center'} padding={8}>
        预设：
        <Button
          onClick={() => {
            updateConfig({ children: '默认按钮', type: 'default' }, { replace: true });
          }}
        >
          默认按钮
        </Button>
        <Button
          onClick={() => {
            updateConfig(
              { children: '主要按钮', size: 'small', type: 'primary' },
              { replace: true },
            );
          }}
        >
          主要按钮
        </Button>
        <Button
          onClick={() => {
            updateConfig(
              {
                children: '危险按钮',
                type: 'dashed',
                danger: true,
                size: 'large',
                ghost: true,
                shape: 'round',
              },
              { replace: true },
            );
          }}
        >
          危险按钮
        </Button>
      </Flexbox>
      <Divider />
      <Flexbox horizontal padding={12} gap={8}>
        <Button icon={<UndoOutlined />} onClick={undo} disabled={undoStack === 0}>
          <Flexbox style={{ display: 'inline-flex' }} horizontal gap={4}>
            <div>撤销</div>
          </Flexbox>
        </Button>
        <Button icon={<RedoOutlined />} onClick={redo} disabled={redoStack === 0}>
          重做
        </Button>
      </Flexbox>
    </>
  );
});
