import * as React from 'react';
import {render, cleanup} from 'react-testing-library';
import 'jest-dom/extend-expect';
import 'jest-styled-components';
import Card from '../Card';

afterEach(cleanup);

it('matches snapshot', () => {
  const {asFragment} = render(
    <Card>
      <p>This content is in Card Component.</p>
    </Card>
  );
  expect(asFragment()).toMatchSnapshot();
});
