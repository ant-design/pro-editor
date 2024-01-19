import { act, fireEvent, render } from '@testing-library/react';
import { Button } from 'antd';

import ContextCanvas from '../index';

const Demo = () => {
  return (
    <ContextCanvas
      rules={[
        {
          id: 'container',
          selectors: ['btn'],
          actions: ['click'],
        },
      ]}
    >
      <div>
        <div data-testid={'btn'} data-uxid={'element'}>
          <Button>按钮</Button>
        </div>
      </div>
    </ContextCanvas>
  );
};

describe('ContextCanvas', () => {
  it('toggleClass', () => {
    const { queryByTestId } = render(<Demo />);

    const btn = queryByTestId('btn');

    expect(btn.className).toBe('');

    // 点击激活
    act(() => {
      fireEvent.click(btn);
    });

    expect(btn.className).toBe('ant-editor-context-canvas-click');
    // 点击失焦
    act(() => {
      fireEvent.click(btn);
    });
    expect(btn.className).toBe('');
    // 再次激活
    act(() => {
      fireEvent.click(btn);
    });
    expect(btn.className).toBe('ant-editor-context-canvas-click');
    // 点击非btn区域失焦
    act(() => {
      fireEvent.click(document.body);
    });
    expect(btn.className).toBe('');
  });
});
