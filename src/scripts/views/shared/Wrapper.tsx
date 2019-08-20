import * as React from 'react';
import styled from 'styled-components';

import {ColorMode} from '../../types/AppTypes';
import * as Storage from '../../utils/storage';
import {AppContext, IAppContext} from '../../providers';

import Button from '../shared/Button';

export const STORAGE_KEY = `${window.location.hostname}-app-provider`;

const Wrapper = (props: {children: JSX.Element}) => {
  // Initialize
  const value = React.useContext(AppContext);
  if (!value) return <div />;
  const {state, dispatch} = value;
  const [mounted, setMounted] = React.useState(false);
  const storedState = Storage.loadSessionStorageByKey<IAppContext['state']>(STORAGE_KEY);

  // Effects
  React.useEffect(() => {
    if (!mounted) {
      storedState && dispatch({type: 'RESTORE', payload: storedState});
      setMounted(true);
    } else {
      Storage.saveSessionStorageByKey(state, STORAGE_KEY);
    }
  }, [state.colorMode]);

  // Handlers
  const handleToggle = () => dispatch({type: 'TOGGLE_COLOR_MODE'});

  // Render
  return (
    <>
      <ColorModeWrapper colorMode={state.colorMode}>
        {props.children}
        <ColorModeChanger>
          <Button onPress={handleToggle} label="Change Color Mode!" />
        </ColorModeChanger>
      </ColorModeWrapper>
    </>
  );
};

const ColorModeWrapper = styled.div<{colorMode: ColorMode}>`
  font-family: Futura;
  height: 100vh;
  background: ${props =>
    props.colorMode === 'DARK' ? props.theme.darkBackground : props.theme.lightBackground};
`;

const ColorModeChanger = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  text-align: center;
  padding: 12px;
  box-sizing: border-box;
  background: #fff;
`;

export default Wrapper;
