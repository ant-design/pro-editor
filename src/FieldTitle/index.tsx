import { APIFieldType, FieldIcon, getPrefixCls } from '@ant-design/pro-editor';
import classNames from 'classnames';

import { useStyle } from './style';

export interface FieldTitleProps {
  /**
   * @description 自定义前缀
   * @ignore
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
   * 字段类型
   */
  type?: APIFieldType | string;
  /**
   * 父级是否是数组
   */
  isParentArray?: boolean;
  /**
   * 字段标题
   */
  title: React.ReactNode;
  /**
   * 标题右侧描述
   */
  description?: React.ReactNode;
}

const FieldTitle: React.FC<FieldTitleProps> = (props) => {
  const {
    style,
    className,
    prefixCls: customizePrefixCls,
    type,
    isParentArray,
    title,
    description = null,
  } = props;

  const prefixCls = getPrefixCls('field-title', customizePrefixCls);
  const { styles } = useStyle({ prefixCls });

  let finalType = type;
  if (finalType === 'boolean') {
    finalType = 'bool';
  }
  if (isParentArray) {
    finalType += 'Array';
  }
  return (
    <span className={classNames(prefixCls, className, styles.container)} style={style}>
      {finalType ? <FieldIcon type={finalType} /> : null}
      {title ? <span className={styles.title}>{title}</span> : null}
      {description ? <span className={styles.description}>{description}</span> : null}
    </span>
  );
};

export default FieldTitle;
