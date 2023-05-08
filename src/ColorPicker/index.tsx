import { useDebounceFn } from 'ahooks';
import { Popover } from 'antd';
import classNames from 'classnames';
import type { FC } from 'react';
import { memo, useState } from 'react';
import { HexAlphaColorPicker } from 'react-colorful';
import { Flexbox } from 'react-layout-kit';

import { getPrefixCls } from '../theme';
import { useStyle } from './style';

export interface ColorPickerProps {
  /**
   * @description 自定义前缀
   */
  prefixCls?: string;
  /**
   * 类名
   */
  className?: string;
  /**
   * 样式
   */
  style?: React.CSSProperties;
  /**
   * 预设值
   */
  presetColors?: string[];
  /**
   * 变更后的回调
   */
  onChange?: (color: string) => void;
  /**
   * 颜色值
   */
  value?: string;
}

const ColorPicker: FC<ColorPickerProps> = memo((props) => {
  const {
    style,
    className,
    onChange,
    value,
    presetColors = [],
    prefixCls: customizePrefixCls,
  } = props;
  const prefixCls = getPrefixCls('colorpicker', customizePrefixCls);
  const { styles } = useStyle(prefixCls);
  const classNameColorPicker = classNames(prefixCls, className);

  const [hoverColor, setHoverColor] = useState(value);

  const debounceOnChange = useDebounceFn((e) => onChange?.(e));

  const updateColor = (c) => {
    setHoverColor(c);
    debounceOnChange.run(c);
  };

  return (
    <div className={classNameColorPicker} style={style}>
      <Popover
        placement="bottomRight"
        trigger={['click']}
        content={
          <>
            <HexAlphaColorPicker color={hoverColor} onChange={updateColor} />
            <Flexbox horizontal gap={8} className={styles.presets}>
              {presetColors.map((presetColor) => (
                <button
                  type={'button'}
                  key={presetColor}
                  className={styles.swatch}
                  style={{ background: presetColor }}
                  onClick={() => updateColor(presetColor)}
                />
              ))}
            </Flexbox>
          </>
        }
      >
        <div className={styles.container}>
          <div className={styles.color} style={{ background: hoverColor }} />
        </div>
      </Popover>
    </div>
  );
});

export default ColorPicker;
