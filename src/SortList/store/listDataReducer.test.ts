import { listDataReducer } from './listDataReducer';

describe('listDataReducer', () => {
  describe('moveItem', () => {
    it('从第 2 项移动到第 0 项', () => {
      const listData = [
        { title: '序号', dataIndex: 'indexBorder' },
        {
          title: '授权企业名称',
          dataIndex: 'text',
        },
        { title: '被授权企业', dataIndex: 'select' },
      ];
      const keyManager = {
        keys: [1, 2, 3],
        id: 4,
      };
      const { data, manager } = listDataReducer(listData, keyManager, {
        type: 'moveItem',
        activeId: 3,
        targetId: 1,
      });
      expect(data).toEqual([
        { title: '被授权企业', dataIndex: 'select' },
        { title: '序号', dataIndex: 'indexBorder' },
        {
          title: '授权企业名称',
          dataIndex: 'text',
        },
      ]);
      expect(manager.keys).toEqual([3, 1, 2]);
    });
  });

  describe('addItem', () => {
    it('添加一项到末尾', () => {
      const listData = [
        { title: '序号', dataIndex: 'indexBorder' },
        {
          title: '授权企业名称',
          dataIndex: 'text',
        },
        { title: '被授权企业', dataIndex: 'select' },
      ];

      const keyManager = {
        keys: [1, 2, 3],
        id: 4,
      };

      const newItem = { title: '邮箱', dataIndex: 'text' };

      const { data, manager } = listDataReducer(listData, keyManager, {
        type: 'addItem',
        item: newItem,
      });

      expect(data).toEqual([...listData, newItem]);

      expect(manager.keys).toEqual([1, 2, 3, 4]);
      expect(manager.id).toEqual(5);
    });

    it('添加一项到任意位置', () => {
      const listData = [
        { title: '序号', dataIndex: 'indexBorder' },
        {
          title: '授权企业名称',
          dataIndex: 'text',
        },
        { title: '被授权企业', dataIndex: 'select' },
      ];

      const keyManager = {
        keys: [1, 2, 3],
        id: 4,
      };

      const newItem = { title: '邮箱', dataIndex: 'text' };

      const { data, manager } = listDataReducer(listData, keyManager, {
        type: 'addItem',
        item: newItem,
        index: 2,
      });

      expect(data).toEqual([
        { title: '序号', dataIndex: 'indexBorder' },
        {
          title: '授权企业名称',
          dataIndex: 'text',
        },
        newItem,
        { title: '被授权企业', dataIndex: 'select' },
      ]);

      expect(manager.keys).toEqual([1, 2, 4, 3]);
      expect(manager.id).toEqual(5);
    });
  });

  describe('removeItem', () => {
    it('删除指定行', () => {
      const listData = [
        { title: '序号', dataIndex: 'indexBorder' },
        {
          title: '授权企业名称',
          dataIndex: 'text',
        },
        { title: '被授权企业', dataIndex: 'select' },
      ];

      const keyManager = {
        keys: [1, 2, 3],
        id: 4,
      };

      const { data, manager } = listDataReducer(listData, keyManager, {
        type: 'removeItem',
        index: 1,
      });

      expect(data).toEqual([
        { title: '序号', dataIndex: 'indexBorder' },
        { title: '被授权企业', dataIndex: 'select' },
      ]);

      expect(manager.keys).toEqual([1, 3]);
    });
  });

  describe('updateItem', () => {
    it('更新项目', () => {
      const listData = [
        { title: '序号', dataIndex: 'indexBorder' },
        {
          title: '授权企业名称',
          dataIndex: 'text',
        },
        { title: '被授权企业', dataIndex: 'select' },
      ];

      const keyManager = {
        keys: [1, 2, 3],
        id: 4,
      };

      const newItem = { title: '邮箱', dataIndex: 'text' };

      const { data, manager } = listDataReducer(listData, keyManager, {
        type: 'updateItem',
        index: 1,
        item: newItem,
      });

      expect(data).toEqual([
        { title: '序号', dataIndex: 'indexBorder' },
        newItem,
        { title: '被授权企业', dataIndex: 'select' },
      ]);

      expect(manager).toEqual(keyManager);
    });
  });
});
