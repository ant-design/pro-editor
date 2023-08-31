import { RedoOutlined, UndoOutlined } from '@ant-design/icons';
import { useProEditor } from '@ant-design/pro-editor';
import { Button } from 'antd';
import { Flexbox } from 'react-layout-kit';

const Toolbar = () => {
  const { undo, redo, undoStack, redoStack } = useProEditor();

  return (
    <Flexbox horizontal padding={12} gap={8}>
      <Button icon={<UndoOutlined />} onClick={undo} disabled={undoStack.length === 0}>
        <Flexbox style={{ display: 'inline-flex' }} horizontal gap={4}>
          <div>撤销</div>
        </Flexbox>
      </Button>
      <Button icon={<RedoOutlined />} onClick={redo} disabled={redoStack.length === 0}>
        重做
      </Button>
    </Flexbox>
  );
};

export default Toolbar;
