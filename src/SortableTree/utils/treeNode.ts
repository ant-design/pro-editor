import type { UniqueIdentifier } from '@dnd-kit/core';
import { produce } from 'immer';

import type { FlattenNode, TreeData, TreeNode } from '../types';

const flatten = (
  items: TreeData,
  parentId: UniqueIdentifier | null = null,
  depth = 0,
): FlattenNode[] =>
  items.reduce<FlattenNode[]>((acc, item, index) => {
    return [
      ...acc,
      { ...item, parentId: parentId, depth, index },
      ...flatten(item.children, item.id, depth + 1),
    ];
  }, []);

export const flattenTree = (items: TreeData): FlattenNode[] => flatten(items);

export function buildTree(flattenedItems: FlattenNode[]): TreeData {
  const root: TreeNode = { id: 'root', children: [] };
  const nodes: Record<string, TreeNode> = { [root.id]: root };
  const items = flattenedItems.map(({ depth, index, ...item }) => ({
    ...item,
    parentId: item.parentId ?? undefined,
    children: [],
  }));

  for (const item of items) {
    const { id, children } = item;
    const parentId = item.parentId ?? root.id;
    const parent = nodes[parentId] ?? findNode(items, parentId);

    nodes[id] = { id: id, children };
    const { parentId: _, ...newItem } = item;
    parent.children.push(newItem);
  }

  return root.children;
}

export function findNode(treeData: TreeData, itemId: UniqueIdentifier) {
  return treeData.find(({ id }) => id === itemId);
}

export function removeNode(treeData: TreeData, id: UniqueIdentifier) {
  const newItems = [];

  for (let item of treeData) {
    item = Object.assign({}, item);

    if (item.id === id) {
      continue;
    }

    if (item.children.length) {
      item.children = removeNode(item.children, id);
    }

    newItems.push(item);
  }

  return newItems;
}

export const setProperty = <T extends keyof TreeNode>(
  treeData: TreeData,
  id: UniqueIdentifier,
  property: T,
  setter: (value: TreeNode[T]) => TreeNode[T],
) =>
  produce(treeData, (draft) => {
    for (const item of draft) {
      if (item.id === id) {
        item[property] = setter(item[property]);
        continue;
      }

      if (item.children.length) {
        item.children = setProperty(item.children, id, property, setter);
      }
    }
  });
