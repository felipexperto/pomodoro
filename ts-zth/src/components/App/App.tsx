import React, { useState } from 'react';

import Tabs from '../Tabs/Tabs';
import Clock from '../Clock/Clock';
import * as S from './App.style';

function App(): JSX.Element {

  const [pomodoroCycleType, setPomodoroCycleType] = useState<number>(1);
  return (
    <S.Container>
      <S.MainTitle>pomodoro</S.MainTitle>
      <Tabs activeItem={pomodoroCycleType} />
      <Clock 
        setPomodoroCycleType={setPomodoroCycleType}
      />
    </S.Container>
  );
}

export default App;
