import { useSize } from 'ahooks';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/locale/zh_CN';
import type { FC } from 'react';
import { memo, useEffect, useRef } from 'react';
import { shallow } from 'zustand/shallow';

import InteractContainer from '../../../InteractContainer';
import { useUpdateEditorAwareness } from '../../hooks/useEditorAwareness';
import { useStore } from '../../store';

const Component: FC = memo(() => {
  const [prefixCls, interaction, enableCanvasInteraction, componentAsset, updateCanvasInteract] =
    useStore(
      (s) => [
        `${s.prefixCls}-canvas`,
        s.interaction,
        s.enableCanvasInteraction,
        s.componentAsset,
        s.internalUpdateCanvasInteract,
      ],
      shallow,
    );

  const ref = useRef();
  const size = useSize(ref);
  const { updateEditorAwareness } = useUpdateEditorAwareness();

  useEffect(() => {
    updateEditorAwareness({ componentSizeOnCanvas: size });
  }, [size]);

  return (
    // 组件 外围包一层用户交互，用于改变 columns 配置或其他配置
    <InteractContainer
      disabled={!enableCanvasInteraction}
      status={interaction}
      rules={componentAsset.rules}
      getContainer={`#${prefixCls}`}
      onStatusChange={updateCanvasInteract}
    >
      <div id={`${prefixCls}`} ref={ref} className={`${prefixCls}-component`}>
        <ConfigProvider locale={zhCN} prefixCls="canvas">
          <componentAsset.Component />
        </ConfigProvider>
      </div>
    </InteractContainer>
  );
});

export default Component;
