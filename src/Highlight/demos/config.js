const configs = [
  {
    language: 'bash',
    text: 'Bash',
    code: '#!/bin/bash\n\n###### CONFIG\nACCEPTED_HOSTS="/root/.hag_accepted.conf"\nBE_VERBOSE=false\n\nif [ "$UID" -ne 0 ]\nthen\n echo "Superuser rights required"\n exit 2\nfi\n\ngenApacheConf(){\n echo -e "# Host ${HOME_DIR}$1/$2 :"\n}\n\necho \'"quoted"\' | tr -d \\\\/" > text.txt\n\n',
  },
  {
    language: 'css',
    text: 'Css',
    code: "@font-face {\n  font-family: Chunkfive; src: url('Chunkfive.otf');\n}\n\nbody, .usertext {\n  color: #F0F0F0; background: #600;\n  font-family: Chunkfive, sans;\n  --heading-1: 30px/32px Helvetica, sans-serif;\n}\n\n@import url(print.css);\n@media print {\n  a[href^=http]::after {\n    content: attr(href)\n  }\n}",
  },

  {
    language: 'java',
    text: 'Java',
    code: '/**\n * @author John Smith <john.smith@example.com>\n*/\npackage l2f.gameserver.model;\n\npublic abstract class L2Char extends L2Object {\n  public static final Short ERROR = 0x0001;\n\n  public void moveTo(int x, int y, int z) {\n    _ai = null;\n    log("Should not be called");\n    if (1 > 5) { // wtf!?\n      return;\n    }\n  }\n}',
  },
  {
    language: 'javascript',
    text: 'Javascript',
    code: 'function $initHighlight(block, cls) {\n  try {\n    if (cls.search(/\\bno\\-highlight\\b/) != -1)\n      return process(block, true, 0x0F) +\n             ` class="${cls}"`;\n  } catch (e) {\n    /* handle exception */\n  }\n  for (var i = 0 / 2; i < classes.length; i++) {\n    if (checkCondition(classes[i]) === undefined)\n      console.log(\'undefined\');\n  }\n\n  return (\n    <div>\n      <web-component>{block}</web-component>\n    </div>\n  )\n}\n\nexport  $initHighlight;',
  },
  {
    language: 'json',
    text: 'Json',
    code: '[\n  {\n    "title": "apples",\n    "count": [12000, 20000],\n    "description": {"text": "...", "sensitive": false}\n  },\n  {\n    "title": "oranges",\n    "count": [17500, null],\n    "description": {"text": "...", "sensitive": false}\n  }\n]',
  },
  {
    language: 'jsx',
    text: 'Jsx',
    code: 'import React from \'react\';\nimport { Button, Tag, Space } from \'antd\';\nimport { ProList } from \'@ant-design/pro-components\';\n\nconst dataSource = [\n  {\n    name: \'语雀的天空\',\n    image:\n      \'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg\',\n    desc: \'我是一条测试的描述\',\n  },\n  {\n    name: \'Ant Design\',\n    image:\n      \'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg\',\n    desc: \'我是一条测试的描述\',\n  },\n  {\n    name: \'蚂蚁金服体验科技\',\n    image:\n      \'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg\',\n    desc: \'我是一条测试的描述\',\n  },\n  {\n    name: \'ProEditor\',\n    image:\n      \'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg\',\n    desc: \'我是一条测试的描述\',\n  },\n];\n\nexport default () => (\n  <ProList\n    toolBarRender={() => {\n      return [\n        <Button key="add" type="primary">\n          新建\n        </Button>,\n      ];\n    }}\n    onRow={(record) => {\n      return {\n        onMouseEnter: () => {\n          console.log(record);\n        },\n        onClick: () => {\n          console.log(record);\n        },\n      };\n    }}\n    rowKey="name"\n    headerTitle="基础列表"\n    tooltip="基础列表的配置"\n    dataSource={dataSource}\n    showActions="hover"\n    showExtra="hover"\n    metas={{\n      title: {\n        dataIndex: \'name\',\n      },\n      avatar: {\n        dataIndex: \'image\',\n      },\n      description: {\n        dataIndex: \'desc\',\n      },\n      subTitle: {\n        render: () => {\n          return (\n            <Space size={0}>\n              <Tag color="blue">Ant Design</Tag>\n              <Tag color="#5BD8A6">ProEditor</Tag>\n            </Space>\n          );\n        },\n      },\n      actions: {\n        render: (text, row) => [\n          <a href={row.html_url} target="_blank" rel="noopener noreferrer" key="link">\n            链路\n          </a>,\n          <a href={row.html_url} target="_blank" rel="noopener noreferrer" key="warning">\n            报警\n          </a>,\n          <a href={row.html_url} target="_blank" rel="noopener noreferrer" key="view">\n            查看\n          </a>,\n        ],\n      },\n    }}\n  />\n);',
  },
  {
    language: 'markdown',
    text: 'Markdown',
    code: '# hello world\n\nyou can write text [with links](http://example.com) inline or [link references][1].\n\n* one _thing_ has *em*phasis\n* two __things__ are **bold**\n\n[1]: http://example.com\n\n---\n\nhello world\n===========\n\n<this_is inline="xml"></this_is>\n\n> markdown is so cool\n\n    so are code segments\n\n1. one thing (yeah!)\n2. two thing `i can write code`, and `more` wipee!',
  },
  {
    language: 'python',
    text: 'Python',
    code: "@requires_authorization\ndef somefunc(param1='', param2=0):\n    r'''A docstring'''\n    if param1 > param2: # interesting\n        print 'Gre\\'ater'\n    return (param2 - param1 + 1 + 0b10l) or None\n\nclass SomeClass:\n    pass\n\n>>> message = '''interpreter\n... prompt'''",
  },
  {
    language: 'sql',
    text: 'Sql',
    code: 'CREATE TABLE "topic" (\n    "id" serial NOT NULL PRIMARY KEY,\n    "forum_id" integer NOT NULL,\n    "subject" varchar(255) NOT NULL\n);\nALTER TABLE "topic"\nADD CONSTRAINT forum_id FOREIGN KEY ("forum_id")\nREFERENCES "forum" ("id");\n\n-- Initials\ninsert into "topic" ("forum_id", "subject")\nvalues (2, \'D\'\'artagnian\');',
  },
  {
    language: 'tsx',
    text: 'Tsx',
    code: 'import React from \'react\';\nimport { Button, Tag, Space } from \'antd\';\nimport { ProList } from \'@ant-design/pro-components\';\n\nconst dataSource = [\n  {\n    name: \'语雀的天空\',\n    image:\n      \'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg\',\n    desc: \'我是一条测试的描述\',\n  },\n  {\n    name: \'Ant Design\',\n    image:\n      \'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg\',\n    desc: \'我是一条测试的描述\',\n  },\n  {\n    name: \'蚂蚁金服体验科技\',\n    image:\n      \'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg\',\n    desc: \'我是一条测试的描述\',\n  },\n  {\n    name: \'ProEditor\',\n    image:\n      \'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg\',\n    desc: \'我是一条测试的描述\',\n  },\n];\n\nexport default () => (\n  <ProList<any>\n    toolBarRender={() => {\n      return [\n        <Button key="add" type="primary">\n          新建\n        </Button>,\n      ];\n    }}\n    onRow={(record: any) => {\n      return {\n        onMouseEnter: () => {\n          console.log(record);\n        },\n        onClick: () => {\n          console.log(record);\n        },\n      };\n    }}\n    rowKey="name"\n    headerTitle="基础列表"\n    tooltip="基础列表的配置"\n    dataSource={dataSource}\n    showActions="hover"\n    showExtra="hover"\n    metas={{\n      title: {\n        dataIndex: \'name\',\n      },\n      avatar: {\n        dataIndex: \'image\',\n      },\n      description: {\n        dataIndex: \'desc\',\n      },\n      subTitle: {\n        render: () => {\n          return (\n            <Space size={0}>\n              <Tag color="blue">Ant Design</Tag>\n              <Tag color="#5BD8A6">ProEditor</Tag>\n            </Space>\n          );\n        },\n      },\n      actions: {\n        render: (text, row) => [\n          <a href={row.html_url} target="_blank" rel="noopener noreferrer" key="link">\n            链路\n          </a>,\n          <a href={row.html_url} target="_blank" rel="noopener noreferrer" key="warning">\n            报警\n          </a>,\n          <a href={row.html_url} target="_blank" rel="noopener noreferrer" key="view">\n            查看\n          </a>,\n        ],\n      },\n    }}\n  />\n);',
  },
  {
    language: 'typescript',
    text: 'Typescript',
    code: 'class MyClass {\n  public static myValue: string;\n  constructor(init: string) {\n    this.myValue = init;\n  }\n}\nimport fs = require("fs");\nmodule MyModule {\n  export interface MyInterface extends Other {\n    myProperty: any;\n  }\n}\ndeclare magicNumber number;\nmyArray.forEach(() => { }); // fat arrow syntax',
  },
  {
    language: 'xml',
    text: 'Xml',
    code: '<!DOCTYPE html>\n<title>Title</title>\n\n<style>body {width: 500px;}</style>\n\n<script type="application/javascript">\n  function $init() {return true;}\n</script>\n\n<body>\n  <p checked class="title" id=\'title\'>Title</p>\n  <!-- here goes the rest of the page -->\n</body>',
  },
  {
    language: 'yaml',
    text: 'Yaml',
    code: '---\n# comment\nstring_1: "Bar"\nstring_2: \'bar\'\nstring_3: bar\ninline_keys_ignored: sompath/name/file.jpg\nkeywords_in_yaml:\n  - true\n  - false\n  - TRUE\n  - FALSE\n  - 21\n  - 21.0\n  - !!str 123\n"quoted_key": &foobar\n  bar: foo\n  foo:\n  "foo": bar\n\nreference: *foobar\n\nmultiline_1: |\n  Multiline\n  String\nmultiline_2: >\n  Multiline\n  String\nmultiline_3: "\n  Multiline string\n  "\n\nansible_variables: "foo {{variable}}"\n\narray_nested:\n- a\n- b: 1\n  c: 2\n- b\n- comment',
  },
  {
    language: 'html',
    text: 'Html',
    code: `<html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Custom Html Dom Render</title>
    </head>
    <body>
    <div>Custom Html Dom Render</div>
    <ul>
        <li>Ant Desgin</li>
        <li>Ant Desgin Pro</li>
        <li>Ant Desgin Pro Components</li>
    </ul>

    </body>
    </html>`,
  },
];

export default configs;
