import * as React from 'react';
import {render, cleanup, fireEvent} from 'react-testing-library';
import 'jest-dom/extend-expect';
import 'jest-styled-components';
import Button from '../Button';

afterEach(cleanup);

it('matches snapshot', () => {
  const onPress = jest.fn();
  const {asFragment} = render(<Button label="Press!!" onPress={onPress} />);
  expect(asFragment()).toMatchSnapshot();
});

it('The event should fires when the button is clicked', () => {
  const onPress = jest.fn();
  const {getByText} = render(<Button label="Press!!" onPress={onPress} />);
  fireEvent.click(getByText('Press!!'));
  expect(onPress).toHaveBeenCalled();
});

it('The style passed in props should be applied correctly', () => {
  const onPress = jest.fn();
  const {container} = render(
    <Button label="Press!!" color="#ccc" fontsize={12} onPress={onPress} />
  );
  expect(container.firstChild).toHaveStyleRule('color', '#ccc');
  expect(container.firstChild).toHaveStyleRule('border', 'solid 2px #ccc');
  expect(container.firstChild).toHaveStyleRule('background', '#ccc', {modifier: ':hover'});
  expect(container.firstChild).toHaveStyleRule('font-size', '12px');
});
