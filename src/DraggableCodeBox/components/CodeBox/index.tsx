import copy from 'copy-to-clipboard';
import { useState } from 'react';
import CodeArea from '../CodeArea';
import CodeFooter from '../CodeFooter';
import CodeHeader from '../CodeHeader';
import { useStyle } from './style';

const CodeBox: React.FC<{
  prefixCls: string;
  footerShow?: boolean;
  codeBoxData: string;
  title?: string;
  open: boolean;
  handleOpenBtn?: () => void;
}> = (props) => {
  const {
    footerShow = false,
    codeBoxData,
    title,
    handleOpenBtn,
    open,
    prefixCls,
  } = props;
  const { styles } = useStyle(prefixCls);
  const [btnText, setBtnText] = useState('复制代码');
  const [copyAble, setCopyAble] = useState(false);

  return (
    <div className={styles.codeBox}>
      <CodeHeader
        prefixCls={prefixCls}
        copyFc={() => {
          copy(codeBoxData);
          setBtnText('复制成功✅');
          setCopyAble(true);
          setTimeout(() => {
            setCopyAble(false);
            setBtnText('复制代码');
          }, 2000);
        }}
        copyAble={copyAble}
        title={title}
        btnText={btnText}
      />
      <CodeArea data={codeBoxData} prefixCls={prefixCls} />
      <CodeFooter
        prefixCls={prefixCls}
        footerShow={footerShow}
        open={open}
        handleOpenBtn={handleOpenBtn}
      />
    </div>
  );
};

export default CodeBox;
