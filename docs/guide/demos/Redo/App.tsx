import { Button, Card, Divider, Tabs } from 'antd';
import { useTheme } from 'antd-style';
import { Flexbox } from 'react-layout-kit';

import Toolbar from './Toolbar';
import { useStore } from './store';

const App = () => {
  const { data, plus, tabs, switchTabs, plusWithoutHistory } = useStore();

  const theme = useTheme();

  return (
    <Flexbox padding={16} style={{ background: theme.colorBgLayout }}>
      <Toolbar />
      <Divider />
      <Flexbox gap={12}>
        <Card title={'历史记录里的数据'}>
          <Button onClick={plus}>+1</Button>

          <div>data: {data}</div>
        </Card>
        <Card title={'不在历史记录里的数据'}>
          <div>
            <Tabs
              activeKey={tabs}
              onChange={switchTabs}
              items={[
                { key: '1', label: '数据' },
                { key: '2', label: '配置' },
              ]}
            />

            <div>下面的 +2 可使得 在历史记录外添加让 data +2 </div>
            <Button onClick={plusWithoutHistory}>+2</Button>
          </div>
        </Card>
      </Flexbox>
    </Flexbox>
  );
};

export default App;
