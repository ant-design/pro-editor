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
  ];

  return <FieldSelect options={options} defaultValue={'orderId'} showCustomField={false} />;
};

export default Demo;
