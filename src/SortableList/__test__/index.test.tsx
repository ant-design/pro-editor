import { render } from '@testing-library/react';

import type { Column } from '../index';
import SortableList from '../index';

type SchemaItem = {
  title: string;
  valueType: string;
  dataIndex: string;
};

const columns: Column<SchemaItem>[] = [
  {
    title: '配置项一',
    dataIndex: 'title',
    type: 'input',
  },
  {
    title: '配置项二',
    dataIndex: 'dataIndex',
    type: 'input',
  },
];

const INIT_VALUES = [
  { title: '序号', dataIndex: 'index' },
  {
    title: '授权企业名称',
    dataIndex: 'name',
  },
  { title: '被授权企业', dataIndex: 'authCompany' },
];

describe('SortableList', () => {
  it('配置正常渲染', async () => {
    const { findAllByTestId } = render(
      <SortableList columns={columns} initialValues={INIT_VALUES} />,
    );

    const lists = await findAllByTestId('list-item');

    expect(lists.length).toEqual(INIT_VALUES.length);
  });
});
