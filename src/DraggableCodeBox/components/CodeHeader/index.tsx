import { useStyle } from './style';

const CodeHeader: React.FC<{
  copyFc: () => void;
  title?: string;
  btnText?: string;
  copyAble: boolean;
  prefixCls: string;
}> = (props) => {
  const {
    title = 'ProTable',
    copyFc,
    btnText = '复制代码',
    copyAble = false,
    prefixCls,
  } = props;
  const { styles } = useStyle(prefixCls);

  return (
    <div className={styles.header}>
      {title}
      <button
        type="button"
        className={styles.copyBtn}
        disabled={copyAble}
        onClick={copyFc}
      >
        {btnText}
      </button>
    </div>
  );
};

export default CodeHeader;
