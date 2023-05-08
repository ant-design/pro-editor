import { useStyle } from './style';

const CodeFooter: React.FC<{
  footerShow?: boolean;
  open: boolean;
  handleOpenBtn: () => void;
  prefixCls: string;
}> = (props) => {
  const { footerShow, open, handleOpenBtn, prefixCls } = props;
  const { styles } = useStyle(prefixCls);

  return (
    <div
      style={{
        color: !footerShow ? '#7f9aae' : '#24272e',
      }}
      className={styles.footer}
    >
      <span onClick={handleOpenBtn} className={'openBtn'}>
        {open ? '收起' : '展开'}
      </span>
    </div>
  );
};

export default CodeFooter;
