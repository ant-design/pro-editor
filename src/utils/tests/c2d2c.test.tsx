import {
  createPropString,
  generateImportCode,
  generateJSXCode,
  getDefaultValueFromSchema,
} from '../c2d2c';
import { schema } from './schema';

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
