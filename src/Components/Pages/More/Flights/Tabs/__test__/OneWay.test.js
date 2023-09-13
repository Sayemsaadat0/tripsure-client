// OneWay.test.js
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import OneWay from '../OneWay';
 

describe('OneWay Component', () => {
  it('renders without crashing', () => {
    render(<OneWay></OneWay>);
  });

//   it('updates searchQuery state when "From where?" input changes', () => {
//     const { getByPlaceholderText } = render(<OneWay></OneWay>);
//     const input = getByPlaceholderText('From where?');

//     fireEvent.change(input, { target: { value: 'New York' } });

//     expect(input.value).toBe('New York');
//   });

  it('updates destinationQuery state when "To where?" input changes', () => {
    const { getByPlaceholderText } = render(<OneWay></OneWay>);
    const input = getByPlaceholderText('To where?');

    fireEvent.change(input, { target: { value: 'Los Angeles' } });

    expect(input.value).toBe('Los Angeles');
  });

  it('updates dateQuery state when date input changes', () => {
    const { getByPlaceholderText } = render(<OneWay></OneWay>);
    const input = getByPlaceholderText('Input 3');

    fireEvent.change(input, { target: { value: '2023-09-07' } });

    expect(input.value).toBe('2023-09-07');
  });
});
