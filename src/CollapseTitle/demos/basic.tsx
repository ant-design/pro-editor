import { CollapseTitle } from '@ant-design/pro-editor';

export default () => (
  <CollapseTitle
    title={'数据预览'}
    onExpandChange={(expandStatus) => {
      console.log('expandStatus', expandStatus);
    }}
  >
    123
  </CollapseTitle>
);
