import { treeDataReducer } from './treeDataReducer';

describe('treeDataReducer', () => {
  describe('move', () => {
    it('移动到兄弟节点', () => {
      const treeData = [
        {
          id: 'Home',
          children: [],
        },
        {
          id: 'Collections',
          children: [
            { id: 'Spring', children: [] },
            { id: 'Summer', children: [] },
            { id: 'Fall', children: [] },
            { id: 'Winter', children: [] },
          ],
        },
      ];
      expect(
        treeDataReducer(treeData, {
          type: 'moveNode',
          projected: {
            depth: 1,
            maxDepth: 1,
            minDepth: 1,
            parentId: 'Collections',
          },
          activeId: 'Home',
          targetId: 'Collections',
        }),
      ).toEqual([
        {
          id: 'Collections',
          children: [
            {
              id: 'Home',
              children: [],
            },
            {
              id: 'Spring',
              children: [],
            },
            {
              id: 'Summer',
              children: [],
            },
            {
              id: 'Fall',
              children: [],
            },
            {
              id: 'Winter',
              children: [],
            },
          ],
        },
      ]);
    });
  });

  describe('addNode', () => {
    it('添加不带子节点', () => {
      const next = treeDataReducer([], {
        type: 'addNode',
        node: { id: '1', content: {} },
      });

      expect(next).toEqual([{ id: '1', content: {}, children: [] }]);
    });
    it('添加带子节点', () => {
      const next = treeDataReducer([], {
        type: 'addNode',
        node: {
          id: '1',
          content: {},
          children: [{ id: '2', children: [], content: {} }],
        },
      });

      expect(next).toEqual([
        {
          id: '1',
          content: {},
          children: [{ id: '2', children: [], content: {} }],
        },
      ]);
    });
  });

  describe('updateNode', () => {
    it('更新节点信息', () => {
      const next = treeDataReducer(
        [{ id: '1', content: { name: '123' }, children: [] }],
        {
          type: 'updateNodeContent',
          id: '1',

          content: {
            icon: { type: 'antd', componentName: 'AccountBookFilled' },
          },
        },
      );

      expect(next).toEqual([
        {
          id: '1',
          content: {
            name: '123',
            icon: { type: 'antd', componentName: 'AccountBookFilled' },
          },
          children: [],
        },
      ]);
    });
  });
});
