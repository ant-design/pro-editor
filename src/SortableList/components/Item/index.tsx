import type { DraggableSyntheticListeners } from '@dnd-kit/core';
import type { Transform } from '@dnd-kit/utilities';
import { useToken } from '../../../theme';
/* eslint-disable consistent-return */
import classNames from 'classnames';
import { PropsWithChildren, forwardRef, memo, useEffect } from 'react';
import { Flexbox } from 'react-layout-kit';

import { DeleteAction, HandleAction } from '../../../ActionIcon';
import { UniqueIdentifier } from '../../type';
import { useStyle } from './style';

export interface ItemProps {
  dragOverlay?: boolean;
  color?: string;
  disabled?: boolean;
  dragging?: boolean;
  handle?: boolean;
  height?: number;
  index?: number;
  fadeIn?: boolean;
  hideRemove?: boolean;
  compact?: boolean;
  transform?: Transform | null;
  listeners?: DraggableSyntheticListeners;
  sorting?: boolean;
  className?: string;
  style?: React.CSSProperties;
  transition?: string | null;
  id: UniqueIdentifier;
  onRemove?: () => void;
  actions?: React.ReactNode[];
  prefixCls?: string;
}

const Item = memo(
  forwardRef<HTMLLIElement, PropsWithChildren<ItemProps>>(
    (
      {
        color,
        dragOverlay,
        dragging,
        disabled,
        fadeIn,
        handle = true,
        index,
        listeners,
        onRemove,
        hideRemove = false,
        compact = false,
        children,
        sorting,
        style,
        transition,
        transform,
        id,
        className,
        actions,
        prefixCls,
        ...props
      },
      ref,
    ) => {
      const token = useToken();
      const { styles } = useStyle(prefixCls);
      const itemPrefixCls = classNames(`${prefixCls}-item`);

      useEffect(() => {
        if (!dragOverlay) {
          return;
        }

        document.body.style.cursor = 'grabbing';

        return () => {
          document.body.style.cursor = '';
        };
      }, [dragOverlay]);

      return (
        <li
          key={id}
          className={classNames(styles.wrapper, className, {
            [styles.wrapperFadeIn]: fadeIn,
            [`${itemPrefixCls}-wrapper-sorting`]: sorting,
            [styles.wrapperdragOverlay]: dragOverlay,
          })}
          style={
            {
              transition,
              '--translate-x': transform ? `${Math.round(transform.x)}px` : undefined,
              '--translate-y': transform ? `${Math.round(transform.y)}px` : undefined,
              '--scale-x': transform?.scaleX ? `${transform.scaleX}` : undefined,
              '--scale-y': transform?.scaleY ? `${transform.scaleY}` : undefined,
              '--index': index,
              '--color': color,
            } as React.CSSProperties
          }
          data-testid="list-item"
          ref={ref}
        >
          <div
            className={classNames(styles.item, {
              [`${itemPrefixCls}-dragging`]: dragging,
              [`${itemPrefixCls}-withHandle`]: handle,
              [styles.dragOverlay]: dragOverlay,
              [styles.disabled]: disabled,
              [`${itemPrefixCls}-discolorabled`]: color,
            })}
            style={{
              ...style,
              backgroundColor: compact ? undefined : token.colorBgContainer,
            }}
            data-cypress="draggable-item"
            {...(!handle ? listeners : undefined)}
            {...props}
            tabIndex={!handle ? 0 : undefined}
          >
            <Flexbox className={styles.content} direction={'horizontal'} align={'center'}>
              <Flexbox
                className={classNames(styles.actionsLeft, styles.actions)}
                direction={'horizontal'}
              >
                {handle ? (
                  <HandleAction
                    tabIndex={-1}
                    cursor="grab"
                    data-cypress="draggable-handle"
                    style={
                      compact
                        ? undefined
                        : {
                            position: 'absolute',
                            left: '-13px',
                          }
                    }
                    {...listeners}
                  />
                ) : null}
              </Flexbox>
              {children ? (
                children
              ) : (
                <Flexbox flex={1} style={{ paddingLeft: 4 }}>
                  {id}
                </Flexbox>
              )}
              <Flexbox
                className={classNames(styles.actions, compact ? styles.actionsRight : undefined)}
                direction={'horizontal'}
              >
                {actions}
                {hideRemove ? null : (
                  <DeleteAction tabIndex={-1} onClick={onRemove} style={{ height: 22 }} />
                )}
              </Flexbox>
            </Flexbox>
          </div>
        </li>
      );
    },
  ),
);

export default Item;
