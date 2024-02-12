/**
  compact: true
 */
import { SortableList, SortableListRef } from '@ant-design/pro-editor';
import { Badge, Button } from 'antd';
import { useTheme } from 'antd-style';
import { useRef, useState } from 'react';
import { Flexbox } from 'react-layout-kit';

interface Item {
  id: string;
  text: string;
}

const Demo = () => {
  const token = useTheme();
  const ref = useRef<SortableListRef>(null);

  const [list, setList] = useState<Item[]>([
    { id: '1', text: '关关雎鸠' },
    { id: '2', text: '在河之洲' },
    { id: '3', text: '窈窕淑女' },
    { id: '4', text: '君子好逑' },
  ]);

  return (
    <Flexbox gap={24} padding={24} style={{ background: token.colorBgLayout }}>
      <Flexbox horizontal gap={8}>
        <Button
          onClick={() => {
            ref.current.addItem(
              {
                id: Math.ceil(Math.random() * 100000).toString(16),
                text: 'new',
              },
              0,
            );
          }}
        >
          Add item from top
        </Button>
        <Button
          onClick={() => {
            ref.current.addItem(
              {
                id: Math.ceil(Math.random() * 100000).toString(16),
                text: 'new',
              },
              list.length,
            );
          }}
        >
          Add item from bottom
        </Button>
      </Flexbox>

      <SortableList<Item>
        value={list}
        ref={ref}
        onChange={setList}
        getItemStyles={() => ({ padding: '16px' })}
        renderItem={(item: Item, { index, listeners }) => {
          return (
            <Flexbox horizontal width={'100%'} distribution={'space-between'} gap={12}>
              <Flexbox horizontal gap={8}>
                <div>
                  <Badge count={item.id} />
                </div>
                <div>{item.text}</div>
              </Flexbox>
              <Flexbox
                horizontal // 由于拖拽事件是通过监听 onMouseDown 来识别用户动作
                // 因此针对相关用户操作，需要终止 onMouseDown 的冒泡行为
                onMouseDown={(e) => {
                  e.stopPropagation();
                }}
              >
                <Button
                  size={'small'}
                  type={'text'}
                  onClick={() => {
                    ref.current.addItem(
                      {
                        id: Math.ceil(Math.random() * 100000).toString(16),
                        text: 'new',
                      },
                      index,
                    );
                  }}
                >
                  Up
                </Button>
                <Button
                  size={'small'}
                  type={'text'}
                  onClick={() => {
                    ref.current.addItem(
                      {
                        id: Math.ceil(Math.random() * 1000).toString(16),
                        text: 'new',
                      },
                      index + 1,
                    );
                  }}
                >
                  Down
                </Button>
                <Button
                  size={'small'}
                  danger
                  type={'text'}
                  onClick={() => ref.current.removeItem(index)}
                >
                  Delete
                </Button>
                <Button size={'small'} type={'text'} {...listeners}>
                  Drag
                </Button>
              </Flexbox>
            </Flexbox>
          );
        }}
      />
    </Flexbox>
  );
};

export default Demo;
