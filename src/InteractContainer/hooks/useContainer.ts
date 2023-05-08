import { useEffect, useState } from 'react';
import type { ContainerNode, GetContainer } from '../type';
import { getContainerElement } from '../utils';

export const useContainer = (getContainer: GetContainer) => {
  const [container, setContainer] = useState<ContainerNode>();

  // 在组件 mount 之后确定最终容器
  useEffect(() => {
    setContainer(getContainerElement(getContainer));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return container;
};
