import { JSONSchema } from '@/types/schema';
import isEmpty from 'lodash.isempty';
import isEqual from 'lodash.isequal';
import isNil from 'lodash.isnil';
import isObject from 'lodash.isobject';
import omitBy from 'lodash.omitby';
import uniq from 'lodash.uniq';
import { ReactNodeElement } from '../types';

/**
 * 从schema 获取预设值
 * @param schema
 */
export const getDefaultValueFromSchema = (schema: JSONSchema) => {
  if (schema.type === 'object') {
    if (!schema.properties) return;
    return Object.fromEntries(
      Object.entries(schema.properties).map(([key, value]) => [key, value.default]),
    );
  }
  if (schema.type === 'null') return null;
  return schema.default;
};

/**
 * 获取去重后的 props
 * @param props
 * @param schema
 */
export const getDiffPropsWithSchema = (props: any, schema?: JSONSchema) => {
  // 如果没有 schema，则使用原来的 props
  if (!schema) return props;

  const defaultProps = getDefaultValueFromSchema(schema);

  if (!defaultProps) return props;

  const filtered = Object.entries(props)
    // 过滤掉默认值
    .filter((entry) => {
      const [key, value] = entry;

      const defaultPropsValue = defaultProps[key];

      // 如果该属性在默认值中不存在
      if (typeof defaultProps[key] === 'undefined') return true;

      // 或者与默认值不相等
      return !isEqual(defaultPropsValue, value);
    });

  return Object.fromEntries(filtered);
};

/**
 * 根据组件名称、props 生成 props 和 schema生成symbolMaster名称
 */
export const getSymbolMasterNameFromProps = (
  pkg: string,
  component: string,
  props: any,
  schema?: JSONSchema,
) => {
  const validProps = getDiffPropsWithSchema(props, schema);

  // 用一个递归方法来层层结构生成对象名称
  const genName = (propsObj: object, parentKey?: string): string => {
    return Object.entries(propsObj)
      .map((entry) => {
        const [key, value] = entry;

        // 针对数组，需要结构它的内部对象
        if (value instanceof Array) {
          return `${key}=[${value.map((item) => `{${genName(item)}}`).join(',')}]`;
        }

        // 嵌套对象 递归解析
        if (isObject(value)) {
          return genName(value, key);
        }

        // undefined 和 null 直接过滤
        if (isNil(value)) {
          return '';
        }
        // 普通的其他值直接返回
        return `${parentKey ? `${parentKey}.` : ''}${key}=${value}`;
      })
      .filter((i) => i)
      .join(',');
  };

  const propsStr = genName(validProps);

  return `${pkg.replace('/', '-')}/${component}/${propsStr}`;
};

/**
 * 获取组件库导入代码
 */
export const generateImportCode = (pkg: string, components: string[]) => {
  return `import { ${uniq(components).join(', ')} } from '${pkg}';`;
};

/**
 * 将 prop 转换成字符串
 */
export const createPropString = (
  key: string,
  // eslint-disable-next-line @typescript-eslint/ban-types
  value: string | number | boolean | symbol | object | undefined | Function | any[],
) => {
  switch (typeof value) {
    case 'undefined':
      return '';
    case 'object':
      // 数组
      if (value instanceof Array) {
        return `${key}={${JSON.stringify(value)}}`;
      }

      // eslint-disable-next-line no-case-declarations
      const clearValue = omitBy(value, isNil);
      // 如果 object 里不存在任何值，返回空
      if (Object.values(clearValue).length === 0) return '';

      // eslint-disable-next-line no-case-declarations
      const genObjStr = () => {
        // 如果包含 $$__type 属性，说明是 ReactNode 或 icon
        if ((value as ReactNodeElement).$$__type) {
          // eslint-disable-next-line @typescript-eslint/no-use-before-define
          return genChildrenJSXCode(value as ReactNodeElement);
        }

        return JSON.stringify(clearValue, null);
      };

      return `${key}={${genObjStr()}}`;
    case 'boolean':
      if (value) return `${key}`;

      return `${key}={${value}}`;
    case 'number':
      return `${key}={${value}}`;
    case 'string':
      if (isEmpty(value)) return '';

      return `${key}="${value}"`;
    case 'function':
      return `${key}={${value.toString()}}`;
    case 'symbol':
      return `${key}={Symbol.for('${value.description}')}`;
  }
};

/**
 * 生成 React JSX 代码
 * @param component
 * @param props
 * @param PropStringFn
 */
export const generateJSXCode = (
  component: string,
  props: Record<string, any>,
  PropStringFn = createPropString,
) => {
  if (!props) {
    return `<${component} />`;
  }

  const inline = !props.children;

  const propsStr = Object.entries(props)
    // 针对 children 有值的情况下，在 props 上过滤掉 children
    .filter((v) => (inline ? v : v[0] !== 'children'))
    .map((entry) => PropStringFn(entry[0], entry[1]))
    // 过滤空的对象
    .filter((v) => v)
    .join(' ');

  if (inline) return `<${component} ${propsStr}/>`;

  // eslint-disable-next-line @typescript-eslint/no-use-before-define
  return `<${component} ${propsStr}>${genChildrenJSXCode(props.children)}</${component}>`;
};

/**
 * 生成子 JSX 代码
 * @param children
 */
const genChildrenJSXCode = (children: string | ReactNodeElement | ReactNodeElement[]): string => {
  // children 为字符串的场景
  if (typeof children === 'string') {
    return children;
  }

  const renderChildNode = (child: ReactNodeElement) => {
    const { $$__type, $$__body } = child;

    switch ($$__type) {
      // children 为子组件的场景
      case 'element':
        return generateJSXCode($$__body.componentName, $$__body.props);
      // TODO： children 为 Icon 的场景
    }
  };

  if (children instanceof Array) {
    return children.map(renderChildNode).join('\n');
  }

  return renderChildNode(children);
};
