/* eslint-disable react/no-array-index-key */
import { Alert, Button, Empty, Space, Typography } from 'antd';
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

export default class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  State
> {
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
                <Text type={'secondary'}>
                  不过别担心，你的数据都还在，可以尝试导出数据后重试
                </Text>
                <br />
                <div style={{ marginTop: 8 }}>
                  <Text type={'secondary'}>
                    如重试后仍然存在问题，请联系{' '}
                    <a href="dingtalk://dingtalkclient/action/sendmsg?dingtalk_id=rdmclin2">
                      兼续
                    </a>{' '}
                    或{' '}
                    <a href="dingtalk://dingtalkclient/action/sendmsg?dingtalk_id=arvinx">
                      闻冰
                    </a>{' '}
                  </Text>
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
                  window.open(
                    'https://baiyan.antfin.com/task/create?lakeContent=%3C%21doctype%20lake%3E%3Cmeta%20name%3D%22doc-version%22%20content%3D%221%22%20%2F%3E%3Cmeta%20name%3D%22viewport%22%20content%3D%22fixed%22%20%2F%3E%3Cmeta%20name%3D%22typography%22%20content%3D%22traditional%22%20%2F%3E%3Ch3%20data-lake-id%3D%2291c5701e83adf1c6f925732feec4788f%22%3E%E9%97%AE%E9%A2%98%E6%8F%8F%E8%BF%B0%3C%2Fh3%3E%3Cp%20data-lake-id%3D%229b0132b44946fb7744e9f5478c85e175%22%3E%3Cbr%20%2F%3E%3C%2Fp%3E%3Ch3%20data-lake-id%3D%226b9cf01668e97bac22b89eb464c06a4f%22%3E%E5%A4%8D%E7%8E%B0%E6%AD%A5%E9%AA%A4%3C%2Fh3%3E%3Cp%20data-lake-id%3D%227a4216dd7b76a65a613ddf647cb72c34%22%3E%3Cbr%20%2F%3E%3C%2Fp%3E%3Ch3%20data-lake-id%3D%2293961a22f871a4ac25f3d4e9f3826bf7%22%3E%E9%87%8D%E8%AF%95%E6%98%AF%E5%90%A6%E8%A7%A3%E5%86%B3%3C%2Fh3%3E%3Cp%20data-lake-id%3D%229b326d53a91f197f3682c346f4bbb6d0%22%3E%3Cbr%20%2F%3E%3C%2Fp%3E%3Ch3%20data-lake-id%3D%22dbe2cdc6a243c4d400346ef07ebb0798%22%3E%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88%EF%BC%88%E5%A6%82%E6%9C%89%EF%BC%89%3Cstrong%3E%3C%2Fstrong%3E%3C%2Fh3%3E%3Cp%20data-lake-id%3D%221a6d321827130904995c25b4e886dac7%22%3E%3Cbr%20%2F%3E%3C%2Fp%3E%3Ch3%20data-lake-id%3D%22d91ccde0d72cb4df593d8d8955602800%22%3E%E9%A2%84%E6%9C%9F%E4%B8%8A%E7%BA%BF%E6%97%B6%E9%97%B4%E7%82%B9%3C%2Fh3%3E%3Cp%20data-lake-id%3D%22bcd2da469f30144bb549225c7e61d1e1%22%3E%3Cbr%20%2F%3E%3C%2Fp%3E&name=%E3%80%90%E8%AF%B7%E6%9B%BF%E6%8D%A2%E4%B8%BA%E5%85%B7%E4%BD%93%E7%BC%BA%E9%99%B7%E5%90%8D%E7%A7%B0%E3%80%91%E7%BC%BA%E9%99%B7%E6%A8%A1%E6%9D%BF&spaceId=3264&type=BUG',
                  );
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
                      <div
                        key={i + index}
                        style={{ textAlign: 'left', fontSize: 10 }}
                      >
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
