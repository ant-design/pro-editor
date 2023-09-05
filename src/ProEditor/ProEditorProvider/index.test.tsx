import { ProEditorProvider, proEditorMiddleware } from '@ant-design/pro-editor';

import { render, renderHook, screen } from '@testing-library/react';
import { create } from 'zustand';

const useAStore = create(
  proEditorMiddleware(() => ({ a: 'a' }), {
    name: 'a',
  }),
);

const useBStore = create(
  proEditorMiddleware(() => ({ b: 'b' }), {
    name: 'b',
  }),
);

describe('ProEditorProvider', () => {
  it('should render children correctly', () => {
    render(
      <ProEditorProvider>
        <div>Child Component</div>
      </ProEditorProvider>,
    );

    expect(screen.getByText('Child Component')).toBeInTheDocument();
  });

  it('should render Store correctly', () => {
    const Provider = ({ children }) => (
      <ProEditorProvider store={[useAStore, useBStore]}>{children}</ProEditorProvider>
    );

    const { result } = renderHook(() => useAStore(), { wrapper: Provider });
    const { result: bResult } = renderHook(() => useBStore(), { wrapper: Provider });

    // @ts-ignore
    expect(result.current.proEditor).toBeDefined();
    // @ts-ignore
    expect(bResult.current.proEditor).toBeDefined();
  });

  it('嵌套时使用同一个 Store', () => {
    const Provider = ({ children }) => (
      <ProEditorProvider store={[useAStore]}>{children}</ProEditorProvider>
    );
    const AnotherProvider = ({ children }) => (
      <Provider>
        <ProEditorProvider>{children}</ProEditorProvider>;
      </Provider>
    );

    const { result } = renderHook(() => useAStore(), { wrapper: AnotherProvider });

    // @ts-ignore
    expect(result.current.proEditor).toBeDefined();
  });
});
