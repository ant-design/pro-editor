import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ css, cx }) => {
  const perf = css`
    will-change: transform, opacity, background-image, background-size, background-position,
      background-blend-mode, filter;
  `;

  const shadow = css`
    transition: box-shadow 0.4s ease, opacity 0.33s ease-out;

    box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset,
      rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  `;

  const view = css`
    width: 100%;
    grid-area: 1/1;

    aspect-ratio: var(--card-aspect);
    border-radius: var(--card-radius);
    image-rendering: optimizeQuality;
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
    pointer-events: none;
    overflow: hidden;
  `;

  return {
    container: css`
      --card-radius: 4.55% / 3.5%;

      --card-back: hsl(220, 52%, 6%);

      --sunpillar-1: hsl(2, 100%, 73%);
      --sunpillar-2: hsl(53, 100%, 69%);
      --sunpillar-3: hsl(93, 100%, 69%);
      --sunpillar-4: hsl(176, 100%, 76%);
      --sunpillar-5: hsl(228, 100%, 74%);
      --sunpillar-6: hsl(283, 100%, 73%);

      --sunpillar-clr-1: var(--sunpillar-1);
      --sunpillar-clr-2: var(--sunpillar-2);
      --sunpillar-clr-3: var(--sunpillar-3);
      --sunpillar-clr-4: var(--sunpillar-4);
      --sunpillar-clr-5: var(--sunpillar-5);
      --sunpillar-clr-6: var(--sunpillar-6);

      --space: 5%;
      --angle: 133deg;
      --imgsize: cover;
    `,

    active: cx(shadow),
    shine: cx(
      perf,
      css`
        ${view}
      `,
    ),
    glare: cx(
      perf,
      css`
        /* make sure the glare doesn't clip */
        transform: translateZ(1.41px);
        overflow: hidden;

        ${view};

        background-image: radial-gradient(
          farthest-corner circle at var(--pointer-x) var(--pointer-y),
          hsl(0, 0%, 75%) 5%,
          hsl(200, 5%, 35%) 60%,
          hsl(320, 40%, 10%) 150%
        );

        //background-size: 120% 150%;
        background-position: center center;

        //mix-blend-mode: hard-light;

        opacity: calc(var(--card-opacity) * 0.75);

        mix-blend-mode: multiply;
        filter: brightness(1.5) contrast(1.4) saturate(1);
        background-size: 170% 170%;
      `,
    ),

    front: css`
      & * {
        backface-visibility: hidden;
      }

      opacity: 1;
      backface-visibility: hidden;
      transition: opacity 0.33s ease-out;
      transform: translate3d(0px, 0px, 0.01px);
      display: grid;

      ${view}
    `,
    back: css`
      background-color: var(--card-back);
      transform: rotateY(180deg) translateZ(1px);
      backface-visibility: visible;

      ${view}
    `,
    fontLoading: css`
      opacity: 0;
    `,
    backLoading: css`
      transform: rotateY(0deg);
    `,

    rotator: css`
      ${shadow}

      img {
        height: auto;
        transform: translate3d(0px, 0px, 0.01px);
      }
    `,
  };
});
