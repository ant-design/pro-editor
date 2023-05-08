import classNames from 'classnames';
import { useStyles } from './style';

export interface HighlightCellProps {
  prefixCls: string;
  theme: 'dark' | 'light';
  data: { index: number; value: string };
  emptyText?: string;
  width: string;
  /** User can not selection code when lock is enabled */
  lock?: boolean;
  rowOffset?: number;
  onMouseDown?: React.MouseEventHandler;
  lineNumber?: boolean;
}

export default function HighlightCell({
  prefixCls,
  theme,
  data,
  emptyText,
  width,
  lock,
  lineNumber = false,
  onMouseDown,
}: HighlightCellProps) {
  const { styles } = useStyles(prefixCls);
  const rowIndex: number = data?.index;

  return (
    <>
      {lineNumber ? (
        <td
          className={classNames(
            styles.index,
            theme === 'dark' ? styles.darkThemeIndex : styles.lightThemeIndex,
          )}
        >
          {rowIndex}
        </td>
      ) : null}
      <td
        onMouseDown={onMouseDown}
        style={{ width, userSelect: lock ? 'none' : undefined }}
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: data?.value ?? (emptyText || '') }}
      />
    </>
  );
}
