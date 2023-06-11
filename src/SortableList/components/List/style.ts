import { createStyles } from '../../../theme';

export const useStyle = createStyles(({ css, cx }, { prefixCls, horizontal }) => {
  return {
    container: cx(
      `${prefixCls}-container`,
      css({
        listStyle: 'none',
        display: 'grid',
        gridAutoRows: 'max-content',
        gridGap: '2px',
        gridTemplateColumns: 'repeat(var(--columns, 1), 1fr)',
        width: '100%',
        margin: '0',
        padding: '0',
        borderRadius: '4px',
        transition: 'background-color 350ms ease',
        gridAutoFlow: horizontal ? 'column' : undefined,
      }),
    ),
  };
});
