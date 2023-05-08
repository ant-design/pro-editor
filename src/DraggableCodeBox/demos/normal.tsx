import { DraggableCodeBox } from '@ant-design/pro-editor';
import { css, cx } from '@emotion/css';

const testData = `class MyClass {
  public static myValue: string;
  constructor(init: string) {
    this.myValue = init;
  }
}
import fs = require("fs");
module MyModule {
  export interface MyInterface extends Other {
    myProperty: any;
  }
}
declare magicNumber number;
myArray.forEach(() => { }); // fat arrow syntax
------
import classNames from 'classnames';
import * as React from 'react';

export interface HighlightCellProps {
  prefixCls: string;
  theme: string;
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
  const rowIndex: number = data?.index;
  return (
    <>
      {lineNumber ? (
        <td className={classNames('123', index)}>
          {rowIndex}
        </td>
      ) : null}
      <td
        onMouseDown={onMouseDown}
        style={{ width, userSelect: lock ? 'none' : undefined }}
        className={classNames(prefixCls-content)}
        dangerouslySetInnerHTML={{ __html: data?.value ?? (emptyText || '') }}
      />
    </>
  );
}
`;

const styles = {
  wrap: cx(
    `wrap`,
    css`
      width: 100%;
      height: 500px;
      border: 1px solid #333;
      position: relative;
    `,
  ),
};

export const Demo = () => {
  return (
    // 要求父组件必须relative
    <div className={styles.wrap}>
      <DraggableCodeBox
        defaultHeight={300}
        items={[
          {
            data: testData,
            title: 'ProTable',
          },
        ]}
      />
    </div>
  );
};

export default Demo;
