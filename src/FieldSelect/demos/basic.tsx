import type { FieldSelectOptionType } from '@ant-design/pro-editor';
import { APIFieldType, FieldSelect } from '@ant-design/pro-editor';

const Demo = () => {
  const options: FieldSelectOptionType[] = [
    {
      label: 'orderId',
      value: 'orderId',
      type: APIFieldType.integer,
    },
    {
      label: 'orderNumber',
      value: 'orderNumber',
      type: APIFieldType.string,
    },
    {
      label: 'orderMoney',
      value: 'orderMoney',
      type: APIFieldType.integer,
    },
    {
      label: 'productName',
      value: 'productName',
      type: APIFieldType.string,
    },
    {
      label: 'productComment',
      value: 'productComment',
      type: APIFieldType.string,
    },
    {
      label: 'orderStatus',
      value: 'orderStatus',
      type: APIFieldType.string,
    },
  ];

  return (
    <>
      <FieldSelect
        onChange={(values) => console.log(values)}
        options={options}
        defaultValue={'orderId'}
      />
    </>
  );
};

export default Demo;
