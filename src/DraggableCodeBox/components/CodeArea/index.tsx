import { Highlight } from '@ant-design/pro-editor';
import { useStyle } from './style';

const CodeArea: React.FC<{
  data: string;
  prefixCls: string;
}> = (props) => {
  const { data, prefixCls } = props;
  const { styles } = useStyle(prefixCls);

  return (
    <div className={styles.wrap}>
      <div className={`${styles.code}`}>
        <Highlight
          className={styles.highlight}
          language="js"
          theme="dark"
          copyable={false}
        >
          {data}
        </Highlight>
      </div>
    </div>
  );
};

export default CodeArea;
