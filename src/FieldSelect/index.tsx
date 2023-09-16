/**
 * OneAPI 接口地址: https://oneapi.alipay.com/app/oneapitwa/tag/doc/master
 */
import {
  APIFieldType,
  ActionIcon,
  FieldTitle,
  Input,
  Select,
  getPrefixCls,
} from '@ant-design/pro-editor';
import type { DefaultOptionType, SelectProps } from 'antd/es/select';
import classNames from 'classnames';
import { useState } from 'react';
import useMergedState from 'use-merge-value';

import { PlusOutlined } from '@ant-design/icons';

import { useStyle } from './style';

export interface FieldSelectOptionType extends DefaultOptionType {
  /**
   * API 字段类型
   */
  type?: APIFieldType | string;
  /**
   * 字段描述
   */
  description?: React.ReactNode;
}

export interface FieldSelectProps extends SelectProps {
  /**
   * @description 自定义前缀
   * @ignore
   */
  prefixCls?: string;
  /**
   * 配置项
   */
  options?: FieldSelectOptionType[];
  /**
   * 类名
   */
  className?: string;
  /**
   * 样式
   */
  style?: React.CSSProperties;
  /**
   * 变更后的回调
   */
  onChange?: (string) => void;
  /**
   * 初始值
   */
  value?: string;
  /**
   * 是否显示自定义字段
   * @default true
   */
  showCustomField?: boolean;
}

const FieldSelect: React.FC<FieldSelectProps> = (props) => {
  const {
    style,
    className,
    value: propsValue,
    prefixCls: customizePrefixCls,
    options,
    onChange,
    showCustomField = true,
    ...restProps
  } = props;

  const [name, setName] = useState('');
  const [controlValue, setControlValue] = useMergedState(undefined, {
    value: propsValue,
    onChange,
  });
  const [open, setOpen] = useState(false);

  const prefixCls = getPrefixCls('field-select', customizePrefixCls);

  const { styles } = useStyle(prefixCls);

  const onNameChange = (value) => {
    setName(value);
  };

  const onSelectChange = (selectedValue: string) => {
    setControlValue(selectedValue);
  };

  const addItem = (e: any) => {
    e.preventDefault();
    if (name) {
      setControlValue(name);
      setName('');
      setOpen(false);
    }
  };

  return (
    <Select
      options={(options || []).map((item: FieldSelectOptionType) => {
        const { label, value, type, description } = item;
        return {
          label: <FieldTitle type={type} title={label} description={description} />,
          value,
          key: value,
        };
      })}
      style={style}
      className={classNames(className, styles.select)}
      value={controlValue}
      onChange={onSelectChange}
      open={open}
      onDropdownVisibleChange={(isOpen) => {
        setOpen(isOpen);
      }}
      dropdownRender={(menu) => (
        <>
          {menu}
          {showCustomField && (
            <div className={styles.extra}>
              <Input
                placeholder="自定义字段名"
                value={name}
                className={styles.extraInput}
                onChange={onNameChange}
                size="small"
                onPressEnter={(e) => {
                  e.stopPropagation();
                  addItem(e);
                }}
              />
              <ActionIcon
                title={'找不到字段时可以自定义添加'}
                className={styles.extraAction}
                icon={<PlusOutlined />}
                onClick={addItem}
              />
            </div>
          )}
        </>
      )}
      {...restProps}
    />
  );
};

export default FieldSelect;
