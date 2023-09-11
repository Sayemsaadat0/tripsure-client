import React from 'react';
import { render } from '@testing-library/react';
import LoadingButton from '../LoadingButton'; // Replace with the correct path to your component file

ddescribe('LoadingButton', () => {
  it('should render the LoadingButton component with a spinner', () => {
    const { getByTestId } = render(<LoadingButton />);

    // Check if the component is rendered
    const button = getByTestId('loading-button');
    expect(button).toBeInTheDocument();

    // Check if the spinner icon is rendered
    const spinner = getByTestId('loading-spinner');
    expect(spinner).toBeInTheDocument();
  });
});
