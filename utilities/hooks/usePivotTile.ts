import React from 'react';

type Options = {
  shadow: 'light' | 'dark';
};

const usePivotTile = ({ shadow }: Options = { shadow: 'dark' }) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const shadowColor = React.useRef(
    shadow === 'light' ? 'rgba(255, 255, 255, 0.4)' : 'rgba(0, 0, 0, 0.4)'
  );
  const preventScroll = React.useRef(false);

  React.useEffect(() => {
    if (!ref.current) return;

    ref.current.style.transformStyle = 'preserve-3d';
    ref.current.style.transitionProperty = 'transform';
    ref.current.style.transitionDuration = '0.3s';
    ref.current.style.transitionTimingFunction = 'cubic-bezier(0.3, 1, 0.2, 1)';
    ref.current.style.boxShadow = `0px 2px 10px 2px ${shadowColor.current}`;

    const onMove = (offsetX: number, offsetY: number) => {
      if (!ref.current) return;

      const FACTOR = 9;

      const xCenterOffset = offsetX - ref.current.clientWidth / 2;
      const xOffsetPercentage = xCenterOffset / (ref.current.clientWidth / 2);
      const yDegRotation = xOffsetPercentage * -FACTOR;

      const yCenterOffset = offsetY - ref.current.clientHeight / 2;
      const yOffsetPercentage = yCenterOffset / (ref.current.clientHeight / 2);
      const xDegRotation = yOffsetPercentage * FACTOR;

      var ang = Math.atan2(yCenterOffset, xCenterOffset) * (180 / Math.PI) + 90;
      var angle = ang < 0 ? ang + 360 : ang;

      const intensity =
        ((Math.abs(xOffsetPercentage) + Math.abs(yOffsetPercentage)) / 2) *
          0.1 +
        0.1;

      const xShadow = xOffsetPercentage * 15 + 2;
      const yShadow = yOffsetPercentage * 15;
      ref.current.style.boxShadow = `${xShadow}px ${yShadow}px 20px 2px ${shadowColor.current}`;
      ref.current.style.transform = `perspective(1000px) rotateX(${xDegRotation}deg) rotateY(${yDegRotation}deg)`;
      ref.current.style.backgroundImage = `linear-gradient(${angle}deg, rgba(230, 230, 230, ${intensity}) 0%, transparent 90%)`;
    };

    const onLeave = () => {
      if (!ref.current) return;

      ref.current.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
      ref.current.style.backgroundImage = '';
      ref.current.style.boxShadow = `0px 2px 10px 2px ${shadowColor.current}`;
    };

    ref.current.addEventListener('mousemove', (event: MouseEvent): any =>
      onMove(event.offsetX, event.offsetY)
    );

    ref.current.addEventListener('mouseleave', (): any => onLeave());

    ref.current.addEventListener('touchstart', () => {
      preventScroll.current = true;
    });

    ref.current.addEventListener('touchmove', (event: TouchEvent) => {
      if (preventScroll.current) {
        event.preventDefault();
      }

      const rect = (event.target as HTMLElement).getBoundingClientRect();

      const offsetX = event.touches[0].clientX - rect.left;
      const offsetY = event.touches[0].clientY - rect.top;

      onMove(offsetX, offsetY);
    });

    ref.current.addEventListener('touchend', () => {
      preventScroll.current = false;
      onLeave();
    });
  }, []);

  return ref;
};

export default usePivotTile;
