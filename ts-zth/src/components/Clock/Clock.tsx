import React, { useEffect, useRef, useState } from 'react';

import useWindowSize from '../../hooks/useWindowSize';
import * as S from './Clock.style';

function Clock(): JSX.Element {
  const { width } = useWindowSize();
  const gaugeRef = useRef<HTMLDivElement>(null);
  const [gaugeCircleDiameter, setGaugeCircleDiameter] = useState<number>(0);
  const [gaugeCircleRadius, setGaugeCircleRadius] = useState<number>(0);

  const setGaugeDimensions = () => {
    if (!gaugeRef.current || !gaugeRef.current.clientWidth) return;
    const gaugeWrapperWidth = gaugeRef.current.clientWidth;
    setGaugeCircleDiameter(gaugeWrapperWidth - 40);
    setGaugeCircleRadius(gaugeCircleDiameter / 2);
  };

  useEffect(() => {
    setGaugeDimensions();
  }, [gaugeRef.current, width]);

  return (
    <S.ClockWrapper>
      <S.Frame>
        <S.Inside>
          <S.Content>
            <S.Time>17:59</S.Time>
            <S.Button>Pause</S.Button>
          </S.Content>
          <S.Gauge
            circleDiameter={gaugeCircleDiameter}
            percentualPassed={.10}  
            ref={gaugeRef}
          >
            { gaugeCircleRadius > 0 && (
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg">
                <circle cx="50%" cy="50%" r={gaugeCircleRadius}/>
              </svg>
            )}
          </S.Gauge>
        </S.Inside>
      </S.Frame>
    </S.ClockWrapper>
  );
}


export default Clock;
