import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import PaymentDetails from '../PaymentDetails';

//import PaymentDetails from '../PaymentDetails'; // Adjust the import path as needed
//import { Elements } from '@stripe/react-stripe-js';

// Import your CheckoutForm component

describe('PaymentDetails', () => {
  it('should render the component', () => {
    render(<PaymentDetails />);

    // Assert that the component renders without errors
    expect(screen.getByText('Payment Details')).toBeInTheDocument();
    // Add more assertions as needed
  });

  it('should display the CheckoutForm component with Elements', () => {
    render(<PaymentDetails />);

    // Assert that the CheckoutForm component is wrapped in Elements
    expect(screen.getByText('Payment Details')).toBeInTheDocument();
    expect(screen.getByTestId('checkout-form')).toBeInTheDocument();
    expect(screen.getByText('Pay with:')).toBeInTheDocument();
    // Add more assertions as needed
  });

  it('should handle form submission', async () => {
    render(<PaymentDetails />);

    // Simulate form submission
    const cardNumberInput = screen.getByLabelText('Card Number');
    const submitButton = screen.getByText('Pay Now');
    
    fireEvent.change(cardNumberInput, { target: { value: '4242424242424242' } });
    fireEvent.click(submitButton);

  });

  // Add more test cases as needed
});
