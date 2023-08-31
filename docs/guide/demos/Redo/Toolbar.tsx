import { RedoOutlined, UndoOutlined } from '@ant-design/icons';
import { useProEditor } from '@ant-design/pro-editor';
import { Badge, Button } from 'antd';
import { Flexbox } from 'react-layout-kit';

const Toolbar = () => {
  const { undo, redo, undoStack, redoStack } = useProEditor();

  const undoStackItem = undoStack();
  const redoStackItem = redoStack();

  console.log(undoStackItem);
  return (
    <Flexbox horizontal padding={12} gap={8}>
      <Badge count={undoStackItem.length}>
        <Button icon={<UndoOutlined />} onClick={undo} disabled={undoStackItem.length === 0}>
          撤销
        </Button>
      </Badge>
      <Badge count={redoStackItem.length}>
        <Button icon={<RedoOutlined />} onClick={redo} disabled={redoStackItem.length === 0}>
          重做
        </Button>
      </Badge>
    </Flexbox>
  );
};

export default Toolbar;
