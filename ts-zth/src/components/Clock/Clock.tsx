import React, {
  useContext,
  useEffect,
  useRef,
  useState,
  Dispatch,
  SetStateAction } from 'react';
import { func } from 'prop-types';

import useWindowSize from 'hooks/useWindowSize';
import cyclesContext from 'contexts/cycles.context';
import { 
  formatRemainingTimeInMinutes,
  formatRemainingTimeInSeconds } from 'utils/helpers';
import * as S from './Clock.style';

type ClockProps = {
  setPomodoroCycleType: Dispatch<SetStateAction<number>>,
}
function Clock({ setPomodoroCycleType }: ClockProps): JSX.Element {
  const { width } = useWindowSize();
  const orderedCycles = useContext(cyclesContext);

  const [remainingTime, setRemainingTime] = useState(orderedCycles[0].duration);
  const [remainingMinutes, setRemainingMinutes] = useState<number | string>(0);
  const [remainingSeconds, setRemainingSeconds] = useState<number | string>(0);
  const [isTimeRunning, setIsTimeRunning] = useState(false);
  const [pomodoroCycles, setPomodoroCycles] = useState(0);
  const [gaugePercentual, setGaugePercentual] = useState(0);

  const stopClock = () => setIsTimeRunning(false);
  const playClock = () => setIsTimeRunning(true);
  const restartClock = () => {
    updateCycleInformation(0);
    stopClock();
    setPomodoroCycles(0);
  };
  const updateCycleInformation = (pomodoroCycle: number) => {
    setRemainingTime(orderedCycles[pomodoroCycle].duration);
    setPomodoroCycleType(orderedCycles[pomodoroCycle].type);
  };

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
    setGaugePercentual( (100 - (remainingTime * 100 / orderedCycles[pomodoroCycles].duration)) / 100 );

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
      updateCycleInformation(pomodoroCycles);
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

Clock.propTypes = {
  setPomodoroCycleType: func,
}

export default Clock;
