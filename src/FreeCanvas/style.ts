import { createStyles, css, styled } from '../theme';

export const Control = styled.div`
  position: absolute;
  bottom: 10px;
  right: 10px;
  z-index: 100;
`;

export const useStyle = createStyles(() => ({
  canvas: css`
    height: 100%;
  `,

  flow: css`
    .react-flow {
      &__attribution {
        display: none;
      }

      &__pane,
      &__node {
        cursor: auto;
      }
    }
  `,
}));
