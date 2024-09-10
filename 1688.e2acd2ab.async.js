"use strict";(self.webpackChunk_ant_design_pro_editor=self.webpackChunk_ant_design_pro_editor||[]).push([[1688],{89011:function(s,e,n){n.r(e),n.d(e,{DefaultLayoutProps:function(){return v}});var o=n(38725),d=n(13831),u=n(54861),l=n(68539),m=n(50186),a=n(25881),E=n(37294),h=n(57834),x=n(95233),y=n(77808),i=n(85988),c=n(68084),r=n(29055),t=n(52676),v={header:{iconConfig:{icon:(0,t.jsx)(o.Z,{}),title:"EditorLayout",dropdown:{menu:{items:[{key:"1",label:(0,t.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://pro-editor.antdigital.dev/",children:"\u5173\u4E8E Ant Desgin Pro Editor"})},{key:"2",label:(0,t.jsx)("a",{target:"_blank",rel:"noopener noreferrer",children:"\u5168\u90E8\u663E\u793A"}),icon:(0,t.jsx)(d.Z,{}),disabled:!0},{key:"github",label:(0,t.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/ant-design/pro-editor",children:"GitHub"}),icon:(0,t.jsx)(u.Z,{})}]}}}},footer:{extra:(0,t.jsxs)(c.Z,{size:[0,8],wrap:!0,children:[(0,t.jsx)(r.Z,{icon:(0,t.jsx)(l.Z,{}),color:"#55acee",children:"Twitter"}),(0,t.jsx)(r.Z,{icon:(0,t.jsx)(m.Z,{}),color:"#cd201f",children:"Youtube"}),(0,t.jsx)(r.Z,{icon:(0,t.jsx)(a.Z,{}),color:"#3b5999",children:"Facebook"}),(0,t.jsx)(r.Z,{icon:(0,t.jsx)(E.Z,{}),color:"#55acee",children:"LinkedIn"})]}),iconConfig:{icon:(0,t.jsx)(h.Z,{}),dropdown:{menu:{items:[{key:"1",label:"Build with Android",icon:(0,t.jsx)(x.Z,{})},{key:"2",label:"Run in Chrome",icon:(0,t.jsx)(y.Z,{})},{key:"github",label:"CodeSandBox",icon:(0,t.jsx)(i.Z,{})}]}}}}}},81166:function(s,e,n){n.r(e);var o=n(15558),d=n.n(o),u=n(48305),l=n.n(u),m=n(53649),a=n.n(m),E=n(57820),h=n(96396),x=n(80652),y=n(26458),i=n(14909),c=n(75271),r=n(52676),t,v,P,D,O,S=8,b="https://randomuser.me/api/?results=".concat(S,"&inc=name,gender,email,nat,picture&noinfo"),g={ListClassName:(0,i.cx)((0,i.iv)(t||(t=a()([`
    overflow: scroll;
  `])))),ListItemClassName:(0,i.cx)((0,i.iv)(v||(v=a()([`
    cursor: pointer;
    padding: 0px 10px !important;
    margin-top: 4px;
    margin-bottom: 4px;
    border-radius: 10px;
    :hover {
      background-color: #e3e3e3;
    }
  `])))),SubTitle:(0,i.cx)((0,i.iv)(P||(P=a()([`
    text-wrap: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `])))),ItemTitle:(0,i.cx)((0,i.iv)(D||(D=a()([`
    text-wrap: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin: 0 0 -4px 0;
  `])))),avatar:(0,i.cx)((0,i.iv)(O||(O=a()([`
    height: 40px;
    width: 40px;
  `]))))},w=function(){var U=(0,c.useState)(!0),C=l()(U,2),M=C[0],W=C[1],k=(0,c.useState)(!1),T=l()(k,2),Z=T[0],I=T[1],K=(0,c.useState)([]),A=l()(K,2),B=A[0],j=A[1],F=(0,c.useState)([]),R=l()(F,2),N=R[0],L=R[1];(0,c.useEffect)(function(){fetch(b).then(function(p){return p.json()}).then(function(p){W(!1),j(p.results),L(p.results)})},[]);var z=function(){I(!0),L(B.concat(d()(new Array(S)).map(function(){return{loading:!0,name:{},picture:{}}}))),fetch(b).then(function(_){return _.json()}).then(function(_){var f=B.concat(_.results);j(f),L(f),I(!1),window.dispatchEvent(new Event("resize"))})},G=!M&&!Z?(0,r.jsx)("div",{style:{textAlign:"center",marginTop:12,height:32,lineHeight:"32px"},children:(0,r.jsx)(E.ZP,{onClick:z,children:"loading more"})}):null;return(0,r.jsx)("div",{style:{height:"540px",overflow:"scroll"},children:(0,r.jsx)(h.Z,{className:g.ListClassName,loading:M,itemLayout:"horizontal",loadMore:G,dataSource:N,renderItem:function(_){var f;return(0,r.jsx)(h.Z.Item,{extra:(0,r.jsx)("div",{children:"12.31"}),className:g.ListItemClassName,children:(0,r.jsx)(x.Z,{avatar:!0,title:!1,loading:_.loading,active:!0,children:(0,r.jsx)(h.Z.Item.Meta,{avatar:(0,r.jsx)(y.C,{src:_.picture.large,className:g.avatar}),title:(0,r.jsx)("div",{className:g.ItemTitle,children:(f=_.name)===null||f===void 0?void 0:f.last}),description:(0,r.jsx)("div",{className:g.SubTitle,children:"Hello! nice to meet to u ~"})})})})}})})};e.default=w},76491:function(s,e,n){n.d(e,{F:function(){return l}});var o=n(49189),d=n(75601),u=n(75271),l=function(){var a=d.ZP.useBreakpoint();return(0,u.useMemo)(function(){return(0,o.f)(a)},[a])}},35850:function(s,e,n){n.r(e),n.d(e,{StyleProvider:function(){return o.V9},ThemeProvider:function(){return o.f6},createGlobalStyle:function(){return o.vJ},createInstance:function(){return o.Fs},createStyles:function(){return o.kc},createStylish:function(){return o.Yz},css:function(){return o.iv},cx:function(){return o.cx},extractStaticStyle:function(){return o.Y2},injectGlobal:function(){return o.hi},keyframes:function(){return o.F4},setupStyled:function(){return o.Us},styleManager:function(){return o.Rr},useAntdStylish:function(){return d.n},useAntdTheme:function(){return u.A},useAntdToken:function(){return l.S},useResponsive:function(){return m.F},useTheme:function(){return o.Fg},useThemeMode:function(){return a.r}});var o=n(14909),d=n(10423),u=n(19052),l=n(24939),m=n(76491),a=n(15130)},80105:function(s,e){e.Z=`import {
  AndroidOutlined,
  ChromeOutlined,
  CloudOutlined,
  CodeSandboxOutlined,
  FacebookOutlined,
  GithubOutlined,
  LinkedinOutlined,
  MenuUnfoldOutlined,
  SmileOutlined,
  TwitterOutlined,
  YoutubeOutlined,
} from '@ant-design/icons';
import { Space, Tag } from 'antd';

const DefaultLayoutProps = {
  header: {
    iconConfig: {
      icon: <MenuUnfoldOutlined />,
      title: 'EditorLayout',
      dropdown: {
        menu: {
          items: [
            {
              key: '1',
              label: (
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://pro-editor.antdigital.dev/"
                >
                  \u5173\u4E8E Ant Desgin Pro Editor
                </a>
              ),
            },
            {
              key: '2',
              label: (
                <a target="_blank" rel="noopener noreferrer">
                  \u5168\u90E8\u663E\u793A
                </a>
              ),
              icon: <SmileOutlined />,
              disabled: true,
            },
            {
              key: 'github',
              label: (
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/ant-design/pro-editor"
                >
                  GitHub
                </a>
              ),
              icon: <GithubOutlined />,
            },
          ],
        },
      },
    },
  },
  footer: {
    extra: (
      <Space size={[0, 8]} wrap>
        <Tag icon={<TwitterOutlined />} color="#55acee">
          Twitter
        </Tag>
        <Tag icon={<YoutubeOutlined />} color="#cd201f">
          Youtube
        </Tag>
        <Tag icon={<FacebookOutlined />} color="#3b5999">
          Facebook
        </Tag>
        <Tag icon={<LinkedinOutlined />} color="#55acee">
          LinkedIn
        </Tag>
      </Space>
    ),
    iconConfig: {
      icon: <CloudOutlined />,
      dropdown: {
        menu: {
          items: [
            {
              key: '1',
              label: 'Build with Android',
              icon: <AndroidOutlined />,
            },
            {
              key: '2',
              label: 'Run in Chrome',
              icon: <ChromeOutlined />,
            },
            {
              key: 'github',
              label: 'CodeSandBox',
              icon: <CodeSandboxOutlined />,
            },
          ],
        },
      },
    },
  },
};

export { DefaultLayoutProps };
`},22786:function(s,e){e.Z=`import { Button, EditorLayout, Input } from '@ant-design/pro-editor';
import { Space } from 'antd';
import { DefaultLayoutProps } from './_defaultProps';

export default () => {
  return (
    <EditorLayout
      style={{
        maxWidth: '100%',
        height: '600px',
      }}
      header={{
        ...DefaultLayoutProps.header,
        children: (
          <Input
            addonBefore="Options"
            placeholder="Search For Some Little Options"
            style={{ width: 250 }}
          />
        ),
        extra: (
          <Space>
            <Button type="primary">Save</Button>
            <Button type="dashed">Export</Button>
          </Space>
        ),
      }}
      footer={{
        ...DefaultLayoutProps.footer,
      }}
      leftPannel={{
        children: <div>Left Pannel</div>,
      }}
    />
  );
};
`},20609:function(s,e){e.Z=`import { Avatar, Button, List, Skeleton } from 'antd';
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
const fakeDataUrl = \`https://randomuser.me/api/?results=\${count}&inc=name,gender,email,nat,picture&noinfo\`;

const ClassNamesGroup = {
  ListClassName: cx(css\`
    overflow: scroll;
  \`),
  ListItemClassName: cx(css\`
    cursor: pointer;
    padding: 0px 10px !important;
    margin-top: 4px;
    margin-bottom: 4px;
    border-radius: 10px;
    :hover {
      background-color: #e3e3e3;
    }
  \`),
  SubTitle: cx(css\`
    text-wrap: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  \`),
  ItemTitle: cx(css\`
    text-wrap: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin: 0 0 -4px 0;
  \`),
  avatar: cx(css\`
    height: 40px;
    width: 40px;
  \`),
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
`},84286:function(s,e){e.Z=`import {
  CloseCircleFilled,
  ExclamationCircleFilled,
  FieldTimeOutlined,
  FolderAddOutlined,
  MinusCircleFilled,
} from '@ant-design/icons';
import { ActionGroup, ActionIcon, Button, EditorLayout, Input } from '@ant-design/pro-editor';
import { Divider, Dropdown, Image, Space, message } from 'antd';
import { DefaultLayoutProps } from './_defaultProps';
import SessonList from './components/sessinList';

export default () => {
  const [messageApi, contextHolder] = message.useMessage();

  const LeftActions = () => (
    <ActionGroup
      type="pure"
      items={[
        {
          icon: (
            <CloseCircleFilled
              style={{
                color: 'rgb(206,68,61)',
                fontSize: '10px',
              }}
            />
          ),
          size: 18,
          onClick: () => {
            messageApi.info('\u6B63\u5728\u5173\u95ED\u7A0B\u5E8F ing\uFF01');
          },
          label: '\u5173\u95ED\u7A0B\u5E8F',
        },
        {
          icon: (
            <MinusCircleFilled
              style={{
                color: 'rgb(280,135,53)',
                fontSize: '10px',
              }}
            />
          ),
          size: 18,
          label: '\u5173\u95ED\u7A0B\u5E8F',
        },
        {
          icon: (
            <ExclamationCircleFilled
              style={{
                color: 'rgb(96,185,56)',
                fontSize: '10px',
              }}
            />
          ),
          size: 18,
          label: '\u8BE6\u7EC6\u63D0\u793A',
        },
      ]}
    />
  );

  return (
    <>
      {contextHolder}
      <EditorLayout
        style={{
          maxWidth: '100%',
          height: '600px',
          border: '1px solid #e3e3e3',
          boxShadow: '0 0 10px 5px rgba(0, 0, 0, 0.1)',
        }}
        header={{
          ...DefaultLayoutProps.header,
          style: {
            backgroundColor: 'rgba(32,121,242,0.05)',
          },
          themeType: 'pure',
          children: (
            <>
              <Dropdown
                trigger={['click']}
                menu={{
                  items: [
                    {
                      label: 'Julie Nolke',
                      key: '1',
                    },
                    {
                      label: 'Bill Jhon',
                      key: '2',
                    },
                    {
                      icon: '',
                      label: 'Mike Jhonson',
                      key: '3',
                    },
                  ],
                }}
              >
                <ActionIcon icon={<FieldTimeOutlined />} title="\u6700\u8FD1\u4F7F\u7528" />
              </Dropdown>
              <Input placeholder="Search For Some Dialog" style={{ width: 250 }} />
            </>
          ),
          extra: (
            <Space>
              <Button type="primary">Save</Button>
              <Button type="dashed">
                <FolderAddOutlined />
              </Button>
            </Space>
          ),
          iconConfig: {
            ...DefaultLayoutProps.header.iconConfig,
            title: '\u9753\u4ED4/\u59B9',
            icon: (
              <Image
                preview={false}
                width={26}
                style={{
                  borderRadius: '50%',
                }}
                src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
              />
            ),
            render: (props, defalutDom) => {
              return (
                <>
                  <LeftActions />
                  {defalutDom}
                  <Divider type="vertical" />
                  \u{1F604} \u5929\u9009\u4E4B\u5B50
                </>
              );
            },
          },
        }}
        type="LeftFull"
        footer={false}
        rightPannel={false}
        leftPannel={{
          style: {
            padding: '0px',
          },
          children: <SessonList />,
        }}
      />
    </>
  );
};
`},66371:function(s,e){e.Z=`import { EditorLayout } from '@ant-design/pro-editor';

export default () => {
  return (
    <EditorLayout
      style={{
        maxWidth: '100%',
        height: '600px',
      }}
      header={false}
      leftPannel={false}
    />
  );
};
`},44914:function(s,e){e.Z=`import { EditorLayout } from '@ant-design/pro-editor';

export default () => {
  return (
    <EditorLayout
      style={{
        maxWidth: '100%',
        height: '600px',
      }}
      header={false}
      footer={false}
      leftPannel={{
        children: <div>Left Pannel</div>,
      }}
    />
  );
};
`},80432:function(s,e){e.Z=`import { EditorLayout, Input } from '@ant-design/pro-editor';
import { Segmented, Space } from 'antd';
import { useState } from 'react';
import { DefaultLayoutProps } from './_defaultProps';

export default () => {
  const [value, setValue] = useState<string>('ghost');
  const [style, setStyle] = useState({});
  return (
    <Space
      direction="vertical"
      style={{
        maxWidth: '100%',
      }}
    >
      <Segmented
        options={['ghost', 'block', 'pure']}
        value={value}
        onChange={(e) => {
          if (e.toString() === 'pure') {
            setStyle({
              backgroundColor: 'rgba(200,200,200,0.3)',
              border: '1px solid #1890ff',
            });
          } else {
            setStyle({});
          }
          setValue(e.toString());
        }}
      />
      <EditorLayout
        style={{
          maxWidth: '100%',
          height: '600px',
        }}
        header={{
          ...DefaultLayoutProps.header,
          style: style,
          children: (
            <Input
              addonBefore="Options"
              placeholder="Search For Some Options"
              style={{ width: 250 }}
            />
          ),
        }}
        themeType={value}
        footer={{
          ...DefaultLayoutProps.footer,
          children: <div>Footer</div>,
        }}
        centerPannel={{
          style: style,
          children: <div>Center Pannel</div>,
        }}
        rightPannel={{
          style: style,
          children: <div>right Pannel</div>,
        }}
        bottomPannel={{
          style: style,
          children: <div>Bottom Pannel</div>,
        }}
        leftPannel={{
          style: style,
          children: <div>Left Pannel</div>,
        }}
      />
    </Space>
  );
};
`},24325:function(s,e){e.Z=`import { EditorLayout, Input } from '@ant-design/pro-editor';
import { Segmented, Space } from 'antd';
import { useState } from 'react';
import { DefaultLayoutProps } from './_defaultProps';

export default () => {
  const [value, setValue] = useState<string>('Bottom');

  return (
    <Space
      direction="vertical"
      style={{
        maxWidth: '100%',
      }}
    >
      <Segmented
        options={['Left&Right', 'LeftFull', 'RightFull', 'Bottom']}
        value={value}
        onChange={(e) => setValue(e.toString())}
      />
      <EditorLayout
        style={{
          maxWidth: '100%',
          height: '600px',
        }}
        header={{
          ...DefaultLayoutProps.header,
          children: (
            <Input
              addonBefore="Options"
              placeholder="Search For Some Options"
              style={{ width: 250 }}
            />
          ),
        }}
        type={value}
        footer={{
          ...DefaultLayoutProps.footer,
          children: <div>Footer</div>,
        }}
        leftPannel={{
          children: <div>Left Pannel</div>,
        }}
      />
    </Space>
  );
};
`}}]);
