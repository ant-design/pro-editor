import { CheckOutlined, CopyOutlined } from '@ant-design/icons';
import classNames from 'classnames';
import { useEffect, useState } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import { ThemeType } from '../../theme';
import { useStyles } from './style';

interface CopyButtonProps {
  content: any;
  /**
   * @title 复制按钮点击后回调
   */
  onCopy?: (content: any) => void;
  /**
   * @title 主题
   * @description 主题颜色, dark 黑色主题，light 白色主题
   * @default "light"
   */
  theme?: ThemeType;
  prefixCls?: string;
  style?: React.CSSProperties;
}

const CopyButton: React.FC<CopyButtonProps> = (props) => {
  const { content, onCopy, theme = 'light', prefixCls, style } = props;
  const [copyId, setCopyId] = useState<number | undefined>();
  const { styles } = useStyles({ prefixCls, theme });

  useEffect(() => {
    return () => {
      window.clearTimeout(copyId);
    };
  });
  const [copied, setCopied] = useState(false);
  return (
    <>
      <CopyToClipboard
        text={content && content.length ? content : ''}
        onCopy={() => {
          setCopied(true);
          const tempCopyId = window.setTimeout(() => {
            setCopied(false);
          }, 2000);
          setCopyId(tempCopyId);
          if (onCopy) onCopy(content);
        }}
      >
        <button type={'button'} disabled={copied} className={styles.copy} style={style}>
          <CopyOutlined className={classNames(styles.copyIcon, { scoll: copied })} />
          <CheckOutlined className={styles.copyIcon} style={{ color: 'rgb(63,177,99)' }} />
        </button>
      </CopyToClipboard>
    </>
  );
};

export default CopyButton;
