import { Avatar, Button, List, Skeleton } from 'antd';
import { css, cx } from 'antd-style';
import React, { useEffect, useState } from 'react';

export interface DataType {
  gender?: string;
  name: {
    title?: string;
    first?: string;
    last?: string;
  };
  email?: string;
  picture: {
    large?: string;
    medium?: string;
    thumbnail?: string;
  };
  nat?: string;
  loading: boolean;
}

const count = 8;
const fakeDataUrl = `https://randomuser.me/api/?results=${count}&inc=name,gender,email,nat,picture&noinfo`;

const ClassNamesGroup = {
  ListClassName: cx(css`
    overflow: scroll;
  `),
  ListItemClassName: cx(css`
    cursor: pointer;
    padding: 0px 10px !important;
    margin-top: 4px;
    margin-bottom: 4px;
    border-radius: 10px;
    :hover {
      background-color: #e3e3e3;
    }
  `),
  SubTitle: cx(css`
    text-wrap: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `),
  ItemTitle: cx(css`
    text-wrap: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin: 0 0 -4px 0;
  `),
  avatar: cx(css`
    height: 40px;
    width: 40px;
  `),
};

const SessonList: React.FC = () => {
  const [initLoading, setInitLoading] = useState(true);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<DataType[]>([]);
  const [list, setList] = useState<DataType[]>([]);

  useEffect(() => {
    fetch(fakeDataUrl)
      .then((res) => res.json())
      .then((res) => {
        setInitLoading(false);
        setData(res.results);
        setList(res.results);
      });
  }, []);

  const onLoadMore = () => {
    setLoading(true);
    setList(
      data.concat([...new Array(count)].map(() => ({ loading: true, name: {}, picture: {} }))),
    );
    fetch(fakeDataUrl)
      .then((res) => res.json())
      .then((res) => {
        const newData = data.concat(res.results);
        setData(newData);
        setList(newData);
        setLoading(false);
        // Resetting window's offsetTop so as to display react-virtualized demo underfloor.
        // In real scene, you can using public method of react-virtualized:
        // https://stackoverflow.com/questions/46700726/how-to-use-public-method-updateposition-of-react-virtualized
        window.dispatchEvent(new Event('resize'));
      });
  };

  const loadMore =
    !initLoading && !loading ? (
      <div
        style={{
          textAlign: 'center',
          marginTop: 12,
          height: 32,
          lineHeight: '32px',
        }}
      >
        <Button onClick={onLoadMore}>loading more</Button>
      </div>
    ) : null;

  return (
    <div
      style={{
        height: '540px',
        overflow: 'scroll',
      }}
    >
      <List
        className={ClassNamesGroup.ListClassName}
        loading={initLoading}
        itemLayout="horizontal"
        loadMore={loadMore}
        dataSource={list}
        renderItem={(item) => (
          <List.Item extra={<div>12.31</div>} className={ClassNamesGroup.ListItemClassName}>
            <Skeleton avatar title={false} loading={item.loading} active>
              <List.Item.Meta
                avatar={<Avatar src={item.picture.large} className={ClassNamesGroup.avatar} />}
                title={<div className={ClassNamesGroup.ItemTitle}>{item.name?.last}</div>}
                description={
                  <div className={ClassNamesGroup.SubTitle}>Hello! nice to meet to u ~</div>
                }
              />
            </Skeleton>
          </List.Item>
        )}
      />
    </div>
  );
};

export default SessonList;
