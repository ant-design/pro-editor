import * as React from 'react';
function TypeArray(props) {
  return /*#__PURE__*/ React.createElement(
    'svg',
    Object.assign(
      {
        width: '1em',
        height: '1em',
        viewBox: '0 0 1024 1024',
        xmlns: 'http://www.w3.org/2000/svg',
        xmlnsXlink: 'http://www.w3.org/1999/xlink',
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
      },
    ),
    /*#__PURE__*/ React.createElement(
      'g',
      {
        id: 'TypeArray-array',
        stroke: 'none',
        strokeWidth: 1,
        fill: 'none',
        fillRule: 'evenodd',
      },
      /*#__PURE__*/ React.createElement('path', {
        d: 'M447.6,326 L389.4,326 L389.4,698 L447.6,698 L447.6,770 L309,770 L309,254 L447.6,254 L447.6,326 Z M576,326 L634.2,326 L634.2,698 L576,698 L576,770 L714.6,770 L714.6,254 L576,254 L576,326 Z',
        id: 'TypeArray-\u5F62\u72B6',
        fill: 'currentColor',
        fillRule: 'nonzero',
      }),
    ),
  );
}
export default TypeArray;
