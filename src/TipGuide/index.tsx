import type { TooltipProps } from 'antd';
import { Badge, Button, Popover } from 'antd';
import useMergedState from 'rc-util/lib/hooks/useMergedState';
import { type FC, type ReactNode } from 'react';
import { Flexbox } from 'react-layout-kit';
import { ConfigProvider } from '../ConfigProvider';
import { getPrefixCls, useToken } from '../theme';
import { useStyle } from './style';

export interface TipGuideProps {
  /**
   * 引导标题
   */
  title: string;
  /**
   * Tooltip 位置，默认为 bottom
   */
  placement?: TooltipProps['placement'];
  /**
   * 纵向偏移值
   */
  offsetY?: number;
  /**
   * 最大宽度
   */
  maxWidth?: number;
  /**
   * 引导内容
   */
  children?: ReactNode;
  /**
   * 前缀
   */
  prefixCls?: string;
  /**
   * style
   */
  style?: React.CSSProperties;
  /**
   * 类名
   */
  className?: string;
  /**
   * 受控的 open 属性
   */
  open?: boolean;
  /**
   * 当 open 属性变化时候的触发
   */
  onOpenChange?: (open: boolean) => void;
  /**
   * 默认时候的打开状态
   */
  defaultOpen?: boolean;
  /**
   * 用于自定义 footer 部分的 render api
   */
  footerRender?: (dom: React.ReactNode) => React.ReactNode;
}

const TipGuide: FC<TipGuideProps> = ({
  children,
  placement = 'bottom',
  title,
  offsetY,
  maxWidth = 300,
  prefixCls: customPrefixCls,
  className,
  style,
  defaultOpen = true,
  open: outOpen,
  onOpenChange = () => {},
  footerRender,
}) => {
  const prefixCls = getPrefixCls('tip-guide', customPrefixCls);
  const token = useToken();
  const { styles, cx } = useStyle(prefixCls);
  const [open, setOpen] = useMergedState<boolean>(defaultOpen, {
    value: outOpen,
    onChange: onOpenChange,
  });

  const FooterDom = () => {
    const defalutFooter = (
      <div className={styles.footer}>
        <Button
          type={'primary'}
          size={'small'}
          onClick={() => {
            setOpen(!open);
          }}
        >
          我知道了
        </Button>
      </div>
    );
    if (footerRender) {
      return footerRender(defalutFooter);
    }

    return defalutFooter;
  };
  return (
    <ConfigProvider
      componentToken={{
        Popover: { colorText: token.colorTextLightSolid },
        Checkbox: {
          colorPrimary: token['blue-7'],
          colorText: token.colorTextLightSolid,
        },
        Badge: { lineHeight: 1, fontSize: 12 },
        Button: { colorPrimary: token['blue-7'] },
      }}
    >
      {open ? (
        <div className={styles.container}>
          {children}
          <div
            className={styles.tip}
            style={{
              marginTop: offsetY,
            }}
          >
            <Popover
              open={open}
              content={
                <Flexbox className={`${prefixCls}-guide-content`} gap={24}>
                  <div>{title}</div>
                  <Flexbox direction={'horizontal'} distribution={'space-between'} gap={8}>
                    <FooterDom />
                  </Flexbox>
                </Flexbox>
              }
              color={'blue'}
              overlayStyle={{ maxWidth, zIndex: 1000, ...style }}
              overlayClassName={cx(`${prefixCls}-guide`, className)}
              placement={placement}
              arrow={{ pointAtCenter: true }}
              trigger="hover"
            >
              <Badge status="processing" />
            </Popover>
          </div>
        </div>
      ) : (
        <>{children}</>
      )}
    </ConfigProvider>
  );
};

export default TipGuide;
