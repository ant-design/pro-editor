import { ProEditorProvider } from '@ant-design/pro-editor';
import App from './App';

export default () => {
  return (
    <ProEditorProvider>
      <App />
    </ProEditorProvider>
  );
};
