import { animated, useSpring } from '@react-spring/web';
import { CSSProperties, MouseEventHandler, ReactNode, forwardRef } from 'react';
import { clamp, round } from '../../utils/math';
import { useStyles } from './styles';

export interface OrbitProps {
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;

  classNames?: {
    container?: string;
    translator?: string;
    rotator?: string;
    content?: string;
  };
  /**
   * @default: 400
   */
  width?: number;
  /**
   * @default: 560
   */
  height?: number;
  styles?: {
    container?: CSSProperties;
    translator?: CSSProperties;
    rotator?: CSSProperties;
    content?: CSSProperties;
  };
  /**
   * 延迟恢复动画的时间，单位：ms
   * @default: 500
   */
  delay?: number;
  /**
   * 可旋转方向
   * @default both
   */
  orbitDirection?: 'both' | 'vertical' | 'horizontal';
  /**
   * @default: 1
   */
  sensitivity?: number;
  damping?: number;
  onMouseMove?: MouseEventHandler<HTMLDivElement>;
  onMouseOut?: MouseEventHandler<HTMLDivElement>;
  /**
   * @default: false
   */
  followPointer?: boolean;
}

const Orbit = forwardRef<HTMLDivElement, OrbitProps>(
  (
    {
      children,
      className,
      classNames = {},
      styles: outStyles = {},
      style,
      width = 400,
      height = 560,
      delay = 500,
      onMouseOut,
      onMouseMove,
      sensitivity = 1,
      orbitDirection = 'both',
      followPointer,
      ...res
    },
    ref,
  ) => {
    const { styles, cx } = useStyles();

    const [{ rotate }, api] = useSpring(() => ({
      rotate: [0, 0],
    }));

    const handleInteract = (e: any) => {
      const rect = e.target.getBoundingClientRect();

      const absolute = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
      const percent = {
        x: clamp(round((100 / rect.width) * absolute.x)),
        y: clamp(round((100 / rect.height) * absolute.y)),
      };
      const center = { x: percent.x - 50, y: percent.y - 50 };

      let x = 0,
        y = 0;

      const calcX = () =>
        // 使用 followPointer 时，移动跟随鼠标方向
        round((followPointer ? 1 : -1) * (center.x / 3.5) * sensitivity);

      const calcY = () => round((center.y / 2) * sensitivity);

      switch (orbitDirection) {
        case 'both':
          x = calcX();
          y = calcY();
          break;

        case 'horizontal':
          x = calcX();
          break;

        case 'vertical':
          y = calcY();
          break;
      }

      api.start({ rotate: [x, y] });
    };

    const handleInteractEnd = (delayTime: number) => {
      setTimeout(() => {
        api.start({ rotate: [0, 0] });
      }, delayTime);
    };

    return (
      <animated.div
        className={cx(styles.container, classNames.container)}
        style={
          {
            '--card-aspect': width / height,
            '--rotate-x': rotate.to((x) => `${x}deg`),
            '--rotate-y': rotate.to((_, y) => `${y}deg`),
            width,
            height,
            ...outStyles.container,
          } as CSSProperties
        }
        ref={ref}
        {...res}
      >
        <div className={cx(styles.translator, classNames.translator)} style={outStyles.translator}>
          <div
            className={cx(styles.rotator, className, classNames.rotator)}
            onMouseMove={(event) => {
              handleInteract(event);
              onMouseMove?.(event);
            }}
            onMouseOut={(event) => {
              handleInteractEnd(delay);
              onMouseOut?.(event);
            }}
            style={{ ...style, ...outStyles.rotator }}
          >
            <div className={cx(styles.content, classNames.content)} style={outStyles.content}>
              {children}
            </div>
          </div>
        </div>
      </animated.div>
    );
  },
);

export default Orbit;
