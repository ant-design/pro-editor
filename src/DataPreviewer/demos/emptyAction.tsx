import { DownloadOutlined } from '@ant-design/icons';
import { DataPreviewer } from '@ant-design/pro-editor';
import { Button } from 'antd';

export default () => (
  <DataPreviewer
    emptyAction={
      <Button icon={<DownloadOutlined />} size={'small'}>
        导入表格
      </Button>
    }
  />
);
