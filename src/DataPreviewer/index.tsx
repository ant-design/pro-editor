import {
  DatabaseOutlined,
  FlagOutlined,
  RollbackOutlined,
  TableOutlined,
} from '@ant-design/icons';
import { ActionIcon, CollapseTitle } from '@ant-design/pro-editor';
import { Button, Divider, Empty, Pagination, Popconfirm, Table } from 'antd';
import type { CSSProperties, FC, ReactNode } from 'react';
import { useMemo, useState } from 'react';
import ReactJson from 'react-json-view';
import { Flexbox } from 'react-layout-kit';
import useMergedState from 'use-merge-value';
import { getPrefixCls } from '../theme';

import { useThemeMode } from 'antd-style';
import { useStyle } from './style';

interface DataPreviewerColumn {
  title: string;
  dataIndex: any;
}

export interface DataPreviewerProps {
  /**
   * 数据项
   */
  data?: Record<string, any>[];
  /**
   * 表格形态数据栏目
   */
  columns?: DataPreviewerColumn[];
  /**
   * 受控收起
   */
  collapsed?: boolean;
  /**
   * 渲染空状态
   */
  renderEmpty?: (node: ReactNode) => ReactNode;
  /**
   * 空状态立即尝试按钮右侧渲染
   */
  emptyAction?: ReactNode;
  /**
   * 展开或者隐藏状态的回调
   */
  onVisibleChange?: (visible: boolean) => void;
  /**
   * 点击“立即尝试”按钮的回调
   */
  onEmptyClick?: () => void;
  /**
   * 重置按钮回调
   */
  onResetClick?: () => void;
  /**
   * 是否显示数据类型
   */
  showType?: boolean;
  /**
   * 额外节点展示
   */
  extra?: ReactNode;
  /**
   * 类名
   */
  className?: string;
  /**
   * 样式
   */
  style?: CSSProperties;
  /**
   * 前缀
   */
  prefixCls?: string;
}

const Previewer: FC<DataPreviewerProps> = ({
  data,
  collapsed,
  onVisibleChange,
  className,
  renderEmpty,
  onEmptyClick,
  showType = true,
  extra,
  emptyAction,
  style,
  columns,
  onResetClick,
  prefixCls: customPrefixCls,
}) => {
  const prefixCls = getPrefixCls('data-previewer', customPrefixCls);

  const { isDarkMode } = useThemeMode();
  const { styles, cx } = useStyle(prefixCls);
  const [hidePanel, setCollapsed] = useMergedState(false, {
    value: collapsed,
    onChange: onVisibleChange,
  });

  const [index, setIndex] = useState(0);

  const [displayType, setDisplayType] = useState('object');

  const emptyNode = (
    <Flexbox align={'center'}>
      <Flexbox gap={12} width={'fit-content'} align={'center'}>
        <div>没有数据？来试试 Demo 吧</div>
        <Flexbox direction={'horizontal'} gap={8}>
          <Button
            icon={<FlagOutlined />}
            type={'primary'}
            ghost
            size={'small'}
            onClick={onEmptyClick}
          >
            立即尝试
          </Button>
          {emptyAction}
        </Flexbox>
      </Flexbox>
    </Flexbox>
  );

  const extraNode = useMemo(
    () => (
      <Flexbox direction={'horizontal'} align={'center'}>
        <Flexbox>
          <ActionIcon
            title={`显示为${displayType === 'table' ? '对象' : '表格'}`}
            placement={'bottom'}
            icon={
              displayType === 'table' ? <DatabaseOutlined /> : <TableOutlined />
            }
            onClick={() => {
              setDisplayType(displayType === 'object' ? 'table' : 'object');
            }}
          />
        </Flexbox>
        <Divider type={'vertical'} dashed style={{ margin: '0 4px' }} />
        <Flexbox horizontal gap={4}>
          <Popconfirm
            title={
              '即将重置列配置与表格数据，其余配置（分页器、工具栏等）保持不变。确定重置吗？'
            }
            placement={'left'}
            onConfirm={onResetClick}
          >
            <ActionIcon
              title={`重置数据`}
              placement={'bottom'}
              icon={<RollbackOutlined />}
            />
          </Popconfirm>
          {extra ? <>{extra}</> : null}
        </Flexbox>
      </Flexbox>
    ),
    [displayType, onResetClick, extra],
  );

  return (
    <div className={cx(className, styles.container)} style={style}>
      {!data ? (
        <div className={styles.empty}>
          <Empty
            image={Empty.PRESENTED_IMAGE_SIMPLE}
            description={renderEmpty ? renderEmpty(emptyNode) : emptyNode}
          />
        </div>
      ) : (
        <CollapseTitle
          title={'数据预览'}
          expand={!hidePanel}
          onExpandChange={(expand) => {
            setCollapsed(!expand);
          }}
          extra={(expand) => (!expand ? null : extraNode)}
        >
          <Flexbox>
            {displayType === 'object' ? (
              <>
                <Flexbox
                  style={{
                    overflow: 'scroll',
                    maxHeight: 200,
                    marginBottom: 8,
                  }}
                  className={styles.json}
                >
                  <ReactJson
                    name={`第${index + 1}条数据`}
                    collapseStringsAfterLength={22}
                    enableClipboard={false}
                    src={data[index]}
                    displayDataTypes={showType}
                    theme={isDarkMode ? 'railscasts' : undefined}
                  />
                </Flexbox>
                <Divider style={{ margin: '12px 0' }} dashed />
                <Flexbox align={'flex-end'}>
                  <Pagination
                    current={index + 1}
                    showTotal={(total) => `共 ${total} 条数据`}
                    onChange={(page) => {
                      setIndex(page - 1);
                    }}
                    total={data.length}
                    size={'small'}
                    pageSize={1}
                  />
                </Flexbox>
              </>
            ) : (
              <Table
                dataSource={data}
                size={'small'}
                bordered
                className={styles.table}
                pagination={false}
                columns={
                  columns && columns.map((c) => ({ ...c, ellipsis: true }))
                }
              />
            )}
          </Flexbox>
        </CollapseTitle>
      )}
    </div>
  );
};

export const DataPreviewer = Previewer;
