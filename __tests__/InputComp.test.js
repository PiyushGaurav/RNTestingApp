import {render, fireEvent, screen} from '@testing-library/react-native';
import InputComp from '../src/InputComp';
import {create} from 'react-test-renderer';

describe('Input Comp', () => {
  test('renders correctly', () => {
    const tree = create(<InputComp />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('renders correctly', () => {
    render(<InputComp />);
    const input = screen.getByPlaceholderText('enter your name');

    // simulates the user focusing on TextInput and typing text one char at a time
    fireEvent.changeText(input, ' John Doe ');

    expect(input.props.value).toBe(' John Doe ');

    // simulates the user pressing on any pressable element
    const buttonElement = screen.getByTestId('submit');

    fireEvent.press(buttonElement);

    // expect(onSubmitMock).toHaveBeenCalledTimes(1);
    expect(input.props.value).toBe('John Doe');
  });
});
