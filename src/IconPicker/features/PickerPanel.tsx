import { AntDesignOutlined } from '@ant-design/icons';
import { Button, Result, Segmented } from 'antd';
import { Flexbox } from 'react-layout-kit';

import IconList from '../components/IconList';
import SearchBar from '../components/SearchBar';
import type { Store } from '../store';
import { useStore, useStoreApi } from '../store';
import IconItem from './IconRender';

import IconfontScripts from './IconfontScript';

import { css, cx, useToken } from '../../theme';
import { isEmptyIconList, isEmptyIconfontScripts } from '../store/selectors';
import { getIconName } from '../utils';

import { shallow } from 'zustand/shallow';

const selector = (s: Store) => ({
  panelTabKey: s.panelTabKey,
  icon: s.icon,
  resetIcon: s.resetIcon,
});
const PickerPanel = () => {
  const { panelTabKey, icon, resetIcon } = useStore(selector, shallow);
  const token = useToken();
  const storeApi = useStoreApi();

  const isEmptyList = useStore(isEmptyIconList);
  const isEmptyScripts = useStore(isEmptyIconfontScripts);

  return (
    <Flexbox width={216} gap={12} style={{ maxHeight: 400 }}>
      {icon ? (
        <Flexbox distribution={'space-between'} horizontal align={'center'}>
          <Flexbox horizontal align={'center'} gap={8}>
            <IconItem {...icon} />
            <div>{getIconName(icon)}</div>
          </Flexbox>
          <Button size={'small'} type={'link'} onClick={resetIcon}>
            移除
          </Button>
        </Flexbox>
      ) : undefined}
      <Segmented
        options={[
          { label: 'Ant Design', value: 'antd', icon: <AntDesignOutlined /> },
          { label: 'Iconfont', value: 'iconfont' },
        ]}
        value={panelTabKey}
        onChange={(key) => {
          storeApi.setState({ panelTabKey: key as any });
        }}
        block
      />
      {panelTabKey === 'iconfont' ? <IconfontScripts /> : null}

      {isEmptyList ? (
        isEmptyScripts ? null : (
          <Result
            status={'info'}
            style={{ padding: 0, paddingTop: 8 }}
            subTitle={'暂未选择图标库，请选择图标库'}
          />
        )
      ) : (
        <>
          <SearchBar />
          <Flexbox
            className={cx(css`
              overflow-y: scroll;
              border: 1px solid ${token.colorBorderSecondary};
              border-left: 0;
              padding-top: -1px;
            `)}
          >
            <IconList />
          </Flexbox>
        </>
      )}
    </Flexbox>
  );
};

export default PickerPanel;
