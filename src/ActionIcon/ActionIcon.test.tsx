import { render } from '@testing-library/react';
import ActionIcon from './index';

describe('ActionIcon', () => {
  it('可正常渲染', () => {
    const { container } = render(<ActionIcon icon={'hello'} />);
    expect(container).toMatchSnapshot();
  });

  it('带有标题', async () => {
    const { container, findByText } = render(
      <ActionIcon icon={'hello'} title={'标题'} />,
    );
    expect(container).toMatchSnapshot();
    const icon = await findByText('hello');
    expect(icon.className.includes('studio-actionicon')).toBeTruthy();
  });
});
