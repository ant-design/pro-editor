import { PlusOutlined } from '@ant-design/icons';
import type { UniqueIdentifier } from '@dnd-kit/core';
import {
  closestCenter,
  defaultDropAnimation,
  defaultDropAnimationSideEffects,
  DndContext,
  DragOverlay,
  KeyboardSensor,
  MeasuringStrategy,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  restrictToVerticalAxis,
  restrictToWindowEdges,
} from '@dnd-kit/modifiers';
import {
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { Button } from 'antd';
import classNames from 'classnames';
import { useMemo, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { Flexbox } from 'react-layout-kit';

import { Input, Select } from '../antd';
import { ConfigProvider } from '../ConfigProvider';
import { getPrefixCls } from '../theme';

import Item from './components/Item';
import List from './components/List';
import { SortableItem } from './components/SortableItem';

import { move, useLatest } from './utils';

import { useStyle } from './style';

const measuringConfig = {
  strategy: MeasuringStrategy.Always,
};

export interface Column<T = any> {
  /** 栏标题 */
  title?: React.ReactNode;
  /**
   * 字段类型
   */
  type?: 'select' | 'input' | 'custom';
  /**
   * 选项值
   */
  options?: {
    label: string;
    value: string | number;
  }[];
  /**
   * 提示
   */
  placehoder?: string;
  /**
   * 初始值
   */
  initialValue?: any;
  /**
   * 字段引用
   */
  dataIndex?: string;
  /**
   * 唯一键值
   */
  key?: string;
  /**
   * 自定义渲染
   */
  render?: (
    field: T,
    props: { value: any; onChange: (value: any) => void },
  ) => React.ReactNode;
  /**
   * 栏目宽度
   */
  width?: number | string;
  multiple?: boolean;
}

export interface CreatorButtonProps<T> {
  /**
   * 生成初始值逻辑
   */
  record?: (index: number) => Record<string, any>;
  /**
   * 新增一行按钮
   */
  creatorButtonText?: string;
  /**
   * 新增回调
   */
  onCreate?: (record: T) => void;
}

export interface Props<T> {
  /**
   * 配置
   */
  columns: Column<T>[];
  /**
   * 初始值
   */
  initialValues?: T[];
  /**
   * 值变化
   */
  onChange?: (values: T[]) => void;
  /**
   * 删除回调
   */
  onRemove?: (index: number) => void;
  /**
   * 值
   */
  value?: T[];
  /**
   * 除列表自带操作之外的其他操作自渲染
   */
  actions?:
    | ((field: T, index: number) => React.ReactNode[])
    | React.ReactNode[];
  /**
   * 新建对象相关属性
   */
  creatorButtonProps?: CreatorButtonProps<T> | false;
  /**
   * getPopupContainer
   */
  getPopupContainer?: (props: any) => HTMLElement;
  /**
   * 类名
   */
  className?: string;
  /**
   * 自定义前缀
   */
  prefixCls?: string;
}

export default function Sortable<T>({
  initialValues = [],
  value: controlledValue,
  columns = [],
  onChange,
  onRemove,
  actions = [],
  creatorButtonProps,
  getPopupContainer = () => document.body,
  className,
  prefixCls: customizePrefixCls,
}: Props<T>) {
  const prefixCls = getPrefixCls('sortable-list', customizePrefixCls);
  const { styles } = useStyle(prefixCls);
  const {
    record,
    onCreate,
    creatorButtonText = '添加一列',
  } = creatorButtonProps || {};

  const ref = useRef(null);

  const [fields, setFields] = useLatest(controlledValue || initialValues);

  const [activeId, setActiveId] = useState<UniqueIdentifier>(null);
  const [changed, setChanged] = useState(false);
  const listEl = useRef(null);
  const addBtnEl = useRef(null);

  const genClsByIndex = (rowIndex = 0, columnIndex = 0) => {
    return `index-${rowIndex}-${columnIndex}`;
  };

  const requestFocus = (rowIndex = 0, columnIndex = 0) => {
    const selector = genClsByIndex(rowIndex, columnIndex);
    ref.current
      ?.getElementsByClassName(selector)[0]
      ?.getElementsByTagName('input')[0]
      ?.focus();
  };

  const keyRef = useRef({
    keys: [],
    id: 1, // 自增
  });

  const keyManager = keyRef.current;

  fields.forEach((__, index) => {
    const key = keyManager.keys[index];
    if (key === undefined) {
      keyManager.keys[index] = keyManager.id;
      keyManager.id += 1;
    }
  });

  const sensors = useSensors(
    useSensor(MouseSensor),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  );

  const getIndex = keyManager.keys.indexOf.bind(keyManager.keys);
  const activeIndex = activeId ? getIndex(activeId) : -1;

  /**
   * 删除
   * @param index
   * @returns
   */
  const handleRemove = (index: number) => {
    const indexSet = new Set(Array.isArray(index) ? index : [index]);
    if (indexSet.size <= 0) {
      return;
    }
    keyManager.keys = keyManager.keys.filter(
      (_, keysIndex) => !indexSet.has(keysIndex),
    );
    const newValue = fields.filter(
      (_, valueIndex) => !indexSet.has(valueIndex),
    );
    setFields(newValue);
    if (onChange) onChange(newValue);
    if (onRemove) onRemove(index);
  };
  /**
   * 添加到最后即可
   */
  const handleAdd = () => {
    keyManager.keys = [...keyManager.keys, keyManager.id];
    keyManager.id += 1;

    const intialValue = {
      ...(record && typeof record === 'function'
        ? record(fields.length)
        : record),
    };
    columns.forEach((column) => {
      if (column.initialValue) {
        intialValue[column.dataIndex] = column.initialValue;
      }
    });
    const newValue = [...fields, intialValue];
    setFields(newValue);
    if (onChange) onChange(newValue);
    if (onCreate) onCreate(intialValue as T);
  };

  /**
   * 处理数据移动
   * @param from 从哪个位置来
   * @param to 放到哪个位置
   * @returns
   */
  const handleMove = (from: number, to: number) => {
    if (from === to) {
      return;
    }
    // Do not handle out of range
    if (from < 0 || from >= fields.length || to < 0 || to >= fields.length) {
      return;
    }
    keyManager.keys = move(keyManager.keys, from, to);
    const newValue = move<T>(fields, from, to);
    setFields(newValue);
    if (onChange) onChange(newValue);
  };

  // 拖动时防止样式丢失
  const fieldStyle: React.CSSProperties = {
    flex: 1,
    width: '100%',
    height: '24px',
    fontSize: '12px',
    lineHeight: '24px',
    borderRadius: '2px',
  };

  const header = useMemo(() => {
    return (
      <Flexbox
        direction={'horizontal'}
        gap={8}
        align={'center'}
        className={styles.column}
        width={'100%'}
      >
        {columns.map((column) => {
          const { title, width } = column;
          return (
            <div
              key={`header-${column.dataIndex}`}
              className={styles.columnTitle}
              style={{ ...fieldStyle, flexBasis: width, minWidth: '48px' }}
            >
              {title}
            </div>
          );
        })}
      </Flexbox>
    );
  }, [columns, styles]);

  const handleChange = (value, index, dataIndex, shouldUpdate = true) => {
    const newValue = JSON.parse(JSON.stringify(fields));
    newValue[index][dataIndex] = value;
    setFields(newValue);
    if (shouldUpdate && onChange) {
      onChange(newValue);
      setChanged(false);
    }
  };

  const handleKeyActions = (e, rowIndex, columnIndex) => {
    if (e.defaultPrevented) {
      return; // Do nothing if the event was already processed
    }
    let nextRowIndex = rowIndex;
    switch (e.key) {
      case 'Enter': // 最后一个输入元素，且有添加按钮，则添加
        if (rowIndex === fields.length - 1) {
          if (creatorButtonProps !== false) {
            // 聚焦到添加按钮上
            addBtnEl?.current?.focus();
          }
        } else {
          // 否则切换到下一行
          requestFocus(rowIndex + 1, columnIndex);
        }
        break;
      case 'Down': // IE/Edge specific value
      case 'ArrowDown':
        nextRowIndex = rowIndex === fields.length - 1 ? rowIndex : rowIndex + 1;
        requestFocus(nextRowIndex, columnIndex);
        break;
      case 'Up': // IE/Edge specific value
      case 'ArrowUp':
        nextRowIndex = rowIndex === 0 ? 0 : rowIndex - 1;
        requestFocus(nextRowIndex, columnIndex);
        break;
    }
    e.preventDefault();
  };

  const renderColumns = (rowIndex, disabled = false) => {
    const field = fields[rowIndex];

    return (
      <Flexbox
        key={keyManager.keys[rowIndex]}
        direction={'horizontal'}
        gap={8}
        align={'center'}
        className={styles.column}
        width={'100%'}
      >
        {columns.map((column, columnIndex) => {
          const {
            type,
            options,
            placehoder,
            dataIndex,
            width,
            render,
            multiple,
          } = column || {};
          let element = null;
          const indexClassName = genClsByIndex(rowIndex, columnIndex);

          switch (type) {
            case 'custom':
              element = (
                <div
                  className={indexClassName}
                  style={{ ...fieldStyle, flexBasis: width, minWidth: '48px' }}
                  key={dataIndex}
                >
                  {render(field, {
                    value: field[dataIndex],
                    onChange: (value) => {
                      handleChange(value, rowIndex, dataIndex);
                    },
                  })}
                </div>
              );
              break;
            case 'select':
              element = (
                <div
                  className={indexClassName}
                  style={{ ...fieldStyle, flexBasis: width, minWidth: '48px' }}
                  key={dataIndex}
                >
                  <Select
                    size="small"
                    style={{ width: '100%' }}
                    options={options}
                    mode={multiple ? 'multiple' : undefined}
                    placeholder={placehoder}
                    value={field[dataIndex]}
                    disabled={disabled}
                    getPopupContainer={getPopupContainer}
                    onChange={(value) => {
                      handleChange(value, rowIndex, dataIndex);
                    }}
                  />
                </div>
              );
              break;
            case 'input':
            default:
              element = (
                // 包一下宽度保持一致
                <div
                  className={indexClassName}
                  style={{ ...fieldStyle, flexBasis: width, minWidth: '48px' }}
                  key={dataIndex}
                >
                  <Input
                    value={field[dataIndex]}
                    style={{ width: '100%', paddingLeft: 12 }}
                    onKeyUp={(e) => {
                      handleKeyActions(e, rowIndex, columnIndex);
                    }}
                    disabled={disabled}
                    size={'small'}
                    placeholder={placehoder}
                    onPressEnter={(e) => {
                      if (changed)
                        handleChange(
                          (e as any).target.value,
                          rowIndex,
                          dataIndex,
                        );
                    }}
                    onBlur={(e) => {
                      if (changed)
                        handleChange(
                          (e as any).target.value,
                          rowIndex,
                          dataIndex,
                        );
                    }}
                    onChange={(e) => {
                      // 只存值不触发 update
                      handleChange(
                        (e as any).target.value,
                        rowIndex,
                        dataIndex,
                        false,
                      );
                      setChanged(true);
                    }}
                  />
                </div>
              );
              break;
          }

          return element;
        })}
      </Flexbox>
    );
  };

  return (
    <ConfigProvider>
      <div className={classNames(prefixCls, className)} ref={listEl}>
        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter} // 碰撞检测策略
          onDragStart={({ active }) => {
            if (!active) {
              return;
            }
            setActiveId(active.id);
          }}
          onDragEnd={({ over }) => {
            setActiveId(null);
            if (over) {
              const overIndex = getIndex(over.id);
              if (activeIndex !== overIndex) {
                handleMove(activeIndex, overIndex);
              }
            }
          }}
          measuring={{ droppable: measuringConfig }}
          onDragCancel={() => setActiveId(null)}
          modifiers={[restrictToVerticalAxis, restrictToWindowEdges]}
        >
          <>
            <SortableContext
              // dndkit 的 bug ，必须要用 object 的 id 获取，否则 transform 一直为空。
              items={keyManager.keys.map((key) => {
                return {
                  id: key,
                };
              })}
              strategy={verticalListSortingStrategy}
            >
              {header}
              <List ref={ref} prefixCls={prefixCls}>
                {fields.map((field, index) => (
                  <SortableItem
                    key={keyManager.keys[index]}
                    id={keyManager.keys[index]}
                    index={index}
                    actions={
                      typeof actions === 'function'
                        ? actions(field, index)
                        : actions
                    }
                    onRemove={handleRemove}
                    useDragOverlay={true}
                    prefixCls={prefixCls}
                  >
                    {renderColumns(index)}
                  </SortableItem>
                ))}
              </List>
              {creatorButtonProps === false ? null : (
                <Button
                  block
                  size={'small'}
                  className={styles.btnAdd}
                  onClick={handleAdd}
                  ref={addBtnEl}
                  icon={<PlusOutlined />}
                >
                  {creatorButtonText}
                </Button>
              )}
            </SortableContext>
            {listEl.current
              ? createPortal(
                  <DragOverlay
                    adjustScale={false}
                    dropAnimation={{
                      ...defaultDropAnimation,
                      sideEffects: defaultDropAnimationSideEffects({
                        styles: { active: { opacity: '0.5' } },
                      }),
                    }}
                  >
                    {activeId ? (
                      <Item
                        value={keyManager.keys[activeIndex]}
                        dragOverlay
                        prefixCls={prefixCls}
                      >
                        {renderColumns(activeIndex, true)}
                      </Item>
                    ) : null}
                  </DragOverlay>,
                  listEl.current,
                )
              : undefined}
          </>
        </DndContext>
      </div>
    </ConfigProvider>
  );
}
