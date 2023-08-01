import {
  createPropString,
  generateImportCode,
  generateJSXCode,
  getDefaultValueFromSchema,
  getDiffPropsWithSchema,
  getSymbolMasterNameFromProps,
} from '../c2d2c';
import { buttonSchema, menuSchema, radioGroup, schema, tagSchema } from './schema';

describe('getDefaultValueFromSchema', () => {
  it('获取默认值', () => {
    const defaultValue = getDefaultValueFromSchema(schema);
    expect(defaultValue).toEqual({
      artboardWidth: 1440,
      columnCount: 24,
      columnWidth: 16,
      adjustNudge: false,
      gridWidth: 1184,
      isOnTop: true,
      mode: 'default',
      offsetLeft: 208,
      overrideLocal: false,
      showLeft: true,
      showMargin: true,
    });
  });
});

describe('getDiffPropsWithSchema', () => {
  it('简单版本', () => {
    const props = { checked: false, children: '未选中项', disabled: false };

    expect(getDiffPropsWithSchema(props, radioGroup as any)).toEqual({
      children: '未选中项',
    });
  });
  it('没有 schema的情况', () => {
    const props = { checked: false, children: '未选中项', disabled: false };

    expect(getDiffPropsWithSchema(props)).toEqual(props);
  });
  it('schema 为空的情况', () => {
    const props = { checked: false, children: '未选中项', disabled: false };

    expect(getDiffPropsWithSchema(props, { type: 'object' })).toEqual(props);
  });
});

describe('getSymbolMasterNameFromProps', () => {
  it('正常生成', () => {
    const name = getSymbolMasterNameFromProps(
      'antd',
      'Button',
      {
        danger: false,
        isSubmit: false,
        children: '主按钮',
        ghost: false,
        size: 'middle',
        type: 'dashed',
        shape: '',
        disabled: false,
        alignment: { vertical: 'top', horizontal: 'left' },
        resize: { widthFollow: 'self', heightFollow: 'self' },
      },
      buttonSchema,
    );

    expect(name).toEqual(
      'antd/Button/children=主按钮,type=dashed,alignment.vertical=top,alignment.horizontal=left,resize.widthFollow=self,resize.heightFollow=self',
    );
  });
  it('包含 null 或者 undefined 的 props 需要被过滤', () => {
    const name = getSymbolMasterNameFromProps(
      'antd',
      'Tag',
      {
        color: null,
        closable: true,
        a: undefined,
        children: '标签123',
        alignment: { vertical: 'top', horizontal: 'left' },
        resize: { widthFollow: 'self', heightFollow: 'self' },
      },
      tagSchema,
    );

    expect(name).toEqual(
      'antd/Tag/closable=true,children=标签123,alignment.vertical=top,alignment.horizontal=left,resize.widthFollow=self,resize.heightFollow=self',
    );
  });

  it('包含数组、嵌套对象的处理方法', () => {
    const props = {
      size: 'large',
      mode: 'vertical',
      theme: 'dark',
      items: [
        { label: '菜单项1', key: '2', disabled: false },
        { label: '菜单项2', key: '1', disabled: false },
        { label: '菜单项3', key: '3' },
        { label: '菜单项4' },
        { label: '' },
      ],
    };
    const name = getSymbolMasterNameFromProps('antd', 'Menu', props, menuSchema);
    expect(name).toEqual(
      'antd/Menu/size=large,theme=dark,items=[{label=菜单项1,key=2,disabled=false},{label=菜单项2,key=1,disabled=false},{label=菜单项3,key=3},{label=菜单项4},{label=}]',
    );
  });

  it('没有schema时，也可以正常生成', () => {
    const name = getSymbolMasterNameFromProps('antd', 'Button', {
      danger: false,
      children: '主按钮',
      size: 'middle',
      shape: null,
      a: undefined,
      alignment: { vertical: 'top', horizontal: 'left' },
    });

    expect(name).toEqual(
      'antd/Button/danger=false,children=主按钮,size=middle,alignment.vertical=top,alignment.horizontal=left',
    );
  });
});

describe('generateImportCode', () => {
  it('合成代码', () => {
    const code = generateImportCode('antd', ['Button', 'Button', 'Alert']);
    expect(code).toEqual("import { Button, Alert } from 'antd';");
  });
});

describe('generateCode', () => {
  it('props 不存在的组件', () => {
    // @ts-ignore
    expect(generateJSXCode('CheckShieldOutline')).toEqual('<CheckShieldOutline />');
  });

  it('不带children的组件', () => {
    const props = {
      message: '标题',
      style: { width: 300 },
      type: 'info',
      showIcon: true,
    };

    expect(generateJSXCode('Alert', props)).toEqual(
      '<Alert message="标题" style={{"width":300}} type="info" showIcon/>',
    );
  });

  it("默认过滤 '' 字符串的 props", () => {
    const props = {
      message: '标题',
      style: { width: 300 },
      type: 'info',
      showIcon: true,
      description: '',
    };

    expect(generateJSXCode('Alert', props)).toEqual(
      '<Alert message="标题" style={{"width":300}} type="info" showIcon/>',
    );
  });
  it('数组 props 的展示', () => {
    const props = {
      options: [
        {
          value: '1266',
          label: '选项1',
        },
        {
          value: '11e2',
          label: '选项2',
        },
        {
          value: '21fd',
          label: '选项3',
        },
      ],
      value: '1266',
    };
    expect(generateJSXCode('Segmented', props)).toEqual(
      '<Segmented options={[{"value":"1266","label":"选项1"},{"value":"11e2","label":"选项2"},{"value":"21fd","label":"选项3"}]} value="1266"/>',
    );
  });

  describe('带 children 的组件', () => {
    it('children 是纯文本', () => {
      const props = {
        size: 'small',
        width: 120,
        children: '文案',
        style: { width: null, height: null },
        type: 'primary',
      };

      expect(generateJSXCode('Button', props)).toEqual(
        '<Button size="small" width={120} type="primary">文案</Button>',
      );
    });

    it('数组个子组件的场景：Steps', () => {
      const props = {
        current: 1,
        children: [
          {
            $$__type: 'element',
            $$__body: {
              componentName: 'Steps.Step',
              props: {
                title: 'Finished',
                description: 'This is a description.',
              },
            },
          },
          {
            $$__type: 'element',
            $$__body: {
              componentName: 'Steps.Step',
              props: {
                title: 'In Progress',
                subTitle: 'Left 00:00:08',
                description: 'This is a description.',
              },
            },
          },
          {
            $$__type: 'element',
            $$__body: {
              componentName: 'Steps.Step',
              props: {
                title: 'Waiting',
                description: 'This is a description.',
              },
            },
          },
        ],
        style: {},
      };
      expect(generateJSXCode('Steps', props))
        .toEqual(`<Steps current={1}><Steps.Step title="Finished" description="This is a description."/>
<Steps.Step title="In Progress" subTitle="Left 00:00:08" description="This is a description."/>
<Steps.Step title="Waiting" description="This is a description."/></Steps>`);
    });

    it('单个子组件场景：Card.Meta', () => {
      const props = {
        hoverable: true,
        children: {
          $$__type: 'element',
          $$__body: {
            componentName: 'Card.Meta',
            props: {
              title: 'Europe Street beat',
              description: 'www.instagram.com',
            },
          },
        },

        style: {},
      };
      expect(generateJSXCode('Card', props)).toEqual(
        `<Card hoverable><Card.Meta title="Europe Street beat" description="www.instagram.com"/></Card>`,
      );
    });
  });
});

describe('generateProps', () => {
  it('undefined', () => {
    expect(createPropString('hello', undefined)).toEqual('');
  });
  it('数组', () => {
    expect(createPropString('hello', [123, 213])).toEqual('hello={[123,213]}');
  });

  describe('对象', () => {
    it('对象', () => {
      expect(createPropString('hello', { hello: 123 })).toEqual('hello={{"hello":123}}');
    });
    it('嵌套对象', () => {
      expect(createPropString('hello', { a: { b: { c: 23 } } })).toEqual(
        'hello={{"a":{"b":{"c":23}}}}',
      );
    });
    it('空对象', () => {
      expect(createPropString('hello', {})).toEqual('');
    });
    it('含有null或者空的对象', () => {
      expect(
        createPropString('hello', {
          a: { b: { c: 23, x: undefined }, t: '' },
          d: null,
          t: false,
        }),
      ).toEqual('hello={{"a":{"b":{"c":23},"t":""},"t":false}}');
    });
  });

  it('字符串', () => {
    expect(createPropString('hello', 'world')).toEqual('hello="world"');
  });
  it('真假值', () => {
    expect(createPropString('hello', false)).toEqual('hello={false}');
  });
  it('数值', () => {
    expect(createPropString('hello', 1)).toEqual('hello={1}');
    expect(createPropString('hello', 1e100)).toEqual('hello={1e+100}');
    expect(createPropString('hello', 1e1000)).toEqual('hello={Infinity}');
  });
  it('函数', () => {
    expect(createPropString('hello', () => {})).toEqual(`hello={() => {
    }}`);
  });

  it('symbol', () => {
    expect(createPropString('hello', Symbol('hello'))).toEqual("hello={Symbol.for('hello')}");
  });
});
