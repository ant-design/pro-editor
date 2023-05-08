import { CollapseTitle } from '@ant-design/pro-editor';
import { Button } from 'antd';
import { useState } from 'react';

export default () => {
  const [expand, setExpand] = useState(false);

  const toggleCollapse = () => {
    setExpand((exExpand) => !exExpand);
  };

  return (
    <CollapseTitle
      title={'数据预览'}
      expand={expand}
      extra={(showPanel) => (
        <Button size="small" onClick={toggleCollapse}>
          {showPanel ? '收起' : '展开'}
        </Button>
      )}
    >
      123
    </CollapseTitle>
  );
};
