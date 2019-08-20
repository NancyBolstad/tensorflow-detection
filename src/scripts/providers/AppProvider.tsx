import * as React from 'react';
import {ColorMode} from '../types/AppTypes';

export const AppContext = React.createContext<IAppContext | null>(null);
export const AppConsumer = AppContext.Consumer;

interface IAction {
  type: 'RESTORE' | 'TOGGLE_COLOR_MODE';
  payload: any;
}

interface IProps {
  children?: any;
}

export interface IState {
  colorMode: ColorMode;
}

export interface IAppContext {
  state: IState;
  dispatch: React.Dispatch<any>;
}

const initialState: IState = {
  colorMode: 'LIGHT',
};

const toggleColorMode = (colorMode: ColorMode): ColorMode => {
  switch (colorMode) {
    case 'LIGHT':
      return 'DARK';
    default:
      return 'LIGHT';
  }
};

const reducer = (state: IState, action: IAction) => {
  console.log(`[dispatch] ${action.type}`);
  switch (action.type) {
    case 'RESTORE':
      return action.payload;
    case 'TOGGLE_COLOR_MODE':
      return {...state, colorMode: toggleColorMode(state.colorMode)};
    default:
      return state;
  }
};

export const AppProvider = (props: IProps) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const value = {state, dispatch};
  return <AppContext.Provider value={value}>{props.children}</AppContext.Provider>;
};
