import { useEffect, useRef, useState } from 'react';
import { fromEvent, merge } from 'rxjs';
import {
  bufferCount,
  filter,
  map,
  startWith,
  withLatestFrom,
} from 'rxjs/operators';

import { create } from 'rxjs-spy';
// import { tag } from 'rxjs-spy/operators/tag';

const getIdFromNode = (node) => node.getAttribute('node-data-id');

// 启动流
const clickNodeId$ = fromEvent(document, 'click').pipe(
  // tag('有效对象点击$'),
  map((e) => getIdFromNode(e.target)),
  // 过滤出有效的鼠标点击触发事件
  filter((p) => p),
);

// 键盘事件流
const keyboard$ = merge(
  fromEvent<KeyboardEvent>(document, 'keydown').pipe(
    filter((e) => e.key === 'Shift' || e.key === 'Meta'),
    map((e) => e.key),
  ),
  fromEvent<KeyboardEvent>(document, 'keyup').pipe(map(() => false)),
).pipe(
  // tag('键盘事件流'),
  startWith(false),
);

// 点击事件流中，由于关键操作都是 click，键盘事件是个辅助。
// 因此应该使用 WithLatestFrom  click 流是主流， keyboard 是辅流
const userAction$ = clickNodeId$.pipe(
  // tag('复合用户行为'),

  withLatestFrom(keyboard$),
  map(([id, withKey]) => {
    const clickType = () => {
      switch (withKey) {
        case 'Shift':
          return 'shiftClick';
        case 'Meta':
          return 'cmdClick';
        default:
          return 'click';
      }
    };

    return {
      type: clickType(),
      id,
    };
  }),

  // 由于 bufferCount 必须要有一个启动流，因此 初始化一个 null
  startWith(null),
  // 使用 bufferCount 可以缓存若干次事件
  bufferCount(2, 1),
  map(([prev, current]) => ({
    type: current.type,
    id: current.id,
    lastClickId: prev?.type === 'click' ? prev.id : null,
  })),
);

/**
 * A 需要的状态
 */
export const useMultiSelect = () => {
  const [selectedIds, setSelectedIds] = useState([]);
  const clickNodeRef = useRef(null);

  const click = (id) => {
    setSelectedIds((ids) => {
      if (ids.includes(id)) return [];
      else return [id];
    });
  };

  const cmdClick = (id) => {
    setSelectedIds((ids) => {
      if (ids.includes(id)) return ids.filter((i) => i !== id);

      return [...ids, id];
    });
  };

  const shiftClick = (startIndex, endIndex) => {
    const startId = Math.min(startIndex, endIndex);
    const endId = Math.max(startIndex, endIndex);

    const finalIds = [];
    for (let i = startId; i <= endId; i++) {
      // TODO：优化为 nodeId
      finalIds.push(i.toString());
    }
    setSelectedIds(finalIds);
  };

  useEffect(() => {
    const c = userAction$.subscribe((event) => {
      console.group('单次事件订阅结束');
      console.log('event', event);
      console.log('当前缓存的点击对象', clickNodeRef.current);
      console.groupEnd();

      switch (event.type) {
        case 'click':
          click(event.id);
          break;
        case 'cmdClick':
          cmdClick(event.id);
          break;
        case 'shiftClick':
          if (event.lastClickId !== null) {
            clickNodeRef.current = event.lastClickId;
          }

          shiftClick(Number(event.id), clickNodeRef.current);
      }
    });
    const spy = create();

    spy.log('复合用户行为');
    // spy.log(/.*/);
    return () => {
      c.unsubscribe();
      spy.teardown();
    };
  }, []);

  return {
    selectedIds,
  };
};
