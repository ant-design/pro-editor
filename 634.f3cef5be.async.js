"use strict";(self.webpackChunk_ant_design_pro_editor=self.webpackChunk_ant_design_pro_editor||[]).push([[634],{58037:function(o,e,n){n.r(e),n.d(e,{randomIndex:function(){return g}});var t=n(48305),a=n.n(t),r=n(30436),u=n(66434),x=n(67073),l=n(75271),D=n(90142),b=n(16206),s=n(52676),g=function(){return Math.random()*1e4},k=(0,l.memo)(function(p){var i=p.item,d=p.index,h=p.compact,C=h===void 0?!1:h,f=(0,r.t)(),E=(0,l.useState)(i==null?void 0:i.title),_=a()(E,2),S=_[0],R=_[1],B=(0,l.useState)(!1),I=a()(B,2),y=I[0],L=I[1],T=function(){f.updateItem({title:S},d),L(!1)},F=function(){var c=f.getValue()||[];if(d+1===c.length){var M=g();f.addItem({id:M,title:"new-".concat(g())})}setTimeout(function(){var v=document.getElementById("index-".concat(d+1));v==null||v.focus()},0)};return(0,s.jsxs)(D.D,{horizontal:!0,align:"center",gap:8,width:"100%",children:[(0,s.jsx)("div",{style:b.fieldStyle,children:(0,s.jsx)(u.I,{size:"small",style:{width:"100%",paddingLeft:C?12:void 0},id:"index-".concat(d),value:S,onBlur:function(){y&&T()},onPressEnter:function(){y&&T(),F()},onChange:function(c){R(c),L(!0)}})}),(0,s.jsx)("div",{style:b.fieldStyle,children:(0,s.jsx)(x.P,{size:"small",style:{width:"100%"},options:b.tableColumnValueOptions,placeholder:"Please Select Column Value",value:i==null?void 0:i.dataIndex,onChange:function(c){f.updateItem({dataIndex:c},d)}})})]},d)});e.default=k},16206:function(o,e,n){n.r(e),n.d(e,{INIT_VALUES:function(){return a},fieldStyle:function(){return t},tableColumnValueOptions:function(){return r}});var t={flex:1,width:"100%",height:"24px",fontSize:"12px",borderRadius:"2px",minWidth:"48px"},a=[{id:"index",title:"Index",dataIndex:"indexBorder"},{id:"authName",title:"Enterprise",dataIndex:"text"},{id:"authedName",title:"Company",dataIndex:"select"}],r=[{label:"index",value:"index"},{label:"indexBorder",value:"indexBorder"},{label:"digit",value:"digit"},{label:"password",value:"password"},{label:"money",value:"money"},{label:"text",value:"text"},{label:"textarea",value:"textarea"},{label:"date",value:"date"},{label:"option",value:"option"},{label:"dateTime",value:"dateTime"},{label:"dateWeek",value:"dateWeek"},{label:"dateMonth",value:"dateMonth"},{label:"dateQuarter",value:"dateQuarter"},{label:"dateYear",value:"dateYear"},{label:"dateRange",value:"dateRange"},{label:"dateTimeRange",value:"dateTimeRange"},{label:"time",value:"time"},{label:"timeRange",value:"timeRange"},{label:"select",value:"select"},{label:"checkbox",value:"checkbox"},{label:"rate",value:"rate"},{label:"radio",value:"radio"},{label:"radioButton",value:"radioButton"},{label:"progress",value:"progress"},{label:"percent",value:"percent"},{label:"second",value:"second"},{label:"avatar",value:"avatar"},{label:"code",value:"code"},{label:"switch",value:"switch"},{label:"fromNow",value:"fromNow"},{label:"image",value:"image"},{label:"jsonCode",value:"jsonCode"},{label:"color",value:"color"}]},76491:function(o,e,n){n.d(e,{F:function(){return u}});var t=n(49189),a=n(75601),r=n(75271),u=function(){var l=a.ZP.useBreakpoint();return(0,r.useMemo)(function(){return(0,t.f)(l)},[l])}},35850:function(o,e,n){n.r(e),n.d(e,{StyleProvider:function(){return t.V9},ThemeProvider:function(){return t.f6},createGlobalStyle:function(){return t.vJ},createInstance:function(){return t.Fs},createStyles:function(){return t.kc},createStylish:function(){return t.Yz},css:function(){return t.iv},cx:function(){return t.cx},extractStaticStyle:function(){return t.Y2},injectGlobal:function(){return t.hi},keyframes:function(){return t.F4},setupStyled:function(){return t.Us},styleManager:function(){return t.Rr},useAntdStylish:function(){return a.n},useAntdTheme:function(){return r.A},useAntdToken:function(){return u.S},useResponsive:function(){return x.F},useTheme:function(){return t.Fg},useThemeMode:function(){return l.r}});var t=n(14909),a=n(10423),r=n(19052),u=n(24939),x=n(76491),l=n(15130)},36110:function(o,e){e.Z=`import { SortableList } from '@ant-design/pro-editor';
import { useTheme } from 'antd-style';
import { Flexbox } from 'react-layout-kit';

const list = ['hello', 'world'];

const Demo = () => {
  const token = useTheme();
  return (
    <Flexbox padding={24} style={{ background: token.colorBgLayout }}>
      <SortableList initialValues={list} />
    </Flexbox>
  );
};

export default Demo;
`},64463:function(o,e){e.Z=`import { Input, Select, useSortableList } from '@ant-design/pro-editor';
import { memo, useState } from 'react';
import { Flexbox } from 'react-layout-kit';
import { ItemRenderProps, fieldStyle, tableColumnValueOptions } from './data';

export const randomIndex = () => Math.random() * 10000;

const ItemRender = memo(({ item, index, compact = false }: ItemRenderProps) => {
  const instance = useSortableList();
  const [title, setTitle] = useState(item?.title);
  const [changed, setChanged] = useState(false);

  const updateTitle = () => {
    instance.updateItem({ title }, index);
    setChanged(false);
  };

  const handleNextFocus = () => {
    const value = instance.getValue() || [];
    // \u5982\u679C\u662F\u6700\u540E\u4E00\u4E2A\u8282\u70B9\uFF0C\u6309\u4E0B\u56DE\u8F66\u540E\uFF0C\u4F1A\u81EA\u52A8\u6DFB\u52A0\u4E00\u4E2A\u65B0\u7684\u8282\u70B9
    if (index + 1 === value.length) {
      const id = randomIndex();
      instance.addItem({ id, title: \`new-\${randomIndex()}\` });
    }
    setTimeout(() => {
      const nextNodeEl = document.getElementById(\`index-\${index + 1}\`);
      nextNodeEl?.focus();
    }, 0);
  };

  return (
    <Flexbox horizontal align={'center'} gap={8} key={index} width={'100%'}>
      <div style={fieldStyle}>
        <Input
          size={'small'}
          style={{ width: '100%', paddingLeft: compact ? 12 : undefined }}
          id={\`index-\${index}\`}
          value={title}
          onBlur={() => {
            if (changed) updateTitle();
          }}
          onPressEnter={() => {
            if (changed) updateTitle();
            handleNextFocus();
          }}
          onChange={(value) => {
            setTitle(value);
            setChanged(true);
          }}
        />
      </div>
      <div style={fieldStyle}>
        <Select
          size="small"
          style={{ width: '100%' }}
          options={tableColumnValueOptions}
          placeholder="Please Select Column Value"
          value={item?.dataIndex}
          onChange={(value) => {
            instance.updateItem({ dataIndex: value }, index);
          }}
        />
      </div>
    </Flexbox>
  );
});

export default ItemRender;
`},3575:function(o,e){e.Z=`import { SortableList } from '@ant-design/pro-editor';
import { Button } from 'antd';
import { useTheme } from 'antd-style';
import { useState } from 'react';
import { Flexbox } from 'react-layout-kit';

const Demo = () => {
  const [list, setList] = useState(['hello', 'world']);

  const token = useTheme();
  return (
    <Flexbox padding={24} style={{ background: token.colorBgLayout }}>
      <SortableList
        value={list}
        onChange={(value) => {
          console.log('change value', value);
          setList(value);
        }}
        SHOW_STORE_IN_DEVTOOLS
      />
      <Button
        type="primary"
        onClick={() => {
          setList(['foo', 'bar', 'yes']);
        }}
        style={{ marginTop: 8 }}
      >
        Set Data
      </Button>
    </Flexbox>
  );
};

export default Demo;
`},14197:function(o,e){e.Z=`import { SortableList } from '@ant-design/pro-editor';
import { useTheme } from 'antd-style';
import { Flexbox } from 'react-layout-kit';

const list = [{ text: 'hello' }, { text: 'world' }];

const Demo = () => {
  const token = useTheme();
  return (
    <Flexbox padding={24} style={{ background: token.colorBgLayout }}>
      <SortableList
        value={list}
        renderContent={(item) => item.text}
        creatorButtonProps={{
          creatorButtonText: 'Custom Create',
          record: () => ({
            text: Math.ceil(Math.random() * 100000).toString(16),
          }),
        }}
      />
    </Flexbox>
  );
};

export default Demo;
`},24351:function(o,e){e.Z=`export type SchemaItem = {
  title?: string;
  dataIndex?: string;
};

export interface ItemRenderProps {
  item: SchemaItem;
  index: number;
  compact?: boolean;
}

export const fieldStyle: React.CSSProperties = {
  flex: 1,
  width: '100%',
  height: '24px',
  fontSize: '12px',
  borderRadius: '2px',
  minWidth: '48px',
};

export const INIT_VALUES = [
  { id: 'index', title: 'Index', dataIndex: 'indexBorder' },
  {
    id: 'authName',
    title: 'Enterprise',
    dataIndex: 'text',
  },
  { id: 'authedName', title: 'Company', dataIndex: 'select' },
];

/*
 * Column \u6240\u6709\u7C7B\u578B
 * */
export const tableColumnValueOptions = [
  { label: 'index', value: 'index' },
  { label: 'indexBorder', value: 'indexBorder' },
  { label: 'digit', value: 'digit' },
  { label: 'password', value: 'password' },
  { label: 'money', value: 'money' },
  { label: 'text', value: 'text' },
  { label: 'textarea', value: 'textarea' },
  { label: 'date', value: 'date' },
  { label: 'option', value: 'option' },
  { label: 'dateTime', value: 'dateTime' },
  { label: 'dateWeek', value: 'dateWeek' },
  { label: 'dateMonth', value: 'dateMonth' },
  { label: 'dateQuarter', value: 'dateQuarter' },
  { label: 'dateYear', value: 'dateYear' },
  { label: 'dateRange', value: 'dateRange' },
  { label: 'dateTimeRange', value: 'dateTimeRange' },
  { label: 'time', value: 'time' },
  { label: 'timeRange', value: 'timeRange' },
  { label: 'select', value: 'select' },
  { label: 'checkbox', value: 'checkbox' },
  { label: 'rate', value: 'rate' },
  { label: 'radio', value: 'radio' },
  { label: 'radioButton', value: 'radioButton' },
  { label: 'progress', value: 'progress' },
  { label: 'percent', value: 'percent' },
  { label: 'second', value: 'second' },
  { label: 'avatar', value: 'avatar' },
  { label: 'code', value: 'code' },
  { label: 'switch', value: 'switch' },
  { label: 'fromNow', value: 'fromNow' },
  { label: 'image', value: 'image' },
  { label: 'jsonCode', value: 'jsonCode' },
  { label: 'color', value: 'color' },
];
`},7871:function(o,e){e.Z=`import { SortableList } from '@ant-design/pro-editor';
import { useTheme } from 'antd-style';
import { Flexbox } from 'react-layout-kit';

const list = [];

const Demo = () => {
  const token = useTheme();
  return (
    <Flexbox padding={24} style={{ background: token.colorBgLayout }}>
      <SortableList value={list} />
    </Flexbox>
  );
};

export default Demo;
`},25098:function(o,e){e.Z=`import { SortableList } from '@ant-design/pro-editor';
import { useState } from 'react';

const Demo = () => {
  const [list, setList] = useState(['\u5173\u5173\u96CE\u9E20', '\u5728\u6CB3\u4E4B\u6D32', '\u7A88\u7A95\u6DD1\u5973', '\u541B\u5B50\u597D\u9011']);

  return (
    <SortableList
      value={list}
      onChange={setList}
      style={{ background: 'rgb(255,224,224)', padding: 24, borderRadius: 12 }}
      className={'custom-class'}
      getItemStyles={({ isSorting, isDragging }) => {
        return {
          padding: 24,
          // \u62D6\u62FD\u9879\u4FEE\u6539\u80CC\u666F\u8272
          background: isDragging ? 'rgb(74,135,82)' : 'pink',
          color: isDragging ? 'rgb(139,212,148)' : 'rgb(135,74,74)',
          // \u5728 \u62D6\u62FD\u8FC7\u7A0B\u4E2D\u653E\u5927\u6240\u6709item\u7684\u5706\u89D2
          borderRadius: isSorting ? 100 : 16,
          boxShadow: 'none',
        };
      }}
    />
  );
};

export default Demo;
`},77650:function(o,e){e.Z=`import { SortableList } from '@ant-design/pro-editor';
import { useTheme } from 'antd-style';
import { Flexbox } from 'react-layout-kit';

const list = ['hello', 'world'];

const Demo = () => {
  const token = useTheme();
  return (
    <Flexbox padding={24} style={{ background: token.colorBgLayout }}>
      <SortableList initialValues={list} handle={false} />
    </Flexbox>
  );
};

export default Demo;
`},47072:function(o,e){e.Z=`import { SortableList } from '@ant-design/pro-editor';
import { useTheme } from 'antd-style';
import { Flexbox } from 'react-layout-kit';

const list = ['hello', 'world'];

const Demo = () => {
  const token = useTheme();
  return (
    <Flexbox padding={24} style={{ background: token.colorBgLayout }}>
      <SortableList initialValues={list} hideRemove />
    </Flexbox>
  );
};

export default Demo;
`},48229:function(o,e){e.Z=`import { SortableList, SortableListProvider, useSortableList } from '@ant-design/pro-editor';
import { Button, message } from 'antd';
import { useTheme } from 'antd-style';
import { useState } from 'react';
import { Flexbox } from 'react-layout-kit';
import ItemRender from './_ItemRender';
import { INIT_VALUES, SchemaItem } from './data';

const App = () => {
  const [listData, setListData] = useState<SchemaItem[]>(INIT_VALUES);

  return (
    <SortableList<SchemaItem>
      value={listData}
      onChange={(data) => {
        console.log('data', data);
        setListData(data);
      }}
      renderContent={(item, index) => <ItemRender item={item} index={index} />}
      SHOW_STORE_IN_DEVTOOLS // \u7528\u4E8E\u663E\u793A Redux Devtools
    />
  );
};

const Extra = () => {
  const instance = useSortableList();
  return (
    <Button
      block
      size="small"
      type="primary"
      style={{ marginBottom: 8 }}
      onClick={() => message.info(JSON.stringify(instance.getValue()))}
    >
      Get Value
    </Button>
  );
};

export default () => {
  const token = useTheme();

  return (
    <SortableListProvider>
      <Flexbox padding={24} style={{ background: token.colorBgLayout }}>
        <Extra />
        <App />
      </Flexbox>
    </SortableListProvider>
  );
};
`},92336:function(o,e){e.Z=`import { PlusCircleFilled } from '@ant-design/icons';
import { ActionIcon, SortableList, SortableListRef } from '@ant-design/pro-editor';
import { useTheme } from 'antd-style';
import { useRef, useState } from 'react';
import { Flexbox } from 'react-layout-kit';
import ItemRender from './_ItemRender';
import { INIT_VALUES, SchemaItem } from './data';

/**
 * \u521B\u5EFA\u4E00\u4E2A\u968F\u673A\u7684\u7D22\u5F15\u6807\u8BB0\u7B26
 */
export const randomIndex = () => Math.random() * 10000;

export default () => {
  const [listData, setListData] = useState<SchemaItem[]>(INIT_VALUES);
  const ref = useRef<SortableListRef<SchemaItem>>(null);
  const token = useTheme();

  return (
    <Flexbox padding={24} style={{ background: token.colorBgLayout }}>
      <Flexbox horizontal align={'center'} distribution={'space-between'}>
        <div>Column Config</div>
        <ActionIcon
          icon={<PlusCircleFilled />}
          key={'edit'}
          tabIndex={-1}
          onClick={() => {
            const id = \`id-\${listData.length}-\${randomIndex()}\`;
            ref.current.addItem({ title: \`new-\${id}\` });
          }}
        />
      </Flexbox>
      <SortableList<SchemaItem>
        ref={ref}
        value={listData}
        onChange={(data) => {
          console.log('data', data);
          setListData(data);
        }}
        renderContent={(item, index) => <ItemRender item={item} index={index} />}
      />
    </Flexbox>
  );
};
`},21934:function(o,e){e.Z=`import { SortableList } from '@ant-design/pro-editor';
import { useTheme } from 'antd-style';
import { Flexbox } from 'react-layout-kit';
import ItemRender from './_ItemRender';
import { INIT_VALUES, SchemaItem } from './data';

export default () => {
  const token = useTheme();
  return (
    <Flexbox padding={24} style={{ background: token.colorBgLayout }}>
      <SortableList<SchemaItem>
        initialValues={INIT_VALUES}
        onChange={(data, event) => {
          console.log('data', data, event);
        }}
        renderContent={(item, index) => <ItemRender item={item} index={index} />}
      />
    </Flexbox>
  );
};
`},85783:function(o,e){e.Z=`import { SortableList, SortableListRef } from '@ant-design/pro-editor';
import { Badge, Button } from 'antd';
import { useTheme } from 'antd-style';
import { useRef, useState } from 'react';
import { Flexbox } from 'react-layout-kit';

interface Item {
  id: string;
  text: string;
}

const Demo = () => {
  const token = useTheme();
  const ref = useRef<SortableListRef>(null);

  const [list, setList] = useState<Item[]>([
    { id: '1', text: '\u5173\u5173\u96CE\u9E20' },
    { id: '2', text: '\u5728\u6CB3\u4E4B\u6D32' },
    { id: '3', text: '\u7A88\u7A95\u6DD1\u5973' },
    { id: '4', text: '\u541B\u5B50\u597D\u9011' },
  ]);

  return (
    <Flexbox gap={24} padding={24} style={{ background: token.colorBgLayout }}>
      <Flexbox horizontal gap={8}>
        <Button
          onClick={() => {
            ref.current.addItem(
              {
                id: Math.ceil(Math.random() * 100000).toString(16),
                text: 'new',
              },
              0,
            );
          }}
        >
          Add item from top
        </Button>
        <Button
          onClick={() => {
            ref.current.addItem(
              {
                id: Math.ceil(Math.random() * 100000).toString(16),
                text: 'new',
              },
              list.length,
            );
          }}
        >
          Add item from bottom
        </Button>
      </Flexbox>

      <SortableList<Item>
        value={list}
        ref={ref}
        onChange={setList}
        getItemStyles={() => ({ padding: '16px' })}
        renderItem={(item: Item, { index, listeners }) => {
          return (
            <Flexbox horizontal width={'100%'} distribution={'space-between'} gap={12}>
              <Flexbox horizontal gap={8}>
                <div>
                  <Badge count={item.id} />
                </div>
                <div>{item.text}</div>
              </Flexbox>
              <Flexbox
                horizontal // \u7531\u4E8E\u62D6\u62FD\u4E8B\u4EF6\u662F\u901A\u8FC7\u76D1\u542C onMouseDown \u6765\u8BC6\u522B\u7528\u6237\u52A8\u4F5C
                // \u56E0\u6B64\u9488\u5BF9\u76F8\u5173\u7528\u6237\u64CD\u4F5C\uFF0C\u9700\u8981\u7EC8\u6B62 onMouseDown \u7684\u5192\u6CE1\u884C\u4E3A
                onMouseDown={(e) => {
                  e.stopPropagation();
                }}
              >
                <Button
                  size={'small'}
                  type={'text'}
                  onClick={() => {
                    ref.current.addItem(
                      {
                        id: Math.ceil(Math.random() * 100000).toString(16),
                        text: 'new',
                      },
                      index,
                    );
                  }}
                >
                  Up
                </Button>
                <Button
                  size={'small'}
                  type={'text'}
                  onClick={() => {
                    ref.current.addItem(
                      {
                        id: Math.ceil(Math.random() * 1000).toString(16),
                        text: 'new',
                      },
                      index + 1,
                    );
                  }}
                >
                  Down
                </Button>
                <Button
                  size={'small'}
                  danger
                  type={'text'}
                  onClick={() => ref.current.removeItem(index)}
                >
                  Delete
                </Button>
                <Button size={'small'} type={'text'} {...listeners}>
                  Drag
                </Button>
              </Flexbox>
            </Flexbox>
          );
        }}
      />
    </Flexbox>
  );
};

export default Demo;
`},3193:function(o,e){e.Z=`import { SortableList } from '@ant-design/pro-editor';
import { useTheme } from 'antd-style';
import { useState } from 'react';
import { Flexbox } from 'react-layout-kit';
import ItemRender from './_ItemRender';
import { INIT_VALUES, SchemaItem } from './data';

export default () => {
  const [listData, setListData] = useState<SchemaItem[]>(INIT_VALUES);
  const token = useTheme();

  return (
    <Flexbox padding={24} style={{ background: token.colorBgLayout }}>
      <SortableList<SchemaItem>
        value={listData}
        onChange={(data) => {
          console.log('data', data);
          setListData(data);
        }}
        renderContent={(item, index) => <ItemRender item={item} index={index} />}
      />
    </Flexbox>
  );
};
`},6020:function(o,e,n){n.r(e),n.d(e,{Center:function(){return t.Z},Flexbox:function(){return a.D}});var t=n(55471),a=n(90142)}}]);
