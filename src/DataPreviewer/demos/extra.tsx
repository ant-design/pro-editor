import { DataPreviewer, EditAction } from '@ant-design/pro-editor';

import { data } from './data';

export default () => <DataPreviewer data={data} extra={<EditAction />} />;
