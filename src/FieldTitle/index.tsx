import { APIFieldType, FieldIcon, withProvider } from '@ant-design/pro-editor';
import classNames from 'classnames';

import { useStyle } from './style';

export interface FieldTitleProps {
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
  const { style, className, type, isParentArray, title, description = null } = props;

  const { styles } = useStyle();

  let finalType = type;
  if (finalType === 'boolean') {
    finalType = 'bool';
  }
  if (isParentArray) {
    finalType += 'Array';
  }
  return (
    <span className={classNames(className, styles.container)} style={style}>
      {finalType ? <FieldIcon type={finalType} /> : null}
      {title ? <span className={styles.title}>{title}</span> : null}
      {description ? <span className={styles.description}>{description}</span> : null}
    </span>
  );
};

export default withProvider(FieldTitle) as React.FC<FieldTitleProps>;
