import classNames from 'classnames';
import ReactJson from 'react-json-view';

import type { HighlightProps } from './index';
import { THEME_DARK } from './index';

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
      <ReactJson
        src={json}
        theme={isDarkTheme ? 'ocean' : undefined}
        displayDataTypes={false}
        style={{ height }}
        name={false}
      />
    </div>
  );
};
