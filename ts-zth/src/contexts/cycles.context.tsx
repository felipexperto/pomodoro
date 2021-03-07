import { createContext } from 'react';

const cycles = {
  pomodoro: {
    duration: 5,
    type: 1,
  },
  shortBreak: {
    duration: 3,
    type: 2,
  },
  longBreak: {
    duration: 8,
    type: 3,
  },
};

const orderedCycles = [
  {
    duration: cycles.pomodoro.duration,
    type: cycles.pomodoro.type,
  },
  {
    duration: cycles.shortBreak.duration,
    type: cycles.shortBreak.type,
  },
  {
    duration: cycles.pomodoro.duration,
    type: cycles.pomodoro.type,
  },
  {
    duration:cycles.shortBreak.duration,
    type: cycles.shortBreak.type,
  },
  {
    duration: cycles.pomodoro.duration,
    type: cycles.pomodoro.type,
  },
  {
    duration: cycles.longBreak.duration,
    type: cycles.longBreak.type,
  }
];

const cyclesContext = createContext(orderedCycles);

export default cyclesContext;