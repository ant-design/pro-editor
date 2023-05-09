import * as React from 'react';
function FillText(props) {
  return /*#__PURE__*/ React.createElement(
    'svg',
    Object.assign(
      {
        xmlns: 'http://www.w3.org/2000/svg',
        fill: 'currentColor',
        viewBox: '0 0 1024 1024',
      },
      props,
      {
        style: Object.assign(
          {
            verticalAlign: '-0.125em',
          },
          props.style,
        ),
        className: ['pro-editor-icon', props.className].filter(Boolean).join(' '),
        width: '1em',
        height: '1em',
      },
    ),
    /*#__PURE__*/ React.createElement('path', {
      d: 'M853.3 1024H170.7A171.2 171.2 0 0 1 0 853.3V170.7C0 76.8 76.8 0 170.7 0h682.6C947.2 0 1024 76.8 1024 170.7v682.6c0 93.9-76.8 170.7-170.7 170.7zM170.7 85.3c-47 0-85.4 38.4-85.4 85.4v682.6c0 47 38.4 85.4 85.4 85.4h682.6c47 0 85.4-38.4 85.4-85.4V170.7c0-47-38.4-85.4-85.4-85.4H170.7z',
    }),
    /*#__PURE__*/ React.createElement('path', {
      d: 'M725.3 341.3H298.7c-25.6 0-42.7-17-42.7-42.6s17-42.7 42.7-42.7h426.6c25.6 0 42.7 17 42.7 42.7s-17 42.6-42.7 42.6z',
    }),
    /*#__PURE__*/ React.createElement('path', {
      d: 'M298.7 384c-25.6 0-42.7-17-42.7-42.7v-42.6c0-25.6 17-42.7 42.7-42.7s42.6 17 42.6 42.7v42.6c0 25.6-17 42.7-42.6 42.7zM725.3 384c-25.6 0-42.6-17-42.6-42.7v-42.6c0-25.6 17-42.7 42.6-42.7s42.7 17 42.7 42.7v42.6c0 25.6-17 42.7-42.7 42.7zM512 768c-25.6 0-42.7-17-42.7-42.7V298.7c0-25.6 17.1-42.7 42.7-42.7s42.7 17 42.7 42.7v426.6c0 25.6-17.1 42.7-42.7 42.7z',
    }),
    /*#__PURE__*/ React.createElement('path', {
      d: 'M554.7 768h-85.4c-25.6 0-42.6-17-42.6-42.7s17-42.6 42.6-42.6h85.4c25.6 0 42.6 17 42.6 42.6s-17 42.7-42.6 42.7z',
    }),
  );
}
export default FillText;
