import { SmileOutlined } from '@ant-design/icons';
import { render } from '@testing-library/react';
import ActionIcon from './index';

describe('ActionIcon', () => {
  it('可正常渲染', () => {
    const { container } = render(<ActionIcon icon={<SmileOutlined />} />);
    expect(container).toMatchSnapshot();
  });

  it('带有标题', async () => {
    const { container, findByTestId } = render(
      <ActionIcon icon={<SmileOutlined />} data-testid={'smile'} title={'标题'} />,
    );
    expect(container).toMatchSnapshot();
    const icon = await findByTestId('smile');
    expect(icon.className.includes('ant-btn-icon')).toBeTruthy();
    expect(icon.className.includes('ant-editor-icon')).toBeTruthy();
  });
});
