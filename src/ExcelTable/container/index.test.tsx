import { ExcelTable } from '@ant-design/pro-editor';
import { render } from '@testing-library/react';

// const tableData = [
//   ['序号', '标题', '状态', '标签', '创建时间', '操作'],
//   ['1', '你好1', '成功', 'Tag1', '昨天', '修改'],
//   ['2', '2你好', '失', 'Tag2', '今天', '修改'],
//   ['3', '你好3', '失败', 'Tag4', '明天', '修改'],
//   ['4', '4你好', '成功', 'Tag5', '大后天', '修改'],
// ];

describe('ExcelTable', () => {
  it('可正常渲染', () => {
    const { container } = render(<ExcelTable />);

    // 由于 handsontable 每次会创建一个随机 id，这会导致快照不准确，所以把相应的id号去掉
    const ctn = container.getElementsByClassName('htRowHeaders').item(0);
    // 去掉随机的 id 号
    ctn.id = 'id-';

    expect(container).toMatchSnapshot();
  });

  // it('可渲染默认值', async () => {
  //   const { findAllByText } = render(<ExcelTable defaultData={tableData} />);
  //
  //   const btns = await findAllByText('修改');
  //   console.log(btns);
  //
  //   expect(btns.length).toEqual(4);
  // });

  //   it('受控模式可正常受控', async () => {
  //     const Component = () => {
  //       const [data, setData] = useState<TableData>();

  //       return (
  //         <div>
  //           <Button
  //             onClick={() => {
  //               setData(tableData);
  //             }}
  //             data-testid={'btn'}
  //           >
  //             插入
  //           </Button>
  //           <Divider />
  //           <ExcelTable data={data} onDataChange={setData} />
  //         </div>
  //       );
  //     };
  //     const { findByTestId, container } = render(<Component />);

  //     const btn = await findByTestId('btn');

  //     await act(async () => {
  //       await userEvent.click(btn);
  //     });

  //     // 由于 handsontable 每次会创建一个随机 id，这会导致快照不准确，所以把相应的id号去掉
  //     const ctn = container.getElementsByClassName('htRowHeaders').item(0);
  //     // 去掉随机的 id 号
  //     ctn.id = 'id-';

  //     expect(container).toMatchSnapshot();
  //   });
});
