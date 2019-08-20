import * as React from 'react';
import {Count} from '../types/CounterTypes';

export const CounterContext = React.createContext<ICounterContext | null>(null);
export const CounterConsumer = CounterContext.Consumer;

interface IAction {
  type: 'RESTORE' | 'INCREMENT';
  payload: any;
}

interface IProps {
  children?: any;
}

export interface IState {
  count: Count;
}

export interface ICounterContext {
  state: IState;
  dispatch: React.Dispatch<any>;
}

const initialState: IState = {
  count: 0,
};

const reducer = (state: IState, action: IAction) => {
  console.log(`[dispatch] ${action.type}`);
  switch (action.type) {
    case 'RESTORE':
      return action.payload;
    case 'INCREMENT':
      return {...state, count: state.count + 1};
    default:
      return state;
  }
};

export const CounterProvider = (props: IProps) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const value = {state, dispatch};
  return <CounterContext.Provider value={value}>{props.children}</CounterContext.Provider>;
};
