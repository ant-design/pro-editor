import { ActionGroup } from '@ant-design/pro-editor';
import { defaultItems, dropdownMenuItems } from './items';

export default () => {
  return <ActionGroup items={defaultItems} dropdownMenu={dropdownMenuItems} />;
};
