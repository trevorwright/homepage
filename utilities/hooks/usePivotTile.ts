import React from 'react';

type Options = {
  shadow: 'light' | 'dark';
};

const usePivotTile = ({ shadow }: Options = { shadow: 'dark' }) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const shadowColor = React.useRef(
    shadow === 'light' ? 'rgba(255, 255, 255, 0.4)' : 'rgba(0, 0, 0, 0.4)'
  );

  React.useEffect(() => {
    if (!ref.current) return;

    ref.current.style.transformStyle = 'preserve-3d';
    ref.current.style.transitionProperty = 'transform box-shadow';
    ref.current.style.transitionDuration = '0.3s';
    ref.current.style.transitionTimingFunction = 'cubic-bezier(0.3, 1, 0.2, 1)';
    ref.current.style.boxShadow = `0 2px 10px ${shadowColor.current}`;

    ref.current.addEventListener('mousemove', (event: MouseEvent): any => {
      if (!ref.current) return;

      const FACTOR = 9;

      const xCenterOffset = event.offsetX - ref.current.clientWidth / 2;
      const xOffsetPercentage = xCenterOffset / (ref.current.clientWidth / 2);
      const yDegRotation = xOffsetPercentage * -FACTOR;

      const yCenterOffset = event.offsetY - ref.current.clientHeight / 2;
      const yOffsetPercentage = yCenterOffset / (ref.current.clientHeight / 2);
      const xDegRotation = yOffsetPercentage * FACTOR;

      var ang = Math.atan2(yCenterOffset, xCenterOffset) * (180 / Math.PI) + 90;
      var angle = ang < 0 ? ang + 360 : ang;

      const intensity =
        ((Math.abs(xOffsetPercentage) + Math.abs(yOffsetPercentage)) / 2) *
          0.1 +
        0.1;

      ref.current.style.transform = `perspective(1000px) rotateX(${xDegRotation}deg) rotateY(${yDegRotation}deg)`;
      ref.current.style.backgroundImage = `linear-gradient(${angle}deg, rgba(230, 230, 230, ${intensity}) 0%, transparent 90%)`;
    });

    ref.current.addEventListener('mouseenter', (): any => {
      if (!ref.current) return;

      console.log('mouse enter');
      ref.current.style.boxShadow = `0 10px 20px ${shadowColor.current}`;
    });

    ref.current.addEventListener('mouseleave', (): any => {
      if (!ref.current) return;

      ref.current.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
      ref.current.style.backgroundImage = '';
      ref.current.style.boxShadow = `0 2px 10px ${shadowColor.current}`;
    });
  }, []);

  return ref;
};

export default usePivotTile;