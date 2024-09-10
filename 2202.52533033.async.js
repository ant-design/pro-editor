"use strict";(self.webpackChunk_ant_design_pro_editor=self.webpackChunk_ant_design_pro_editor||[]).push([[2202],{62594:function(e,n,t){t.r(n);var a=[{language:"bash",text:"Bash",code:`#!/bin/bash

###### CONFIG
ACCEPTED_HOSTS="/root/.hag_accepted.conf"
BE_VERBOSE=false

if [ "$UID" -ne 0 ]
then
 echo "Superuser rights required"
 exit 2
fi

genApacheConf(){
 echo -e "# Host \${HOME_DIR}$1/$2 :"
}

echo '"quoted"' | tr -d \\\\/" > text.txt

`},{language:"css",text:"Css",code:`@font-face {
  font-family: Chunkfive; src: url('Chunkfive.otf');
}

body, .usertext {
  color: #F0F0F0; background: #600;
  font-family: Chunkfive, sans;
  --heading-1: 30px/32px Helvetica, sans-serif;
}

@import url(print.css);
@media print {
  a[href^=http]::after {
    content: attr(href)
  }
}`},{language:"java",text:"Java",code:`/**
 * @author John Smith <john.smith@example.com>
*/
package l2f.gameserver.model;

public abstract class L2Char extends L2Object {
  public static final Short ERROR = 0x0001;

  public void moveTo(int x, int y, int z) {
    _ai = null;
    log("Should not be called");
    if (1 > 5) { // wtf!?
      return;
    }
  }
}`},{language:"javascript",text:"Javascript",code:`function $initHighlight(block, cls) {
  try {
    if (cls.search(/\\bno\\-highlight\\b/) != -1)
      return process(block, true, 0x0F) +
             \` class="\${cls}"\`;
  } catch (e) {
    /* handle exception */
  }
  for (var i = 0 / 2; i < classes.length; i++) {
    if (checkCondition(classes[i]) === undefined)
      console.log('undefined');
  }

  return (
    <div>
      <web-component>{block}</web-component>
    </div>
  )
}

export  $initHighlight;`},{language:"json",text:"Json",code:`[
  {
    "title": "apples",
    "count": [12000, 20000],
    "description": {"text": "...", "sensitive": false}
  },
  {
    "title": "oranges",
    "count": [17500, null],
    "description": {"text": "...", "sensitive": false}
  }
]`},{language:"jsx",text:"Jsx",code:`import React from 'react';
import { Button, Tag, Space } from 'antd';
import { ProList } from '@ant-design/pro-components';

const dataSource = [
  {
    name: '\u8BED\u96C0\u7684\u5929\u7A7A',
    image:
      'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
    desc: '\u6211\u662F\u4E00\u6761\u6D4B\u8BD5\u7684\u63CF\u8FF0',
  },
  {
    name: 'Ant Design',
    image:
      'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
    desc: '\u6211\u662F\u4E00\u6761\u6D4B\u8BD5\u7684\u63CF\u8FF0',
  },
  {
    name: '\u8682\u8681\u91D1\u670D\u4F53\u9A8C\u79D1\u6280',
    image:
      'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
    desc: '\u6211\u662F\u4E00\u6761\u6D4B\u8BD5\u7684\u63CF\u8FF0',
  },
  {
    name: 'ProEditor',
    image:
      'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
    desc: '\u6211\u662F\u4E00\u6761\u6D4B\u8BD5\u7684\u63CF\u8FF0',
  },
];

export default () => (
  <ProList
    toolBarRender={() => {
      return [
        <Button key="add" type="primary">
          \u65B0\u5EFA
        </Button>,
      ];
    }}
    onRow={(record) => {
      return {
        onMouseEnter: () => {
          console.log(record);
        },
        onClick: () => {
          console.log(record);
        },
      };
    }}
    rowKey="name"
    headerTitle="\u57FA\u7840\u5217\u8868"
    tooltip="\u57FA\u7840\u5217\u8868\u7684\u914D\u7F6E"
    dataSource={dataSource}
    showActions="hover"
    showExtra="hover"
    metas={{
      title: {
        dataIndex: 'name',
      },
      avatar: {
        dataIndex: 'image',
      },
      description: {
        dataIndex: 'desc',
      },
      subTitle: {
        render: () => {
          return (
            <Space size={0}>
              <Tag color="blue">Ant Design</Tag>
              <Tag color="#5BD8A6">ProEditor</Tag>
            </Space>
          );
        },
      },
      actions: {
        render: (text, row) => [
          <a href={row.html_url} target="_blank" rel="noopener noreferrer" key="link">
            \u94FE\u8DEF
          </a>,
          <a href={row.html_url} target="_blank" rel="noopener noreferrer" key="warning">
            \u62A5\u8B66
          </a>,
          <a href={row.html_url} target="_blank" rel="noopener noreferrer" key="view">
            \u67E5\u770B
          </a>,
        ],
      },
    }}
  />
);`},{language:"markdown",text:"Markdown",code:`# hello world

you can write text [with links](http://example.com) inline or [link references][1].

* one _thing_ has *em*phasis
* two __things__ are **bold**

[1]: http://example.com

---

hello world
===========

<this_is inline="xml"></this_is>

> markdown is so cool

    so are code segments

1. one thing (yeah!)
2. two thing \`i can write code\`, and \`more\` wipee!`},{language:"python",text:"Python",code:`@requires_authorization
def somefunc(param1='', param2=0):
    r'''A docstring'''
    if param1 > param2: # interesting
        print 'Gre\\'ater'
    return (param2 - param1 + 1 + 0b10l) or None

class SomeClass:
    pass

>>> message = '''interpreter
... prompt'''`},{language:"sql",text:"Sql",code:`CREATE TABLE "topic" (
    "id" serial NOT NULL PRIMARY KEY,
    "forum_id" integer NOT NULL,
    "subject" varchar(255) NOT NULL
);
ALTER TABLE "topic"
ADD CONSTRAINT forum_id FOREIGN KEY ("forum_id")
REFERENCES "forum" ("id");

-- Initials
insert into "topic" ("forum_id", "subject")
values (2, 'D''artagnian');`},{language:"tsx",text:"Tsx",code:`import React from 'react';
import { Button, Tag, Space } from 'antd';
import { ProList } from '@ant-design/pro-components';

const dataSource = [
  {
    name: '\u8BED\u96C0\u7684\u5929\u7A7A',
    image:
      'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
    desc: '\u6211\u662F\u4E00\u6761\u6D4B\u8BD5\u7684\u63CF\u8FF0',
  },
  {
    name: 'Ant Design',
    image:
      'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
    desc: '\u6211\u662F\u4E00\u6761\u6D4B\u8BD5\u7684\u63CF\u8FF0',
  },
  {
    name: '\u8682\u8681\u91D1\u670D\u4F53\u9A8C\u79D1\u6280',
    image:
      'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
    desc: '\u6211\u662F\u4E00\u6761\u6D4B\u8BD5\u7684\u63CF\u8FF0',
  },
  {
    name: 'ProEditor',
    image:
      'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
    desc: '\u6211\u662F\u4E00\u6761\u6D4B\u8BD5\u7684\u63CF\u8FF0',
  },
];

export default () => (
  <ProList<any>
    toolBarRender={() => {
      return [
        <Button key="add" type="primary">
          \u65B0\u5EFA
        </Button>,
      ];
    }}
    onRow={(record: any) => {
      return {
        onMouseEnter: () => {
          console.log(record);
        },
        onClick: () => {
          console.log(record);
        },
      };
    }}
    rowKey="name"
    headerTitle="\u57FA\u7840\u5217\u8868"
    tooltip="\u57FA\u7840\u5217\u8868\u7684\u914D\u7F6E"
    dataSource={dataSource}
    showActions="hover"
    showExtra="hover"
    metas={{
      title: {
        dataIndex: 'name',
      },
      avatar: {
        dataIndex: 'image',
      },
      description: {
        dataIndex: 'desc',
      },
      subTitle: {
        render: () => {
          return (
            <Space size={0}>
              <Tag color="blue">Ant Design</Tag>
              <Tag color="#5BD8A6">ProEditor</Tag>
            </Space>
          );
        },
      },
      actions: {
        render: (text, row) => [
          <a href={row.html_url} target="_blank" rel="noopener noreferrer" key="link">
            \u94FE\u8DEF
          </a>,
          <a href={row.html_url} target="_blank" rel="noopener noreferrer" key="warning">
            \u62A5\u8B66
          </a>,
          <a href={row.html_url} target="_blank" rel="noopener noreferrer" key="view">
            \u67E5\u770B
          </a>,
        ],
      },
    }}
  />
);`},{language:"typescript",text:"Typescript",code:`class MyClass {
  public static myValue: string;
  constructor(init: string) {
    this.myValue = init;
  }
}
import fs = require("fs");
module MyModule {
  export interface MyInterface extends Other {
    myProperty: any;
  }
}
declare magicNumber number;
myArray.forEach(() => { }); // fat arrow syntax`},{language:"xml",text:"Xml",code:`<!DOCTYPE html>
<title>Title</title>

<style>body {width: 500px;}</style>

<script type="application/javascript">
  function $init() {return true;}
<\/script>

<body>
  <p checked class="title" id='title'>Title</p>
  <!-- here goes the rest of the page -->
</body>`},{language:"yaml",text:"Yaml",code:`---
# comment
string_1: "Bar"
string_2: 'bar'
string_3: bar
inline_keys_ignored: sompath/name/file.jpg
keywords_in_yaml:
  - true
  - false
  - TRUE
  - FALSE
  - 21
  - 21.0
  - !!str 123
"quoted_key": &foobar
  bar: foo
  foo:
  "foo": bar

reference: *foobar

multiline_1: |
  Multiline
  String
multiline_2: >
  Multiline
  String
multiline_3: "
  Multiline string
  "

ansible_variables: "foo {{variable}}"

array_nested:
- a
- b: 1
  c: 2
- b
- comment`},{language:"html",text:"Html",code:`<html lang="en">
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
    </html>`}];n.default=a},37167:function(e,n){n.Z=`import { Highlight } from '@ant-design/pro-editor';

export default () => (
  <Highlight language="java">
    {\`public class HelloWorld {
    public static void main(String[] args) {
      System.out.println("Hello World!");
    }
  }\`}
  </Highlight>
);
`},48257:function(e,n){n.Z=`import { Highlight } from '@ant-design/pro-editor';

export default () => (
  <Highlight
    language="java"
    theme="dark"
    onCopy={(children) => {
      console.log('\u590D\u5236\u4EE3\u7801', children);
    }}
  >
    {\`public class HelloWorld {
    public static void main(String[] args) {
      System.out.println("Hello World!");
    }
  }\`}
  </Highlight>
);
`},16709:function(e,n){n.Z=`const configs = [
  {
    language: 'bash',
    text: 'Bash',
    code: '#!/bin/bash\\n\\n###### CONFIG\\nACCEPTED_HOSTS="/root/.hag_accepted.conf"\\nBE_VERBOSE=false\\n\\nif [ "$UID" -ne 0 ]\\nthen\\n echo "Superuser rights required"\\n exit 2\\nfi\\n\\ngenApacheConf(){\\n echo -e "# Host \${HOME_DIR}$1/$2 :"\\n}\\n\\necho \\'"quoted"\\' | tr -d \\\\\\\\/" > text.txt\\n\\n',
  },
  {
    language: 'css',
    text: 'Css',
    code: "@font-face {\\n  font-family: Chunkfive; src: url('Chunkfive.otf');\\n}\\n\\nbody, .usertext {\\n  color: #F0F0F0; background: #600;\\n  font-family: Chunkfive, sans;\\n  --heading-1: 30px/32px Helvetica, sans-serif;\\n}\\n\\n@import url(print.css);\\n@media print {\\n  a[href^=http]::after {\\n    content: attr(href)\\n  }\\n}",
  },

  {
    language: 'java',
    text: 'Java',
    code: '/**\\n * @author John Smith <john.smith@example.com>\\n*/\\npackage l2f.gameserver.model;\\n\\npublic abstract class L2Char extends L2Object {\\n  public static final Short ERROR = 0x0001;\\n\\n  public void moveTo(int x, int y, int z) {\\n    _ai = null;\\n    log("Should not be called");\\n    if (1 > 5) { // wtf!?\\n      return;\\n    }\\n  }\\n}',
  },
  {
    language: 'javascript',
    text: 'Javascript',
    code: 'function $initHighlight(block, cls) {\\n  try {\\n    if (cls.search(/\\\\bno\\\\-highlight\\\\b/) != -1)\\n      return process(block, true, 0x0F) +\\n             \` class="\${cls}"\`;\\n  } catch (e) {\\n    /* handle exception */\\n  }\\n  for (var i = 0 / 2; i < classes.length; i++) {\\n    if (checkCondition(classes[i]) === undefined)\\n      console.log(\\'undefined\\');\\n  }\\n\\n  return (\\n    <div>\\n      <web-component>{block}</web-component>\\n    </div>\\n  )\\n}\\n\\nexport  $initHighlight;',
  },
  {
    language: 'json',
    text: 'Json',
    code: '[\\n  {\\n    "title": "apples",\\n    "count": [12000, 20000],\\n    "description": {"text": "...", "sensitive": false}\\n  },\\n  {\\n    "title": "oranges",\\n    "count": [17500, null],\\n    "description": {"text": "...", "sensitive": false}\\n  }\\n]',
  },
  {
    language: 'jsx',
    text: 'Jsx',
    code: 'import React from \\'react\\';\\nimport { Button, Tag, Space } from \\'antd\\';\\nimport { ProList } from \\'@ant-design/pro-components\\';\\n\\nconst dataSource = [\\n  {\\n    name: \\'\u8BED\u96C0\u7684\u5929\u7A7A\\',\\n    image:\\n      \\'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg\\',\\n    desc: \\'\u6211\u662F\u4E00\u6761\u6D4B\u8BD5\u7684\u63CF\u8FF0\\',\\n  },\\n  {\\n    name: \\'Ant Design\\',\\n    image:\\n      \\'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg\\',\\n    desc: \\'\u6211\u662F\u4E00\u6761\u6D4B\u8BD5\u7684\u63CF\u8FF0\\',\\n  },\\n  {\\n    name: \\'\u8682\u8681\u91D1\u670D\u4F53\u9A8C\u79D1\u6280\\',\\n    image:\\n      \\'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg\\',\\n    desc: \\'\u6211\u662F\u4E00\u6761\u6D4B\u8BD5\u7684\u63CF\u8FF0\\',\\n  },\\n  {\\n    name: \\'ProEditor\\',\\n    image:\\n      \\'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg\\',\\n    desc: \\'\u6211\u662F\u4E00\u6761\u6D4B\u8BD5\u7684\u63CF\u8FF0\\',\\n  },\\n];\\n\\nexport default () => (\\n  <ProList\\n    toolBarRender={() => {\\n      return [\\n        <Button key="add" type="primary">\\n          \u65B0\u5EFA\\n        </Button>,\\n      ];\\n    }}\\n    onRow={(record) => {\\n      return {\\n        onMouseEnter: () => {\\n          console.log(record);\\n        },\\n        onClick: () => {\\n          console.log(record);\\n        },\\n      };\\n    }}\\n    rowKey="name"\\n    headerTitle="\u57FA\u7840\u5217\u8868"\\n    tooltip="\u57FA\u7840\u5217\u8868\u7684\u914D\u7F6E"\\n    dataSource={dataSource}\\n    showActions="hover"\\n    showExtra="hover"\\n    metas={{\\n      title: {\\n        dataIndex: \\'name\\',\\n      },\\n      avatar: {\\n        dataIndex: \\'image\\',\\n      },\\n      description: {\\n        dataIndex: \\'desc\\',\\n      },\\n      subTitle: {\\n        render: () => {\\n          return (\\n            <Space size={0}>\\n              <Tag color="blue">Ant Design</Tag>\\n              <Tag color="#5BD8A6">ProEditor</Tag>\\n            </Space>\\n          );\\n        },\\n      },\\n      actions: {\\n        render: (text, row) => [\\n          <a href={row.html_url} target="_blank" rel="noopener noreferrer" key="link">\\n            \u94FE\u8DEF\\n          </a>,\\n          <a href={row.html_url} target="_blank" rel="noopener noreferrer" key="warning">\\n            \u62A5\u8B66\\n          </a>,\\n          <a href={row.html_url} target="_blank" rel="noopener noreferrer" key="view">\\n            \u67E5\u770B\\n          </a>,\\n        ],\\n      },\\n    }}\\n  />\\n);',
  },
  {
    language: 'markdown',
    text: 'Markdown',
    code: '# hello world\\n\\nyou can write text [with links](http://example.com) inline or [link references][1].\\n\\n* one _thing_ has *em*phasis\\n* two __things__ are **bold**\\n\\n[1]: http://example.com\\n\\n---\\n\\nhello world\\n===========\\n\\n<this_is inline="xml"></this_is>\\n\\n> markdown is so cool\\n\\n    so are code segments\\n\\n1. one thing (yeah!)\\n2. two thing \`i can write code\`, and \`more\` wipee!',
  },
  {
    language: 'python',
    text: 'Python',
    code: "@requires_authorization\\ndef somefunc(param1='', param2=0):\\n    r'''A docstring'''\\n    if param1 > param2: # interesting\\n        print 'Gre\\\\'ater'\\n    return (param2 - param1 + 1 + 0b10l) or None\\n\\nclass SomeClass:\\n    pass\\n\\n>>> message = '''interpreter\\n... prompt'''",
  },
  {
    language: 'sql',
    text: 'Sql',
    code: 'CREATE TABLE "topic" (\\n    "id" serial NOT NULL PRIMARY KEY,\\n    "forum_id" integer NOT NULL,\\n    "subject" varchar(255) NOT NULL\\n);\\nALTER TABLE "topic"\\nADD CONSTRAINT forum_id FOREIGN KEY ("forum_id")\\nREFERENCES "forum" ("id");\\n\\n-- Initials\\ninsert into "topic" ("forum_id", "subject")\\nvalues (2, \\'D\\'\\'artagnian\\');',
  },
  {
    language: 'tsx',
    text: 'Tsx',
    code: 'import React from \\'react\\';\\nimport { Button, Tag, Space } from \\'antd\\';\\nimport { ProList } from \\'@ant-design/pro-components\\';\\n\\nconst dataSource = [\\n  {\\n    name: \\'\u8BED\u96C0\u7684\u5929\u7A7A\\',\\n    image:\\n      \\'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg\\',\\n    desc: \\'\u6211\u662F\u4E00\u6761\u6D4B\u8BD5\u7684\u63CF\u8FF0\\',\\n  },\\n  {\\n    name: \\'Ant Design\\',\\n    image:\\n      \\'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg\\',\\n    desc: \\'\u6211\u662F\u4E00\u6761\u6D4B\u8BD5\u7684\u63CF\u8FF0\\',\\n  },\\n  {\\n    name: \\'\u8682\u8681\u91D1\u670D\u4F53\u9A8C\u79D1\u6280\\',\\n    image:\\n      \\'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg\\',\\n    desc: \\'\u6211\u662F\u4E00\u6761\u6D4B\u8BD5\u7684\u63CF\u8FF0\\',\\n  },\\n  {\\n    name: \\'ProEditor\\',\\n    image:\\n      \\'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg\\',\\n    desc: \\'\u6211\u662F\u4E00\u6761\u6D4B\u8BD5\u7684\u63CF\u8FF0\\',\\n  },\\n];\\n\\nexport default () => (\\n  <ProList<any>\\n    toolBarRender={() => {\\n      return [\\n        <Button key="add" type="primary">\\n          \u65B0\u5EFA\\n        </Button>,\\n      ];\\n    }}\\n    onRow={(record: any) => {\\n      return {\\n        onMouseEnter: () => {\\n          console.log(record);\\n        },\\n        onClick: () => {\\n          console.log(record);\\n        },\\n      };\\n    }}\\n    rowKey="name"\\n    headerTitle="\u57FA\u7840\u5217\u8868"\\n    tooltip="\u57FA\u7840\u5217\u8868\u7684\u914D\u7F6E"\\n    dataSource={dataSource}\\n    showActions="hover"\\n    showExtra="hover"\\n    metas={{\\n      title: {\\n        dataIndex: \\'name\\',\\n      },\\n      avatar: {\\n        dataIndex: \\'image\\',\\n      },\\n      description: {\\n        dataIndex: \\'desc\\',\\n      },\\n      subTitle: {\\n        render: () => {\\n          return (\\n            <Space size={0}>\\n              <Tag color="blue">Ant Design</Tag>\\n              <Tag color="#5BD8A6">ProEditor</Tag>\\n            </Space>\\n          );\\n        },\\n      },\\n      actions: {\\n        render: (text, row) => [\\n          <a href={row.html_url} target="_blank" rel="noopener noreferrer" key="link">\\n            \u94FE\u8DEF\\n          </a>,\\n          <a href={row.html_url} target="_blank" rel="noopener noreferrer" key="warning">\\n            \u62A5\u8B66\\n          </a>,\\n          <a href={row.html_url} target="_blank" rel="noopener noreferrer" key="view">\\n            \u67E5\u770B\\n          </a>,\\n        ],\\n      },\\n    }}\\n  />\\n);',
  },
  {
    language: 'typescript',
    text: 'Typescript',
    code: 'class MyClass {\\n  public static myValue: string;\\n  constructor(init: string) {\\n    this.myValue = init;\\n  }\\n}\\nimport fs = require("fs");\\nmodule MyModule {\\n  export interface MyInterface extends Other {\\n    myProperty: any;\\n  }\\n}\\ndeclare magicNumber number;\\nmyArray.forEach(() => { }); // fat arrow syntax',
  },
  {
    language: 'xml',
    text: 'Xml',
    code: '<!DOCTYPE html>\\n<title>Title</title>\\n\\n<style>body {width: 500px;}</style>\\n\\n<script type="application/javascript">\\n  function $init() {return true;}\\n<\/script>\\n\\n<body>\\n  <p checked class="title" id=\\'title\\'>Title</p>\\n  <!-- here goes the rest of the page -->\\n</body>',
  },
  {
    language: 'yaml',
    text: 'Yaml',
    code: '---\\n# comment\\nstring_1: "Bar"\\nstring_2: \\'bar\\'\\nstring_3: bar\\ninline_keys_ignored: sompath/name/file.jpg\\nkeywords_in_yaml:\\n  - true\\n  - false\\n  - TRUE\\n  - FALSE\\n  - 21\\n  - 21.0\\n  - !!str 123\\n"quoted_key": &foobar\\n  bar: foo\\n  foo:\\n  "foo": bar\\n\\nreference: *foobar\\n\\nmultiline_1: |\\n  Multiline\\n  String\\nmultiline_2: >\\n  Multiline\\n  String\\nmultiline_3: "\\n  Multiline string\\n  "\\n\\nansible_variables: "foo {{variable}}"\\n\\narray_nested:\\n- a\\n- b: 1\\n  c: 2\\n- b\\n- comment',
  },
  {
    language: 'html',
    text: 'Html',
    code: \`<html lang="en">
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
    </html>\`,
  },
];

export default configs;
`},77237:function(e,n){n.Z=`import { Highlight } from '@ant-design/pro-editor';

export default () => (
  <Highlight
    lineNumber={true}
    onCopy={(children) => {
      console.log('\u590D\u5236\u4EE3\u7801', children);
    }}
    language="java"
  >
    {\`public class HelloWorld {
    public static void main(String[] args) {
      System.out.println("Hello World!");
    }
  }\`}
  </Highlight>
);
`},19093:function(e,n){n.Z=`import { Highlight } from '@ant-design/pro-editor';
import { Select, Space } from 'antd';
import { useState } from 'react';
import configs from './config';

const DEFAULT_LANGUAGE = 'typescript';
const DEFAULT_THEME = 'light';
const DEFAULT_LINENUMBER = 'false';
const DEFAULT_TYPE = 'block';
const { Option } = Select;

export default () => {
  const [theme, setTheme] = useState<'light' | 'dark'>(DEFAULT_THEME);
  const [language, setLanguage] = useState(DEFAULT_LANGUAGE);
  const [type, setType] = useState(DEFAULT_TYPE);
  const [lineNumberStatus, setLineNumberStatus] = useState(DEFAULT_LINENUMBER);
  const code = configs.find((config) => config.language === language).code || '';

  return (
    <div>
      <Space>
        \u8BED\u8A00\u9009\u62E9:
        <Select
          defaultValue={DEFAULT_LANGUAGE}
          style={{ width: 120 }}
          onChange={(value) => setLanguage(value)}
        >
          {configs.map((config) => {
            return (
              <Option key={config.language} value={config.language}>
                {config.text}
              </Option>
            );
          })}
        </Select>
        \u4E3B\u9898\u9009\u62E9:
        <Select<'light' | 'dark'>
          defaultValue={DEFAULT_THEME}
          style={{ width: 120 }}
          onChange={(value) => setTheme(value)}
        >
          <Option value="light">\u4EAE\u8272\u4E3B\u9898</Option>
          <Option value="dark">\u6697\u8272\u4E3B\u9898</Option>
        </Select>
        \u5C55\u793A\u884C\u53F7:
        <Select
          defaultValue={DEFAULT_LINENUMBER}
          style={{ width: 120 }}
          onChange={(value) => setLineNumberStatus(value)}
        >
          <Option value="false">\u4E0D\u5C55\u793A</Option>
          <Option value="true">\u5C55\u793A</Option>
        </Select>
        \u5C55\u793A\u7C7B\u578B:
        <Select
          defaultValue={DEFAULT_TYPE}
          style={{ width: 120 }}
          onChange={(value) => setType(value)}
        >
          <Option value="block">block</Option>
          <Option value="pure">pure</Option>
        </Select>
      </Space>
      <div style={{ height: 400, width: '100%', overflowY: 'scroll', marginBlockStart: '16px' }}>
        <Highlight
          language={language as 'json'}
          theme={theme}
          lineNumber={lineNumberStatus !== DEFAULT_LINENUMBER}
          type={type as 'block' | 'pure'}
        >
          {code}
        </Highlight>
      </div>
    </div>
  );
};
`}}]);
