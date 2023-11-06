import { CopyOutlined } from '@ant-design/icons';
import copy from 'copy-to-clipboard';
import { memo } from 'react';

import ActionIcon from '@/ActionIcon';
import { useCopied } from '@/hooks/useCopied';
import { type TooltipProps } from 'antd';
import { DivProps } from 'react-layout-kit';

export interface CopyButtonProps extends DivProps {
  /**
   * @description Additional class name
   */
  className?: string;
  /**
   * @description The text content to be copied
   */
  content: string;
  /**
   * @description The placement of the tooltip
   * @enum ['top', 'left', 'right', 'bottom', 'topLeft', 'topRight', 'bottomLeft', 'bottomRight', 'leftTop', 'leftBottom', 'rightTop', 'rightBottom']
   * @default 'right'
   */
  placement?: TooltipProps['placement'];
}

const CopyButton = memo<CopyButtonProps>(
  ({ content, className, placement = 'right', ...props }) => {
    const { copied, setCopied } = useCopied();

    return (
      <ActionIcon
        {...props}
        className={className}
        icon={<CopyOutlined size={12} />}
        onClick={() => {
          copy(content);
          setCopied();
        }}
        placement={placement}
        title={copied ? '✅ Success' : 'Copy'}
      />
    );
  },
);

export default CopyButton;
