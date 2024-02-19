import { SortableList } from '@ant-design/pro-editor';
import { useState } from 'react';

const Demo = () => {
  const [list, setList] = useState(['关关雎鸠', '在河之洲', '窈窕淑女', '君子好逑']);

  return (
    <SortableList
      value={list}
      onChange={setList}
      style={{ background: 'rgb(255,224,224)', padding: 24, borderRadius: 12 }}
      className={'custom-class'}
      getItemStyles={({ isSorting, isDragging }) => {
        return {
          padding: 24,
          // 拖拽项修改背景色
          background: isDragging ? 'rgb(74,135,82)' : 'pink',
          color: isDragging ? 'rgb(139,212,148)' : 'rgb(135,74,74)',
          // 在 拖拽过程中放大所有item的圆角
          borderRadius: isSorting ? 100 : 16,
          boxShadow: 'none',
        };
      }}
    />
  );
};

export default Demo;
