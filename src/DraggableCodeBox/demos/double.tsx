import { CodeBoxItem, DraggableCodeBox } from '@ant-design/pro-editor';
import { css, cx } from '@emotion/css';
import { Button } from 'antd';
import { useState } from 'react';

const testData = {
  data: `class MyClass {
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
  `,
  title: 'ProTable',
};
const tsxData = {
  data: `import classNames from 'classnames';
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
  }`,
  title: 'OneAPI 配置',
};

const jsonData = {
  data: `{
    "scripts": {
      "-----------": "",
      "----------- ": "",
      "-----------  ": "",
    },
    "devDependencies": {
      "-----------  ": "",
    },
    "engines": {
      "-----------  ": "",
    },
    "ci": {
      "-----------": "",
      "----------- ": "",
      "-----------  ": "",
    },
    "xxx": {
      "-----------": "",
      "----------- ": "",
      "-----------  ": "",
    }
  }
  `,
  title: 'JSON',
  btnText: 'Copy',
};

const styles = {
  wrap: cx(
    `wrap`,
    css`
      width: 100%;
      height: 500px;
      border: 1px solid #333;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
    `,
  ),
};

export const Demo = () => {
  const [list, setList] = useState<CodeBoxItem[]>([
    testData,
    tsxData,
    jsonData,
  ]);
  return (
    // 要求父组件必须relative
    <div className={styles.wrap}>
      <Button
        style={{
          position: 'relative',
        }}
        onClick={() => {
          setList([testData]);
        }}
      >
        一
      </Button>
      <Button
        style={{
          position: 'relative',
        }}
        onClick={() => {
          setList([testData, tsxData]);
        }}
      >
        二
      </Button>
      <Button
        style={{
          position: 'relative',
        }}
        onClick={() => {
          setList([testData, tsxData, jsonData]);
        }}
      >
        三
      </Button>
      <DraggableCodeBox items={list} />
    </div>
  );
};

export default Demo;
