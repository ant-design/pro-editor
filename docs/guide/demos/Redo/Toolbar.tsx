import { RedoOutlined, UndoOutlined } from '@ant-design/icons';
import { useProEditor } from '@ant-design/pro-editor';
import { Badge, Button } from 'antd';
import { Flexbox } from 'react-layout-kit';

const Toolbar = () => {
  const { undo, redo, undoStack, redoStack } = useProEditor();

  const undoStackList = undoStack();
  const redoStackList = redoStack();

  const lastAction = undoStackList.at(-1);

  return (
    <Flexbox padding={12} gap={8}>
      <Flexbox horizontal gap={8}>
        <Badge count={undoStackList.length}>
          <Button icon={<UndoOutlined />} onClick={undo} disabled={undoStackList.length === 0}>
            撤销
          </Button>
        </Badge>

        <Badge count={redoStackList.length}>
          <Button icon={<RedoOutlined />} onClick={redo} disabled={redoStackList.length === 0}>
            重做
          </Button>
        </Badge>
      </Flexbox>
      <Flexbox>
        上次操作时间:
        {lastAction ? new Date(lastAction.timestamp).toLocaleTimeString() : '-'}
      </Flexbox>
      <Flexbox>
        上次操作名称:
        {lastAction?.name ?? '-'}
      </Flexbox>{' '}
      <Flexbox>
        上次操作类型:
        {lastAction?.type ?? '-'}
      </Flexbox>
    </Flexbox>
  );
};

export default Toolbar;
