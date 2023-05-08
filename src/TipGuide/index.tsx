import type { TooltipProps } from 'antd';
import { Badge, Button, Checkbox, Popover } from 'antd';
import type { FC, ReactNode } from 'react';
import { Flexbox } from 'react-layout-kit';

import { ConfigProvider } from '../ConfigProvider';
import { getPrefixCls, useToken } from '../theme';
import { useStyle } from './style';
import { useTipGuide } from './useTipGuide';

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
   * 用于持久化该引导值状态
   */
  guideKey: string;
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
  guideKey,
}) => {
  const prefixCls = getPrefixCls('tip-guide', customPrefixCls);

  const { noLongerShow, toggleChecked, closeGuide, visible, checked } =
    useTipGuide(guideKey);
  const token = useToken();
  const { styles, cx } = useStyle(prefixCls);
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
      {noLongerShow || !visible ? (
        <>{children}</>
      ) : (
        <div className={styles.container}>
          {children}
          <div
            className={styles.tip}
            style={{
              marginTop: offsetY,
            }}
          >
            <Popover
              open={visible}
              content={
                <Flexbox className={`${prefixCls}-guide-content`} gap={24}>
                  <div>{title}</div>
                  <Flexbox
                    direction={'horizontal'}
                    distribution={'space-between'}
                    gap={8}
                  >
                    <Checkbox onChange={toggleChecked} checked={checked}>
                      不再显示
                    </Checkbox>
                    <Button
                      type={'primary'}
                      size={'small'}
                      onClick={closeGuide}
                    >
                      我知道了
                    </Button>
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
      )}
    </ConfigProvider>
  );
};

export default TipGuide;
