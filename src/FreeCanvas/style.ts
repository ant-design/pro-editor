import { createStyles } from '../theme';

export const useStyle = createStyles(({ css }) => ({
  canvas: css`
    height: 100%;
  `,
  control: css`
    position: absolute;
    bottom: 10px;
    right: 10px;
    z-index: 100;
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
