// RoundTrip.test.js
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import RoundTrip from '../RoundTrip';

describe('RoundTrip Component', () => {
  it('renders without crashing', () => {
    render(<RoundTrip />);
  });

  it('updates isChecked state when nonstop checkbox is toggled', () => {
    const { getByText, getByRole } = render(<RoundTrip />);
    const checkbox = getByRole('checkbox', { name: 'Prefer nonstop' });

    fireEvent.click(checkbox);

    expect(checkbox.checked).toBe(true);
  });

  it('updates isChecked2 state when nearby airports checkbox is toggled', () => {
    const { getByText, getByRole } = render(<RoundTrip />);
    const checkbox = getByRole('checkbox', { name: 'Include nearby airports' });

    fireEvent.click(checkbox);

    expect(checkbox.checked).toBe(true);
  });

});
