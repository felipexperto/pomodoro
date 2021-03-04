import React, { useEffect, useRef, useState } from 'react';

import useWindowSize from '../../hooks/useWindowSize';
import * as S from './Clock.style';

function Clock(): JSX.Element {
  const { width } = useWindowSize();

  const cycles = {
    pomodoro: 1500,
    shortBreak: 300,
    longBreak: 1800,
  };

  const [remainingTime, setRemainingTime] = useState(10);
  const [remainingMinutes, setRemainingMinutes] = useState(0);
  const [remainingSeconds, setRemainingSeconds] = useState(0);
  const [isTimeRunning, setIsTimeRunning] = useState(false);
  const [pomodoroCycles, setPomodoroCycles] = useState(0);

  const getRemainingTimeInMinutes = (time: number) => Math.floor(time / 60);
  const getRemainingTimeInSeconds = (time: number) => time % 60;

  const handleClick = () => {
    setIsTimeRunning(!isTimeRunning);
  }

  React.useEffect(() => {
    if (isTimeRunning) {
      const interval = setInterval(() => {
        setRemainingTime((prev) => {
          if (prev === 0) return prev;
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [isTimeRunning]);

  useEffect(() => {
    setRemainingMinutes(getRemainingTimeInMinutes(remainingTime));
    setRemainingSeconds(getRemainingTimeInSeconds(remainingTime));
  }, [remainingTime]);

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
            <S.Time
              fontSizeInPixels={Math.round(gaugeCircleDiameter / 3.33)}
            >
              {`${remainingMinutes}:${remainingSeconds}`}
            </S.Time>
            <S.Button
              fontSizeInPixels={Math.round(gaugeCircleDiameter / 12)}
              marginTop={Math.round(gaugeCircleDiameter * 0.03)}
              onClick={handleClick}
            >
              { isTimeRunning ? 'Pause' : 'Start' }
            </S.Button>
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
