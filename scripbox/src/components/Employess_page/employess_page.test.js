import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // For additional matchers
import EmployeesPage from './EmployeesPage';
import { useNavigate } from 'react-router-dom';

jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
}));

describe('EmployeesPage component', () => {
  // Test case 1: Rendering the component
  it('renders EmployeesPage component', () => {
    const { getByText } = render(<EmployeesPage />);
    expect(getByText('Create Your own Challenge')).toBeInTheDocument();
    expect(getByText('SKIP')).toBeInTheDocument();
  });

  // Test case 2: Clicking the "Add Task" button
  it('navigates to /addtask when Add Task button is clicked', () => {
    const { getByLabelText } = render(<EmployeesPage />);
    
    // Mock the navigate function
    const mockNavigate = jest.fn();
    useNavigate.mockReturnValue(mockNavigate);

    fireEvent.click(getByLabelText('add-task-button'));

    expect(mockNavigate).toHaveBeenCalledWith('/addtask');
  });

  // Test case 3: Clicking the "SKIP" button
  it('navigates to /challengelist when SKIP button is clicked', () => {
    const { getByText } = render(<EmployeesPage />);
    
    // Mock the navigate function
    const mockNavigate = jest.fn();
    useNavigate.mockReturnValue(mockNavigate);

    fireEvent.click(getByText('SKIP'));

    expect(mockNavigate).toHaveBeenCalledWith('/challengelist');
  });
});
