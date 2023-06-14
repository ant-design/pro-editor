import { useProEditorStore } from '@ant-design/pro-editor';
import { Button } from 'antd';
import isEqual from 'fast-deep-equal';
import { memo } from 'react';

export const ButtonComponent = memo(() => {
  const data = useProEditorStore((s) => s.config, isEqual);

  console.log(data);
  return <Button {...data} />;
});
