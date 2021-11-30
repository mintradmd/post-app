import { render, screen } from '@testing-library/react';
import App from './App';

describe('App:',()=>{
  beforeEach(()=>{
    render(<App/>);
  })
  
  test('Displays posts on load', () => {
    expect(screen.queryAllByTestId('post-title').length).toBeGreaterThan(0);
  });

  test('Display Title', () => {
    expect(screen.queryByText('sunt aut facere repellat provident occaecati excepturi optio reprehenderit')).toBeInTheDocument();
  });
})

