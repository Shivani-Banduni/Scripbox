import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // For additional matchers
import EmployeeId from './EmployeeId';
import { useNavigate } from 'react-router-dom';

jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
}));

describe('EmployeeId component', () => {
  // Test case 1: Rendering the component
  it('renders EmployeeId component', () => {
    const { getByText, getByPlaceholderText } = render(<EmployeeId />);
    expect(getByText('Use Your Employee ID')).toBeInTheDocument();
    expect(getByPlaceholderText('Enter Your Employee ID')).toBeInTheDocument();
    expect(getByText('Submit')).toBeInTheDocument();
  });

  // Test case 2: Entering Employee ID and clicking submit
  it('navigates to /employee_page when valid Employee ID is entered and Submit is clicked', () => {
    const { getByPlaceholderText, getByText } = render(<EmployeeId />);
    
    const mockNavigate = jest.fn();
    useNavigate.mockReturnValue(mockNavigate);

    fireEvent.change(getByPlaceholderText('Enter Your Employee ID'), { target: { value: 'ID1234' } });

    // Click the Submit button
    fireEvent.click(getByText('Submit'));

    expect(mockNavigate).toHaveBeenCalledWith('/employee_page');
  });

  // Test case 3: Showing error message for invalid Employee ID length
  it('shows error message for invalid Employee ID length', () => {
    const { getByPlaceholderText, getByText, queryByText } = render(<EmployeeId />);
    
    fireEvent.change(getByPlaceholderText('Enter Your Employee ID'), { target: { value: 'ID1' } });

    fireEvent.click(getByText('Submit'));

    expect(getByText('EmployeeId should be of length 4')).toBeInTheDocument();

    fireEvent.change(getByPlaceholderText('Enter Your Employee ID'), { target: { value: 'ID1234' } });

    expect(queryByText('EmployeeId should be of length 4')).toBeNull();
  });
});
