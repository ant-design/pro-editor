import { createStyles } from 'antd-style';
import { LevaPanel, LevaStoreProvider, useCreateStore } from 'leva';
import { CSSProperties, ReactNode, memo } from 'react';
import Schema, { SchemaProps } from './Schema';

const useStyles = createStyles(
  ({ css, token }) => css`
    --leva-sizes-controlWidth: 66%;
    --leva-colors-elevation1: ${token.colorFillSecondary};
    --leva-colors-elevation2: transparent;
    --leva-colors-elevation3: ${token.colorFillSecondary};
    --leva-colors-accent1: ${token.colorPrimary};
    --leva-colors-accent2: ${token.colorPrimaryHover};
    --leva-colors-accent3: ${token.colorPrimaryActive};
    --leva-colors-highlight1: ${token.colorTextTertiary};
    --leva-colors-highlight2: ${token.colorTextSecondary};
    --leva-colors-highlight3: ${token.colorText};
    --leva-colors-vivid1: ${token.colorWarning};
    --leva-shadows-level1: unset;
    --leva-shadows-level2: unset;
    --leva-fonts-mono: ${token.fontFamilyCode};

    overflow: auto;

    padding: 6px 0;

    > div {
      background: transparent;

      > div {
        background: transparent;
      }
    }

    input:checked + label > svg {
      stroke: ${token.colorBgLayout};
    }

    button {
      --leva-colors-accent2: ${token.colorFillSecondary};
    }
  `,
);

export interface LevaPanelProps<T> extends SchemaProps<T> {
  title?: ReactNode;
  className?: string;
  style?: CSSProperties;
}

const Panel: <T>(props: LevaPanelProps<T>) => ReactNode = memo(
  ({ value, title, onChange, schema, className, style }) => {
    const store = useCreateStore();
    const { styles, cx } = useStyles();

    return (
      <div className={cx(styles, className)} style={style}>
        <LevaPanel
          hideCopyButton
          neverHide
          titleBar={{ title, drag: false }}
          fill
          flat
          store={store}
        />

        <LevaStoreProvider store={store}>
          <Schema schema={schema} value={value} onChange={onChange} />
        </LevaStoreProvider>
      </div>
    );
  },
);

export default Panel;
