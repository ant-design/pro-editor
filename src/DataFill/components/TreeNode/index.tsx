import type { FC } from 'react';

import { Checkbox } from 'antd';
import { memo } from 'react';
import { Flexbox } from 'react-layout-kit';
import { shallow } from 'zustand/shallow';
import { Segmented } from '../../../antd';

import type { DataFillStore } from '../../store';
import { useStore } from '../../store';
import type { FillTreeNode } from '../../types';
import Title from '../Title';

const selector = (s: DataFillStore) => ({
  updateConfig: s.updateConfig,
  handleFill: s.handleFill,
  config: s.config,
  handleShowDemoData: s.handleShowDemoData,
});

interface TreeNodeProps {
  data: FillTreeNode<any>;
  prefixCls: string;
}

const TreeNode: FC<TreeNodeProps> = ({ data, prefixCls }) => {
  const { updateConfig, handleFill, config, handleShowDemoData } = useStore(
    selector,
    shallow,
  );

  return (
    <Flexbox
      horizontal
      distribution={'space-between'}
      onMouseEnter={(event) => handleShowDemoData({ event, key: data.key })}
      onClick={(e) => {
        e.stopPropagation();

        handleFill(data.key);
      }}
    >
      <Title title={data.title} prefixCls={prefixCls} dataKey={data.key} />
      {data.checked && (
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <Checkbox
            checked={config[data.key]}
            defaultChecked={data.checked.value}
            onChange={(e) => {
              updateConfig({ [data.key]: e.target.checked });
            }}
          >
            {data.checked.label}
          </Checkbox>
        </div>
      )}
      {data.params && (
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          style={{ whiteSpace: 'nowrap' }}
        >
          <Segmented
            defaultValue={data.params[0].value}
            value={config[data.key]}
            onChange={(value) => {
              updateConfig({ [data.key]: value });
            }}
            size={'small'}
            style={{ lineHeight: 1 }}
            options={data.params}
          />
        </div>
      )}
    </Flexbox>
  );
};

export default memo(TreeNode);
