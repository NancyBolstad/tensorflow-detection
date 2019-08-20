import * as React from 'react';
import {render, cleanup} from 'react-testing-library';
import 'jest-dom/extend-expect';
import 'jest-styled-components';
import Loading from '../Loading';

afterEach(cleanup);

it('matches snapshot', () => {
  const {asFragment} = render(<Loading />);
  expect(asFragment()).toMatchSnapshot();
});

it('The style passed in props should be applied correctly', () => {
  const {container} = render(<Loading width={100} height={100} />);
  expect(container.firstChild).toHaveStyleRule('width', '100px');
  expect(container.firstChild).toHaveStyleRule('height', '100px');
});
