const getPrefixCls = (suffixCls: string, customizePrefixCls?: string) => {
  const prefixCls = 'studio';

  if (customizePrefixCls) return customizePrefixCls;

  return suffixCls ? `${prefixCls}-${suffixCls}` : prefixCls;
};

export default getPrefixCls;
