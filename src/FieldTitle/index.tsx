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
  /**
   * 额外内容
   */
  extra?: React.ReactNode;
  /**
   * 是否可选
   */
  checkable?: boolean;
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
    extra = null,
    checkable = true,
  } = props;

  const prefixCls = getPrefixCls('field-title', customizePrefixCls);
  const { styles } = useStyle({ prefixCls, checkable });

  let finalType = type;
  if (finalType === 'boolean') {
    finalType = 'bool';
  }
  if (isParentArray) {
    finalType += 'Array';
  }
  return (
    <div className={classNames(prefixCls, className)} style={style}>
      <div className={styles.content}>
        {finalType ? <FieldIcon type={finalType} /> : null}
        {title ? <span className={styles.title}>{title}</span> : null}
        {description ? <span className={styles.description}>{description}</span> : null}
      </div>
      {extra ? <div className={styles.extra}>{extra}</div> : null}
    </div>
  );
};

export default FieldTitle;
