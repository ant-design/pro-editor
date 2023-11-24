/**
 * compact: true
 */
import { ProEditorProvider } from '@ant-design/pro-editor';
import App from './App';

import { useStore } from './store';

export default () => {
  return (
    <ProEditorProvider devtoolOptions={{ name: 'redo-pro-editor-store' }} store={[useStore]}>
      <App />
    </ProEditorProvider>
  );
};
