import { GetCustomStylish } from 'antd-style';
import { transparentize } from 'polished';

export interface StudioStylish {
  defaultButton: string;

  textInfo: string;
  textDefault: string;

  containerBgHover: string;
  containerBgL2: string;

  controlContainer: string;
  controlContainerFocused: string;
  backgroundBlur: string;
}

/**
 * 在 pro-editor 中封装好的一些标准样式
 */
export const getStudioStylish: GetCustomStylish<StudioStylish> = ({
  token,
  css,
}) => {
  const containerBgHover = css`
    cursor: pointer;
    transition: 150ms background-color ease-in-out;
    &:hover {
      background: ${token.colorFillQuaternary};
    }
  `;
  const controlContainerHover = css`
    color: ${token.colorText};
    background-color: ${token.colorFillTertiary};
    border-color: transparent;
  `;
  const controlContainerFocused = css`
    color: ${token.colorText} !important;
    background-color: ${token.colorFillQuaternary} !important;
    border-color: ${token.colorPrimary} !important;
    box-shadow: none;
  `;

  const defaultButtonBase = css`
    color: ${token.colorTextSecondary};
    background: ${token.colorFillQuaternary};
    border-color: transparent;
  `;

  return {
    defaultButton: css`
      ${defaultButtonBase};

      &:hover {
        color: ${token.colorText} !important;
        background: ${token.colorFillSecondary} !important;
        border-color: transparent !important;
      }
      &:focus {
        ${defaultButtonBase};
        border-color: ${token.colorPrimary} !important;
      }
    `,

    textInfo: css`
      color: ${token.colorTextSecondary};
      &:hover {
        color: ${token.colorText};
      }
    `,
    textDefault: css`
      color: ${token.colorTextSecondary};
    `,

    containerBgHover: css`
      cursor: pointer;
      transition: 150ms background-color ease-in-out;

      &:hover {
        background: ${token.colorFillQuaternary};
      }
    `,
    containerBgL2: css`
      ${containerBgHover};
      border-radius: 4px;
      background: ${token.colorFillQuaternary};

      &:hover {
        background: ${token.colorFillTertiary};
      }
    `,
    controlContainerFocused,
    controlContainer: css`
      &:hover {
        ${controlContainerHover}
      }
      &:focus {
        ${controlContainerFocused}
      }
    `,

    backgroundBlur: css`
      background: ${transparentize(0.4)(token.colorBgElevated)};
      backdrop-filter: blur(10px);
    `,
  };
};
