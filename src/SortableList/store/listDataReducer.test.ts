import { listDataReducer } from './listDataReducer';

const listData = [
  { title: '序号', dataIndex: 'indexBorder' },
  {
    title: '授权企业名称',
    dataIndex: 'text',
  },
  { title: '被授权企业', dataIndex: 'select' },
];

const newItem = { title: '邮箱', dataIndex: 'text' };

describe('listDataReducer', () => {
  describe('moveItem', () => {
    it('从第 2 项移动到第 0 项', () => {
      const data = listDataReducer(listData, {
        type: 'moveItem',
        activeIndex: 2,
        overIndex: 0,
      });
      expect(data).toEqual([listData[2], listData[0], listData[1]]);
    });
  });

  describe('addItem', () => {
    it('添加一项到末尾', () => {
      const data = listDataReducer(listData, {
        type: 'addItem',
        item: newItem,
      });

      expect(data).toEqual([...listData, newItem]);
    });

    it('添加一项到任意位置', () => {
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
