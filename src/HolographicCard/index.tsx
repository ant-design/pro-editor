import { createStyles } from 'antd-style';
import { ReactNode, memo, useEffect, useState } from 'react';

import Container from './components/Container';

const useStyles = createStyles(({ css }) => ({
  img: css`
    width: 100%;
    grid-area: 1/1;

    aspect-ratio: var(--card-aspect);
    border-radius: var(--card-radius);
    image-rendering: optimizeQuality;

    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
  `,
}));

export interface HolographicCardProps {
  img?: string;
  back?: string;
  foil?: string;
  mask?: string;
  children?: ReactNode;
}

const HolographicCard = memo<HolographicCardProps>(({ img = '', mask, children }) => {
  const [loading, setLoading] = useState(true);
  const { styles } = useStyles();
  useEffect(() => {
    if (children)
      setTimeout(() => {
        setLoading(false);
      }, 500);
  }, []);

  return (
    <Container mask={mask} loading={loading}>
      {children ? (
        <div
          className={'card_children_container'}
          style={{
            height: '100%',
            position: 'absolute',
            width: '100%',
          }}
        >
          {children}
        </div>
      ) : (
        <img
          className={styles.img}
          src={img}
          onLoad={() => {
            setTimeout(() => {
              setLoading(false);
            }, 500);
          }}
          loading="lazy"
          width="660"
          height="921"
        />
      )}
    </Container>
  );
});

export default HolographicCard;
