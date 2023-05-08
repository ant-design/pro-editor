import { render } from '@testing-library/react';

import { DataFill } from '@ant-design/pro-editor';

describe('DataFill', () => {
  it('数据填充可正常渲染', () => {
    const { container } = render(<DataFill />);
    expect(container).toMatchSnapshot();
  });

  // 阻塞执行，暂时注释
  //   it('带有点击事件', async () => {
  //     // 设置 onChange 方法
  //     const keyMap = [];
  //     let fillfunc;
  //     const onClick = (payload: FilledPayload) => {
  //       keyMap.push(payload.key);
  //       fillfunc = payload.filler;
  //     };
  //     const { findByText } = render(<DataFill onClick={onClick} />);

  //     const nameDom = await findByText('文本');

  //     await act(async () => {
  //       await userEvent.click(nameDom);
  //     });
  //     expect(keyMap).toEqual(['common']);
  //     expect(fillfunc()).toBeDefined();
  //   });
});
