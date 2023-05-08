import type { DraggableSyntheticListeners } from '@dnd-kit/core';
import type { Transform } from '@dnd-kit/utilities';
import type { PropsWithChildren } from 'react';
/* eslint-disable consistent-return */
import classNames from 'classnames';
import { forwardRef, memo, useEffect } from 'react';
import { Flexbox } from 'react-layout-kit';

import { DeleteAction, HandleAction } from '../../../ActionIcon';
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
  transform?: Transform | null;
  listeners?: DraggableSyntheticListeners;
  sorting?: boolean;
  className?: string;
  style?: React.CSSProperties;
  transition?: string | null;
  value: React.ReactNode;
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
        children,
        sorting,
        style,
        transition,
        transform,
        value,
        className,
        actions,
        prefixCls,
        ...props
      },
      ref,
    ) => {
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
          key={String(value)}
          className={classNames(styles.wrapper, className, {
            [styles.wrapperFadeIn]: fadeIn,
            [`${itemPrefixCls}-wrapper-sorting`]: sorting,
            [styles.wrapperdragOverlay]: dragOverlay,
          })}
          style={
            {
              transition,
              '--translate-x': transform
                ? `${Math.round(transform.x)}px`
                : undefined,
              '--translate-y': transform
                ? `${Math.round(transform.y)}px`
                : undefined,
              '--scale-x': transform?.scaleX
                ? `${transform.scaleX}`
                : undefined,
              '--scale-y': transform?.scaleY
                ? `${transform.scaleY}`
                : undefined,
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
            style={style}
            data-cypress="draggable-item"
            {...(!handle ? listeners : undefined)}
            {...props}
            tabIndex={!handle ? 0 : undefined}
          >
            <Flexbox
              className={styles.content}
              direction={'horizontal'}
              align={'center'}
            >
              <Flexbox
                className={classNames(styles.actionsLeft, styles.actions)}
                direction={'horizontal'}
              >
                {handle ? (
                  <HandleAction
                    tabIndex={-1}
                    cursor="grab"
                    data-cypress="draggable-handle"
                    {...listeners}
                  />
                ) : null}
              </Flexbox>
              {children}
              <Flexbox
                className={classNames(styles.actionsRight, styles.actions)}
                direction={'horizontal'}
              >
                {actions}
                {onRemove ? (
                  <DeleteAction tabIndex={-1} onClick={onRemove} />
                ) : null}
              </Flexbox>
            </Flexbox>
          </div>
        </li>
      );
    },
  ),
);

export default Item;
