import React from 'react';

import Tabs from '../Tabs/Tabs';
import Clock from '../Clock/Clock';
import * as S from './App.style';

function App(): JSX.Element {
  return (
    <S.Container>
      <S.MainTitle>pomodoro</S.MainTitle>
      <Tabs />
      <Clock />
    </S.Container>
  );
}

export default App;
