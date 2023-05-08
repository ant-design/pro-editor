import { SmileOutlined } from '@ant-design/icons';
import { ActionIcon, createStyles, css, styled } from '@ant-design/pro-editor';
import { Space } from 'antd';
import { memo } from 'react';

import { Controller } from './_container';

// 使用方式一： 使用 pro-editor 的 styled
// 适用场景：看上去像是一个自定义样式组件的场景，且可能会有相应的入参，推荐使用 styled 将其包裹为一个样式组件

const Card = styled.div<{ primary?: boolean }>`
  border-radius: ${(props) => props.theme.borderRadiusLG}px;
  padding: ${(props) => props.theme.paddingLG}px;

  background: ${(props) =>
    props.primary ? props.theme.colorPrimary : props.theme.colorBgContainer};
  color: ${(props) =>
    props.primary ? props.theme.colorTextLightSolid : props.theme.colorText};
`;

// 使用方式二：
// 使用 pro-editor 的 useToken，并写成 useStyles 的方式
//
// 适用场景：单纯用于部分样式的，没必要抽成组件的话，使用这种写法

const useStyles = createStyles(({ token }) => ({
  container: css`
    background-color: ${token.colorBgLayout};
    padding: 24px;
  `,
  card: css`
    margin-top: ${token.marginLG}px;
  `,
}));

const App = () => {
  const { styles } = useStyles();

  return (
    <div className={styles.container}>
      <Space>
        <ActionIcon title={'功能按钮的说明'} icon={<SmileOutlined />} />
        操作按钮
      </Space>
      <Card className={styles.card}>demo卡片</Card>
      <Card primary className={styles.card}>
        强调卡片
      </Card>
    </div>
  );
};

export default memo(() => (
  <Controller>
    <App />
  </Controller>
));
