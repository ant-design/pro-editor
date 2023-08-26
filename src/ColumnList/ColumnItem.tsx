import {
  ColumnItemList,
  DeleteAction,
  HandleAction,
  useSortableList,
} from '@ant-design/pro-editor';
import { createStyles } from 'antd-style';
import classNames from 'classnames';
import { memo } from 'react';
import { Flexbox } from 'react-layout-kit';
import ControlInput from './renderItem/Input';
import ControlSelect from './renderItem/Select';

const useStyle = createStyles(({ css, cx }, prefixCls) => {
  return {
    item: cx(
      `${prefixCls}-item`,
      css`
        position: relative;
        width: 100%;
      `,
    ),
    content: cx(
      `${prefixCls}-item-content`,
      css`
        flex: 1;
        height: 24px;
        font-size: 12px;
        border-radius: 2px;
        min-width: 48px;
      `,
    ),
    actions: cx(
      `${prefixCls}-item-actions`,
      css`
        z-index: 10;
        color: hsla(0, 0, 0, 0.45);
        opacity: 0;
      `,
    ),
    actionsLeft: cx(
      `${prefixCls}-item-actions-left`,
      css`
        position: absolute;
        top: 0;
        left: 0;

        .studio-btn.studio-btn-sm.studio-btn-icon-only {
          width: 14px;
          height: 24px;
          > svg {
            width: 14px;
          }
        }
      `,
    ),

    actionsRight: cx(
      `${prefixCls}-item-actions-right`,
      css`
        position: absolute;
        top: 1px;
        right: 1px;
        align-self: flex-end;
        overflow: hidden;
        border-radius: 1px;
        // 采用背景模糊来解决多种背景色下覆盖内容的问题 TODO：FireFox 兼容
        backdrop-filter: blur(5px);
        //background-image: linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, @bg-2 10%, @bg-2 100%);
      `,
    ),
  };
});

interface ItemRenderProps<T = any> {
  columns: ColumnItemList<T>;
  item: T;
  index: number;
  prefixCls: string;
  listeners: any;
  /**
   * 除列表自带操作之外的其他操作自渲染
   */
  actions?: React.ReactNode[];
  hideRemove?: boolean;
}

const ColumnItem = memo<ItemRenderProps>(
  ({ item, index, prefixCls, columns, listeners, actions, hideRemove }) => {
    const { styles } = useStyle(prefixCls);
    const instance = useSortableList();
    return (
      <Flexbox className={styles.item} direction={'horizontal'} align={'center'}>
        <Flexbox
          className={classNames(styles.actionsLeft, styles.actions)}
          direction={'horizontal'}
        >
          <HandleAction
            tabIndex={-1}
            cursor="grab"
            data-cypress="draggable-handle"
            {...listeners}
          />
        </Flexbox>
        <Flexbox horizontal gap={4} width={'100%'} className={styles.content}>
          {columns.map((col, colIndex) => {
            const style = { flex: 1, maxWidth: `${100 / columns.length}%` };
            const props = {
              dataIndex: col.dataIndex,
              value: item[col.dataIndex],
              index,
              prefixCls,
              style,
              placeholder: col.placeholder,
            };
            switch (col.type) {
              default:
              case 'input':
                return <ControlInput key={`${item?.dataIndex}-${colIndex}`} {...props} />;

              case 'select':
                return (
                  <ControlSelect
                    key={`${item?.dataIndex}-${colIndex}`}
                    options={col.options}
                    {...props}
                  />
                );
              case 'custom':
                const Custom = col.render;
                return Custom ? (
                  <Custom
                    item={item}
                    column={col}
                    onChange={(value) => {
                      instance.updateItem({ [col.dataIndex]: value }, index);
                    }}
                    {...props}
                  />
                ) : (
                  '暂无实现'
                );
            }
          })}
        </Flexbox>
        <Flexbox
          className={classNames(styles.actions, styles.actionsRight)}
          direction={'horizontal'}
        >
          {actions}
          {hideRemove ? null : (
            <DeleteAction
              tabIndex={-1}
              onClick={() => {
                instance.removeItem(index);
              }}
              style={{ height: 22 }}
            />
          )}
        </Flexbox>
      </Flexbox>
    );
  },
);

export default ColumnItem;
