import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // For additional matchers
import Addtask from './Addtask';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));

// Test suite for Addtask component
describe('Addtask component', () => {
  // Test case 1: Rendering the component
  it('renders Addtask component', () => {
    const { getByText, getByPlaceholderText } = render(<Addtask />);

    // Check if the component renders elements as expected
    expect(getByText('Create a New Entry')).toBeInTheDocument();
    expect(getByPlaceholderText('Enter the title')).toBeInTheDocument();
    expect(getByPlaceholderText('Enter the description')).toBeInTheDocument();
    expect(getByPlaceholderText('Enter tags (comma-separated)')).toBeInTheDocument();
    expect(getByText('Submit')).toBeInTheDocument();
  });

  // Test case 2: Form submission
  it('submits the form with user input', () => {
    const { getByPlaceholderText, getByText } = render(<Addtask />);

    const mockNavigate = jest.fn();
    jest.mock('react-router-dom', () => ({
      ...jest.requireActual('react-router-dom'),
      useNavigate: () => mockNavigate,
    }));

    fireEvent.change(getByPlaceholderText('Enter the title'), { target: { value: 'Test Title' } });
    fireEvent.change(getByPlaceholderText('Enter the description'), { target: { value: 'Test Description' } });
    fireEvent.change(getByPlaceholderText('Enter tags (comma-separated)'), { target: { value: 'tag1, tag2' } });

    // Submit the form
    fireEvent.click(getByText('Submit'));

    expect(mockNavigate).toHaveBeenCalledWith('/challengelist');
  });
});
