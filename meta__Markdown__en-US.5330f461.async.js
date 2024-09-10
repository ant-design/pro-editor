"use strict";(self.webpackChunk_ant_design_pro_editor=self.webpackChunk_ant_design_pro_editor||[]).push([[7826],{17500:function(i,t,n){var u;n.r(t),n.d(t,{demos:function(){return M}});var h=n(90228),o=n.n(h),f=n(87999),p=n.n(f),a=n(75271),c=n(10549),g=n(30549),k=n(5018),v=n(94283),M={"markdown-demo-demos":{component:a.memo(a.lazy(function(){return n.e(7439).then(n.bind(n,92003))})),asset:{type:"BLOCK",id:"markdown-demo-demos",refAtomIds:["Markdown"],dependencies:{"index.tsx":{type:"FILE",value:n(15079).Z},"@ant-design/pro-editor":{type:"NPM",value:"1.2.1"},"./data.ts":{type:"FILE",value:n(70418).Z}},entry:"index.tsx",description:"\u53EF\u4EE5\u901A\u8FC7\u81EA\u5DF1\u4F20\u5165 components \u7B49 React-Markdown \u7684 Props \u6765\u8FDB\u884C\u81EA\u5B9A\u4E49\uFF0C\u591A\u4F59\u7684\u4F1A\u900F\u4F20\u8FC7\u53BB\u3002",title:"Default Rendering"},context:{"@ant-design/pro-editor":c,"/home/runner/work/pro-editor/pro-editor/src/Markdown/demos/data.ts":g},renderOpts:{compile:function(){var s=p()(o()().mark(function m(){var r,d=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6495).then(n.bind(n,86495));case 2:return e.abrupt("return",(r=e.sent).default.apply(r,d));case 3:case"end":return e.stop()}},m)}));function l(){return s.apply(this,arguments)}return l}()}},"markdown-demo-code":{component:a.memo(a.lazy(function(){return n.e(7439).then(n.bind(n,77264))})),asset:{type:"BLOCK",id:"markdown-demo-code",refAtomIds:["Markdown"],dependencies:{"index.tsx":{type:"FILE",value:n(33605).Z},"@ant-design/pro-editor":{type:"NPM",value:"1.2.1"},"./data.ts":{type:"FILE",value:n(70418).Z}},entry:"index.tsx",description:"Markdown \u5185\u7F6E Highlight \u4EE3\u7801\u6E32\u67D3",title:"Code"},context:{"@ant-design/pro-editor":c,"/home/runner/work/pro-editor/pro-editor/src/Markdown/demos/data.ts":g},renderOpts:{compile:function(){var s=p()(o()().mark(function m(){var r,d=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6495).then(n.bind(n,86495));case 2:return e.abrupt("return",(r=e.sent).default.apply(r,d));case 3:case"end":return e.stop()}},m)}));function l(){return s.apply(this,arguments)}return l}()}},"markdown-demo-htmlplugin":{component:a.memo(a.lazy(function(){return n.e(7439).then(n.bind(n,73052))})),asset:{type:"BLOCK",id:"markdown-demo-htmlplugin",refAtomIds:["Markdown"],dependencies:{"index.tsx":{type:"FILE",value:n(58883).Z},"@ant-design/pro-editor":{type:"NPM",value:"1.2.1"},"rehype-raw":{type:"NPM",value:"6.1.1"},"./data.ts":{type:"FILE",value:n(70418).Z}},entry:"index.tsx",title:"Custom Plugins Input",description:"We have built-in some plugins for Markdown conversion, but if you have other requirements, you can customize the input of rehypePlugins and remarkPlugins to enhance the current rendering capabilities. The example is a sample input of rehypeRaw for rendering HTML capabilities. It is worth noting that there may be parsing conflicts between different plugins, which may need to be resolved by the user."},context:{"@ant-design/pro-editor":c,"rehype-raw":k,"/home/runner/work/pro-editor/pro-editor/src/Markdown/demos/data.ts":g},renderOpts:{compile:function(){var s=p()(o()().mark(function m(){var r,d=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6495).then(n.bind(n,86495));case 2:return e.abrupt("return",(r=e.sent).default.apply(r,d));case 3:case"end":return e.stop()}},m)}));function l(){return s.apply(this,arguments)}return l}()}},"markdown-demo-rendercomponets":{component:a.memo(a.lazy(function(){return n.e(7439).then(n.bind(n,1563))})),asset:{type:"BLOCK",id:"markdown-demo-rendercomponets",refAtomIds:["Markdown"],dependencies:{"index.tsx":{type:"FILE",value:n(88403).Z},"@ant-design/pro-editor":{type:"NPM",value:"1.2.1"},antd:{type:"NPM",value:"5.12.8"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx",title:"Custom Partial Components",description:"You can customize the rendering of some React-Markdown components through the Components property. For example, here is a case where the current A tag is modified"},context:{"@ant-design/pro-editor":c,antd:v,react:u||(u=n.t(a,2))},renderOpts:{compile:function(){var s=p()(o()().mark(function m(){var r,d=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(6495).then(n.bind(n,86495));case 2:return e.abrupt("return",(r=e.sent).default.apply(r,d));case 3:case"end":return e.stop()}},m)}));function l(){return s.apply(this,arguments)}return l}()}}}},30549:function(i,t,n){n.r(t),n.d(t,{codeContent:function(){return o},content:function(){return u},htmlContent:function(){return h}});var u=`# This is an H1
## This is an H2
### This is an H3
#### This is an H4
##### This is an H5

The point of reference-style links is not that they\u2019re easier to write. The point is that with reference-style links, your document source is vastly more readable. Compare the above examples: using reference-style links, the paragraph itself is only 81 characters long; with inline-style links, it\u2019s 176 characters; and as raw \`HTML\`, it\u2019s 234 characters. In the raw \`HTML\`, there\u2019s more markup than there is text.

---

> This is a blockquote with two paragraphs. Lorem ipsum dolor sit amet,
> consectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus.
> Vestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus.
>
> Donec sit amet nisl. Aliquam semper ipsum sit amet velit. Suspendisse
> id sem consectetuer libero luctus adipiscing.

---

an example | *an example* | **an example**

---

1. Bird
1. McHale
1. Parish
    1. Bird
    1. McHale
        1. Parish

---

- Red
- Green
- Blue
    - Red
    - Green
        - Blue

---

This is [an example](http://example.com/ "Title") inline link.

<http://example.com/>


| title | title | title |
| --- | --- | --- |
| content | content | content |


\`\`\`bash
$ pnpm install
\`\`\`

\`\`\`html
<html lang="en">
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
</html>
\`\`\`


\`\`\`javascript
import { renderHook } from '@testing-library/react-hooks';
import { act } from 'react-dom/test-utils';
import { useDropNodeOnCanvas } from './useDropNodeOnCanvas';
\`\`\`

---

\u4EE5\u4E0B\u662F\u4E00\u6BB5Markdown\u683C\u5F0F\u7684LaTeX\u6570\u5B66\u516C\u5F0F\uFF1A

\u6211\u662F\u4E00\u4E2A\u884C\u5185\u516C\u5F0F\uFF1A$E=mc^2$

\u6211\u662F\u4E00\u4E2A\u72EC\u7ACB\u516C\u5F0F\uFF1A
$$
\\sum_{i=1}^{n} x_i = x_1 + x_2 + \\ldots + x_n
$$

\u6211\u662F\u4E00\u4E2A\u5E26\u6709\u5206\u5F0F\u7684\u516C\u5F0F\uFF1A
$$
\\frac{{n!}}{{k!(n-k)!}} = \\binom{n}{k}
$$

\u6211\u662F\u4E00\u4E2A\u5E26\u6709\u4E0A\u4E0B\u6807\u7684\u516C\u5F0F\uFF1A
$$
x^{2} + y^{2} = r^{2}
$$

\u6211\u662F\u4E00\u4E2A\u5E26\u6709\u79EF\u5206\u7B26\u53F7\u7684\u516C\u5F0F\uFF1A
$$
\\int_{a}^{b} f(x) \\, dx
$$
`,h=`
<html lang="en">
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
</html>
`,o=`
\`\`\`bash
$ pnpm install
\`\`\`


\`\`\`javascript
import { Collapse, Divider, Typography } from 'antd';
import { CSSProperties, memo } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeKatex from 'rehype-katex';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';

import { PluggableList } from 'react-markdown/lib/react-markdown';
import { withProvider } from '..';
import { Code } from './CodeBlock';
import { useStyles } from './style';

export interface MarkdownProps {
  children: string;
  /**
   * @description ClassName
   */
  className?: string;
  onDoubleClick?: () => void;
  style?: CSSProperties;
  rehypePlugins?: PluggableList;
  remarkPlugins?: PluggableList;
}

const MemoHr = memo((props) => (
  <Divider style={{ marginBottom: '1em', marginTop: 0 }} {...props} />
));
const MemoDetails = memo((props) => <Collapse style={{ marginBottom: '1em' }} {...props} />);
const MemoImage = memo((props) => <img {...props} />);
const MemoAlink = memo((props) => <Typography.Link {...props} />);

const Markdown = memo<MarkdownProps>(
  ({
    children,
    className,
    style,
    onDoubleClick,
    rehypePlugins: outRehypePlugins,
    remarkPlugins: outRemarkPlugins,
    ...rest
  }) => {
    const { styles } = useStyles();
    const components: any = {
      details: MemoDetails,
      hr: MemoHr,
      a: MemoAlink,
      img: MemoImage,
      pre: Code,
    };

    const rehypePlugins = [rehypeKatex, ...(outRehypePlugins || [])];
    const remarkPlugins = [remarkGfm, remarkMath, ...(outRemarkPlugins || [])];

    return (
      <Typography className={className} onDoubleClick={onDoubleClick} style={style}>
        <ReactMarkdown
          className={styles.markdown}
          components={components}
          rehypePlugins={rehypePlugins as PluggableList}
          remarkPlugins={remarkPlugins as PluggableList}
          {...rest}
        >
          {children}
        </ReactMarkdown>
      </Typography>
    );
  },
);

export default withProvider(Markdown) as React.FC<MarkdownProps>;

\`\`\`
`},46090:function(i,t,n){n.r(t),n.d(t,{texts:function(){return u}});const u=[{value:"Markdown is a React component used to render Markdown text. It supports various Markdown syntax such as headings, lists, links, images, code blocks, and more. It is commonly used in documentations, blogs, and other text-intensive applications.",paraId:0,tocIndex:0},{value:"Property",paraId:1,tocIndex:6},{value:"Type",paraId:1,tocIndex:6},{value:"Description",paraId:1,tocIndex:6},{value:"children",paraId:1,tocIndex:6},{value:"string",paraId:1,tocIndex:6},{value:"The Markdown content to render.",paraId:1,tocIndex:6},{value:"className",paraId:1,tocIndex:6},{value:"string",paraId:1,tocIndex:6},{value:"The class name of the Markdown component.",paraId:1,tocIndex:6},{value:"onDoubleClick",paraId:1,tocIndex:6},{value:"() => void",paraId:1,tocIndex:6},{value:"Double-click event handler.",paraId:1,tocIndex:6},{value:"style",paraId:1,tocIndex:6},{value:"CSSProperties",paraId:1,tocIndex:6},{value:"The style of the Markdown component.",paraId:1,tocIndex:6},{value:"rehypePlugins",paraId:1,tocIndex:6},{value:"Markdown rehypePlugins Types",paraId:1,tocIndex:6},{value:"Custom rehype plugins.",paraId:1,tocIndex:6},{value:"remarkPlugins",paraId:1,tocIndex:6},{value:"remarkPlugins rehypePlugins Types",paraId:1,tocIndex:6},{value:"Custom remark plugins.",paraId:1,tocIndex:6}]},33605:function(i,t){t.Z=`import { Markdown } from '@ant-design/pro-editor';
import { codeContent } from './data';

export default () => {
  return <Markdown>{codeContent}</Markdown>;
};
`},70418:function(i,t){t.Z=`const content = \`# This is an H1
## This is an H2
### This is an H3
#### This is an H4
##### This is an H5

The point of reference-style links is not that they\u2019re easier to write. The point is that with reference-style links, your document source is vastly more readable. Compare the above examples: using reference-style links, the paragraph itself is only 81 characters long; with inline-style links, it\u2019s 176 characters; and as raw \\\`HTML\\\`, it\u2019s 234 characters. In the raw \\\`HTML\\\`, there\u2019s more markup than there is text.

---

> This is a blockquote with two paragraphs. Lorem ipsum dolor sit amet,
> consectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus.
> Vestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus.
>
> Donec sit amet nisl. Aliquam semper ipsum sit amet velit. Suspendisse
> id sem consectetuer libero luctus adipiscing.

---

an example | *an example* | **an example**

---

1. Bird
1. McHale
1. Parish
    1. Bird
    1. McHale
        1. Parish

---

- Red
- Green
- Blue
    - Red
    - Green
        - Blue

---

This is [an example](http://example.com/ "Title") inline link.

<http://example.com/>


| title | title | title |
| --- | --- | --- |
| content | content | content |


\\\`\\\`\\\`bash
$ pnpm install
\\\`\\\`\\\`

\\\`\\\`\\\`html
<html lang="en">
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
</html>
\\\`\\\`\\\`


\\\`\\\`\\\`javascript
import { renderHook } from '@testing-library/react-hooks';
import { act } from 'react-dom/test-utils';
import { useDropNodeOnCanvas } from './useDropNodeOnCanvas';
\\\`\\\`\\\`

---

\u4EE5\u4E0B\u662F\u4E00\u6BB5Markdown\u683C\u5F0F\u7684LaTeX\u6570\u5B66\u516C\u5F0F\uFF1A

\u6211\u662F\u4E00\u4E2A\u884C\u5185\u516C\u5F0F\uFF1A$E=mc^2$

\u6211\u662F\u4E00\u4E2A\u72EC\u7ACB\u516C\u5F0F\uFF1A
$$
\\\\sum_{i=1}^{n} x_i = x_1 + x_2 + \\\\ldots + x_n
$$

\u6211\u662F\u4E00\u4E2A\u5E26\u6709\u5206\u5F0F\u7684\u516C\u5F0F\uFF1A
$$
\\\\frac{{n!}}{{k!(n-k)!}} = \\\\binom{n}{k}
$$

\u6211\u662F\u4E00\u4E2A\u5E26\u6709\u4E0A\u4E0B\u6807\u7684\u516C\u5F0F\uFF1A
$$
x^{2} + y^{2} = r^{2}
$$

\u6211\u662F\u4E00\u4E2A\u5E26\u6709\u79EF\u5206\u7B26\u53F7\u7684\u516C\u5F0F\uFF1A
$$
\\\\int_{a}^{b} f(x) \\\\, dx
$$
\`;

const htmlContent = \`
<html lang="en">
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
</html>
\`;

const codeContent = \`
\\\`\\\`\\\`bash
$ pnpm install
\\\`\\\`\\\`


\\\`\\\`\\\`javascript
import { Collapse, Divider, Typography } from 'antd';
import { CSSProperties, memo } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeKatex from 'rehype-katex';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';

import { PluggableList } from 'react-markdown/lib/react-markdown';
import { withProvider } from '..';
import { Code } from './CodeBlock';
import { useStyles } from './style';

export interface MarkdownProps {
  children: string;
  /**
   * @description ClassName
   */
  className?: string;
  onDoubleClick?: () => void;
  style?: CSSProperties;
  rehypePlugins?: PluggableList;
  remarkPlugins?: PluggableList;
}

const MemoHr = memo((props) => (
  <Divider style={{ marginBottom: '1em', marginTop: 0 }} {...props} />
));
const MemoDetails = memo((props) => <Collapse style={{ marginBottom: '1em' }} {...props} />);
const MemoImage = memo((props) => <img {...props} />);
const MemoAlink = memo((props) => <Typography.Link {...props} />);

const Markdown = memo<MarkdownProps>(
  ({
    children,
    className,
    style,
    onDoubleClick,
    rehypePlugins: outRehypePlugins,
    remarkPlugins: outRemarkPlugins,
    ...rest
  }) => {
    const { styles } = useStyles();
    const components: any = {
      details: MemoDetails,
      hr: MemoHr,
      a: MemoAlink,
      img: MemoImage,
      pre: Code,
    };

    const rehypePlugins = [rehypeKatex, ...(outRehypePlugins || [])];
    const remarkPlugins = [remarkGfm, remarkMath, ...(outRemarkPlugins || [])];

    return (
      <Typography className={className} onDoubleClick={onDoubleClick} style={style}>
        <ReactMarkdown
          className={styles.markdown}
          components={components}
          rehypePlugins={rehypePlugins as PluggableList}
          remarkPlugins={remarkPlugins as PluggableList}
          {...rest}
        >
          {children}
        </ReactMarkdown>
      </Typography>
    );
  },
);

export default withProvider(Markdown) as React.FC<MarkdownProps>;

\\\`\\\`\\\`
\`;

export { codeContent, content, htmlContent };
`},58883:function(i,t){t.Z=`import { Markdown } from '@ant-design/pro-editor';
import rehypeRaw from 'rehype-raw';
import { htmlContent } from './data';

export default () => {
  return <Markdown rehypePlugins={[rehypeRaw]}>{htmlContent}</Markdown>;
};
`},15079:function(i,t){t.Z=`import { Markdown } from '@ant-design/pro-editor';

import { content } from './data';

export default () => {
  return <Markdown>{content}</Markdown>;
};
`},88403:function(i,t){t.Z=`import { Markdown } from '@ant-design/pro-editor';
import { Button } from 'antd';
import { memo } from 'react';

export default () => {
  return (
    <Markdown
      components={{
        a: memo((props) => (
          <Button
            onClick={() => {
              console.log(props.href);
            }}
          >
            \u8BE5\u94FE\u63A5\u4E0D\u5141\u8BB8\u70B9\u51FB\u8DF3\u8F6C\uFF01{props.href}
          </Button>
        )),
      }}
    >
      {\`
This is [an example](http://example.com/ "Title") inline link.

<http://example.com/>
\`}
    </Markdown>
  );
};
`}}]);
