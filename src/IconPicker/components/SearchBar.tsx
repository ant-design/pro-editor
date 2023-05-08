import { Input } from 'antd';
import { memo } from 'react';
import { css, cx, useToken } from '../../theme';
import { useStore, useStoreApi } from '../store';

const SearchBar = () => {
  const token = useToken();
  const { filterKeywords } = useStore();
  const storeApi = useStoreApi();

  return (
    <Input
      placeholder={'输入图标名称进行搜索...'}
      allowClear
      value={filterKeywords}
      onChange={(e) => {
        storeApi.setState({ filterKeywords: e.target.value });
      }}
      bordered={false}
      className={cx(css`
        border-radius: 0;
        border-bottom: 1px solid ${token.colorBorderSecondary} !important;
        &:hover {
          border-bottom: 1px solid ${token.colorBorder} !important;
        }
      `)}
    />
  );
};

export default memo(SearchBar);
