import type { FC } from 'react';
import { useStore } from './store';

const Content: FC<{ id: string }> = ({ id }) => {
  const { content, setText } = useStore();
  return (
    <button
      type={'button'}
      data-testid={id}
      onClick={() => {
        setText('clicked');
      }}
    >
      {content.text}
    </button>
  );
};

export const TestComponent: FC<{ id: string }> = ({ id = 'component' }) => {
  return <Content id={id} />;
};

const Panel: FC = () => {
  const { content } = useStore();
  return <div data-testid={'panel'}>{content.text}</div>;
};

export const TestPanel = Panel;
