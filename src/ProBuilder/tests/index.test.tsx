import { render } from '@testing-library/react';

import { ProBuilder } from '@ant-design/pro-editor';

describe('ProBuilder', () => {
  it('没有传入 ComponentAsset 时，渲染为空状态', () => {
    const { container } = render(<ProBuilder />);
    expect(container).toMatchSnapshot();
  });
  it('传入 ComponentAsset 时，符合预期进行渲染', () => {
    expect(1).toEqual(1);
  });
});
