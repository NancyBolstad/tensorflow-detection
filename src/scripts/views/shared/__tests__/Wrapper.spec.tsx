import * as React from 'react';
import {render, cleanup, fireEvent} from 'react-testing-library';
import 'jest-dom/extend-expect';
import 'jest-styled-components';
import Wrapper, {STORAGE_KEY as COLOR_MODE_STORAGE_KEY} from '../../shared/Wrapper';
import {AppProvider} from '../../../providers/AppProvider';

afterEach(cleanup);

it('matches snapshot', () => {
  const tree = (
    <AppProvider>
      <Wrapper>
        <p>this is a dummy content in wrapper</p>
      </Wrapper>
    </AppProvider>
  );
  const {asFragment} = render(tree);
  expect(asFragment()).toMatchSnapshot();
});

describe('ColorMode', () => {
  it('should save a color mode to sessionStorage', () => {
    const tree = (
      <AppProvider>
        <Wrapper>
          <p>this is a dummy content in wrapper</p>
        </Wrapper>
      </AppProvider>
    );
    const {getByText} = render(tree);
    fireEvent.click(getByText('Change Color Mode!'));
    expect(sessionStorage.__STORE__[COLOR_MODE_STORAGE_KEY]).toBe(
      JSON.stringify({colorMode: 'DARK'})
    );
    fireEvent.click(getByText('Change Color Mode!'));
    expect(sessionStorage.__STORE__[COLOR_MODE_STORAGE_KEY]).toBe(
      JSON.stringify({colorMode: 'LIGHT'})
    );
  });
});
