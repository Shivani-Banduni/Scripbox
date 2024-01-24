import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // For additional matchers
import ChallengeList from './ChallengeList';

const localStorageMock = (() => {
  let store = {};

  return {
    getItem: (key) => store[key],
    setItem: (key, value) => {
      store[key] = value.toString();
    },
    clear: () => {
      store = {};
    },
  };
})();

Object.defineProperty(window, 'localStorage', {
  value: localStorageMock,
});

jest.mock('react-router-dom', () => ({
  Link: ({ to, children }) => <a href={to}>{children}</a>,
}));

describe('ChallengeList component', () => {
  // Test case 1: Rendering the component
  it('renders ChallengeList component', () => {
    const { getByText } = render(<ChallengeList />);
    expect(getByText('Back to Home')).toBeInTheDocument();
  });

  // Test case 2: Upvoting a challenge
  it('increments upvotes when upvote button is clicked', () => {
    const { getByText } = render(<ChallengeList />);
    
    localStorage.setItem('employee_data', JSON.stringify([{ id: 'testId', upvote: 0 }]));

    expect(getByText('Upvotes: 0')).toBeInTheDocument();

    fireEvent.click(getByText('Upvote'));

    expect(getByText('Upvotes: 1')).toBeInTheDocument();
  });

  // Test case 3: Sorting challenges by date
  it('sorts challenges by date when "Sort by Date" button is clicked', () => {
    const { getByText } = render(<ChallengeList />);
    
    // Add sample challenges to localStorage
    const challenges = [
      { id: 'id1', date: 1634740000000, upvote: 0 },
      { id: 'id2', date: 1634640000000, upvote: 0 },
    ];
    localStorage.setItem('employee_data', JSON.stringify(challenges));

    expect(getByText('id1').nextSibling.textContent).toContain('id2');

    fireEvent.click(getByText('Sort by Date'));

    // Check if challenges are sorted by date
    expect(getByText('id1').nextSibling.textContent).toContain('id1');
  });

  // Test case 4: Sorting challenges by upvote
  it('sorts challenges by upvote when "Sort by Upvote" button is clicked', () => {
    const { getByText } = render(<ChallengeList />);
    
    // Add sample challenges to localStorage
    const challenges = [
      { id: 'id1', upvote: 2 },
      { id: 'id2', upvote: 1 },
    ];
    localStorage.setItem('employee_data', JSON.stringify(challenges));

    expect(getByText('Upvotes: 2').previousSibling.textContent).toContain('Upvotes: 1');

    // Click the "Sort by Upvote" button
    fireEvent.click(getByText('Sort by Upvote'));

    expect(getByText('Upvotes: 2').previousSibling.textContent).toContain('Upvotes: 2');
  });
});
