import React, { useEffect, useRef, useState } from 'react';

import useWindowSize from '../../hooks/useWindowSize';
import * as S from './Clock.style';

function Clock(): JSX.Element {
  const { width } = useWindowSize();

  const cycles = {
    pomodoro: 15,
    shortBreak: 3,
    longBreak: 18,
  };

  const cyclesLength = [
    cycles.pomodoro,
    cycles.shortBreak,
    cycles.pomodoro,
    cycles.shortBreak,
    cycles.pomodoro,
    cycles.longBreak,
  ]

  const [remainingTime, setRemainingTime] = useState(cyclesLength[0]);
  const [remainingMinutes, setRemainingMinutes] = useState<number | string>(0);
  const [remainingSeconds, setRemainingSeconds] = useState<number | string>(0);
  const [isTimeRunning, setIsTimeRunning] = useState(false);
  const [pomodoroCycles, setPomodoroCycles] = useState(0);
  const [gaugePercentual, setGaugePercentual] = useState(0);

  const stopClock = () => setIsTimeRunning(false);
  const playClock = () => setIsTimeRunning(true);
  const restartClock = () => {
    setRemainingTime(cyclesLength[0]);
    stopClock();
    setPomodoroCycles(0);
  };

  const formatRemainingTimeInMinutes = (time: number) => {
    return time.toString().length > 1 
    ? Math.floor(time / 60)
    : `0${Math.floor(time / 60)}`;
  }
  const formatRemainingTimeInSeconds = (time: number) => {
    return time.toString().length > 1 
    ? time % 60
    : `0${time % 60}`;
  }

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
    setRemainingMinutes(formatRemainingTimeInMinutes(remainingTime));
    setRemainingSeconds(formatRemainingTimeInSeconds(remainingTime));
    setGaugePercentual( (100 - (remainingTime * 100 / cyclesLength[pomodoroCycles])) / 100 );

    const hasCycleEnded = remainingTime === 0;
    if (hasCycleEnded) {
      stopClock();
      setPomodoroCycles(previousState => previousState + 1);
    }
  }, [remainingTime]);

  useEffect(() => {
    const isFirstCycle = pomodoroCycles < 1;
    const shouldRestart = pomodoroCycles > 5;

    if (!isFirstCycle) {
      if (shouldRestart) {
        restartClock();
        return;
      }
      setRemainingTime(cyclesLength[pomodoroCycles]);
      playClock();
    }
  }, [pomodoroCycles]);


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
            percentualPassed={gaugePercentual}  
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
