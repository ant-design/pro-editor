/**
 * iframe: 600
 */
import { FreeCanvas } from '@ant-design/pro-editor';
import { Button } from 'antd';

export default () => (
  <div style={{ height: '100vh' }}>
    <FreeCanvas extraControlBtns={[<Button key="extra">自定义</Button>]}>
      <Button>按钮</Button>
    </FreeCanvas>
  </div>
);
