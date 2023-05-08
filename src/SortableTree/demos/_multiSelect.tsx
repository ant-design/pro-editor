import { List } from 'antd';

import { useMultiSelect } from './multiSelector';

const data = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.',
];

function App() {
  const { selectedIds } = useMultiSelect();
  console.log('id', selectedIds);
  return (
    <div className="App">
      <List
        size="small"
        bordered
        dataSource={data}
        renderItem={(item, index: number) => {
          const selected = selectedIds.includes(index.toString());
          return (
            <List.Item
              node-data-id={index}
              style={{ background: selected ? 'blue' : '' }}
            >
              {item}
            </List.Item>
          );
        }}
      />
    </div>
  );
}

export default App;
