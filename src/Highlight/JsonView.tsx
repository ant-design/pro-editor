import { JsonViewer } from '@textea/json-viewer';
import classNames from 'classnames';

import type { HighlightProps } from './index';
import { THEME_DARK } from './useHighlight';

import { getPrefixCls } from '../theme';

import { useStyles } from './style';

export interface JsonViewProps extends HighlightProps {
  json: object;
}

export default ({
  json,
  theme,
  style,
  className,
  height,
  prefixCls: customPrefixCls,
}: JsonViewProps) => {
  const prefixCls = getPrefixCls('highlight', customPrefixCls);

  const { styles } = useStyles(prefixCls);

  const isDarkTheme = theme === THEME_DARK;

  return (
    <div
      style={style}
      className={classNames(
        prefixCls,
        styles.jsonView,
        {
          [styles.lightTheme]: !isDarkTheme,
        },
        className,
        styles,
      )}
    >
      <JsonViewer
        value={json}
        theme={isDarkTheme ? 'dark' : 'light'}
        displayDataTypes={false}
        style={{ height }}
        rootName={false}
      />
    </div>
  );
};
