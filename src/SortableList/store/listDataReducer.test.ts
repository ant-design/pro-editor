import { listDataReducer } from './listDataReducer';

const listData = [
  { id: '1', title: '序号', dataIndex: 'indexBorder' },
  {
    id: '2',
    title: '授权企业名称',
    dataIndex: 'text',
  },
  { id: '3', title: '被授权企业', dataIndex: 'select' },
];

const newItem = { id: '4', title: '邮箱', dataIndex: 'text' };

describe('listDataReducer', () => {
  describe('moveItem', () => {
    it('从第 2 项移动到第 0 项', () => {
      const data = listDataReducer(listData, {
        type: 'moveItem',
        activeId: 3,
        targetId: 1,
      });
      expect(data).toEqual([listData[2], listData[0], listData[1]]);
    });
  });

  describe('addItem', () => {
    it('添加一项到末尾', () => {
      const listData = [
        { id: '1', title: '序号', dataIndex: 'indexBorder' },
        {
          id: '2',
          title: '授权企业名称',
          dataIndex: 'text',
        },
        { id: '3', title: '被授权企业', dataIndex: 'select' },
      ];

      const data = listDataReducer(listData, {
        type: 'addItem',
        item: newItem,
      });

      expect(data).toEqual([...listData, newItem]);
    });

    it('添加一项到任意位置', () => {
      const listData = [
        { id: '1', title: '序号', dataIndex: 'indexBorder' },
        {
          id: '2',
          title: '授权企业名称',
          dataIndex: 'text',
        },
        { id: '3', title: '被授权企业', dataIndex: 'select' },
      ];

      const data = listDataReducer(listData, {
        type: 'addItem',
        item: newItem,
        index: 2,
      });

      expect(data).toEqual([listData[0], listData[1], newItem, listData[2]]);
    });
  });

  describe('removeItem', () => {
    it('删除指定行', () => {
      const data = listDataReducer(listData, {
        type: 'removeItem',
        index: 1,
      });

      expect(data).toEqual([listData[0], listData[2]]);
    });
  });

  describe('updateItem', () => {
    it('更新项目', () => {
      const data = listDataReducer(listData, {
        type: 'updateItem',
        index: 1,
        item: newItem,
      });

      expect(data).toEqual([listData[0], newItem, listData[2]]);
    });
  });
});
