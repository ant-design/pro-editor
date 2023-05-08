import { removeNode, setProperty } from './treeNode';

describe('removeItem', () => {
  it('移除父节点', () => {
    const treeNode = [
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
    expect(removeNode(treeNode, 'Home')).toEqual([
      {
        id: 'Collections',
        children: [
          { id: 'Spring', children: [] },
          { id: 'Summer', children: [] },
          { id: 'Fall', children: [] },
          { id: 'Winter', children: [] },
        ],
      },
    ]);
  });

  it('移除子节点', () => {
    const treeNode = [
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
    expect(removeNode(treeNode, 'Spring')).toEqual([
      {
        id: 'Collections',
        children: [
          { id: 'Summer', children: [] },
          { id: 'Fall', children: [] },
          { id: 'Winter', children: [] },
        ],
      },
    ]);
  });
});

describe('setProperty', () => {
  it('collaspe', () => {
    const treeNode = [
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
      setProperty(treeNode, 'Collections', 'collapsed', (value) => {
        return !value;
      }),
    ).toEqual([
      {
        id: 'Collections',
        collapsed: true,
        children: [
          { id: 'Spring', children: [] },
          { id: 'Summer', children: [] },
          { id: 'Fall', children: [] },
          { id: 'Winter', children: [] },
        ],
      },
    ]);
  });
});
