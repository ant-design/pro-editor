import { PlusOutlined, UpOutlined } from '@ant-design/icons';
import { Button, Result, Tag } from 'antd';
import type { FC } from 'react';
import { memo } from 'react';
import { Flexbox } from 'react-layout-kit';

import ActionIcon from '../../ActionIcon';
import {
  iconfontScriptsChangeable,
  isEmptyIconfontScripts,
  useStore,
} from '../store';
import { useStyles } from './IconfontScript.style';

import ScriptEditor from '../components/ScriptEditor';

const IconfontScripts: FC = memo(() => {
  const { styles, cx } = useStyles();

  const {
    iconfontScripts,
    showForm,
    activeIconfontScript,
    removeScripts,
    selectScript,

    toggleForm,
  } = useStore();
  const isEmptyScripts = useStore(isEmptyIconfontScripts);

  const canChangeIconfontScripts = useStore(iconfontScriptsChangeable);

  return isEmptyScripts ? (
    showForm ? (
      <ScriptEditor />
    ) : (
      <Result
        status={'info'}
        style={{ padding: 0, paddingTop: 8 }}
        subTitle={'暂未添加图标库，请先添加 Iconfont 图标库'}
        extra={
          <Flexbox>
            <Button
              size={'small'}
              onClick={() => toggleForm(true)}
              type={'primary'}
            >
              立即添加
            </Button>
          </Flexbox>
        }
      />
    )
  ) : (
    <Flexbox gap={8}>
      <Flexbox gap={4} horizontal>
        {
          // 如果隐藏按钮
          !canChangeIconfontScripts ? null : showForm ? (
            <ActionIcon
              size={20}
              onClick={() => toggleForm(false)}
              icon={<UpOutlined />}
            />
          ) : (
            <Tag
              className={styles.add}
              onClick={() => {
                toggleForm(true);
              }}
            >
              <PlusOutlined /> 添加
            </Tag>
          )
        }
        <Flexbox horizontal>
          {iconfontScripts.map((s) => {
            const checked = s.url === activeIconfontScript;

            return (
              <Tag
                key={s.url}
                closable={canChangeIconfontScripts}
                onClose={() => {
                  removeScripts(s.url);
                }}
                onClick={() => {
                  selectScript(checked ? '' : s.url);
                }}
                className={cx(styles.tag, checked ? styles.checked : '')}
              >
                {s.name}
              </Tag>
            );
          })}
        </Flexbox>
      </Flexbox>
      {showForm && <ScriptEditor />}
    </Flexbox>
  );
});

export default IconfontScripts;
