/* eslint-disable react/no-array-index-key */
import { Alert, Button, Empty, Space, Typography, message } from 'antd';
import { Component } from 'react';
import { Flexbox } from 'react-layout-kit';

const { Title, Text } = Typography;

/******************************************************
 ************************* Dom *************************
 ******************************************************/

/**
 * 错误边界组件属性接口
 */
interface ErrorBoundaryProps {
  /**
   * 子组件
   */
  children?: React.ReactNode;

  /**
   * 导出配置项回调函数
   */
  onExportConfig?: () => void;

  /**
   * 重试回调函数
   */
  onRetry?: () => void;

  /**
   * 是否显示开发者选项
   */
  showDev?: boolean;
}

interface State {
  error?: Error;
  info: {
    componentStack: string;
  };
}

export default class ErrorBoundary extends Component<ErrorBoundaryProps, State> {
  state: State = {
    error: undefined,
    info: {
      componentStack: '',
    },
  };

  componentDidCatch(error: any, info: any) {
    this.setState({ error, info });
  }

  errorInfo = () => {
    const { error, info } = this.state;
    return (
      <Flexbox
        style={{
          width: 800,
          background: 'rgba(0,0,0,0.02)',
          padding: '24px 40px',
        }}
        gap={12}
      >
        <div>
          <Text>
            错误信息：
            {error?.toString()}
          </Text>
        </div>

        <Flexbox>
          {info?.componentStack.split('\n').map((i, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <div key={i + index} style={{ textAlign: 'left', fontSize: 10 }}>
              <Text type={'secondary'}>{i}</Text>
            </div>
          )) ?? null}
        </Flexbox>
      </Flexbox>
    );
  };

  prodInfo = () => {
    const { onExportConfig } = this.props;
    return (
      <Flexbox align={'center'}>
        <Empty
          image={<div style={{ fontSize: 80, lineHeight: 1 }}>🤔</div>}
          description={
            <Flexbox gap={16}>
              <Title level={5}> 组件渲染似乎出了点小问题 </Title>
              <div>
                <Text type={'secondary'}>不过别担心，你的数据都还在，可以尝试导出数据后重试</Text>
                <br />
                <div style={{ marginTop: 8 }}>
                  <Text type={'secondary'}>如重试后仍然存在问题，请联系客服人员</Text>
                </div>
              </div>
            </Flexbox>
          }
        >
          <div>
            <Space>
              <Button type={'primary'} onClick={onExportConfig}>
                导出配置
              </Button>
              <Button
                onClick={() => {
                  message.success('已提交Bug');
                }}
              >
                提交Bug
              </Button>
            </Space>
          </div>
        </Empty>
        <div style={{ marginTop: 24 }}>{this.errorInfo()}</div>
      </Flexbox>
    );
  };

  render() {
    const {
      children,
      onRetry,
      // 用于开发 ErrorBoundary
      // showDev = false,
      showDev = process.env.NODE_ENV === 'development',
    } = this.props;
    const { error, info } = this.state;
    if (error) {
      // You can render any custom fallback UI
      return (
        <Flexbox style={{ padding: 24 }}>
          {showDev ? (
            <Alert
              type="error"
              message={error.toString()}
              showIcon
              description={
                <div>
                  <div
                    style={{
                      overflow: 'auto',
                      maxHeight: 'calc(100vh - 200px)',
                    }}
                  >
                    {info?.componentStack.split('\n').map((i, index) => (
                      <div key={i + index} style={{ textAlign: 'left', fontSize: 10 }}>
                        <Text type={'secondary'}>{i}</Text>
                      </div>
                    )) ?? null}
                  </div>
                  <div style={{ marginTop: 24 }}>
                    <Button type="primary" onClick={onRetry}>
                      重试
                    </Button>
                  </div>
                </div>
              }
            />
          ) : (
            this.prodInfo()
          )}
        </Flexbox>
      );
    }

    return <>{children}</>;
  }
}
