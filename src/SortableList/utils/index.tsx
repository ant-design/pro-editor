import type { UniqueIdentifier } from '@dnd-kit/core';
import isEqual from 'lodash.isequal';
import { nanoid } from 'nanoid';
import { useEffect, useState } from 'react';

const defaultInitializer = (index: number) => index;

export function createRange<T = number>(
  length: number,
  initializer: (index: number) => any = defaultInitializer,
): T[] {
  return [...new Array(length)].map((_, index) => initializer(index));
}

/**
 * Moves an array item from one position in an array to another.
 *
 * Note: This is a pure function so a new array will be returned, instead
 * of altering the array argument.
 *
 * @param array         Array in which to move an item.         (required)
 * @param moveIndex     The index of the item to move.          (required)
 * @param toIndex       The index to move item at moveIndex to. (required)
 */
export function move<T>(array: T[], moveIndex: number, toIndex: number) {
  const { length } = array;
  if (moveIndex < 0 || moveIndex >= length || toIndex < 0 || toIndex >= length) {
    return array;
  }
  const item = array[moveIndex];
  const diff = moveIndex - toIndex;

  if (diff > 0) {
    // move left
    return [
      ...array.slice(0, toIndex),
      item,
      ...array.slice(toIndex, moveIndex),
      ...array.slice(moveIndex + 1, length),
    ];
  }
  if (diff < 0) {
    // move right
    return [
      ...array.slice(0, moveIndex),
      ...array.slice(moveIndex + 1, toIndex + 1),
      item,
      ...array.slice(toIndex + 1, length),
    ];
  }
  return array;
}

export const useLatest = (props: any) => {
  const [state, setState] = useState(props);
  useEffect(() => {
    if (!isEqual(props, state)) {
      setState(props);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props]);
  return [state, setState];
};

export const getIndexOfActiveItem = (list: any[], id?: UniqueIdentifier) => {
  return id ? list.findIndex((item) => item === id) : -1;
};

export const getUUID = (index) => {
  return process.env.NODE_ENV === 'test' ? `test-${index}` : nanoid();
};
