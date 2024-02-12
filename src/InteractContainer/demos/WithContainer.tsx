import { Button, Divider } from 'antd';
import InteractContainer from '../index';

const WithContainer = () => {
  return (
    <InteractContainer
      getContainer={'#ux'}
      rules={[
        {
          id: 'container',
          selectors: ['ctn'],
          actions: ['hover', 'click'],
        },
      ]}
    >
      <div id={'ux'} style={{ margin: 16, padding: 16, border: '1px solid blue' }}>
        <div style={{ padding: 40, border: '1px dashed red' }} data-uxid={'ctn'}>
          <span data-uxid={'text'}>只有红色虚线框的内容可以选择（hover会有悬浮样式）</span>
        </div>
        <div>点击红色虚线框之外蓝色框之内的区域，可以取消选中</div>
      </div>
      <Divider />
      <div>
        此区域无法选择
        <Button>按钮</Button>
      </div>
    </InteractContainer>
  );
};

export default WithContainer;
